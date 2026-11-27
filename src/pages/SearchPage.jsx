import { useLocation, Link } from "react-router-dom";
import packagesData from "../data/packagesData";
import destinationsData from "../data/destinationsData";
import companiesData from "../data/companiesData";

const SearchPage = () => {
  const location = useLocation();
  const query =
    new URLSearchParams(location.search).get("q")?.toLowerCase() || "";

  // ===== Bengali → English basic map =====
  const bnToEnMap = {
    ক: "k",
    খ: "kh",
    গ: "g",
    ঘ: "gh",
    চ: "c",
    ছ: "ch",
    জ: "j",
    ট: "t",
    ড: "d",
    ত: "t",
    দ: "d",
    প: "p",
    ব: "b",
    ম: "m",
    র: "r",
    ল: "l",
    স: "s",
    হ: "h",
    আ: "a",
    ই: "i",
    উ: "u",
    ও: "o",
  };

  // Bengali → English convert
  const transliterate = (text = "") =>
    text
      .split("")
      .map((char) => bnToEnMap[char] || char)
      .join("")
      .toLowerCase();

  // Normalize text
  const normalize = (text = "") =>
    text.toLowerCase().replace(/\s+/g, "");

  // Simple fuzzy check
  const fuzzyMatch = (a, b) =>
    a.includes(b) || b.includes(a);

  // Smart match function
  const smartMatch = (text, query) => {
    const nText = normalize(text);
    const nQuery = normalize(query);
    const transliteratedQuery = transliterate(query);

    return (
      nText.includes(nQuery) ||
      nText.includes(transliteratedQuery) ||
      fuzzyMatch(nText, nQuery)
    );
  };

  // ===== FILTERS =====

  const matchedPackages = packagesData.filter(
    (p) =>
      smartMatch(p.title, query) ||
      smartMatch(p.location, query) ||
      smartMatch(p.destinationSlug, query)
  );

  const matchedDestinations = destinationsData.filter(
    (d) =>
      smartMatch(d.name, query) ||
      smartMatch(d.location, query) ||
      smartMatch(d.slug, query)
  );

  const matchedCompanies = companiesData.filter(
    (c) => smartMatch(c.name, query)
  );

  return (
    <div className="bg-stone-50">
    <div className="max-w-7xl mx-auto px-6 py-16">

      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">
          "{query}" এর জন্য ফলাফল
        </h1>
        <div className="h-1 w-16 rounded-full bg-emerald-600" />
      </div>

      {/* DESTINATIONS */}
      {matchedDestinations.map((d) => (
        <Link
          key={d.id}
          to={`/destination/${d.slug}`}
          className="block mb-4 p-4 bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition font-medium text-stone-900"
        >
          📍 {d.name}
        </Link>
      ))}

      {/* PACKAGES */}
      {matchedPackages.map((p) => (
        <Link
          key={p.id}
          to={`/package/${p.id}`}
          className="block mb-4 p-4 bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition font-medium text-stone-900"
        >
          📦 {p.title}
        </Link>
      ))}

      {/* COMPANIES */}
      {matchedCompanies.map((c) => (
        <Link
          key={c.id}
          to={`/company/${c.id}`}
          className="block mb-4 p-4 bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition font-medium text-stone-900"
        >
          🏢 {c.name}
        </Link>
      ))}

      {matchedPackages.length === 0 &&
        matchedDestinations.length === 0 &&
        matchedCompanies.length === 0 && (
          <div className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm p-8 text-center">
            <p className="text-stone-600">
              কোন ফলাফল পাওয়া যায়নি
            </p>
          </div>
        )}
    </div>
    </div>
  );
};

export default SearchPage;
