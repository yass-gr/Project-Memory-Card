import { useState } from "react";
import FetcherOpImgs from "./gameComponants/fetchingOpImgs";
import ImgLoader from "./gameComponants/imgLoader";
import LosingScreen from "./gameComponants/LosingScreen";
import WinningScreen from "./gameComponants/WinningScreen";
import GamePanel from "./gameComponants/GamePanel";

const Game = ({ gameSettings, setGameSettings }) => {
  const [items, setItems] = useState([]);
  const [isError, setIsError] = useState(false);

  const [gameStatus, setGameStatus] = useState("running");
  const [imgsLoadedIds, setImgsLoadedIds] = useState([]);

  return (
    <>
      {
        /* fetch data from the api */
        !items.length > 0 && (
          <FetcherOpImgs
            gameSettings={gameSettings}
            setItems={setItems}
            setIsError={setIsError}
          />
        )
      }
      {/* loads imgs in the background before showing them */}
      <ImgLoader
        items={items}
        setImgsLoadedIds={setImgsLoadedIds}
        imgsLoadedIds={imgsLoadedIds}
      />

      {
        /* losing screen */
        gameStatus === "lost" && (
          <LosingScreen setGameSettings={setGameSettings} />
        )
      }
      {
        /* winning screen */
        gameStatus === "won" && (
          <WinningScreen setGameSettings={setGameSettings} />
        )
      }

      <div className="flex justify-center">
        {!isError
          ? items.length > 0
            ? imgsLoadedIds.length === items.length && (
                <GamePanel
                  setGameStatus={setGameStatus}
                  items={items}
                  setItems={setItems}
                  gameSettings={gameSettings}
                />
              )
            : "loading items ..."
          : "fetching failed"}
      </div>
    </>
  );
};

export default Game;
