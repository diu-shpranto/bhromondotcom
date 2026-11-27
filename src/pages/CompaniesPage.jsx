import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  StarIcon,
  CubeIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import companiesData from "../data/companiesData";
import packagesData from "../data/packagesData";
import destinationsData from "../data/destinationsData";

const CompaniesPage = () => {
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState("all");

  const getPackageCount = (companyId) => {
    return packagesData.filter(
      (pkg) => pkg.companyId === companyId
    ).length;
  };

  const filteredCompanies = companiesData.filter((company) => {
    const matchSearch = company.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchRating =
      ratingFilter === "all" ||
      company.rating == null ||
      company.rating >= parseFloat(ratingFilter);

    return matchSearch && matchRating;
  });

  const clearFilters = () => {
    setSearch("");
    setRatingFilter("all");
  };

  return (
    <div className="bg-sand min-h-screen">
      {/* ================= FOREST HEADER BAND ================= */}
      <div className="bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12 md:pt-28 md:pb-16">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-3">
            ট্যুর কোম্পানি সমূহ
          </h1>
          <p className="text-emerald-50/80 text-sm md:text-base">
            {filteredCompanies.length} টি কোম্পানি পাওয়া গেছে
          </p>
        </div>
      </div>

      {/* ================= FILTER PANEL ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="-mt-6 relative z-10 bg-white rounded-2xl ring-1 ring-stone-100 shadow-md p-4 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="কোম্পানি খুঁজুন..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-stone-200 bg-sand/60 pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="w-full md:w-48 rounded-xl border border-stone-200 bg-sand/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="all">সব রেটিং</option>
            <option value="4">৪ এর উপরে</option>
            <option value="4.5">৪.৫ এর উপরে</option>
          </select>
        </div>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {filteredCompanies.length === 0 ? (
          <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-10 md:p-14 text-center">
            <p className="font-display text-2xl font-bold text-stone-900 mb-2">
              কোনো কোম্পানি পাওয়া যায়নি
            </p>
            <p className="text-stone-600 mb-6">
              খোঁজার নাম বা রেটিং ফিল্টার বদলে আবার চেষ্টা করুন।
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
            >
              ফিল্টার পরিষ্কার করুন
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredCompanies.map((company) => (
              <Link
                key={company.id}
                to={`/company/${company.id}`}
                className="group flex flex-col bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition duration-300 overflow-hidden min-w-0"
              >
                {/* LOGO BAND */}
                <div className="bg-forest flex justify-center py-10 border-b-4 border-amber-500">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-xl"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-24 h-24 flex items-center justify-center bg-white text-emerald-700 font-display text-4xl font-bold rounded-full border-4 border-white shadow-xl">
                      {company.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-stone-900 leading-snug">
                      {company.name}
                    </h3>
                    {company.rating && (
                      <span className="flex items-center gap-1 shrink-0 bg-amber-50 text-amber-700 text-sm font-semibold px-2.5 py-1 rounded-full">
                        <StarIcon className="w-4 h-4 text-amber-500" />
                        {company.rating}
                      </span>
                    )}
                  </div>

                  {company.verified && (
                    <span className="inline-flex items-center gap-1 self-start mt-3 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      ✔ যাচাইকৃত কোম্পানি
                    </span>
                  )}

                  <p className="flex items-start gap-1.5 text-stone-600 text-sm mt-3">
                    <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" />
                    <span className="line-clamp-2">{company.location}</span>
                  </p>

                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full">
                      <CubeIcon className="w-4 h-4" />
                      {getPackageCount(company.id)} প্যাকেজ
                    </span>
                  </div>

                  {/* Destinations */}
                  {company.destinations?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {company.destinations.slice(0, 4).map((slug) => {
                        const dest = destinationsData.find((d) => d.slug === slug);
                        return dest ? (
                          <span
                            key={slug}
                            className="bg-stone-100 text-stone-600 text-xs px-2.5 py-1 rounded-full"
                          >
                            {dest.name}
                          </span>
                        ) : null;
                      })}
                      {company.destinations.length > 4 && (
                        <span className="bg-stone-100 text-stone-600 text-xs px-2.5 py-1 rounded-full">
                          +{company.destinations.length - 4} আরও
                        </span>
                      )}
                    </div>
                  )}

                  <p className="text-stone-600 text-sm mt-4 leading-relaxed line-clamp-3">
                    {company.description}
                  </p>

                  <div className="mt-auto pt-5">
                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-emerald-700 font-semibold text-sm">
                        প্রোফাইল দেখুন
                      </span>
                      <ArrowRightIcon className="w-4 h-4 text-emerald-700 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompaniesPage;
