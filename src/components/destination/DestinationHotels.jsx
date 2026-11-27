const DestinationHotels = ({ hotels }) => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Nearby Hotels</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold">{hotel.name}</h3>
            <p className="text-emerald-700">{hotel.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationHotels;