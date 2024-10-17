import ArtThumbnail from "./ArtThumbnail";

function ThumbnailContainer({
  display,
  isTablet,
  isSmartphone,
  onThumbnailClick,
}) {
  return (
    <main
      className={`grid ${
        isSmartphone
          ? "grid-cols-1"
          : isTablet
          ? "sm:grid-cols-2"
          : "md:grid-cols-4"
      } gap-8 py-8 md:p-10 px-6`}
    >
      {display.map((group, groupIndex) => {
        return (
          <ArtThumbnail
            group={group}
            groupIndex={groupIndex}
            key={groupIndex}
            onThumbnailClick={onThumbnailClick}
          />
        );
      })}
    </main>
  );
}

export default ThumbnailContainer;
