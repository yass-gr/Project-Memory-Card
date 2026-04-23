import { useState } from "react";
import Home from "./components/home";

import Game from "./components/game";

function App() {
  const [gameSettings, setGameSettings] = useState({
    imgType: "",
    diff: "",
  });

  return (
    <>
      {!gameSettings.imgType ? (
        <Home gameSettings={gameSettings} setGameSettings={setGameSettings} />
      ) : (
        <Game gameSettings={gameSettings} setGameSettings={setGameSettings} />
      )}
    </>
  );
}

export default App;
