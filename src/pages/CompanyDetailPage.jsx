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
      <div className="container-apple py-20 text-center text-2xl">
        Company Not Found
      </div>
    );
  }

  return (
    <div>

      {/* COVER SECTION */}
      <div className="relative">
        {company.coverImage ? (
          <img
            src={company.coverImage}
            alt={company.name}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="w-full h-64 bg-gradient-to-r from-indigo-500 to-purple-600" />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* COMPANY INFO */}
      <div className="container-apple py-12">

        <div className="flex items-center gap-6 mb-8">
          {company.logo ? (
            <img
              src={company.logo}
              alt={company.name}
              className="w-24 h-24 object-contain bg-white rounded-full shadow-lg border"
            />
          ) : (
            <div className="w-24 h-24 flex items-center justify-center bg-indigo-600 text-white text-4xl font-bold rounded-full shadow-lg border">
              {company.name.charAt(0)}
            </div>
          )}

          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              {company.name}
              {company.verified && (
                <span className="text-blue-600 text-lg">✔</span>
              )}
            </h1>

            <p className="text-gray-500 mt-2">
              📍 {company.location}
            </p>

            {company.rating && (
              <p className="text-yellow-500 mt-1">
                ⭐ {company.rating}
              </p>
            )}
          </div>
        </div>

        <p className="text-gray-700 mb-10 max-w-3xl">
          {company.description}
        </p>

        {/* CONTACT INFO */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 text-gray-600">
          {(company.phone || company.contact?.phone) && (
            <p>📞 {company.phone || company.contact.phone}</p>
          )}
          {(company.email || company.contact?.email) && (
            <p>📧 {company.email || company.contact.email}</p>
          )}
          {(company.website || company.contact?.website) && (
            <p>🌐 {company.website || company.contact.website}</p>
          )}
          {(company.facebook || company.contact?.facebookPage) && (
            <p>📘 {company.facebook || company.contact.facebookPage}</p>
          )}
        </div>

        {/* COMPANY PACKAGES */}
        <h2 className="text-2xl font-bold mb-6">
          {company.name} এর প্যাকেজসমূহ
        </h2>

        <p className="text-gray-500 mb-8">
          {companyPackages.length} টি প্যাকেজ পাওয়া গেছে
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {companyPackages.map((pkg) => (
            <Link
              key={pkg.id}
              to={`/package/${pkg.id}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {pkg.image ? (
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gradient-to-r from-teal-500 to-blue-600" />
              )}

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {pkg.title}
                </h3>

                <p className="text-gray-500 text-sm mb-2">
                  {pkg.duration}
                </p>

                <p className="text-blue-600 font-bold">
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