import { useParams, Link } from "react-router-dom";
import placesData from "../data/placesData";
import packagesData from "../data/packagesData";
import destinationsData from "../data/destinationsData";
import companiesData from "../data/companiesData";
import {
  MapPinIcon,
  CalendarDaysIcon,
  ClockIcon,
  TicketIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const PlaceDetailsPage = () => {
  const { slug } = useParams();

  // 🔎 Find Place
  const place = placesData.find(
    (item) => item.slug === slug
  );

  if (!place) {
    return (
      <div className="bg-sand min-h-screen py-32 px-6 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-3">
          জায়গা খুঁজে পাওয়া যায়নি
        </h1>
        <p className="text-stone-600 mb-8">
          এই ঠিকানায় কোনো জায়গা নেই।
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

  /* ================= RELATED DATA ================= */

  const destination = destinationsData.find(
    (item) => item.slug === place.destinationSlug
  );

  // 🔥 MATCH PACKAGE BY destinationSlug
  const relatedPackages = packagesData.filter(
    (pkg) => pkg.destinationSlug === place.destinationSlug
  );

  const otherPlaces = placesData.filter(
    (item) =>
      item.destinationSlug === place.destinationSlug &&
      item.slug !== place.slug
  );

  /* ================= SAJEK CAUTION =================
     Same parse as DestinationDetailsPage: the destination description
     carries a "সতর্কতা: ..." note after the main text. The
     description itself is never edited — only the warning part is
     shown here, in its own amber banner. */

  const caution = destination?.description?.split("সতর্কতা: ")[1];

  /* ================= IMAGE FALLBACK =================
     /images/default.jpg does not exist in public/, so a failed
     image falls back to the parent destination's cover photo once,
     then hides itself instead of showing a broken icon. */

  const handleImgError = (e) => {
    const fallback = destination?.gallery?.[0];
    if (fallback && e.target.src.indexOf(fallback) === -1) {
      e.target.src = fallback;
    } else {
      e.target.style.display = "none";
    }
  };

  return (
    <div className="bg-sand min-h-screen">

      {/* ================= HERO ================= */}

      <div
        className={`relative h-[520px] bg-cover bg-center ${place.image ? "" : "bg-forest"}`}
        style={
          place.image
            ? { backgroundImage: `url(${place.image})` }
            : undefined
        }
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-[#022c22]/55 to-transparent" />

        <div className="relative z-10 h-full flex items-end max-w-7xl mx-auto px-6 pb-12">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              {place.name}
            </h1>

            <p className="text-emerald-50/90 max-w-2xl text-base md:text-lg leading-relaxed">
              {place.overview}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white text-sm">
              {destination && (
                <Link
                  to={`/destination/${destination.slug}`}
                  className="inline-flex items-center gap-1.5 hover:text-emerald-200 transition"
                >
                  <MapPinIcon className="w-4 h-4" />
                  {destination.name}
                  {destination.location &&
                    destination.location !== destination.name &&
                    `, ${destination.location}`}
                </Link>
              )}
              {place.bestTime && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDaysIcon className="w-4 h-4" />
                  সেরা সময়: {place.bestTime}
                </span>
              )}
              {relatedPackages.length > 0 && (
                <span className="inline-flex items-center gap-1.5">
                  <TicketIcon className="w-4 h-4" />
                  {relatedPackages.length} প্যাকেজ
                </span>
              )}
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

        {/* ================= WHY FAMOUS ================= */}

        {place.famousFor && (
          <div className="mb-16 md:mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8">
              কেন {place.name} বিখ্যাত?
            </h2>

            <div className="bg-white p-6 md:p-8 rounded-3xl ring-1 ring-stone-100 shadow-sm">
              <p className="text-stone-700 text-base md:text-lg leading-relaxed">
                {place.famousFor}
              </p>
            </div>
          </div>
        )}

        {/* ================= THINGS TO DO ================= */}

        {place.thingsToDo?.length > 0 && (
          <div className="mb-16 md:mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8">
              কী করবেন
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {place.thingsToDo.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-3xl ring-1 ring-stone-100 shadow-sm text-stone-700 hover:shadow-xl hover:-translate-y-0.5 transition flex gap-3"
                >
                  <CheckCircleIcon className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= FOOD ================= */}

        {place.foodSuggestions?.length > 0 && (
          <div className="mb-16 md:mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8">
              কী খাবেন
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {place.foodSuggestions.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-3xl ring-1 ring-stone-100 shadow-sm text-stone-700 hover:shadow-xl hover:-translate-y-0.5 transition flex gap-3"
                >
                  <CheckCircleIcon className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TIPS ================= */}

        {place.tips?.length > 0 && (
          <div className="mb-16 md:mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8">
              ভ্রমণ টিপস
            </h2>

            <div className="bg-white p-6 md:p-8 rounded-3xl ring-1 ring-stone-100 shadow-sm">
              <ul className="space-y-3">
                {place.tips.map((item, i) => (
                  <li key={i} className="flex gap-3 text-stone-700">
                    <CheckCircleIcon className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ================= RELATED PACKAGES ================= */}

        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8 md:mb-10">
            এই জায়গার প্যাকেজসমূহ
          </h2>

          {relatedPackages.length === 0 ? (
            <p className="text-stone-600">এই স্থানের জন্য কোন প্যাকেজ পাওয়া যায়নি</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {relatedPackages.map((pkg) => {
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
                        {pkg.tourStart && (
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDaysIcon className="w-4 h-4" />
                            {pkg.tourStart}
                          </span>
                        )}
                      </div>

                      {pkg.pricing?.perPerson && (
                        <p className="text-emerald-700 font-bold text-lg">
                          ৳{pkg.pricing.perPerson}
                        </p>
                      )}

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

        {/* ================= OTHER PLACES, SAME DESTINATION ================= */}

        {otherPlaces.length > 0 && (
          <div className="mb-16 md:mb-24">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-8 md:mb-10">
              {destination ? `${destination.name}-এর আরও স্থান` : "আরও স্থান"}
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {otherPlaces.map((other) => (
                <Link
                  key={other.slug}
                  to={`/places/${other.slug}`}
                  className="group bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition overflow-hidden"
                >
                  <img
                    src={other.image}
                    alt={other.name}
                    onError={handleImgError}
                    loading="lazy"
                    className="h-52 w-full object-cover group-hover:scale-105 transition"
                  />

                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-stone-900">
                      {other.name}
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

        {/* ================= DESTINATION CTA ================= */}

        {destination && (
          <div className="bg-forest rounded-3xl px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                {destination.name} ঘুরে দেখুন
              </h2>
              <p className="text-emerald-50/90 leading-relaxed">
                এই জায়গাটি {destination.name}-এ — গন্তব্যের সব প্যাকেজ ও
                স্থান একসাথে দেখুন।
              </p>
            </div>
            <Link
              to={`/destination/${destination.slug}`}
              className="shrink-0 inline-block text-center bg-white text-forest px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition"
            >
              গন্তব্য দেখুন →
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default PlaceDetailsPage;
