import { Link } from "react-router-dom";
import destinationsData from "../data/destinationsData";

const DestinationsPage = () => {
  return (
    <div className="bg-stone-50">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">সব গন্তব্য</h1>
        <div className="h-1 w-16 rounded-full bg-emerald-600" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinationsData.map((destination) => (
          <Link
            key={destination.slug}
            to={`/destination/${destination.slug}`}
            className="group bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition"
          >
            <img
              src={destination.gallery?.[0]}
              alt={destination.name}
              className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
             loading="lazy" decoding="async" />
            <div className="p-5">
              <h3 className="font-semibold text-lg text-stone-900">
                {destination.name}
              </h3>
              <p className="text-sm text-stone-600 mt-2">
                {destination.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DestinationsPage;
