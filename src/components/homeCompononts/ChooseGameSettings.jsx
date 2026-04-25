import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { CustomEase } from "gsap/CustomEase";

const ChooseGameSettings = ({ gameSettings, setGameSettings }) => {
  useGSAP(() => {
    const tl1 = gsap.timeline({ repeat: -1 });
    tl1.to("#startGame", {
      scale: 1.1,
      rotate: 5,
      duration: 0.2,
      delay: 4,
    });
    tl1.to("#startGame", {
      scale: 1.1,
      rotate: -5,
      duration: 0.1,
    });
    tl1.to("#startGame", {
      scale: 1.1,
      rotate: 5,
      duration: 0.1,
    });
    tl1.to("#startGame", {
      scale: 1.1,
      rotate: -5,
      duration: 0.1,
    });
    tl1.to("#startGame", {
      scale: 1.1,
      rotate: 5,
      duration: 0.1,
    });

    tl1.to("#startGame", {
      scale: 1,
      rotate: 0,
      duration: 1.7,
      ease: "elastic.out",
    });

    const tl2 = gsap.timeline({ repeat: -1 });
    tl2.to(":root", {
      "--op": 0.3,
    });
    tl2.to(
      ":root",
      {
        "--leftt": 198,
        duration: 1.7,
        ease: "none",
      },
      "-=0.4",
    );
    tl2.to(
      ":root",
      {
        "--op": 0,
        delay: 5,
      },
      "-=0.2",
    );
  });

  return (
    <form
      className=""
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
      <button
        id="startGame"
        className=" active:scale-95 inline-block relative w-60 after:z-10 after:left-[var(--leftt)] after:opacity-[var(--op)]  after:absolute after:top-3 after:h-65/100 after:-skew-5 after:w-7 after:bg-linear-to-r after:from-transparent after:via-yellow-100 after:to-transparent after:blur-sm after:mix-blend-screen "
      >
        <img src="/images/btn.png" alt="" />
      </button>

      {/* <h2>chose img type:</h2>
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
      </button>  */}
    </form>
  );
};

export default ChooseGameSettings;
