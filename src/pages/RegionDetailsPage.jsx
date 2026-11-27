import { useParams, Link } from "react-router-dom";
import regionsData from "../data/regionsData";
import packagesData from "../data/packagesData";
import PlaceCard from "../components/region/PlaceCard";
import PlaceAccordion from "../components/region/PlaceAccordion";
import { useState } from "react";

const RegionDetailsPage = () => {
  const { slug } = useParams();
  const [search, setSearch] = useState("");

  const region = regionsData.find(r => r.slug === slug);

  if (!region) {
    return (
      <div className="bg-stone-50 min-h-screen py-40 text-center text-2xl font-semibold text-stone-900">
        Region Not Found
      </div>
    );
  }

  const filteredPlaces = region.places.filter(place =>
    place.name.toLowerCase().includes(search.toLowerCase())
  );

  const relatedPackages = packagesData.filter(pkg =>
    pkg.location?.toLowerCase().includes(region.slug)
  );

  return (
    
    <div className="bg-stone-50 min-h-screen">

      {/* HERO */}
      <div
        className="relative h-[520px] bg-cover bg-center"
        style={{ backgroundImage: `url(${region.cover})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">
              {region.name}
            </h1>
            <p className="text-stone-200 max-w-xl">
              {region.description}
            </p>
            <p className="mt-4 text-emerald-200 font-semibold">
              সেরা সময়: {region.bestTime}
            </p>
          </div>
        </div>
      </div>
<section className="max-w-7xl mx-auto px-6 pt-16">
  <h2 className="text-3xl font-bold text-stone-900 mb-8">
    এই অঞ্চলের সকল দর্শনীয় স্থান
  </h2>

  {/* Search Inside Region */}
  <input
    type="text"
    placeholder="জায়গা খুঁজুন..."
    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <div className="space-y-6">
    {filteredPlaces.map(place => (
      <PlaceAccordion key={place.slug} place={place} />
    ))}
  </div>
</section>
      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">

        {/* PLACES */}
        <section>
          <h2 className="text-3xl font-bold text-stone-900 mb-8">
            এই অঞ্চলের ঘোরার স্থান
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {region.places.map(place => (
              <PlaceCard key={place.slug} place={place} />
            ))}
          </div>
        </section>

        {/* RELATED PACKAGES */}
        {relatedPackages.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-stone-900 mb-8">
              উপলব্ধ প্যাকেজ
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPackages.map(pkg => (
                <Link
                  key={pkg.id}
                  to={`/package/${pkg.id}`}
                  className="group bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition overflow-hidden"
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-48 w-full object-cover group-hover:scale-105 transition"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-stone-900">
                      {pkg.title}
                    </h3>
                    <p className="text-emerald-700 font-bold mt-2">
                      ৳{pkg.pricing?.perPerson}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default RegionDetailsPage;