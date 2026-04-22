import { useState } from "react";
import Home from "./components/home";

import FetchOpImgs from "./components/fetchingOpImgs";

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
        <FetchOpImgs gameSettings={gameSettings} />
      )}
    </>
  );
}

export default App;
