import { useParams, Link } from "react-router-dom";
import regionsData from "../data/regionsData";
import packagesData from "../data/packagesData";
import PlaceCard from "../components/region/PlaceCard";
import PlaceAccordion from "../components/region/PlaceAccordion";
import { useState } from "react";

const [search, setSearch] = useState("");

const filteredPlaces = region.places.filter(place =>
  place.name.toLowerCase().includes(search.toLowerCase())
);
const RegionDetailsPage = () => {
  const { slug } = useParams();

  const region = regionsData.find(r => r.slug === slug);

  if (!region) {
    return (
      <div className="py-40 text-center text-2xl font-semibold">
        Region Not Found
      </div>
    );
  }

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

        <div className="relative z-10 h-full flex items-center max-w-6xl mx-auto px-6">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">
              {region.name}
            </h1>
            <p className="text-stone-200 max-w-xl">
              {region.description}
            </p>
            <p className="mt-4 text-emerald-200">
              সেরা সময়: {region.bestTime}
            </p>
          </div>
        </div>
      </div>
<section>
  <h2 className="text-3xl font-bold mb-8">
    এই অঞ্চলের সকল দর্শনীয় স্থান
  </h2>

  {/* Search Inside Region */}
  <input
    type="text"
    placeholder="জায়গা খুঁজুন..."
    className="w-full mb-6 p-3 border rounded-xl"
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
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* PLACES */}
        <section>
          <h2 className="text-3xl font-bold mb-8">
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
            <h2 className="text-3xl font-bold mb-8">
              উপলব্ধ প্যাকেজ
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPackages.map(pkg => (
                <Link
                  key={pkg.id}
                  to={`/package/${pkg.id}`}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">
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