import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const PlaceAccordion = ({ place }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm overflow-hidden hover:shadow-xl transition">

      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <div>
          <h3 className="text-lg font-semibold text-stone-900">
            {place.name}
          </h3>
          <p className="text-sm text-stone-600">
            {place.famousFor}
          </p>
        </div>

        <ChevronDownIcon
          className={`w-5 h-5 text-emerald-700 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content */}
      {open && (
        <div className="p-6 border-t border-stone-100 space-y-4">

          <img
            src={place.image}
            alt={place.name}
            className="w-full h-60 object-cover rounded-2xl"
           loading="lazy" decoding="async" />

          <p className="text-stone-600">
            {place.description}
          </p>

          <div className="text-sm text-stone-600 space-y-2">
            <p><strong className="text-stone-900">কিভাবে যাবেন:</strong> {place.howToGo}</p>
            <p><strong className="text-stone-900">খরচ:</strong> {place.cost}</p>
          </div>

          <iframe
            src={`https://www.google.com/maps?q=${place.mapQuery}&output=embed`}
            className="w-full h-64 rounded-2xl ring-1 ring-stone-100"
            loading="lazy"
          />

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
      )}

    </div>
  );
};

export default PlaceAccordion;
