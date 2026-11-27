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
      <div className="py-32 text-center text-2xl font-semibold">
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
      {/* HERO SECTION */}
<div className="relative h-[500px] md:h-[600px] overflow-hidden">

  {/* Background Image */}
  <img
    src={place.image}
    alt={place.name}
    className="absolute inset-0 w-full h-full object-cover scale-110 blur-md"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 h-full flex items-center max-w-6xl mx-auto px-6">
    <div>
      <h1 className="text-5xl font-bold text-white">
        {place.name}
      </h1>

      <p className="text-stone-200 mt-4 max-w-xl">
        {place.overview}
      </p>
    </div>
  </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center max-w-6xl mx-auto px-6">
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
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">

        {/* WHY FAMOUS */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            কেন বিখ্যাত
          </h2>
          <p className="text-stone-700">
            {place.famousFor}
          </p>
        </section>

        {/* THINGS TO DO */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            কী করবেন
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {place.thingsToDo?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* FOOD */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            কী খাবেন
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {place.foodSuggestions?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* TIPS */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            ভ্রমণ টিপস
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {place.tips?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* RELATED PACKAGES */}
        <section>
          <h2 className="text-3xl font-bold mb-8">
            এই জায়গার প্যাকেজসমূহ
          </h2>

          {relatedPackages.length === 0 ? (
            <p>এই স্থানের জন্য কোন প্যাকেজ পাওয়া যায়নি</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPackages.map((pkg) => (
                <Link
                  key={pkg.id}
                  to={`/package/${pkg.id}`}
                  className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-5">
                    <h3 className="font-semibold mb-2">
                      {pkg.title}
                    </h3>

                    <p className="text-sm text-stone-500 mb-2">
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