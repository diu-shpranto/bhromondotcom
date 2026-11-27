import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import destinationsData from "../../data/destinationsData";

// Sajek closure notice — text comes from the Sajek destination's own
// description in destinationsData (verified 27 Nov 2026).
const SajekNotice = () => {
  const sajek = destinationsData.find((d) => d.slug === "sajek");
  if (!sajek) return null;

  const warning =
    sajek.description.split("সতর্কতা: ")[1] || sajek.description;

  return (
    <section className="py-6 md:py-8 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-amber-50 border border-amber-200 rounded-3xl px-5 py-5 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center gap-4"
        >
          <div className="flex-1">
            <h3 className="font-display text-lg md:text-xl font-bold text-amber-900 mb-1">
              ⚠ সাজেক এখন বন্ধ আছে
            </h3>
            <p className="text-amber-800/90 text-sm md:text-[15px] leading-relaxed">
              {warning}
            </p>
          </div>
          <Link
            to="/destination/sajek"
            className="shrink-0 text-sm font-semibold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-full px-4 py-2.5 text-center transition-colors"
          >
            সাজেক পেজ দেখুন →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SajekNotice;
