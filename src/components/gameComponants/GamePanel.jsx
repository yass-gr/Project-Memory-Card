import { useState } from "react";

const gridColumns = {
  easy: 3,
  medium: 4,
  hard: 5,
};
const gridRows = {
  easy: 3,
  medium: 3,
  hard: 4,
};
function shuffleCards(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function handleCardClick(
  id,
  cardsClicked,
  setCardsClicked,
  setGameStatus,
  items,
  setItems,
) {
  if (cardsClicked.includes(id)) {
    setGameStatus("lost");
  } else {
    if (cardsClicked.length + 1 === items.length) {
      setGameStatus("won");
    } else {
      setCardsClicked((d) => [...d, id]);
      setItems(shuffleCards(items));
    }
  }
}

const gamePanel = ({ setGameStatus, items, setItems, gameSettings }) => {
  const [cardsClicked, setCardsClicked] = useState([]);
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${gridColumns[gameSettings.diff]}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${gridRows[gameSettings.diff]}, minmax(0, 1fr))`,
        height: `430px`,
      }}
      className={`grid  gap-x-1  gap-y-2 w-80 my-10 mx-auto `}
    >
      {" "}
      {items.map((i) => {
        let name = i.englishName.split(" ");
        name.length = 2;
        name = name.join(" ");
        return (
          <div
            className="bg-amber-200 p-0.5 hover:bg-amber-100 active:bg-amber-300"
            key={i.id}
            id={i.id}
            onClick={() =>
              handleCardClick(
                i.id,
                cardsClicked,
                setCardsClicked,
                setGameStatus,
                items,
                setItems,
              )
            }
          >
            <img
              className="object-cover object-top size-full"
              src={i.avatarSrc}
              alt=""
            />
          </div>
        );
      })}{" "}
    </div>
  );
};

export default gamePanel;
