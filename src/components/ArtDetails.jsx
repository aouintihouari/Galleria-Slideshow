import { useState, useEffect } from "react";
import LightBox from "./LightBox";
import Footer from "../components/Footer";

function ArtDetails({ artwork, index, onNextClick, onPreviousClick }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [artwork]);

  return (
    <>
      {selectedImage && (
        <LightBox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
      <section
        className={`p-4 sm:flex sm:flex-col md:mt-8 lg:p-10 lg:grid lg:grid-cols-2 lg:mt-2 
        transition-all duration-700 ease-out transform 
        ${
          isAnimating
            ? "opacity-0 scale-95 translate-y-5"
            : "opacity-100 scale-100 translate-y-0"
        }`}
      >
        <div className="flex">
          <aside className="relative">
            <div
              onClick={() => setSelectedImage(artwork.images.gallery)}
              className="absolute top-2 left-2 w-6/12 flex bg-black p-4 opacity-80 hover:bg-gray-400/50 hover:opacity-80 transition-opacity duration-300 sm:bottom-2 sm:top-auto lg:bottom-5 sm:w-3/12 lg:w-2/12 cursor-pointer"
            >
              <img
                src="./assets/shared/icon-view-image.svg"
                alt="view image"
              />
              <span className="ml-4 text-white text-custom-xxx-s">
                VIEW IMAGE
              </span>
            </div>
            <div className="absolute bottom-0 left-0 w-[16rem] -mb-1 -ml-1 bg-white px-3 py-3 sm:left-auto sm:right-0 sm:bottom-auto sm:px-16 sm:w-[28rem] sm:h-[15rem] sm:py-0 md:h-auto">
              <h2 className="mt-3 mb-2 text-custom-x-l font-bold pt-1 sm:text-custom-xx-l md:font-bold leading-none">
                {artwork.name}
              </h2>
              <h3 className="text-custom-s text-tertiary sm:pt-10 lg:text-custom-l md:pb-10">
                {artwork.artist.name}
              </h3>
            </div>
            <div className="absolute -bottom-20 mt-2 ml-1 w-[4rem] sm:top-56 sm:right-24 sm:w-[8rem] lg:top-auto lg:-bottom-12 lg:-right-16">
              <img className="mx-2" src={artwork.artist.image} alt="artist" />
            </div>
            <picture>
              <source
                srcSet={artwork.images.hero.large}
                media="(min-width: 640px)"
              />
              <source
                srcSet={artwork.images.hero.small}
                media="(max-width: 640px)"
              />
              <img
                className="w-full sm:w-11/12 md:w-9/12 lg:w-10/12"
                src={artwork.images.hero.small}
                alt="artwork"
              />
            </picture>
            <div className="absolute right-3 text-custom-xxx-l font-bold opacity-5 sm:text-custom-xxxx-l sm:right-auto lg:-right-full lg:top-0">
              <p>{artwork.year}</p>
            </div>
          </aside>
        </div>
        <article className="mx-auto w-full sm:w-10/12 p-4 lg:mt-20">
          <p className="mt-24 w-11/12 font-bold text-custom-s text-tertiary sm:w-full md:w-10/12 lg:w-10/12 lg:leading-loose lg:text-custom-l">
            {artwork.description}
          </p>
          <div className="my-5 md:my-5 md:leading-10 lg:my-20 sm:w-8/12 sm:mt-4">
            <a
              className="text-tertiary font-bold text-custom-xxx-s underline sm:text-custom-m hover:text-black"
              href={artwork.source}
            >
              GO TO SOURCE
            </a>
          </div>
        </article>
      </section>
      <Footer
        name={artwork.name}
        artist={artwork.artist.name}
        onNextClick={onNextClick}
        onPreviousClick={onPreviousClick}
        selectedIndex={index}
      />
    </>
  );
}

export default ArtDetails;
