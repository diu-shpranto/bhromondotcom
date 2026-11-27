import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import companiesData from "../../data/companiesData";
import packagesData from "../../data/packagesData";

const TrustStrip = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-2">
            যাদের সঙ্গে যাবেন
          </h2>
          <p className="text-stone-600 max-w-2xl text-sm md:text-base">
            যাচাই করা কোম্পানি — আসল তথ্য, সরাসরি যোগাযোগ।
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {companiesData.map((company, index) => {
            const packageCount = packagesData.filter(
              (pkg) => pkg.companyId === company.id
            ).length;
            return (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index, 3) * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group bg-sand rounded-3xl ring-1 ring-stone-100 p-5 md:p-6 hover:shadow-lg transition duration-300"
              >
                <Link to={`/company/${company.id}`} className="block">
                  <div className="flex items-center gap-3 mb-3">
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover bg-white ring-1 ring-stone-200 shadow-sm shrink-0"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-emerald-600 text-white text-xl font-bold rounded-full shrink-0">
                        {company.name.charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="font-semibold text-stone-900 text-sm md:text-base leading-snug">
                        {company.name}
                        {company.verified && (
                          <span className="text-emerald-600 ml-1.5 text-sm">
                            ✔
                          </span>
                        )}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-[13px] text-stone-600">
                    {company.rating && (
                      <span className="text-amber-500 font-semibold">
                        ⭐ {company.rating}
                      </span>
                    )}
                    <span className="bg-emerald-50 text-emerald-700 font-medium px-2.5 py-0.5 rounded-full">
                      📦 {packageCount} প্যাকেজ
                    </span>
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

export default TrustStrip;
