export default function Home({ gameSettings, setGameSettings }) {
  return (
    <div className="h-dvh  bg-[url(/images/homeBg.png)] bg-cover">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          setGameSettings({
            ...gameSettings,
            imgType: fd.get("selectMode"),
            diff: fd.get("selectDiff"),
          });
        }}
      >
        <h2>chose img type:</h2>
        <input
          value="characters"
          type="radio"
          id="character"
          name="selectMode"
          defaultChecked
        />
        <label htmlFor="character">character</label>
        <input value="devilFruits" type="radio" id="df" name="selectMode" />
        <label htmlFor="df">devil fruit</label>

        <h2>chose diff:</h2>
        <input
          defaultChecked
          value="easy"
          type="radio"
          id="easy"
          name="selectDiff"
        />
        <label htmlFor="easy">easy</label>
        <input value="medium" type="radio" id="medium" name="selectDiff" />
        <label htmlFor="medium">medium</label>
        <input value="hard" type="radio" id="hard" name="selectDiff" />
        <label htmlFor="hard">hard</label>
        <br />

        <button
          className="bg-amber-400 p-2 rounded-xl hover:bg-amber-200"
          type="submit"
        >
          {" "}
          Start game
        </button>
      </form>
    </div>
  );
}
