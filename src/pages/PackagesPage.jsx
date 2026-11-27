import { useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import packagesData from "../data/packagesData";

const categoriesList = [
  "All",
  "Single",
  "Family",
  "Couple",
  "Group",
  "Adventure"
];

// Price bands in BDT — counts from the 20 live packages:
// under 2000: 6, 2000–5000: 9, 5000–10000: 4, 10000+: 1
const priceRanges = [
  { id: "all", label: "সব দাম", test: () => true },
  { id: "under2000", label: "৳২,০০০-এর নিচে", test: (p) => p < 2000 },
  { id: "2000-5000", label: "৳২,০০০–৫,০০০", test: (p) => p >= 2000 && p < 5000 },
  { id: "5000-10000", label: "৳৫,০০০–১০,০০০", test: (p) => p >= 5000 && p < 10000 },
  { id: "over10000", label: "৳১০,০০০+", test: (p) => p >= 10000 },
];

const PackagesPage = () => {
  const [searchParams] = useSearchParams();
  const categoryFromNav = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(categoryFromNav || "All");
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("default");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setCategory(categoryFromNav || "All");
  }, [categoryFromNav]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let filteredPackages = packagesData.filter((pkg) => {
    const matchCategory =
      category === "All"
        ? true
        : pkg.categories?.some(
            (cat) =>
              cat.toLowerCase() === category.toLowerCase()
          );

    const price = pkg.pricing?.perPerson;
    const matchPrice =
      priceRange === "all"
        ? true
        : price != null &&
          priceRanges.find((r) => r.id === priceRange).test(price);

    const matchSearch = pkg.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchPrice && matchSearch;
  });

  if (sort === "low") {
    filteredPackages.sort(
      (a, b) => (a.pricing?.perPerson ?? Infinity) - (b.pricing?.perPerson ?? Infinity)
    );
  }

  if (sort === "high") {
    filteredPackages.sort(
      (a, b) => (b.pricing?.perPerson ?? -Infinity) - (a.pricing?.perPerson ?? -Infinity)
    );
  }

  return (
    <div className="bg-stone-50">
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">
          সব প্যাকেজ
        </h1>
        <div className="h-1 w-16 rounded-full bg-emerald-600 mb-4" />
        <p className="text-stone-600">
          {filteredPackages.length} টি প্যাকেজ পাওয়া গেছে
        </p>
      </div>

      {/* PREMIUM STICKY FILTER */}
     <div
  className={`sticky top-20 z-40 rounded-2xl p-5 mb-14 transition-all duration-500
  ${
    scrolled
      ? "bg-white/95 backdrop-blur-xl shadow-xl ring-1 ring-stone-100"
      : "bg-white ring-1 ring-stone-100 shadow-sm"
  }`}
>
  <div className="flex flex-col gap-6">

    {/* Search + Sort — side by side on desktop, stacked on mobile */}
    <div className="flex flex-col md:flex-row gap-3">
      <input
        type="text"
        placeholder="প্যাকেজ খুঁজুন..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 rounded-2xl border border-stone-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
      />
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        aria-label="দাম অনুযায়ী সাজান"
        className="md:w-60 shrink-0 rounded-2xl border border-stone-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
      >
        <option value="default">সাজান: ডিফল্ট</option>
        <option value="low">দাম: কম থেকে বেশি</option>
        <option value="high">দাম: বেশি থেকে কম</option>
      </select>
    </div>

    {/* Category Pills */}
    <div className="flex flex-wrap gap-2.5">

      {categoriesList.map((cat) => {
        const isActive = category === cat;

        return (
          <motion.button
            key={cat}
            onClick={() => setCategory(cat)}
            whileTap={{ scale: 0.95 }}
            className="relative px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 bg-stone-100"
          >
            {isActive && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-emerald-600 rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
              />
            )}

            <span
              className={`relative z-10 ${
                isActive ? "text-white" : "text-stone-700"
              }`}
            >
              {cat}
            </span>
          </motion.button>
        );
      })}
    </div>

    {/* Price Range Chips */}
    <div className="flex flex-wrap gap-2.5">
      {priceRanges.map((range) => {
        const isActive = priceRange === range.id;
        return (
          <button
            key={range.id}
            onClick={() => setPriceRange(range.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              isActive
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-stone-100 text-stone-700 hover:bg-emerald-50 hover:text-emerald-700"
            }`}
          >
            {range.label}
          </button>
        );
      })}
    </div>

  </div>
</div>

      {/* Empty state */}
      {filteredPackages.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm">
          <p className="text-lg font-semibold text-stone-800 mb-1">কোনো প্যাকেজ পাওয়া যায়নি</p>
          <p className="text-stone-500 text-sm">খোঁজ বা ফিল্টার বদলে আবার চেষ্টা করুন</p>
        </div>
      )}

      {/* PREMIUM CARD GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredPackages.map((pkg) => (
          <motion.div
  key={pkg.id}
  whileHover={{ y: -8 }}
  transition={{ duration: 0.3 }}
  className="group"
>
  <Link
    to={`/package/${pkg.id}`}
    className="block bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl transition overflow-hidden"
  >
    <div className="relative overflow-hidden">

      {/* Image */}
      {pkg.image ? (
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-64 object-cover transition duration-700 group-hover:scale-105"
         loading="lazy" decoding="async" />
      ) : (
        <div className="w-full h-64 bg-gradient-to-r from-emerald-500 to-emerald-600" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Title Over Image */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold drop-shadow">
          {pkg.title}
        </h3>
        <p className="text-sm opacity-90">
          ⏳ {pkg.duration}
        </p>
      </div>

      {/* Price Badge */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold text-emerald-700 shadow">
        ৳{pkg.pricing?.perPerson}
      </div>

    </div>
  </Link>
</motion.div>
        ))}

      </div>
    </div>
    </div>
  );
};

export default PackagesPage;