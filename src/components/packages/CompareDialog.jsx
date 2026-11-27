import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import companiesData from "../../data/companiesData";
import destinationsData from "../../data/destinationsData";

// সর্বোচ্চ ৩টি প্যাকেজ পাশাপাশি তুলনা — দাম, গন্তব্য, সময়কাল, কোম্পানি, যা যা থাকছে।
const CompareDialog = ({ packages, onClose, onRemove }) => {
  const companyName = (id) =>
    companiesData.find((c) => c.id === id)?.name || "—";
  const destinationName = (slug) =>
    destinationsData.find((d) => d.slug === slug)?.name || "—";

  const rows = [
    {
      label: "জনপ্রতি দাম",
      render: (pkg) => (
        <span className="text-lg font-bold text-emerald-700">
          ৳{pkg.pricing?.perPerson ?? "—"}
        </span>
      ),
    },
    {
      label: "কাপল দাম",
      render: (pkg) =>
        pkg.pricing?.couplePrice ? `৳${pkg.pricing.couplePrice}` : "—",
    },
    {
      label: "গন্তব্য",
      render: (pkg) => destinationName(pkg.destinationSlug),
    },
    {
      label: "সময়কাল",
      render: (pkg) => pkg.duration || "—",
    },
    {
      label: "কোম্পানি",
      render: (pkg) => companyName(pkg.companyId),
    },
    {
      label: "যা যা থাকছে",
      render: (pkg) =>
        pkg.included?.length ? (
          <ul className="space-y-1 text-left">
            {pkg.included.slice(0, 5).map((item, i) => (
              <li key={i} className="flex gap-1.5">
                <span className="text-emerald-600 shrink-0">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          "—"
        ),
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="প্যাকেজ তুলনা"
    >
      <button
        aria-label="তুলনা বন্ধ করুন"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />
      <div className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl p-5 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl md:text-2xl font-bold text-stone-900">
            প্যাকেজ তুলনা
          </h2>
          <button
            onClick={onClose}
            aria-label="বন্ধ করুন"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 transition"
          >
            <XMarkIcon className="w-5 h-5 text-stone-700" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="w-28 p-3 text-left align-bottom" />
                {packages.map((pkg) => (
                  <th key={pkg.id} className="p-3 align-top">
                    <div className="relative">
                      {pkg.image ? (
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-28 object-cover rounded-2xl mb-2"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="w-full h-28 bg-emerald-100 rounded-2xl mb-2" />
                      )}
                      <button
                        onClick={() => onRemove(pkg.id)}
                        aria-label={`${pkg.title} তুলনা থেকে সরান`}
                        className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-white/95 shadow text-stone-700 text-sm leading-none"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="font-bold text-stone-900 text-left leading-snug">
                      {pkg.title}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-stone-100">
                  <th className="p-3 text-left font-semibold text-stone-500 align-top whitespace-nowrap">
                    {row.label}
                  </th>
                  {packages.map((pkg) => (
                    <td
                      key={pkg.id}
                      className="p-3 text-stone-700 align-top"
                    >
                      {row.render(pkg)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-stone-100">
                <th className="p-3" />
                {packages.map((pkg) => (
                  <td key={pkg.id} className="p-3">
                    <Link
                      to={`/package/${pkg.id}`}
                      className="inline-block px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition whitespace-nowrap"
                    >
                      বিস্তারিত দেখুন
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompareDialog;
