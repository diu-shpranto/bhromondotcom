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
    <div className="container-apple py-20">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-12">
        <div>
          <h2 className="text-3xl font-bold">
            ট্যুর কোম্পানি সমূহ
          </h2>
          <p className="text-stone-500">
            {filteredCompanies.length} টি কোম্পানি পাওয়া গেছে
          </p>
        </div>

        <input
          type="text"
          placeholder="কোম্পানি খুঁজুন..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
        />

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="border px-4 py-2 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
        >
          <option value="all">সব রেটিং</option>
          <option value="4">৪⭐ এর উপরে</option>
          <option value="4.5">৪.৫⭐ এর উপরে</option>
        </select>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredCompanies.map((company) => (
          <Link
            key={company.id}
            to={`/company/${company.id}`}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >

            {/* BOLD COLOR HEADER */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 flex justify-center py-10">
              {company.logo ? (
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-xl"
                />
              ) : (
                <div className="w-24 h-24 flex items-center justify-center bg-white text-emerald-600 text-4xl font-bold rounded-full border-4 border-white shadow-xl">
                  {company.name.charAt(0)}
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {company.name}
                {company.verified && (
                  <span className="ml-2 text-emerald-600 text-sm">
                    ✔
                  </span>
                )}
              </h3>

              <p className="text-stone-500 text-sm mt-1">
                📍 {company.location}
              </p>

              <div className="flex justify-between items-center mt-4">
                {company.rating && (
                  <span className="text-amber-500 font-medium">
                    ⭐ {company.rating}
                  </span>
                )}

                <span className="text-emerald-600 text-sm font-medium">
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
  );
};

export default CompaniesPage;