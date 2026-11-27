import { Link } from "react-router-dom";
import destinationsData from "../data/destinationsData";
import { MapPinIcon } from "@heroicons/react/24/solid";

// Mood tags — same labels as the home destinations grid.
const MOODS = {
  coxsbazar: "সমুদ্র",
  saintmartin: "দ্বীপ",
  sajek: "পাহাড়",
  bandarban: "পাহাড়",
  sreemangal: "চা বাগান",
  sundarban: "জঙ্গল",
  sylhet: "ঝর্ণা",
  rangamati: "লেক",
  maldives: "দ্বীপ",
};

const DestinationsPage = () => {
  const handleImgError = (e) => {
    e.target.src = "/images/default.jpg";
  };

  return (
    <div className="bg-sand min-h-screen">
      {/* ================= FOREST HEADER BAND ================= */}

      <div className="bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12 md:pt-28 md:pb-16">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-3">
            সব গন্তব্য
          </h1>
          <p className="text-emerald-50/80 max-w-2xl text-sm md:text-base leading-relaxed">
            দেশের সেরা জায়গাগুলো এক জায়গায় — {destinationsData.length}টি
            গন্তব্য। প্রতিটা জায়গার ভেতরে গেলে পাবেন কোন কোম্পানির ট্যুর কবে
            ছাড়ছে, দাম কত, কী কী থাকছে — আর যাওয়ার আগে যা জানা দরকার।
          </p>
        </div>
      </div>

      {/* ================= GRID ================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationsData.map((destination) => (
            <Link
              key={destination.slug}
              to={`/destination/${destination.slug}`}
              className="group bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition min-w-0"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={destination.gallery?.[0]}
                  alt={destination.name}
                  onError={handleImgError}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {MOODS[destination.slug] && (
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 shadow">
                    {MOODS[destination.slug]}
                  </span>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-stone-900 mb-1.5">
                  {destination.name}
                </h3>

                <div className="flex items-center text-stone-600 text-sm">
                  <MapPinIcon className="w-4 h-4 mr-1.5 shrink-0 text-emerald-600" />
                  {destination.location}
                </div>

                <p className="text-stone-500 text-[13px] mt-2">
                  সেরা সময়: {destination.bestTime}
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
