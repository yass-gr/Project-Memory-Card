import { useEffect, useState } from "react";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Game({ gameSettings }) {
  let isLoaded = false;
  const [allItemsCount, setAllItemsCount] = useState(0);
  const [items, setItems] = useState([]);
  let itemsIds = new Set();

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("/graphql", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          query: `query info {
                    ${gameSettings.imgType} {
                        info {
                            count
                        }
                    }
                }
`,
        }),
      });

      let data = await res.json();
      if (gameSettings.imgType === "characters") {
        setAllItemsCount(data.data.characters.info.count);
      } else {
        setAllItemsCount(data.data.devilFruits.info.count);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (allItemsCount === 0) return;
    let itemsCount = 0;
    switch (gameSettings.diff) {
      case "easy":
        itemsCount = 12;
        break;
      case "medium":
        itemsCount = 24;
        break;
      case "hard":
        itemsCount = 48;
        break;
    }

    for (let i = 0; i < itemsCount; i++) {
      let id = getRandomNumber(0, allItemsCount);
      while (itemsIds.has(id) === true) {
        id = getRandomNumber(0, allItemsCount);
      }
      itemsIds.add(id);
    }
    console.log(itemsIds);
  }, [allItemsCount]);

  useEffect(() => {
    if (!itemsIds) return;
  }, [itemsIds]);
  return (
    <>
      <h1>{isLoaded ? "itemsLoaded" : "loading items..."}</h1>
    </>
  );
}
