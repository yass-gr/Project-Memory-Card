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
        duration: 0.5,
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
          ease: "expoScale(0.5,7,power1.inOut)",
          duration: 0.3,
        },
        "-=0.6",
      );
    },
    { scope: hero },
  );

  return (
    <section
      ref={hero}
      className="  contrast-120 brightness-95  h-55 relative w-78 flex"
    >
      <img
        src="/images/One-Piece-Logo.png"
        alt=""
        className="title w-45/100 absolute z-10 left-30/100 top-3/100 "
      />
      <img
        src="/images/board.png"
        alt=""
        className="title -rotate-2  brightness-80 h-55 object-contain"
      />

      <img
        className=" title absolute w-80/100 top-30/100 left-13/100 -rotate-2 "
        src="/images/title.png"
        alt=""
      />

      <img
        id="badge"
        className="w-80/100 absolute left-12/100 top-60/100 "
        src="/images/badge.png"
        alt=""
      />

      <img
        id="hat"
        src="/images/hat.png"
        alt=""
        className="absolute w-15/100 -top-42/100 -right-3 z-1 "
        style={{ filter: "drop-shadow(-10px 10px 5px rgba(0, 0, 0, 0.7))" }}
      />
    </section>
  );
};

export default Hero;
