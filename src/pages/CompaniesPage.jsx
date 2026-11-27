import { useState } from "react";
import { Link } from "react-router-dom";
import companiesData from "../data/companiesData";
import packagesData from "../data/packagesData";

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

  return (
    <div className="bg-stone-50">
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            ট্যুর কোম্পানি সমূহ
          </h2>
          <div className="h-1 w-16 rounded-full bg-emerald-600 mt-4 mb-4" />
          <p className="text-stone-600">
            {filteredCompanies.length} টি কোম্পানি পাওয়া গেছে
          </p>
        </div>

        <input
          type="text"
          placeholder="কোম্পানি খুঁজুন..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 rounded-2xl border border-stone-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="w-full md:w-48 rounded-2xl border border-stone-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
          <option value="all">সব রেটিং</option>
          <option value="4">৪⭐ এর উপরে</option>
          <option value="4.5">৪.৫⭐ এর উপরে</option>
        </select>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCompanies.map((company) => (
          <Link
            key={company.id}
            to={`/company/${company.id}`}
            className="group bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition duration-300 overflow-hidden"
          >

            {/* BOLD COLOR HEADER */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 flex justify-center py-10">
              {company.logo ? (
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-xl"
                 loading="lazy" decoding="async" />
              ) : (
                <div className="w-24 h-24 flex items-center justify-center bg-white text-emerald-600 text-4xl font-bold rounded-full border-4 border-white shadow-xl">
                  {company.name.charAt(0)}
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-stone-900">
                {company.name}
                {company.verified && (
                  <span className="ml-2 text-emerald-700 text-sm">
                    ✔
                  </span>
                )}
              </h3>

              <p className="text-stone-600 text-sm mt-1">
                📍 {company.location}
              </p>

              <div className="flex justify-between items-center mt-4">
                {company.rating && (
                  <span className="text-amber-500 font-medium">
                    ⭐ {company.rating}
                  </span>
                )}

                <span className="bg-emerald-50 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full">
                  📦 {getPackageCount(company.id)} প্যাকেজ
                </span>
              </div>

              <p className="text-stone-600 text-sm mt-4 leading-relaxed line-clamp-3">
                {company.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CompaniesPage;