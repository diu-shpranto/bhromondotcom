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
    <div className="bg-stone-50 min-h-screen pb-32">

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">

          {/* Logo */}
          {company.logo ? (
            <img
              src={company.logo}
              alt={company.name}
              className="w-28 h-28 rounded-full object-cover shadow-md"
             loading="lazy" decoding="async" />
          ) : (
            <div className="w-28 h-28 flex items-center justify-center bg-emerald-600 text-white text-5xl font-bold rounded-full shadow-md">
              {company.name.charAt(0)}
            </div>
          )}

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">
              {company.name}
              {company.verified && (
                <span className="text-emerald-600 text-2xl ml-2 align-middle">✔</span>
              )}
            </h1>

            <p className="text-stone-600 mb-2">
              📍 {company.location}
            </p>

            {company.rating && (
              <p className="text-amber-500 font-semibold mb-4">
                ⭐ {company.rating} Rating
              </p>
            )}

            <p className="text-stone-600 max-w-2xl">
              {company.description}
            </p>

            {/* Booking Buttons */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">

              {company.contact?.whatsapp && (
                <a
                  href={company.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
                >
                  WhatsApp
                </a>
              )}

              {company.contact?.messenger && (
                <a
                  href={company.contact.messenger}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
                >
                  Messenger
                </a>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* ================= CONTACT ================= */}
      {(company.contact?.phone || company.phone || company.contact?.email || company.email || company.contact?.website || company.website || company.contact?.facebookPage || company.facebook) && (
        <div className="max-w-7xl mx-auto px-6 pt-10">
          <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-bold text-stone-900 mb-5">যোগাযোগ</h2>
            <div className="grid sm:grid-cols-2 gap-5 text-stone-600">
              {(company.contact?.phone || company.phone) && (
                <div>
                  <p className="text-sm font-semibold text-stone-900 mb-1">📞 ফোন</p>
                  <a href={`tel:${company.contact?.phone || company.phone}`} className="block text-emerald-700 hover:underline break-all">
                    {company.contact?.phone || company.phone}
                  </a>
                  {(company.contact?.phone2 || company.phone2) && (
                    <a href={`tel:${company.contact?.phone2 || company.phone2}`} className="block text-emerald-700 hover:underline break-all">
                      {company.contact?.phone2 || company.phone2}
                    </a>
                  )}
                </div>
              )}
              {(company.contact?.email || company.email) && (
                <div>
                  <p className="text-sm font-semibold text-stone-900 mb-1">📧 ইমেইল</p>
                  <a href={`mailto:${company.contact?.email || company.email}`} className="block text-emerald-700 hover:underline break-all">
                    {company.contact?.email || company.email}
                  </a>
                </div>
              )}
              {(company.contact?.website || company.website) && (
                <div>
                  <p className="text-sm font-semibold text-stone-900 mb-1">🌐 ওয়েবসাইট</p>
                  <a href={company.contact?.website || company.website} target="_blank" rel="noreferrer" className="block text-emerald-700 hover:underline break-all">
                    {(company.contact?.website || company.website).replace(/^https?:\/\//, "")}
                  </a>
                </div>
              )}
              {(company.contact?.facebookPage || company.facebook) && (
                <div>
                  <p className="text-sm font-semibold text-stone-900 mb-1">📘 Facebook পেজ</p>
                  <a href={company.contact?.facebookPage || company.facebook} target="_blank" rel="noreferrer" className="block text-emerald-700 hover:underline break-all">
                    Facebook-এ দেখুন
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= PACKAGE SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-20">

        <h2 className="text-3xl font-bold text-stone-900 mb-4 text-center">
          এই কোম্পানির সকল প্যাকেজ
        </h2>
        <div className="mx-auto mb-10 h-1 w-16 rounded-full bg-emerald-600" />

        {companyPackages.length === 0 ? (
          <p className="text-center text-stone-600">
            বর্তমানে কোনো প্যাকেজ পাওয়া যায়নি।
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {companyPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition"
              >
                <Link to={`/package/${pkg.id}`}>

                  {/* Image */}
                  {pkg.image ? (
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
                     loading="lazy" decoding="async" />
                  ) : (
                    <div className="h-56 w-full bg-gradient-to-r from-emerald-500 to-emerald-600" />
                  )}

                  {/* Content */}
                  <div className="p-6">

                    <h3 className="text-lg font-semibold text-stone-900 mb-2">
                      {pkg.title}
                    </h3>

                    <p className="text-stone-600 text-sm mb-2">
                      📍 {pkg.location}
                    </p>

                    <p className="text-stone-600 text-sm mb-4">
                      ⏳ {pkg.duration}
                    </p>

                    <p className="text-emerald-700 font-bold text-lg">
                      ৳{pkg.pricing?.perPerson}
                      {pkg.pricing?.couplePrice && (
                        <span className="text-sm text-stone-500 ml-2">
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