import { useParams, Link } from "react-router-dom";
import destinationsData from "../data/destinationsData";
import packagesData from "../data/packagesData";
import companiesData from "../data/companiesData";
import placesData from "../data/placesData";
import { useState } from "react";

const DestinationDetailsPage = () => {
  const { slug } = useParams();

  const destination = destinationsData.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    return (
      <div className="py-32 text-center text-2xl font-semibold">
        Destination Not Found
      </div>
    );
  }

  /* ================= DATA FILTER ================= */

  const allPackages = packagesData.filter(
    (pkg) => pkg.destinationSlug === destination.slug
  );

  const placesHere = placesData.filter(
    (place) => place.destinationSlug === destination.slug
  );

  const companiesHere = companiesData.filter((company) =>
    allPackages.some((pkg) => pkg.companyId === company.id)
  );

  const [maxPrice, setMaxPrice] = useState(20000);

  const filteredPackages = allPackages.filter(
    (pkg) => pkg.pricing.perPerson <= maxPrice
  );

  /* ================= IMAGE FALLBACK ================= */

  const handleImgError = (e) => {
    e.target.src = "/images/default.jpg";
  };

  return (
    <div className="bg-stone-50 min-h-screen">

      {/* ================= HERO ================= */}

      <div
        className={`relative h-[520px] bg-cover bg-center ${destination.gallery?.[0] ? "" : "bg-gradient-to-r from-emerald-500 to-emerald-600"}`}
        style={
          destination.gallery?.[0]
            ? { backgroundImage: `url(${destination.gallery[0]})` }
            : undefined
        }
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center max-w-6xl mx-auto px-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {destination.name}
            </h1>

            <p className="text-stone-200 max-w-2xl text-lg">
              {destination.description}
            </p>

            <div className="mt-6 flex gap-6 text-white text-sm">
              <span>📦 {allPackages.length} প্যাকেজ</span>
              <span>📍 {placesHere.length} জনপ্রিয় স্থান</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* ================= WHY VISIT ================= */}

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            কেন {destination.name} বিখ্যাত?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {destination.famousFor?.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ================= POPULAR PLACES ================= */}

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10">
            জনপ্রিয় স্থানসমূহ
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {placesHere.map((place) => (
              <Link
                key={place.slug}
                to={`/places/${place.slug}`}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  onError={handleImgError}
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="font-semibold text-lg">
                    {place.name}
                  </h3>

                  <p className="text-sm text-stone-500 mt-2">
                    বিস্তারিত দেখুন →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ================= FILTER ================= */}

        <div className="bg-white p-6 rounded-2xl shadow mb-16">
          <h2 className="text-xl font-semibold mb-4">
            মূল্য অনুযায়ী ফিল্টার
          </h2>

          <label className="block mb-2 text-sm">
            সর্বোচ্চ মূল্য: ৳{maxPrice}
          </label>

          <input
            type="range"
            min="1000"
            max="20000"
            step="500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full"
          />
        </div>

        {/* ================= PACKAGES ================= */}

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10">
            উপলব্ধ প্যাকেজ
          </h2>

          {filteredPackages.length === 0 ? (
            <p>কোন প্যাকেজ পাওয়া যায়নি</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => {
                const company = companiesData.find(
                  (c) => c.id === pkg.companyId
                );

                return (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
                  >
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      onError={handleImgError}
                      loading="lazy"
                      className="h-52 w-full object-cover"
                    />

                    <div className="p-5">
                      <h3 className="font-semibold mb-2">
                        {pkg.title}
                      </h3>

                      <div className="flex justify-between text-sm text-stone-500 mb-2">
                        <span>⏳ {pkg.duration}</span>
                        <span>🗓 {pkg.tourStart}</span>
                      </div>

                      <p className="text-emerald-700 font-bold text-lg">
                        ৳{pkg.pricing.perPerson}
                      </p>

                      {company && (
                        <p className="text-sm text-stone-500 mt-3">
                          পরিচালনায়: {company.name}
                        </p>
                      )}

                      <Link
                        to={`/package/${pkg.id}`}
                        className="mt-4 block text-center bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
                      >
                        বিস্তারিত দেখুন
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ================= COMPANIES ================= */}

        <div>
          <h2 className="text-3xl font-bold mb-10">
            এই গন্তব্যে কার্যরত কোম্পানি
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {companiesHere.map((company) => (
              <Link
                key={company.id}
                to={`/company/${company.id}`}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    onError={handleImgError}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {company.name}
                    </h3>

                    <p className="text-sm text-stone-500">
                      ⭐ {company.rating}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DestinationDetailsPage;