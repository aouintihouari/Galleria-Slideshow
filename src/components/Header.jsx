import Logo from "../assets/shared/logo.svg";

function Header({ onClose, isSlideshowActive, onToggleSlideshow }) {
  return (
    <header className="flex flex-col sm:px-0 sm:p-0 lg:px-10 lg:p-10">
      <div className="flex justify-between items-center p-10  h-2/6 sm:px-10 md:px-0">
        <aside className="md:px-10">
          <img
            className="h-8 md:h-[3.5rem] cursor-pointer"
            src={Logo}
            onClick={onClose}
            alt="logo"
          />
        </aside>
        <h1
          className="cursor-pointer md:px-10 text-tertiary md:text-custom-xx-s tracking-[0.161em] font-bold text-custom-xxx-s hover:text-black"
          onClick={onToggleSlideshow}
        >
          {isSlideshowActive ? "STOP SLIDESHOW" : "START SLIDESHOW"}
        </h1>
      </div>
      <div className="h-0.5 w-full sm:w-full md:w-full bg-secondary md:mt-2"></div>
    </header>
  );
}

export default Header;
