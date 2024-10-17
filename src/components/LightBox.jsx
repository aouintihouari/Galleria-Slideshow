function LightBox({ image, onClose }) {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex justify-center  items-center bg-black bg-opacity-90 z-50">
      <aside className="relative">
        <p
          className="absolute -top-16 right-0 mr-4 sm:mr-8 text-white hover:opacity-40 cursor-pointer"
          onClick={onClose}
        >
          CLOSE
        </p>
        <img
          src={image}
          alt="lightbox view"
          className="mx-4 w-11/12 lg:w-auto lg:mx-0"
        />
      </aside>
    </div>
  );
}

export default LightBox;
