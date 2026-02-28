const DestinationGallery = ({ images }) => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">ফটো গ্যালারি</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="gallery"
            className="rounded-2xl shadow-md hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationGallery;