const DestinationVideo = ({ video }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-stone-900 mb-6">ভিডিও</h2>

      <div className="aspect-video overflow-hidden rounded-2xl ring-1 ring-stone-100 shadow-sm bg-white">
        <iframe
          src={video}
          className="w-full h-full rounded-2xl"
          allowFullScreen
          title="Destination Video"
        />
      </div>
    </div>
  );
};

export default DestinationVideo;