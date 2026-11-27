import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  StarIcon,
  HeartIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

const PackageCard = ({ pkg }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-56 object-cover object-center group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/900x600?text=Travel+Image";
          }}
        />

        {/* Discount Badge */}
        {pkg.discount && (
          <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full shadow">
            {pkg.discount}% ছাড়
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-emerald-50 transition">
          <HeartIcon className="w-5 h-5 text-stone-600 hover:text-emerald-600" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Location + Rating */}
        <div className="flex justify-between items-center mb-2 text-sm text-stone-500">
          <div className="flex items-center space-x-1">
            <MapPinIcon className="w-4 h-4 text-emerald-600" />
            <span>{pkg.location}</span>
          </div>

          <div className="flex items-center space-x-1">
            <StarIcon className="w-4 h-4 text-amber-400" />
            <span className="font-medium">{pkg.rating}</span>
            <span className="text-stone-400">({pkg.reviews})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-stone-800 mb-2 line-clamp-2">
          {pkg.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-stone-600 mb-3 line-clamp-2">
          {pkg.description}
        </p>

        {/* Duration */}
        <div className="flex items-center text-sm text-stone-500 mb-3">
          <ClockIcon className="w-4 h-4 mr-1 text-emerald-600" />
          {pkg.duration}
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {pkg.highlights?.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Price Section */}
        <div className="flex justify-between items-center">
          <div>
            {pkg.oldPrice && (
              <span className="text-stone-400 line-through text-sm mr-2">
                ৳{pkg.oldPrice}
              </span>
            )}
            <span className="text-xl font-bold text-emerald-700">
              ৳{pkg.price}
            </span>
          </div>

          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg text-sm hover:bg-emerald-50 transition">
              বিস্তারিত
            </button>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700 transition shadow-md">
              বুক করুন
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;