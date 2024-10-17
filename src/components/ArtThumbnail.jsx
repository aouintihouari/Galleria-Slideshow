function ArtThumbnail({ group, groupIndex, onThumbnailClick }) {
  return (
    <div key={groupIndex} className="flex flex-col gap-8">
      {group.map((artwork) => (
        <div
          className="relative flex-grow flex items-stretch cursor-pointer group"
          key={artwork.name}
          onClick={() => onThumbnailClick(artwork)}
        >
          <img
            className="w-full h-auto object-cover"
            src={artwork.images.thumbnail}
            alt={artwork.name}
            title={artwork.name}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white lg:opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
            <h2 className="text-xl text-custom-x-l mb-2 font-bold">
              {artwork.name}
            </h2>
            <p className="text-custom-x-s opacity-70">{artwork.artist.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtThumbnail;
