import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const PlaceAccordion = ({ place }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border">

      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <div>
          <h3 className="text-lg font-semibold">
            {place.name}
          </h3>
          <p className="text-sm text-stone-500">
            {place.famousFor}
          </p>
        </div>

        <ChevronDownIcon
          className={`w-5 h-5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content */}
      {open && (
        <div className="p-6 border-t space-y-4">

          <img
            src={place.image}
            alt={place.name}
            className="w-full h-60 object-cover rounded-xl"
          />

          <p className="text-stone-700">
            {place.description}
          </p>

          <div className="text-sm space-y-2">
            <p><strong>কিভাবে যাবেন:</strong> {place.howToGo}</p>
            <p><strong>খরচ:</strong> {place.cost}</p>
          </div>

          <iframe
            src={`https://www.google.com/maps?q=${place.mapQuery}&output=embed`}
            className="w-full h-64 rounded-xl"
            loading="lazy"
          />

          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="font-semibold mb-2">
              ভ্রমণ টিপস:
            </p>
            <ul className="text-sm space-y-1">
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