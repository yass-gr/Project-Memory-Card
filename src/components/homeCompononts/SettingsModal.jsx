import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TbMusicOff } from "react-icons/tb";

const SettingsModal = ({ setSettingsModalStatus }) => {
  useGSAP(() => {
    gsap.to(":root", {
      "--bg-modal-blur": "10px",
    });

    gsap.to("#modal", {
      translateY: 0,
      ease: "elastic.out(2,1)",
      duration: 1,
    });
  });

  return (
    <div
      id="bg-modal"
      className=" z-100 fixed h-dvh w-screen backdrop-blur-[var(--bg-modal-blur)] flex items-center justify-center"
    >
      <div
        id="modal"
        className="translate-y-200 w-8/10 relative flex flex-col items-center"
      >
        <img src="/images/settingsModal.png" alt="" />
        <button
          onClick={() => {
            setSettingsModalStatus(false);
          }}
          className="absolute bottom-5 w-50 hover:brightness-110 active:scale-95 transition-all duration-200 hover:scale-102"
        >
          <img src="/images/closeModal.png" alt="" />
        </button>
        <button>
          <TbMusicOff className="absolute bg text-[#d4b06ec4] bottom-22 -left-8 text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
