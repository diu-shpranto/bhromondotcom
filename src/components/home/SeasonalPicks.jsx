import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import packagesData from "../../data/packagesData";
import companiesData from "../../data/companiesData";

// December 2026 seasonal picks — package ids from the live data.
// 805: Saint Martin ৳6,999 (BTG) · 908: Cox's Bazar Budget ৳2,499
// (ভ্রমণ বাড়ি) · 919: Maldives + Sri Lanka, Dec ৳89,999, Jan dates ৳87,999
// (Dur Jatra) — shown as "৳87999 থেকে", the honest starting price.
const PICKS = [
  { id: 805, badge: "এখন সিজন" },
  { id: 908, badge: "এখন সিজন" },
  {
    id: 919,
    badge: "এখন সিজন",
    fromPrice: true,
    price: 87999,
    note: "জানুয়ারি যাত্রা",
  },
];

const SeasonalPicks = () => {
  const picks = PICKS.map((pick) => ({
    ...pick,
    pkg: packagesData.find((p) => p.id === pick.id),
  })).filter((p) => p.pkg);

  if (picks.length === 0) return null;

  return (
    <section className="py-14 md:py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900">
              এই মাসের সেরা
            </h2>
            <span className="bg-amber-400/20 text-amber-700 border border-amber-300/60 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
              ডিসেম্বর ২০২৬
            </span>
          </div>
          <p className="text-stone-600 max-w-2xl text-sm md:text-base">
            শীতের সিজনে এখন যাওয়া যাচ্ছে — আসল দাম আর আসল তারিখসহ।
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {picks.map(({ pkg, badge, fromPrice, price, note }, index) => {
            const company = companiesData.find(
              (c) => c.id === pkg.companyId
            );
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index, 2) * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl transition duration-500 overflow-hidden"
              >
                <Link to={`/package/${pkg.id}`} className="block">
                  <div className="relative h-52 overflow-hidden">
                    {pkg.image ? (
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-emerald-600" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-amber-400 text-stone-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                      {badge}
                    </span>
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2">
                      <h3 className="font-display text-xl font-bold text-white drop-shadow">
                        {pkg.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-sm text-stone-600">
                        ⏳ {pkg.duration}
                      </span>
                      <span className="text-lg font-bold text-emerald-700">
                        ৳{price ?? pkg.pricing?.perPerson}
                        {fromPrice && (
                          <span className="text-sm font-semibold"> থেকে</span>
                        )}
                      </span>
                    </div>

                    {note && (
                      <p className="text-[13px] text-stone-500 mb-3">{note}</p>
                    )}

                    <div className="flex items-center justify-between gap-2 pt-3 border-t border-stone-100">
                      <span className="flex items-center gap-2 text-sm text-stone-700 min-w-0">
                        {company?.logo && (
                          <img
                            src={company.logo}
                            alt={company.name}
                            className="w-6 h-6 rounded-full object-cover ring-1 ring-stone-200 shrink-0"
                            loading="lazy"
                            decoding="async"
                          />
                        )}
                        <span className="truncate">{company?.name}</span>
                      </span>
                      <span className="text-sm font-semibold text-emerald-700 whitespace-nowrap">
                        বিস্তারিত →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SeasonalPicks;
