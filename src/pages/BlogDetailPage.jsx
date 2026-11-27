import { useParams, Link } from "react-router-dom";
import {
  MapPinIcon,
  ClockIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import blogData from "../data/blogData";
import packagesData from "../data/packagesData";
import destinationsData from "../data/destinationsData";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [progress, setProgress] = useState(0);

  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="py-32 text-center text-2xl font-semibold">
        Blog Not Found
      </div>
    );
  }

  /* ================= Reading Progress ================= */

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollProgress =
        (window.scrollY / totalHeight) * 100;

      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= Related Packages ================= */

  const relatedPackages = packagesData.filter(
    (pkg) => pkg.destinationSlug === blog.destinationSlug
  );

  /* ================= Related Blogs ================= */

  const relatedBlogs = blogData.filter(
    (item) =>
      item.destinationSlug === blog.destinationSlug &&
      item.slug !== blog.slug
  );

  const destination = destinationsData.find(
    (d) => d.slug === blog.destinationSlug
  );

  /* ================= AI Summary ================= */

  const aiSummary = `
এই ব্লগে আপনি জানতে পারবেন:
• ${destination?.name} কেন বিখ্যাত
• সেরা ভ্রমণ সময়
• কী দেখবেন ও কীভাবে প্রস্তুতি নিবেন
  `;

  return (
    <div className="bg-stone-50 min-h-screen">

      {/* ================= Progress Bar ================= */}
      <div
        className="fixed top-0 left-0 h-1 bg-emerald-600 z-50 transition-all"
        style={{ width: `${progress}%` }}
      />

      {/* ================= HERO ================= */}

      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${blog.coverImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 h-full flex items-center max-w-6xl mx-auto px-6 text-white">
          <div>
            <p className="text-sm mb-2">
              হোম / ব্লগ / {blog.title}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold">
              {blog.title}
            </h1>

            <p className="mt-4 text-stone-200">
              {blog.readTime}
            </p>
          </div>
        </div>
      </div>

      {/* ================= CONTENT AREA ================= */}

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-16">

        {/* ================= MAIN CONTENT ================= */}

        <div className="lg:col-span-2 space-y-12">

          {/* AI Summary Box */}
          <div className="bg-emerald-50 p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-3">
            সারাংশ
            </h3>
            <p className="whitespace-pre-line">
              {aiSummary}
            </p>
          </div>

          {/* Blog Content */}
          <div className="bg-white p-8 rounded-3xl shadow leading-relaxed whitespace-pre-line text-stone-700 text-lg">
            {blog.content}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {blog.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-stone-100 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Packages */}
          {relatedPackages.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                এই গন্তব্যের প্যাকেজ
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {relatedPackages.map((pkg) => (
                  <Link
                    key={pkg.id}
                    to={`/package/${pkg.id}`}
                    className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
                  >
                    <img
                      src={pkg.image}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">
                        {pkg.title}
                      </h3>
                      <p className="text-emerald-700 font-bold">
                        ৳{pkg.pricing?.perPerson}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* ================= SIDEBAR ================= */}

        <div className="space-y-6 lg:sticky lg:top-24 self-start">

          {/* Destination Info */}
          {destination && (
            <div className="bg-white rounded-3xl shadow-sm ring-1 ring-stone-100 overflow-hidden">
              <div className="flex items-center gap-3 px-6 pt-6 pb-4">
                <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-5 h-5" />
                </span>
                <h3 className="font-bold text-lg">
                  গন্তব্য তথ্য
                </h3>
              </div>
              <div className="px-6 pb-6 space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <MapPinIcon className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-stone-700">
                    {destination.location}
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <ClockIcon className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-stone-700">
                    সেরা সময়: {destination.bestTime}
                  </span>
                </div>
                {destination.famousFor && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {destination.famousFor.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                )}
                <Link
                  to={`/destination/${destination.slug}`}
                  className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-semibold text-sm pt-1"
                >
                  বিস্তারিত দেখুন
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <div className="bg-white rounded-3xl shadow-sm ring-1 ring-stone-100 overflow-hidden">
              <div className="flex items-center gap-3 px-6 pt-6 pb-4">
                <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <DocumentTextIcon className="w-5 h-5" />
                </span>
                <h3 className="font-bold text-lg">
                  সম্পর্কিত ব্লগ
                </h3>
              </div>
              <div className="px-6 pb-6 space-y-5">
                {relatedBlogs.map((b) => (
                  <Link
                    key={b.id}
                    to={`/blog/${b.slug}`}
                    className="flex gap-4 group"
                  >
                    <img
                      src={b.coverImage}
                      className="w-20 h-16 object-cover rounded-2xl shrink-0 group-hover:scale-105 transition"
                      alt=""
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-emerald-700">
                        {b.category}
                      </p>
                      <p className="text-sm font-semibold leading-snug group-hover:text-emerald-600 transition">
                        {b.title}
                      </p>
                      <p className="text-xs text-stone-400 mt-1">
                        {b.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Conversion CTA */}
          <div className="relative overflow-hidden bg-emerald-700 text-white p-6 rounded-3xl shadow-lg">
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-emerald-600/60" />
            <div className="absolute -bottom-12 -left-8 w-32 h-32 rounded-full bg-emerald-800/70" />
            <div className="relative">
              <h3 className="font-bold text-lg mb-4">
                ভ্রমণে যেতে চান?
              </h3>
              <Link
                to={`/destination/${blog.destinationSlug}`}
                className="inline-flex items-center gap-2 bg-white text-emerald-700 px-5 py-2.5 rounded-xl font-semibold hover:bg-emerald-50 transition"
              >
                প্যাকেজ দেখুন
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogDetailPage;