import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

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
        delay: 6,
      },
      "-=0.4",
    );
    tl2.to(
      ":root",
      {
        "--op": 0,
      },
      "-=0.2",
    );
  }, []);

  return (
    <div className="w-78 flex flex-col items-center" action="">
      <button
        onClick={() =>
          setGameSettings((d) => ({ ...d, imgType: "characters" }))
        }
        onMouseEnter={() => {
          gsap
            .to("#startGame", {
              paused: true,
              scale: 1.05,
              duration: 0.2,
            })
            .play();
        }}
        onMouseLeave={() => {
          gsap
            .to("#startGame", {
              paused: true,
              scale: 1.0,
              duration: 0.2,
            })
            .play();
        }}
        onMouseDown={() => {
          gsap
            .to("#startGame", {
              paused: true,
              scale: 0.8,
            })
            .play();
        }}
        onMouseUp={() => {
          gsap
            .to("#startGame", {
              paused: true,
              scale: 1.0,
            })
            .play();
        }}
        id="startGame"
        className=" md:mt-5 cursor-pointer  inline-block relative w-60 after:z-10 after:left-[var(--leftt)] after:opacity-[var(--op)]  after:absolute after:top-3 after:h-65/100 after:-skew-5 after:w-7 after:bg-linear-to-r after:from-transparent after:via-yellow-100 after:to-transparent after:blur-sm after:mix-blend-screen "
      >
        <img src="/images/btn.png" alt="" />
      </button>

      <img src="/images/diffBadge.png" alt="" className="w-55 md:mt-10" />
      <div className="w-1/1 grid grid-cols-3">
        <button
          onClick={() => {
            setGameSettings((d) => ({ ...d, diff: "easy" }));
          }}
        >
          <img
            src="/images/easy.png"
            alt=""
            className={
              gameSettings.diff === "easy"
                ? "brightness-125 !hover:brightness-125 cursor-pointer  transition-all duration-200 scale-110 active:scale-99"
                : "cursor-pointer brightness-75 hover:brightness-100 transition-all duration-200 hover:scale-105 active:scale-99"
            }
          />
        </button>
        <button
          onClick={() => {
            setGameSettings((d) => ({ ...d, diff: "medium" }));
          }}
        >
          <img
            src="/images/midd.png"
            alt=""
            className={
              gameSettings.diff === "medium"
                ? "brightness-125 !hover:brightness-125 cursor-pointer  transition-all duration-200 scale-110 active:scale-99"
                : "cursor-pointer brightness-75 hover:brightness-100 transition-all duration-200 hover:scale-105 active:scale-99"
            }
          />
        </button>
        <button
          onClick={() => {
            setGameSettings((d) => ({ ...d, diff: "hard" }));
          }}
        >
          <img
            src="/images/hard.png"
            alt=""
            className={
              gameSettings.diff === "hard"
                ? "brightness-125 !hover:brightness-125 cursor-pointer  transition-all duration-200 scale-110 active:scale-99"
                : "cursor-pointer brightness-75 scale-95 hover:brightness-100 transition-all duration-200 hover:scale-105 active:scale-99"
            }
          />
        </button>
      </div>

      <div className="w-1/1 grid grid-cols-2 gap-2 place-content-center mt-2 md:mt-5">
        <img
          src="/images/settings.png"
          alt=""
          className="cursor-pointer hover:brightness-115 transition-all duration-200 active:scale-99"
        />
        <img
          src="/images/highlights.png"
          alt=""
          className="cursor-pointer scale-104 pt-1 hover:brightness-115 transition-all duration-200 active:scale-99"
        />
      </div>

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
    </div>
  );
};

export default ChooseGameSettings;
