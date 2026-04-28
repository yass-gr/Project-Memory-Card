import { useState } from "react";
import ChooseGameSettings from "./homeCompononts/ChooseGameSettings";
import Footer from "./homeCompononts/Footer";
import Hero from "./homeCompononts/Hero";
import SettingsModal from "./homeCompononts/SettingsModal";

export default function Home({ gameSettings, setGameSettings }) {
  const [settingsModalStatus, setSettingsModalStatus] = useState(false);
  return (
    <main className="h-screen  bg-[url(/images/homeBg.png)] bg-cover flex flex-col items-center">
      <Hero />
      <ChooseGameSettings
        gameSettings={gameSettings}
        setGameSettings={setGameSettings}
        setSettingsModalStatus={setSettingsModalStatus}
      />
      <Footer />
      {settingsModalStatus && (
        <SettingsModal setSettingsModalStatus={setSettingsModalStatus} />
      )}
    </main>
  );
}
