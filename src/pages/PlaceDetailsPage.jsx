import { useParams, Link } from "react-router-dom";
import placesData from "../data/placesData";
import packagesData from "../data/packagesData";

const PlaceDetailsPage = () => {
  const { slug } = useParams();

  // 🔎 Find Place
  const place = placesData.find(
    (item) => item.slug === slug
  );

  if (!place) {
    return (
      <div className="bg-stone-50 min-h-screen py-32 text-center text-2xl font-semibold text-stone-900">
        Place Not Found
      </div>
    );
  }

  // 🔥 MATCH PACKAGE BY destinationSlug
  const relatedPackages = packagesData.filter(
    (pkg) => pkg.destinationSlug === place.destinationSlug
  );

  return (
    <div className="bg-stone-50 min-h-screen">

      {/* HERO SECTION */}
<div className="relative h-[500px] md:h-[600px] overflow-hidden">

  {/* Background Image */}
  <img
    src={place.image}
    alt={place.name}
    className="absolute inset-0 w-full h-full object-cover scale-110 blur-md"
   loading="lazy" decoding="async" />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
    <div>
      <h1 className="text-5xl font-bold text-white">
        {place.name}
      </h1>

      <p className="text-stone-200 mt-4 max-w-xl">
        {place.overview}
      </p>
    </div>
  </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">

        {/* WHY FAMOUS */}
        <section className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            কেন বিখ্যাত
          </h2>
          <p className="text-stone-600">
            {place.famousFor}
          </p>
        </section>

        {/* THINGS TO DO */}
        <section className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            কী করবেন
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-stone-600">
            {place.thingsToDo?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* FOOD */}
        <section className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            কী খাবেন
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-stone-600">
            {place.foodSuggestions?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* TIPS */}
        <section className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            ভ্রমণ টিপস
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-stone-600">
            {place.tips?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* RELATED PACKAGES */}
        <section>
          <h2 className="text-3xl font-bold text-stone-900 mb-8">
            এই জায়গার প্যাকেজসমূহ
          </h2>

          {relatedPackages.length === 0 ? (
            <p className="text-stone-600">এই স্থানের জন্য কোন প্যাকেজ পাওয়া যায়নি</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPackages.map((pkg) => (
                <Link
                  key={pkg.id}
                  to={`/package/${pkg.id}`}
                  className="group bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition overflow-hidden"
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-48 w-full object-cover group-hover:scale-105 transition"
                   loading="lazy" decoding="async" />

                  <div className="p-5">
                    <h3 className="font-semibold text-stone-900 mb-2">
                      {pkg.title}
                    </h3>

                    <p className="text-sm text-stone-600 mb-2">
                      ⏳ {pkg.duration}
                    </p>

                    <p className="text-emerald-700 font-bold">
                      ৳{pkg.pricing?.perPerson}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default PlaceDetailsPage;