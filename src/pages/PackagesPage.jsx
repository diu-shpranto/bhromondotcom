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

const PackagesPage = () => {
  const [searchParams] = useSearchParams();
  const categoryFromNav = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(categoryFromNav || "All");
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

    const matchSearch = pkg.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  if (sort === "low") {
    filteredPackages.sort(
      (a, b) => a.pricing.perPerson - b.pricing.perPerson
    );
  }

  if (sort === "high") {
    filteredPackages.sort(
      (a, b) => b.pricing.perPerson - a.pricing.perPerson
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">
          সব প্যাকেজ
        </h1>
        <p className="text-gray-500">
          {filteredPackages.length} টি প্যাকেজ পাওয়া গেছে
        </p>
      </div>

      {/* PREMIUM STICKY FILTER */}
     <div
  className={`sticky top-20 z-40 rounded-2xl p-5 mb-14 transition-all duration-500
  ${
    scrolled
      ? "bg-white/95 backdrop-blur-xl shadow-xl border border-gray-100"
      : "bg-white shadow-md"
  }`}
>
  <div className="flex flex-col gap-6">

    {/* Search */}
    <input
      type="text"
      placeholder="প্যাকেজ খুঁজুন..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-500"
    />

    {/* Category Pills */}
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

      {categoriesList.map((cat) => {
        const isActive = category === cat;

        return (
          <motion.button
            key={cat}
            onClick={() => setCategory(cat)}
            whileTap={{ scale: 0.95 }}
            className="relative px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0"
          >
            {isActive && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
              />
            )}

            <span
              className={`relative z-10 ${
                isActive ? "text-white" : "text-gray-700"
              }`}
            >
              {cat}
            </span>
          </motion.button>
        );
      })}
    </div>

    {/* Sort */}
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="w-full border border-gray-300 rounded-xl px-4 py-3"
    >
      <option value="default">Sort</option>
      <option value="low">Price Low → High</option>
      <option value="high">Price High → Low</option>
    </select>

  </div>
</div>

      {/* PREMIUM CARD GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {filteredPackages.map((pkg) => (
          <motion.div
  key={pkg.id}
  whileHover={{ y: -8 }}
  transition={{ duration: 0.3 }}
  className="group"
>
  <Link
    to={`/package/${pkg.id}`}
    className="block bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden"
  >
    <div className="relative overflow-hidden">

      {/* Image */}
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
      />

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
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-sm font-semibold shadow">
        ৳{pkg.pricing?.perPerson}
      </div>

    </div>
  </Link>
</motion.div>
        ))}

      </div>
    </div>
  );
};

export default PackagesPage;