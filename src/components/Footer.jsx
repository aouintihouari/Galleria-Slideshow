function Footer({ name, artist, onNextClick, onPreviousClick, selectedIndex }) {
  const totalArtworks = 15;
  const progressPercentage = ((selectedIndex + 1) / totalArtworks) * 100;

  return (
    <footer className="lg:mt-20">
      <div className="relative w-full h-0.5 bg-secondary">
        <div
          className="absolute top-0 left-0 h-full bg-black transition-width duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <aside className="flex justify-between items-center w-full p-12">
        <div className="flex flex-col justify-center">
          <p className="text-custom-s font-bold">{name}</p>
          <p className="text-custom-s">{artist}</p>
        </div>
        <div className="flex ml-10 w-12/12">
          <img
            onClick={onPreviousClick}
            className={`w-4 h-4 mr-10 cursor-pointer hover:opacity-50 lg:w-8 lg:h-8 ${
              selectedIndex === 0 ? "opacity-10 hover:opacity-10" : ""
            }`}
            src="./src/assets/shared/icon-back-button.svg"
            alt="Previous"
          />
          <img
            onClick={onNextClick}
            className={`w-4 h-4 cursor-pointer hover:opacity-50 lg:w-8 lg:h-8 ${
              selectedIndex === totalArtworks - 1
                ? "opacity-10 hover:opacity-10"
                : ""
            }`}
            src="./src/assets/shared/icon-next-button.svg"
            alt="Next"
          />
        </div>
      </aside>
    </footer>
  );
}

export default Footer;
