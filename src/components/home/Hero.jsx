import React, { useState } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import packagesData from "../../data/packagesData";
import destinationsData from "../../data/destinationsData";
import companiesData from "../../data/companiesData";
import { MONTH_OPTIONS } from "../../utils/season";

const PRICE_OPTIONS = [
  { id: "all", label: "যেকোনো বাজেট" },
  { id: "under2000", label: "৳২,০০০-এর নিচে" },
  { id: "2000-5000", label: "৳২,০০০ – ৫,০০০" },
  { id: "5000-10000", label: "৳৫,০০০ – ১০,০০০" },
  { id: "over10000", label: "৳১০,০০০+" },
];

// One-tap shortcuts — each maps to a real /packages filter.
const QUICK_CHIPS = [
  { label: "সেন্টমার্টিন", to: "/packages?destination=saintmartin" },
  { label: "কক্সবাজার", to: "/packages?destination=coxsbazar" },
  { label: "৳২,০০০-এর নিচে", to: "/packages?price=under2000" },
  { label: "কাপল ট্যুর", to: "/packages?category=Couple" },
  { label: "ফ্যামিলি ট্যুর", to: "/packages?category=Family" },
];

const Hero = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("all");
  const [month, setMonth] = useState("all");
  const [budget, setBudget] = useState("all");

  const handleFinder = () => {
    const params = new URLSearchParams();
    if (destination !== "all") params.set("destination", destination);
    if (month !== "all") params.set("month", month);
    if (budget !== "all") params.set("price", budget);
    const qs = params.toString();
    navigate(qs ? `/packages?${qs}` : "/packages");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const homeDestinations = destinationsData.filter(
    (d) => d.slug !== "maldives"
  );

  const selectClass =
    "w-full rounded-xl border border-stone-200 bg-white px-3 py-3 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background — Sajek clouds */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/destinations/sajek/cover.jpg')" }}
      />

      {/* Overlay — deep forest green */}
      <div className="absolute inset-0 bg-forest/75" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-forest/80 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-14 md:pt-28 md:pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-left"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="inline-block text-xs md:text-sm font-semibold tracking-wide text-amber-300 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5"
            >
              বাংলাদেশের সেরা ট্যুর তথ্য
            </motion.p>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 md:mb-8"
            >
              এবার কোথায়
              <span className="block text-amber-300">যাবেন?</span>
            </motion.h1>

            {/* Trip Finder */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-2xl p-4 md:p-5 max-w-3xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1">
                    গন্তব্য
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    aria-label="গন্তব্য বেছে নিন"
                    className={selectClass}
                  >
                    <option value="all">যেকোনো জায়গা</option>
                    {homeDestinations.map((d) => (
                      <option key={d.slug} value={d.slug}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1">
                    কখন যাবেন
                  </label>
                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    aria-label="মাস বেছে নিন"
                    className={selectClass}
                  >
                    <option value="all">যেকোনো সময়</option>
                    {MONTH_OPTIONS.map((m) => (
                      <option key={m.value} value={m.value}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1">
                    বাজেট
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    aria-label="বাজেট বেছে নিন"
                    className={selectClass}
                  >
                    {PRICE_OPTIONS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={handleFinder}
                    className="w-full lg:w-auto px-6 py-3 bg-[#008F5A] rounded-xl font-semibold text-white hover:bg-forest transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <MagnifyingGlassIcon className="w-5 h-5" />
                    <span>ট্যুর খুঁজুন</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Quick chips */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 mt-4"
            >
              {QUICK_CHIPS.map((chip) => (
                <Link
                  key={chip.label}
                  to={chip.to}
                  className="text-[13px] font-medium text-white bg-white/15 border border-white/25 backdrop-blur rounded-full px-3.5 py-1.5 hover:bg-white/25 transition-colors duration-200"
                >
                  {chip.label}
                </Link>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-5">
              <Link
                to="/packages"
                className="text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors"
              >
                সব প্যাকেজ দেখুন →
              </Link>
            </motion.div>

            {/* Stats — live counts from data */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {packagesData.length.toLocaleString("bn-BD")}+
                </h3>
                <p className="text-stone-300 text-sm">ট্যুর প্যাকেজ</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {companiesData.length.toLocaleString("bn-BD")}টি
                </h3>
                <p className="text-stone-300 text-sm">যাচাই করা কোম্পানি</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {destinationsData.length.toLocaleString("bn-BD")}টি
                </h3>
                <p className="text-stone-300 text-sm">গন্তব্য</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">৮টি</h3>
                <p className="text-stone-300 text-sm">বিভাগের গাইড</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
