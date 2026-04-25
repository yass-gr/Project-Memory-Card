const Footer = () => {
  return (
    <div className="mt-auto brightness-60 overflow-hidden h-24 w-100 relative">
      <button>
        <img
          src="/images/homefooter.png"
          alt=""
          className="w-17 absolute left-12 top-3 transition-[brightness_500ms,transform_1000ms] hover:brightness-150 hover:rotate-10  active:scale-95  "
        />
      </button>
      <button>
        <img
          src="/images/gameFooter.png"
          alt=""
          className="w-19 absolute left-40 top-3 transition-[brightness_500ms,transform_1000ms] hover:brightness-150 hover:rotate-10  active:scale-95 "
        />
      </button>
      <button>
        <img
          src="/images/githubFooter.png"
          alt=""
          className="w-15.5 absolute left-71 top-3 transition-[brightness_500ms,transform_1000ms] hover:brightness-150 hover:rotate-10  active:scale-95 "
        />
      </button>

      <img
        src="/images/footerbar.png"
        alt=""
        className="object-contain absolute -bottom-17 -z-1"
      />
    </div>
  );
};

export default Footer;
