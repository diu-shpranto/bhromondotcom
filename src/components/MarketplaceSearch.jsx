import { useState } from "react";
import { useNavigate } from "react-router-dom";
import destinationsData from "../data/destinationsData";
import packagesData from "../data/packagesData";
import placesData from "../data/placesData";

const MarketplaceSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const destination = destinationsData.find(d =>
      d.name.toLowerCase().includes(query.toLowerCase())
    );

    if (destination) {
      navigate(`/destination/${destination.slug}`);
      return;
    }

    const place = placesData.find(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    if (place) {
      navigate(`/places/${place.slug}`);
      return;
    }

    const pkg = packagesData.find(p =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );

    if (pkg) {
      navigate(`/package/${pkg.id}`);
      return;
    }

    alert("কিছু পাওয়া যায়নি");
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="text"
        placeholder="গন্তব্য, স্থান বা প্যাকেজ খুঁজুন..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full flex-1 rounded-2xl border border-stone-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
      />

      <button
        type="submit"
        className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 rounded-xl font-semibold whitespace-nowrap transition"
      >
        খুঁজুন
      </button>
    </form>
  );
};

export default MarketplaceSearch;
