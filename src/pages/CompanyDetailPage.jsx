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
        <img
          src={company.coverImage}
          alt={company.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* COMPANY INFO */}
      <div className="container-apple py-12">

        <div className="flex items-center gap-6 mb-8">
          <img
            src={company.logo}
            alt={company.name}
            className="w-24 h-24 object-contain bg-white rounded-full shadow-lg border"
          />

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

            <p className="text-yellow-500 mt-1">
              ⭐ {company.rating}
            </p>
          </div>
        </div>

        <p className="text-gray-700 mb-10 max-w-3xl">
          {company.description}
        </p>

        {/* CONTACT INFO */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 text-gray-600">
          <p>📞 {company.phone}</p>
          <p>📧 {company.email}</p>
          <p>🌐 {company.website}</p>
          <p>📘 {company.facebook}</p>
           <p>📘 {company.facebook}</p>
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
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {pkg.title}
                </h3>

                <p className="text-gray-500 text-sm mb-2">
                  {pkg.duration}
                </p>

                <p className="text-blue-600 font-bold">
                  ৳{pkg.price}
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