import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
const Hero = () => {
  const hero = useRef();
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".title", {
        y: -100,
        ease: "back.out(2)",
      });

      tl.from("#badge", {
        opacity: 0,
        y: 20,
        delay: -0.2,
        duration: 1,
        ease: "elastic.out(1)",
      });

      tl.to(
        "#hat",
        {
          y: 145,
          x: -20,
          scale: 1.7,
          rotate: -5,
          ease: "expoScale(0.5,7,power1.inOut)",
          duration: 0.4,
        },
        "-=0.5",
      );
    },
    { scope: hero },
  );

  return (
    <section
      ref={hero}
      className="p-5  contrast-120 brightness-95 overflow-hidden h-70 relative w-100 flex"
    >
      <img
        src="/images/One-Piece-Logo.png"
        alt=""
        className="title w-42 absolute z-10 left-28 top-4.5"
      />
      <img
        src="/images/board.png"
        alt=""
        className="title -rotate-2 pt-11 brightness-80 h-55"
      />

      <img
        className=" title absolute w-72 top-23 left-17.5 -rotate-2 "
        src="/images/title.png"
        alt=""
      />

      <img
        id="badge"
        className="w-77 absolute left-14 top-42"
        src="/images/badge.png"
        alt=""
      />

      <img
        id="hat"
        src="/images/hat.png"
        alt=""
        className="absolute w-14 -top-18 right-2 z-1 rotate-90"
        style={{ filter: "drop-shadow(-10px 10px 5px rgba(0, 0, 0, 0.7))" }}
      />
    </section>
  );
};

export default Hero;
