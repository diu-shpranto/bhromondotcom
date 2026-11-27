import { useParams, Link } from "react-router-dom";
import packagesData from "../data/packagesData";
import companiesData from "../data/companiesData";
import { motion } from "framer-motion";

const PackageDetailPage = () => {
  const { id } = useParams();

  const pkg = packagesData.find(
    (item) => item.id === parseInt(id)
  );

  if (!pkg) {
    return (
      <div className="bg-stone-50 min-h-screen py-40 text-center text-2xl font-semibold text-stone-900">
        Package Not Found
      </div>
    );
  }

  const company = companiesData.find(
    (c) => c.id === pkg.companyId
  );

  return (
    <div className="bg-stone-50 min-h-screen pb-32">

      {/* ================= HERO ================= */}
      <div
        className={`relative h-[450px] md:h-[550px] bg-cover bg-center ${pkg.image ? "" : "bg-gradient-to-r from-sky-500 to-sky-600"}`}
        style={pkg.image ? { backgroundImage: `url(${pkg.image})` } : undefined}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {pkg.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-stone-200 text-lg">
              <span>📍 {pkg.location}</span>
              <span>⏳ {pkg.duration}</span>
              {pkg.tourStart && (
                <span>🗓 {pkg.tourStart}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-16">

          {/* DESCRIPTION */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              প্যাকেজ বিবরণ
            </h2>
            <p className="text-stone-600 leading-relaxed whitespace-pre-line">
              {pkg.description}
            </p>
          </section>

          {/* INCLUDED / EXCLUDED */}
          <section className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-6 rounded-2xl ring-1 ring-stone-100 shadow-sm">
              <h3 className="text-lg font-semibold text-sky-700 mb-4">
                যা যা থাকছে
              </h3>
              <ul className="space-y-2">
                {pkg.included?.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-sky-500">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl ring-1 ring-stone-100 shadow-sm">
              <h3 className="text-lg font-semibold text-red-600 mb-4">
                যা যা থাকছে না
              </h3>
              <ul className="space-y-2">
                {pkg.excluded?.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-500">✖</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </section>

        {/* ================= PREMIUM TIMELINE ================= */}
{pkg.tourPlan && pkg.tourPlan.length > 0 && (
  <section>
    <h2 className="text-3xl font-bold text-stone-900 mb-12">
      ভ্রমণ পরিকল্পনা
    </h2>

    <div className="space-y-10">

      {pkg.tourPlan.map((day, index) => (
        <div
          key={index}
          className="relative bg-white p-8 rounded-2xl ring-1 ring-stone-100 shadow-sm"
        >
          {/* Step Indicator */}
          <div className="absolute -left-6 top-8">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-600 text-white font-bold shadow-md">
              {index + 1}
            </div>
          </div>

          <div className="pl-10">
            <h3 className="text-xl font-semibold text-sky-700 mb-3">
              {day.day}
            </h3>

            <p className="text-stone-600 leading-relaxed whitespace-pre-line">
              {day.details}
            </p>
          </div>
        </div>
      ))}

    </div>
  </section>
)}

          {/* PLACES */}
          {pkg.places && (
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-8">
                যেসব স্থান ঘুরবেন
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {pkg.places.map((place, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition overflow-hidden"
                  >
                    <img
                      src={place.image}
                      alt={place.name}
                      className="h-48 w-full object-cover group-hover:scale-105 transition"
                     loading="lazy" decoding="async" />

                    <div className="p-4">
                      <h4 className="font-semibold text-stone-900">
                        {place.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* RIGHT SIDE PRICE CARD */}
        <div className="lg:sticky lg:top-24 h-fit">

          <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-8 space-y-6">

            <div>
              <h3 className="text-lg text-stone-600">
                জনপ্রতি মূল্য
              </h3>
              <p className="text-3xl font-bold text-sky-700">
                ৳{pkg.pricing?.perPerson}
              </p>

              {pkg.pricing?.couplePrice && (
                <p className="text-stone-600 mt-2">
                  Couple: ৳{pkg.pricing.couplePrice}
                </p>
              )}
            </div>

            {/* COMPANY BOOKING */}
            {company && (
              <div className="border-t pt-6">

                <p className="font-semibold text-stone-900 mb-3">
                  এই প্যাকেজটি পরিচালনা করছে:
                </p>

                <Link
                  to={`/company/${company.id}`}
                  className="text-sky-600 font-bold hover:underline"
                >
                  {company.name}
                </Link>

                <div className="flex gap-3 mt-4">

                  {company.contact?.whatsapp && (
                    <a
                      href={company.contact.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center bg-sky-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-sky-700 transition"
                    >
                      WhatsApp
                    </a>
                  )}

                  {company.contact?.messenger && (
                    <a
                      href={company.contact.messenger}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center bg-sky-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-sky-700 transition"
                    >
                      Messenger
                    </a>
                  )}

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default PackageDetailPage;