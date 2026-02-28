import { useParams, Link } from "react-router-dom";
import packagesData from "../data/packagesData";
import companiesData from "../data/companiesData";
import { motion } from "framer-motion";

const CompanyProfilePage = () => {
  const { id } = useParams();

  const company = companiesData.find(
    (c) => c.id === parseInt(id)
  );

  if (!company) {
    return (
      <div className="py-32 text-center text-2xl font-semibold">
        Company Not Found
      </div>
    );
  }

  // ✅ Correct Marketplace Filtering
  const companyPackages = packagesData.filter(
    (pkg) => pkg.companyId === company.id
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pb-32">

      {/* ================= HEADER ================= */}
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-8">

          {/* Logo */}
          <img
            src={company.logo}
            alt={company.name}
            className="w-28 h-28 rounded-full object-cover shadow-md"
          />

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {company.name}
            </h1>

            <p className="text-gray-600 mb-2">
              📍 {company.location}
            </p>

            <p className="text-yellow-500 font-semibold mb-4">
              ⭐ {company.rating} Rating
            </p>

            <p className="text-gray-700 max-w-2xl">
              {company.description}
            </p>

            {/* Booking Buttons */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">

              {company.contact?.whatsapp && (
                <a
                  href={company.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                >
                  WhatsApp
                </a>
              )}

              {company.contact?.messenger && (
                <a
                  href={company.contact.messenger}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Messenger
                </a>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* ================= PACKAGE SECTION ================= */}
      <div className="max-w-6xl mx-auto px-6 pt-20">

        <h2 className="text-3xl font-bold mb-10 text-center">
          এই কোম্পানির সকল প্যাকেজ
        </h2>

        {companyPackages.length === 0 ? (
          <p className="text-center text-gray-500">
            বর্তমানে কোনো প্যাকেজ পাওয়া যায়নি।
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {companyPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <Link to={`/package/${pkg.id}`}>

                  {/* Image */}
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-56 w-full object-cover"
                  />

                  {/* Content */}
                  <div className="p-6">

                    <h3 className="text-lg font-semibold mb-2">
                      {pkg.title}
                    </h3>

                    <p className="text-gray-500 text-sm mb-2">
                      📍 {pkg.location}
                    </p>

                    <p className="text-gray-500 text-sm mb-4">
                      ⏳ {pkg.duration}
                    </p>

                    <p className="text-blue-600 font-bold text-lg">
                      ৳{pkg.pricing?.perPerson}
                      {pkg.pricing?.couplePrice && (
                        <span className="text-sm text-gray-500 ml-2">
                          Couple: ৳{pkg.pricing.couplePrice}
                        </span>
                      )}
                    </p>

                  </div>
                </Link>
              </motion.div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default CompanyProfilePage;