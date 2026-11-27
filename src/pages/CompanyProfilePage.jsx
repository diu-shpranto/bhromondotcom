import { useParams, Link } from "react-router-dom";
import packagesData from "../data/packagesData";
import companiesData from "../data/companiesData";
import destinationsData from "../data/destinationsData";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import SavedHeart from "../components/packages/SavedHeart";

const CompanyProfilePage = () => {
  const { id } = useParams();

  const company = companiesData.find(
    (c) => c.id === parseInt(id)
  );

  if (!company) {
    return (
      <div className="bg-sand min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-stone-900 mb-2">
            কোম্পানি পাওয়া যায়নি
          </h1>
          <p className="text-stone-600 mb-6">
            এই ঠিকানায় কোনো কোম্পানির প্রোফাইল নেই।
          </p>
          <Link
            to="/companies"
            className="inline-block px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
          >
            সব কোম্পানি দেখুন
          </Link>
        </div>
      </div>
    );
  }

  // ✅ Correct Marketplace Filtering
  const companyPackages = packagesData.filter(
    (pkg) => pkg.companyId === company.id
  );

  const website = company.contact?.website || company.website;

  return (
    <div className="bg-sand min-h-screen pb-32">

      {/* ================= FOREST HERO BAND ================= */}
      <div className="bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12 md:pt-28 md:pb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">

            {/* Logo */}
            {company.logo ? (
              <img
                src={company.logo}
                alt={company.name}
                className="w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-full object-cover border-4 border-white/25 shadow-xl"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 flex items-center justify-center bg-white text-emerald-700 font-display text-5xl font-bold rounded-full border-4 border-white/25 shadow-xl">
                {company.name.charAt(0)}
              </div>
            )}

            {/* Info */}
            <div className="flex-1 text-center md:text-left min-w-0">
              <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
                {company.name}
              </h1>

              {company.verified && (
                <span className="inline-flex items-center gap-1 mt-4 bg-emerald-500/20 text-emerald-100 text-xs font-semibold px-3 py-1.5 rounded-full ring-1 ring-emerald-300/30">
                  ✔ যাচাইকৃত কোম্পানি
                </span>
              )}

              <p className="flex items-start md:items-center justify-center md:justify-start gap-1.5 text-emerald-50/80 mt-4">
                <MapPinIcon className="w-4 h-4 mt-0.5 md:mt-0 shrink-0 text-emerald-300" />
                <span>{company.location}</span>
              </p>

              {company.rating && (
                <p className="flex items-center justify-center md:justify-start gap-1.5 text-amber-300 font-semibold mt-2">
                  <StarIcon className="w-5 h-5 text-amber-400" />
                  {company.rating} রেটিং
                </p>
              )}

              {/* Booking Buttons */}
              <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                {company.contact?.whatsapp && (
                  <a
                    href={company.contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition"
                  >
                    WhatsApp
                  </a>
                )}

                {company.contact?.messenger && (
                  <a
                    href={company.contact.messenger}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/25 hover:bg-white/20 transition"
                  >
                    Messenger
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= TRUST STRIP ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm px-4 py-5 text-center">
            <p className="h-8 flex items-center justify-center font-display text-2xl font-bold text-emerald-700">{companyPackages.length}</p>
            <p className="text-xs text-stone-500 mt-1">টি প্যাকেজ</p>
          </div>
          <div className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm px-4 py-5 text-center">
            <p className="h-8 flex items-center justify-center font-display text-2xl font-bold text-emerald-700">{company.destinations?.length ?? 0}</p>
            <p className="text-xs text-stone-500 mt-1">টি গন্তব্য</p>
          </div>
          {company.verified ? (
            <div className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm px-4 py-5 text-center">
              <p className="h-8 flex items-center justify-center">
                <ShieldCheckIcon className="w-7 h-7 text-emerald-600" />
              </p>
              <p className="text-xs text-stone-500 mt-1">যাচাইকৃত কোম্পানি</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm px-4 py-5 text-center">
              <p className="h-8 flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-7 h-7 text-emerald-600" />
              </p>
              <p className="text-xs text-stone-500 mt-1">Facebook পেজ আছে</p>
            </div>
          )}
          {website ? (
            <div className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm px-4 py-5 text-center">
              <p className="h-8 flex items-center justify-center">
                <GlobeAltIcon className="w-7 h-7 text-emerald-600" />
              </p>
              <p className="text-xs text-stone-500 mt-1 truncate">
                {website.replace(/^https?:\/\//, "")}
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm px-4 py-5 text-center">
              <p className="h-8 flex items-center justify-center">
                <PhoneIcon className="w-7 h-7 text-emerald-600" />
              </p>
              <p className="text-xs text-stone-500 mt-1">ফোনে বুকিং</p>
            </div>
          )}
        </div>
      </div>

      {/* ================= ABOUT + DESTINATIONS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-stone-900">
            কোম্পানি সম্পর্কে
          </h2>
          <div className="h-1 w-12 rounded-full bg-amber-500 mt-3 mb-5" />
          <p className="text-stone-600 leading-relaxed max-w-3xl">
            {company.description}
          </p>

          {company.destinations?.length > 0 && (
            <div className="mt-7">
              <h3 className="text-sm font-semibold text-stone-900 mb-3">
                যেসব গন্তব্যে ট্যুর করে
              </h3>
              <div className="flex flex-wrap gap-2">
                {company.destinations.map((slug) => {
                  const dest = destinationsData.find((d) => d.slug === slug);
                  return dest ? (
                    <Link
                      key={slug}
                      to={`/destination/${slug}`}
                      className="bg-emerald-50 text-emerald-700 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-emerald-100 transition"
                    >
                      {dest.name}
                    </Link>
                  ) : null;
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= CONTACT ================= */}
      {(company.contact?.phone || company.phone || company.contact?.email || company.email || website || company.contact?.facebookPage || company.facebook) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
          <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-stone-900">
              যোগাযোগ
            </h2>
            <div className="h-1 w-12 rounded-full bg-amber-500 mt-3 mb-6" />
            <div className="grid sm:grid-cols-2 gap-4">
              {(company.contact?.phone || company.phone) && (
                <div className="bg-sand rounded-2xl p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-stone-900 mb-2">
                    <PhoneIcon className="w-4 h-4 text-emerald-600" />
                    ফোন
                  </p>
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
                <div className="bg-sand rounded-2xl p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-stone-900 mb-2">
                    <EnvelopeIcon className="w-4 h-4 text-emerald-600" />
                    ইমেইল
                  </p>
                  <a href={`mailto:${company.contact?.email || company.email}`} className="block text-emerald-700 hover:underline break-all">
                    {company.contact?.email || company.email}
                  </a>
                </div>
              )}
              {website && (
                <div className="bg-sand rounded-2xl p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-stone-900 mb-2">
                    <GlobeAltIcon className="w-4 h-4 text-emerald-600" />
                    ওয়েবসাইট
                  </p>
                  <a href={website} target="_blank" rel="noreferrer" className="block text-emerald-700 hover:underline break-all">
                    {website.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              )}
              {(company.contact?.facebookPage || company.facebook) && (
                <div className="bg-sand rounded-2xl p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-stone-900 mb-2">
                    <ChatBubbleLeftRightIcon className="w-4 h-4 text-emerald-600" />
                    Facebook পেজ
                  </p>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 md:pt-20">

        <h2 className="font-display text-3xl font-bold text-stone-900 mb-4 text-center">
          এই কোম্পানির সকল প্যাকেজ
        </h2>
        <div className="mx-auto mb-10 h-1 w-16 rounded-full bg-amber-500" />

        {companyPackages.length === 0 ? (
          <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-10 md:p-14 text-center">
            <p className="font-display text-2xl font-bold text-stone-900 mb-6">
              বর্তমানে কোনো প্যাকেজ পাওয়া যায়নি।
            </p>
            <Link
              to="/packages"
              className="inline-block px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
            >
              সব প্যাকেজ দেখুন
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {companyPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition"
              >
                <SavedHeart pkgId={pkg.id} className="absolute top-3 left-3 z-10" />
                <Link to={`/package/${pkg.id}`}>

                  {/* Image */}
                  {pkg.image ? (
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="h-56 w-full bg-gradient-to-r from-emerald-500 to-emerald-600" />
                  )}

                  {/* Content */}
                  <div className="p-6">

                    <h3 className="text-lg font-semibold text-stone-900 mb-2">
                      {pkg.title}
                    </h3>

                    <p className="flex items-center gap-1.5 text-stone-600 text-sm mb-2">
                      <MapPinIcon className="w-4 h-4 shrink-0 text-emerald-600" />
                      {pkg.location}
                    </p>

                    <p className="flex items-center gap-1.5 text-stone-600 text-sm mb-4">
                      <ClockIcon className="w-4 h-4 shrink-0 text-emerald-600" />
                      {pkg.duration}
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
