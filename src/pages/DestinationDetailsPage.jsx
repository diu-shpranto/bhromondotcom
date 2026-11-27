import { useParams, Link } from "react-router-dom";
import destinationsData from "../data/destinationsData";
import packagesData from "../data/packagesData";
import companiesData from "../data/companiesData";
import placesData from "../data/placesData";
import { useState } from "react";
import {
  MapPinIcon,
  CalendarDaysIcon,
  ClockIcon,
  TicketIcon,
  SparklesIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const DestinationDetailsPage = () => {
  const { slug } = useParams();

  const destination = destinationsData.find(
    (item) => item.slug === slug
  );

  const [maxPrice, setMaxPrice] = useState(20000);

  if (!destination) {
    return (
      <div className="bg-sand min-h-screen py-32 px-6 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-3">
          গন্তব্য খুঁজে পাওয়া যায়নি
        </h1>
        <p className="text-stone-600 mb-8">
          এই ঠিকানায় কোনো গন্তব্য নেই।
        </p>
        <Link
          to="/destinations"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
        >
          সব গন্তব্য দেখুন →
        </Link>
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

  const filteredPackages = allPackages.filter(
    (pkg) => pkg.pricing.perPerson <= maxPrice
  );

  /* ================= SAJEK CAUTION =================
     Sajek's description carries a "সতর্কতা: ..." note after the main
     text (same parse as home SajekNotice). The description itself is
     never edited — the hero shows only the part before the warning,
     and the warning gets its own amber banner below the hero. */

  const caution = destination.description.split("সতর্কতা: ")[1];
  const heroDescription = destination.description.split("সতর্কতা: ")[0];

  /* ================= IMAGE FALLBACK ================= */

  const handleImgError = (e) => {
    e.target.src = "/images/default.jpg";
  };

  return (
    <div className="bg-sand min-h-screen">

      {/* ================= HERO ================= */}

      <div
        className={`relative h-[520px] bg-cover bg-center ${destination.gallery?.[0] ? "" : "bg-forest"}`}
        style={
          destination.gallery?.[0]
            ? { backgroundImage: `url(${destination.gallery[0]})` }
            : undefined
        }
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-[#022c22]/55 to-transparent" />

        <div className="relative z-10 h-full flex items-end max-w-7xl mx-auto px-6 pb-12">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              {destination.name}
            </h1>

            <p className="text-emerald-50/90 max-w-2xl text-base md:text-lg leading-relaxed">
              {heroDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white text-sm">
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon className="w-4 h-4" />
                {destination.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDaysIcon className="w-4 h-4" />
                সেরা সময়: {destination.bestTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <TicketIcon className="w-4 h-4" />
                {allPackages.length} প্যাকেজ
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SparklesIcon className="w-4 h-4" />
                {placesHere.length} জনপ্রিয় স্থান
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SAJEK CLOSURE BANNER ================= */}

      {caution && (
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl px-5 py-5 md:px-8 md:py-6 flex gap-4">
            <ExclamationTriangleIcon className="w-6 h-6 shrink-0 text-amber-600 mt-0.5" />
            <div>
              <h2 className="font-display text-lg md:text-xl font-bold text-amber-900 mb-1">
                সাজেক এখন বন্ধ আছে
              </h2>
              <p className="text-amber-800/90 text-sm md:text-[15px] leading-relaxed">
                {caution}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= CONTENT ================= */}

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        {/* ================= KEY FACTS (SAINT MARTIN) ================= */}

        {destination.keyFacts && (
          <div className="mb-16 md:mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8">
              জাহাজ ও সিজন — জেনে রাখুন
            </h2>

            <div className="bg-white p-6 md:p-8 rounded-3xl ring-1 ring-stone-100 shadow-sm">
              <ul className="space-y-3">
                {destination.keyFacts.map((fact, i) => (
                  <li key={i} className="flex gap-3 text-stone-700">
                    <CheckCircleIcon className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ================= WHY VISIT ================= */}

        {destination.famousFor?.length > 0 && (
          <div className="mb-16 md:mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8">
              কেন {destination.name} বিখ্যাত?
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {destination.famousFor.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-3xl ring-1 ring-stone-100 shadow-sm text-stone-700 hover:shadow-xl hover:-translate-y-0.5 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= HOW TO REACH ================= */}

        {destination.howToReach && (
          <div className="mb-16 md:mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8">
              কীভাবে যাবেন
            </h2>

            <div className="bg-white p-6 md:p-8 rounded-3xl ring-1 ring-stone-100 shadow-sm">
              <ul className="space-y-3">
                {destination.howToReach.map((fact, i) => (
                  <li key={i} className="flex gap-3 text-stone-700">
                    <CheckCircleIcon className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ================= POPULAR PLACES ================= */}

        {placesHere.length > 0 && (
          <div className="mb-16 md:mb-24">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8 md:mb-10">
              জনপ্রিয় স্থানসমূহ
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {placesHere.map((place) => (
                <Link
                  key={place.slug}
                  to={`/places/${place.slug}`}
                  className="group bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition overflow-hidden"
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    onError={handleImgError}
                    loading="lazy"
                    className="h-52 w-full object-cover group-hover:scale-105 transition"
                  />

                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-stone-900">
                      {place.name}
                    </h3>

                    <p className="text-sm text-emerald-700 font-semibold mt-2">
                      বিস্তারিত দেখুন →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ================= FILTER ================= */}

        <div className="bg-white p-6 rounded-3xl ring-1 ring-stone-100 shadow-sm mb-16">
          <h2 className="font-display text-xl font-bold text-stone-900 mb-4">
            মূল্য অনুযায়ী ফিল্টার
          </h2>

          <label className="block mb-2 text-sm text-stone-600">
            সর্বোচ্চ মূল্য: ৳{maxPrice}
          </label>

          <input
            type="range"
            min="1000"
            max="20000"
            step="500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-emerald-600"
          />
        </div>

        {/* ================= PACKAGES ================= */}

        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8 md:mb-10">
            উপলব্ধ প্যাকেজ
          </h2>

          {filteredPackages.length === 0 ? (
            <p className="text-stone-600">কোন প্যাকেজ পাওয়া যায়নি</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {filteredPackages.map((pkg) => {
                const company = companiesData.find(
                  (c) => c.id === pkg.companyId
                );

                return (
                  <div
                    key={pkg.id}
                    className="group bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition overflow-hidden"
                  >
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      onError={handleImgError}
                      loading="lazy"
                      className="h-52 w-full object-cover"
                    />

                    <div className="p-5">
                      <h3 className="font-display font-bold text-stone-900 mb-2">
                        {pkg.title}
                      </h3>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-600 mb-2">
                        <span className="inline-flex items-center gap-1.5">
                          <ClockIcon className="w-4 h-4" />
                          {pkg.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDaysIcon className="w-4 h-4" />
                          {pkg.tourStart}
                        </span>
                      </div>

                      <p className="text-emerald-700 font-bold text-lg">
                        ৳{pkg.pricing.perPerson}
                      </p>

                      {company && (
                        <p className="text-sm text-stone-600 mt-3">
                          পরিচালনায়: {company.name}
                        </p>
                      )}

                      <Link
                        to={`/package/${pkg.id}`}
                        className="mt-4 block text-center bg-emerald-600 text-white py-2.5 rounded-xl font-semibold hover:bg-emerald-700 transition"
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

        {companiesHere.length > 0 && (
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8 md:mb-10">
              এই গন্তব্যে কার্যরত কোম্পানি
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {companiesHere.map((company) => (
                <Link
                  key={company.id}
                  to={`/company/${company.id}`}
                  className="bg-white p-6 rounded-3xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={company.logo}
                      alt={company.name}
                      onError={handleImgError}
                      className="w-16 h-16 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-stone-900">
                        {company.name}
                      </h3>

                      {company.rating && (
                        <p className="text-sm text-stone-600 mt-1 inline-flex items-center gap-1">
                          <StarIcon className="w-4 h-4 text-amber-500" />
                          {company.rating}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default DestinationDetailsPage;
