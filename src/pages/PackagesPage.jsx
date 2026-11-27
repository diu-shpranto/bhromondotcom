import { useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/solid";
import packagesData from "../data/packagesData";
import destinationsData from "../data/destinationsData";
import { isInSeason, monthLabel } from "../utils/season";
import { useSaved } from "../utils/saved";
import SavedHeart from "../components/packages/SavedHeart";
import CompareTray from "../components/packages/CompareTray";
import CompareDialog from "../components/packages/CompareDialog";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromNav = searchParams.get("category");
  const destinationFromNav = searchParams.get("destination");
  const priceFromNav = searchParams.get("price");
  const monthFromNav = searchParams.get("month");

  // Validate deep-link params so a bad URL never yields a dead page.
  const validDestination =
    destinationFromNav &&
    destinationsData.some((d) => d.slug === destinationFromNav)
      ? destinationFromNav
      : "all";
  const validMonth =
    monthFromNav && /^(1[0-2]|[1-9])$/.test(monthFromNav)
      ? monthFromNav
      : "all";
  const validPrice = priceRanges.some((r) => r.id === priceFromNav)
    ? priceFromNav
    : "all";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(categoryFromNav || "All");
  const [destination, setDestination] = useState(validDestination);
  const [month, setMonth] = useState(validMonth);
  const [priceRange, setPriceRange] = useState(validPrice);
  const [sort, setSort] = useState("default");
  const [scrolled, setScrolled] = useState(false);

  // "পরে দেখব" (localStorage) + তুলনা (সর্বোচ্চ ৩টি)
  const { savedIds, savedCount } = useSaved();
  const [savedOnly, setSavedOnly] = useState(false);
  const [compareIds, setCompareIds] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [compareNotice, setCompareNotice] = useState("");

  const toggleCompare = (id) => {
    setCompareNotice("");
    if (compareIds.includes(id)) {
      setCompareIds(compareIds.filter((x) => x !== id));
    } else if (compareIds.length >= 3) {
      setCompareNotice("সর্বোচ্চ ৩টি প্যাকেজ একসঙ্গে তুলনা করা যায়");
    } else {
      setCompareIds([...compareIds, id]);
    }
  };

  const comparePackages = compareIds
    .map((id) => packagesData.find((p) => p.id === id))
    .filter(Boolean);

  useEffect(() => {
    setCategory(categoryFromNav || "All");
    setDestination(validDestination);
    setMonth(validMonth);
    setPriceRange(validPrice);
  }, [categoryFromNav, destinationFromNav, priceFromNav, monthFromNav]);

  const clearParam = (key) => {
    const next = new URLSearchParams(searchParams);
    next.delete(key);
    setSearchParams(next, { replace: true });
  };

  const activeDestination =
    destination !== "all"
      ? destinationsData.find((d) => d.slug === destination)
      : null;

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

    const matchDestination =
      destination === "all" ? true : pkg.destinationSlug === destination;

    const matchMonth =
      month === "all"
        ? true
        : isInSeason(
            destinationsData.find((d) => d.slug === pkg.destinationSlug)
              ?.bestTime,
            month
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

    const matchSaved = !savedOnly || savedIds.includes(pkg.id);

    return matchCategory && matchDestination && matchMonth && matchPrice && matchSearch && matchSaved;
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
    <div className="bg-sand">
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="mb-10">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-2">
          সব প্যাকেজ
        </h1>
        <div className="h-1 w-16 rounded-full bg-emerald-600 mb-4" />
        <p className="text-stone-600">
          {filteredPackages.length} টি প্যাকেজ পাওয়া গেছে
        </p>
      </div>

      {/* Active deep-link filters (from home trip finder / quick chips) */}
      {(activeDestination || month !== "all") && (
        <div className="flex flex-wrap gap-2 mb-6">
          {activeDestination && (
            <span className="inline-flex items-center gap-2 bg-emerald-600 text-white text-sm font-medium pl-4 pr-2 py-1.5 rounded-full">
              গন্তব্য: {activeDestination.name}
              <button
                onClick={() => clearParam("destination")}
                aria-label="গন্তব্য ফিল্টার সরান"
                className="w-5 h-5 flex items-center justify-center rounded-full bg-white/25 hover:bg-white/40 text-xs leading-none"
              >
                ✕
              </button>
            </span>
          )}
          {month !== "all" && (
            <span className="inline-flex items-center gap-2 bg-emerald-600 text-white text-sm font-medium pl-4 pr-2 py-1.5 rounded-full">
              মাস: {monthLabel(month)}
              <button
                onClick={() => clearParam("month")}
                aria-label="মাস ফিল্টার সরান"
                className="w-5 h-5 flex items-center justify-center rounded-full bg-white/25 hover:bg-white/40 text-xs leading-none"
              >
                ✕
              </button>
            </span>
          )}
        </div>
      )}

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

    {/* Saved only — "পরে দেখব" তালিকা */}
    <div className="flex flex-wrap gap-2.5">
      <button
        onClick={() => setSavedOnly(!savedOnly)}
        aria-pressed={savedOnly}
        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
          savedOnly
            ? "bg-rose-600 text-white shadow-sm"
            : "bg-rose-50 text-rose-700 hover:bg-rose-100"
        }`}
      >
        <HeartIcon className="w-4 h-4" />
        পরে দেখব
        <span
          className={`min-w-5 h-5 px-1 flex items-center justify-center rounded-full text-xs font-bold ${
            savedOnly ? "bg-white text-rose-600" : "bg-rose-600 text-white"
          }`}
        >
          {savedCount}
        </span>
      </button>
      {savedOnly && savedCount > 0 && (
        <span className="self-center text-xs text-stone-500">
          সেভ করা {savedCount}টি প্যাকেজ দেখানো হচ্ছে
        </span>
      )}
    </div>

  </div>
</div>

      {/* Empty state — saved view */}
      {savedOnly && savedCount === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm">
          <p className="text-lg font-semibold text-stone-800 mb-1">এখনো কিছু সেভ করেননি</p>
          <p className="text-stone-500 text-sm mb-5">প্যাকেজ কার্ডের হার্ট চাপলে সেটা এখানে জমা হবে</p>
          <button
            onClick={() => setSavedOnly(false)}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
          >
            সব প্যাকেজ দেখুন
          </button>
        </div>
      )}

      {/* Empty state */}
      {filteredPackages.length === 0 && !(savedOnly && savedCount === 0) && (
        <div className="text-center py-16 bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm">
          <p className="text-lg font-semibold text-stone-800 mb-1">কোনো প্যাকেজ পাওয়া যায়নি</p>
          <p className="text-stone-500 text-sm">খোঁজ বা ফিল্টার বদলে আবার চেষ্টা করুন</p>
        </div>
      )}

      {/* PREMIUM CARD GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredPackages.map((pkg) => {
          const inCompare = compareIds.includes(pkg.id);
          return (
          <motion.div
            key={pkg.id}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            <div className="block bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl transition overflow-hidden">
              <div className="relative overflow-hidden">
                <Link to={`/package/${pkg.id}`} className="block">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                  {/* Title Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
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
                </Link>

                {/* Save for later */}
                <SavedHeart pkgId={pkg.id} className="absolute top-3 left-3" />
              </div>

              {/* Card actions */}
              <div className="flex items-center justify-between gap-2 px-4 py-3">
                <button
                  onClick={() => toggleCompare(pkg.id)}
                  aria-pressed={inCompare}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                    inCompare
                      ? "bg-emerald-600 text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  {inCompare ? "✓ তুলনায় আছে" : "⚖ তুলনা করুন"}
                </button>
                <Link
                  to={`/package/${pkg.id}`}
                  className="px-3 py-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  বিস্তারিত →
                </Link>
              </div>
            </div>
          </motion.div>
          );
        })}

      </div>

      {/* Compare tray + dialog */}
      <CompareTray
        selected={comparePackages}
        onOpen={() => setCompareOpen(true)}
        onRemove={(id) => setCompareIds(compareIds.filter((x) => x !== id))}
        onClear={() => { setCompareIds([]); setCompareNotice(""); }}
        notice={compareNotice}
      />
      {compareOpen && comparePackages.length >= 2 && (
        <CompareDialog
          packages={comparePackages}
          onClose={() => setCompareOpen(false)}
          onRemove={(id) => {
            const next = compareIds.filter((x) => x !== id);
            setCompareIds(next);
            if (next.length < 2) setCompareOpen(false);
          }}
        />
      )}
    </div>
    </div>
  );
};

export default PackagesPage;