import ChooseGameSettings from "./homeCompononts/ChooseGameSettings";
import Hero from "./homeCompononts/Hero";

export default function Home({ gameSettings, setGameSettings }) {
  return (
    <main className="h-dvh  bg-[url(/images/homeBg.png)] bg-cover flex flex-col items-center">
      <Hero />
    </main>
  );
}
