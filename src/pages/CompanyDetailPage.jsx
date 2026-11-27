import { useParams } from "react-router-dom";
import companiesData from "../data/companiesData";
import packagesData from "../data/packagesData";
import { Link } from "react-router-dom";

const CompanyDetailPage = () => {
  const { id } = useParams();

  const company = companiesData.find(
    (c) => c.id === parseInt(id)
  );

  const companyPackages = packagesData.filter(
    (pkg) => pkg.companyId === parseInt(id)
  );

  if (!company) {
    return (
      <div className="bg-stone-50 min-h-screen max-w-7xl mx-auto px-6 py-20 text-center text-2xl font-semibold text-stone-900">
        Company Not Found
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen">

      {/* COVER SECTION */}
      <div className="relative">
        {company.coverImage ? (
          <img
            src={company.coverImage}
            alt={company.name}
            className="w-full h-64 object-cover"
           loading="lazy" decoding="async" />
        ) : (
          <div className="w-full h-64 bg-gradient-to-r from-sky-500 to-sky-600" />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* COMPANY INFO */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center gap-6 mb-8">
          {company.logo ? (
            <img
              src={company.logo}
              alt={company.name}
              className="w-24 h-24 object-contain bg-white rounded-full ring-1 ring-stone-100 shadow-sm"
             loading="lazy" decoding="async" />
          ) : (
            <div className="w-24 h-24 flex items-center justify-center bg-sky-600 text-white text-4xl font-bold rounded-full ring-1 ring-stone-100 shadow-sm">
              {company.name.charAt(0)}
            </div>
          )}

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 flex items-center gap-2">
              {company.name}
              {company.verified && (
                <span className="text-sky-600 text-lg">✔</span>
              )}
            </h1>

            <p className="text-stone-600 mt-2">
              📍 {company.location}
            </p>

            {company.rating && (
              <p className="text-amber-500 mt-1">
                ⭐ {company.rating}
              </p>
            )}
          </div>
        </div>

        <p className="text-stone-600 mb-10 max-w-3xl">
          {company.description}
        </p>

        {/* CONTACT INFO */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 text-stone-600">
          {(company.phone || company.contact?.phone) && (
            <p className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm px-5 py-4">📞 {company.phone || company.contact.phone}</p>
          )}
          {(company.email || company.contact?.email) && (
            <p className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm px-5 py-4">📧 {company.email || company.contact.email}</p>
          )}
          {(company.website || company.contact?.website) && (
            <p className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm px-5 py-4">🌐 {company.website || company.contact.website}</p>
          )}
          {(company.facebook || company.contact?.facebookPage) && (
            <p className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm px-5 py-4">📘 {company.facebook || company.contact.facebookPage}</p>
          )}
        </div>

        {/* COMPANY PACKAGES */}
        <h2 className="text-2xl font-bold text-stone-900 mb-6">
          {company.name} এর প্যাকেজসমূহ
        </h2>

        <p className="text-stone-600 mb-8">
          {companyPackages.length} টি প্যাকেজ পাওয়া গেছে
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {companyPackages.map((pkg) => (
            <Link
              key={pkg.id}
              to={`/package/${pkg.id}`}
              className="group bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              {pkg.image ? (
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition"
                 loading="lazy" decoding="async" />
              ) : (
                <div className="w-full h-48 bg-gradient-to-r from-sky-500 to-sky-600" />
              )}

              <div className="p-6">
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  {pkg.title}
                </h3>

                <p className="text-stone-600 text-sm mb-2">
                  {pkg.duration}
                </p>

                <p className="text-sky-700 font-bold">
                  ৳{pkg.pricing?.perPerson}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CompanyDetailPage;