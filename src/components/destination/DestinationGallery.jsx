const DestinationGallery = ({ images }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-stone-900 mb-8">ফটো গ্যালারি</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="gallery"
            className="w-full h-full object-cover rounded-2xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:scale-105 transition"
           loading="lazy" decoding="async" />
        ))}
      </div>
    </div>
  );
};

export default DestinationGallery;