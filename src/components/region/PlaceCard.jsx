const PlaceCard = ({ place }) => {
  return (
    <div className="group bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition">

      <div className="overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 space-y-4">

        <h3 className="text-xl font-semibold text-stone-900">
          {place.name}
        </h3>

        <p className="text-stone-600">
          {place.description}
        </p>

        <div className="text-sm text-stone-600 space-y-2">
          <p><strong className="text-stone-900">বিখ্যাত:</strong> {place.famousFor}</p>
          <p><strong className="text-stone-900">কিভাবে যাবেন:</strong> {place.howToGo}</p>
          <p><strong className="text-stone-900">খরচ:</strong> {place.cost}</p>
        </div>

        {/* MAP */}
        <iframe
          src={`https://www.google.com/maps?q=${place.mapQuery}&output=embed`}
          className="w-full h-52 rounded-2xl ring-1 ring-stone-100"
          loading="lazy"
        />

        {/* Tips */}
        <div className="bg-emerald-50 p-4 rounded-2xl">
          <p className="font-semibold text-stone-900 mb-2">
            ভ্রমণ টিপস:
          </p>
          <ul className="text-sm text-stone-600 space-y-1">
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
