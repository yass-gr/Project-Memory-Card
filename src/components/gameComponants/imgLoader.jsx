function handleImgLoad(id, setImgsLoadedIds) {
  setImgsLoadedIds((d) => [...d, id]);
}

const ImgLoader = ({ imgsLoadedIds, items, setImgsLoadedIds }) => {
  return (
    !(imgsLoadedIds.length === items.length) &&
    items.map((i, idx) => {
      return (
        <div key={idx}>
          {" "}
          <img
            src={i.avatarSrc}
            className="hidden"
            onLoad={() => handleImgLoad(i.id, setImgsLoadedIds)}
          />
        </div>
      );
    })
  );
};

export default ImgLoader;
