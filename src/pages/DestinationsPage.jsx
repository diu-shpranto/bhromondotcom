import { Link } from "react-router-dom";
import destinationsData from "../data/destinationsData";

const DestinationsPage = () => {
  return (
    <div className="container-apple py-20">
      <h1 className="text-4xl font-bold mb-10">সব গন্তব্য</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {destinationsData.map((destination) => (
          <Link
            key={destination.slug}
            to={`/destination/${destination.slug}`}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={destination.gallery?.[0]}
              alt={destination.name}
              className="h-52 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg">
                {destination.name}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {destination.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;