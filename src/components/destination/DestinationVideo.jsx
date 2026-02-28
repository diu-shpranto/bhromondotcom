const DestinationVideo = ({ video }) => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-6">ভিডিও</h2>

      <div className="aspect-video">
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