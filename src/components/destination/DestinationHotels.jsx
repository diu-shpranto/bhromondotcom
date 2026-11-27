const DestinationHotels = ({ hotels }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-stone-900 mb-8">Nearby Hotels</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition">
            <h3 className="font-semibold text-stone-900">{hotel.name}</h3>
            <p className="text-sky-700 font-bold">{hotel.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationHotels;