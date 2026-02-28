const PlaceCard = ({ place }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      <img
        src={place.image}
        alt={place.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-6 space-y-4">

        <h3 className="text-xl font-semibold">
          {place.name}
        </h3>

        <p className="text-gray-600">
          {place.description}
        </p>

        <div className="text-sm text-gray-500 space-y-2">
          <p><strong>বিখ্যাত:</strong> {place.famousFor}</p>
          <p><strong>কিভাবে যাবেন:</strong> {place.howToGo}</p>
          <p><strong>খরচ:</strong> {place.cost}</p>
        </div>

        {/* MAP */}
        <iframe
          src={`https://www.google.com/maps?q=${place.mapQuery}&output=embed`}
          className="w-full h-52 rounded-xl"
          loading="lazy"
        />

        {/* Tips */}
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="font-semibold mb-2">
            ভ্রমণ টিপস:
          </p>
          <ul className="text-sm space-y-1">
            {place.tips.map((tip, i) => (
              <li key={i}>• {tip}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default PlaceCard;