import React from "react";
import { motion } from "framer-motion";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    slug: "coxsbazar",
    name: "কক্সবাজার",
    location: "চট্টগ্রাম",
    image: "/images/destinations/coxsbazar.jpg",
  },
  {
    id: 2,
    slug: "saintmartin",
    name: "সেন্টমার্টিন",
    location: "কক্সবাজার",
    image: "/images/destinations/saintmartin.jpg",
  },
  {
    id: 3,
    slug: "sajek",
    name: "সাজেক ভ্যালি",
    location: "রাঙ্গামাটি",
    image: "/images/destinations/sajekvelly.jpg",
  },
  {
    id: 4,
    slug: "bandarban",
    name: "বান্দরবান",
    location: "বান্দরবান",
    image: "/images/destinations/bandarban.jpg",
  },
  {
    id: 5,
    slug: "sreemangal",
    name: "শ্রীমঙ্গল",
    location: "সিলেট",
    image: "/images/destinations/sreemangal.jpg",
  },
  {
    id: 6,
    slug: "sundarban",
    name: "সুন্দরবন",
    location: "খুলনা",
    image: "/images/destinations/sundarban.jpg",
  },
  {
    id: 7,
    slug: "sylhet",
    name: "সিলেট",
    location: "সিলেট",
    image: "/images/6.-Sylhet-.webp",
  },
  {
    id: 8,
    slug: "rangamati",
    name: "রাঙ্গামাটি",
    location: "রাঙ্গামাটি",
    image: "/images/rangamati.jpg",
  },
];

const Destinations = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            জনপ্রিয় গন্তব্য
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            প্রতিটা জায়গার ভেতরে গেলে পাবেন কোন কোম্পানির ট্যুর কবে ছাড়ছে,
            দাম কত, কী কী থাকছে — আর যাওয়ার আগে যা জানা দরকার।
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Link
              key={destination.id}
              to={`/destination/${destination.slug}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index, 3) * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group rounded-3xl overflow-hidden ring-1 ring-stone-100 shadow-sm hover:shadow-xl transition duration-500 bg-white"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                   loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {destination.name}
                  </h3>

                  <div className="flex items-center text-stone-600 text-sm">
                    <MapPinIcon className="w-4 h-4 mr-2 text-emerald-600" />
                    {destination.location}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;