import { useState, useEffect } from "react";
import Header from "./components/Header";
import ThumbnailContainer from "./components/ThumbnailContainer";
import Loader from "./components/Loader";
import ArtDetails from "./components/ArtDetails";

async function fetchArtworks() {
  const response = await fetch("./src/data/data.json");
  if (!response.ok) throw new Error("Failed to fetch artworks");
  return await response.json();
}

function App() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmartphone, setIsSmartphone] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchArtworks();
        setArtworks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 1024);
      setIsTablet(width >= 768 && width < 1024);
      setIsSmartphone(width < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let slideshowInterval;
    if (isSlideshowActive) {
      slideshowInterval = setInterval(() => {
        handleNextArtwork();
      }, 3000); // Change artwork every 3 seconds
    }
    return () => clearInterval(slideshowInterval);
  }, [isSlideshowActive, selectedIndex]);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  const smartphoneOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const tabletOrder = [
    [0, 2, 4, 6, 8, 11, 13],
    [1, 3, 5, 7, 9, 10, 12, 14],
  ];

  const desktopOrder = [
    [0, 4, 8, 11],
    [1, 5, 9, 12],
    [2, 6, 13],
    [3, 7, 10, 14],
  ];

  const smartphoneGroup = smartphoneOrder
    .map((index) => artworks[index])
    .filter((artwork) => artwork);

  const desktopGroups = desktopOrder.map((group) =>
    group.map((index) => artworks[index]).filter((artwork) => artwork)
  );

  const tabletGroups = tabletOrder.map((group) =>
    group.map((index) => artworks[index]).filter((artwork) => artwork)
  );

  const displayGroups = isDesktop
    ? desktopGroups
    : isTablet
    ? tabletGroups
    : [smartphoneGroup];

  const handleThumbnailClick = (artwork) => {
    const index = artworks.findIndex((art) => art.name === artwork.name);
    if (index !== -1) {
      setSelectedArtwork(artwork);
      setSelectedIndex(index);
    }
  };

  const handleNextArtwork = () => {
    if (selectedIndex < artworks.length - 1) {
      setSelectedArtwork(artworks[selectedIndex + 1]);
      setSelectedIndex((index) => index + 1);
    } else {
      setSelectedArtwork(artworks[0]);
      setSelectedIndex(0);
    }
  };

  const handlePreviousArtwork = () => {
    if (selectedIndex > 0) {
      setSelectedArtwork(artworks[selectedIndex - 1]);
      setSelectedIndex((index) => index - 1);
    }
  };

  const toggleSlideshow = () => {
    setIsSlideshowActive((prev) => !prev);
  };

  return (
    <>
      <Header
        onClose={() => setSelectedArtwork(null)}
        isSlideshowActive={isSlideshowActive}
        onToggleSlideshow={toggleSlideshow}
      />
      {selectedArtwork ? (
        <ArtDetails
          artwork={selectedArtwork}
          index={selectedIndex}
          onNextClick={handleNextArtwork}
          onPreviousClick={handlePreviousArtwork}
        />
      ) : (
        <ThumbnailContainer
          display={displayGroups}
          isTablet={isTablet}
          isSmartphone={isSmartphone}
          onThumbnailClick={handleThumbnailClick}
        />
      )}
    </>
  );
}

export default App;
