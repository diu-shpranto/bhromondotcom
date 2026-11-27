import React from "react";
import { motion } from "framer-motion";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import destinationsData from "../../data/destinationsData";

// Mood tags — plain descriptive labels for each destination's character.
const MOODS = {
  coxsbazar: "সমুদ্র",
  saintmartin: "দ্বীপ",
  sajek: "পাহাড়",
  bandarban: "পাহাড়",
  sreemangal: "চা বাগান",
  sundarban: "জঙ্গল",
  sylhet: "ঝর্ণা",
  rangamati: "লেক",
};

const Destinations = () => {
  // Maldives is international — it lives on the all-destinations page,
  // so the home grid shows the 8 domestic destinations.
  const homeDestinations = destinationsData.filter(
    (d) => d.slug !== "maldives"
  );

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-2">
                জনপ্রিয় গন্তব্য
              </h2>
              <p className="text-stone-600 max-w-2xl text-sm md:text-base">
                প্রতিটা জায়গার ভেতরে গেলে পাবেন কোন কোম্পানির ট্যুর কবে
                ছাড়ছে, দাম কত, কী কী থাকছে — আর যাওয়ার আগে যা জানা দরকার।
              </p>
            </div>
            <Link
              to="/destinations"
              className="hidden md:block shrink-0 text-sm font-semibold text-emerald-700 hover:text-emerald-800 whitespace-nowrap"
            >
              সব গন্তব্য →
            </Link>
          </div>
        </motion.div>

        {/* Cards — snap-scroll on phones, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
          {homeDestinations.map((destination, index) => (
            <Link
              key={destination.id}
              to={`/destination/${destination.slug}`}
              className="min-w-[78vw] sm:min-w-[320px] snap-start md:min-w-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index, 3) * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl overflow-hidden ring-1 ring-stone-100 shadow-sm hover:shadow-xl transition duration-500 bg-white h-full"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={destination.gallery[0]}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
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

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-stone-900 mb-1.5">
                    {destination.name}
                  </h3>

                  <div className="flex items-center text-stone-600 text-sm">
                    <MapPinIcon className="w-4 h-4 mr-1.5 text-emerald-600" />
                    {destination.location}
                  </div>

                  <p className="text-stone-500 text-[13px] mt-2">
                    সেরা সময়: {destination.bestTime}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            to="/destinations"
            className="text-sm font-semibold text-emerald-700"
          >
            সব গন্তব্য দেখুন →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
