import { useEffect, useState } from "react";

//note: api fetched is a graphql free One piece api from  https://onepieceql.up.railway.app/

//get random number (used to pick random data page & items in the api)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//fetch pages number (to pick a rendom page to load because loading all pages takes a lot of time and api requests)
async function fetchPagesNumber(type) {
  const pagesNumberFetchRes = await fetch("/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `query pagesNumber {
                    ${type} {
                        info {
                          pages
                        }
                    }
                  }
`,
    }),
  });
  if (!pagesNumberFetchRes.ok) {
    throw new Error(`HTTP Error! status: ${pagesNumberFetchRes.status}`);
  }
  const pagesNumberData = await pagesNumberFetchRes.json();
  return pagesNumberData.data[type].info.pages;
}

//fetch a random data page from to api to chose items from (updates the items)
async function fetchRandomPage(type) {
  const pagesNumber = await fetchPagesNumber(type);
  let selectedPage = getRandomNumber(1, pagesNumber);

  let fetchPageRes = await fetch("/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `query items {
                ${type}(page: ${selectedPage}) {
                  info {
                      next
                    }
                  results {
                      avatarSrc
                      englishName
                 }
              }
            }
`,
    }),
  });
  if (!fetchPageRes.ok) {
    throw new Error(`HTTP Error! status: ${fetchPageRes.status}`);
  }
  let fetchPageData = await fetchPageRes.json();
  return fetchPageData.data[type].results;
}
// uses fetchPagesNumber() and fetchRandomPage() to make the final items list that will be used in the game
async function fetchData(type, diff, setItems, setIsError) {
  try {
    let data = await fetchRandomPage(type);
    if (!data) return;
    let itemsCount = 0;
    switch (diff) {
      case "easy":
        itemsCount = 10;
        break;
      case "medium":
        itemsCount = 20;
        break;
      case "hard":
        itemsCount = 30;
        break;
    }
    let indexes = new Set();
    let items = [];
    for (let i = 0; i < itemsCount; i++) {
      let randomItemIndex = getRandomNumber(0, data.length - 1);
      while (indexes.has(randomItemIndex)) {
        randomItemIndex = getRandomNumber(0, data.length - 1);
      }
      items.push(data[randomItemIndex]);
      indexes.add(randomItemIndex);
    }
    setItems(items);
  } catch (err) {
    console.error("Fetch failed:", err);
    setIsError(true);
  }
}

/*{!isError
          ? items.length > 0
            ? "items loaded"
            : "loading items..."
          : "Fetch failed"}
*/

export default function FetcherOpAPI({ gameSettings }) {
  const [items, setItems] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    fetchData(gameSettings.imgType, gameSettings.diff, setItems, setIsError);
  }, [gameSettings]);
  console.log(items);
  return (
    <>
      <h1>
        {items.length > 0
          ? items.map((i) => {
              return (
                <div>
                  <p>{i.englishName}</p>
                  <img src={i.avatarSrc} alt="" />
                </div>
              );
            })
          : "loading items..."}
      </h1>
    </>
  );
}
