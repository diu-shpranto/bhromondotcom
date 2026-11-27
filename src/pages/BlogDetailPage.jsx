import { useParams, Link } from "react-router-dom";
import {
  MapPinIcon,
  ClockIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import blogData, { BLOG_CATEGORY_LABELS } from "../data/blogData";
import packagesData from "../data/packagesData";
import destinationsData from "../data/destinationsData";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [progress, setProgress] = useState(0);

  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="bg-sand min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="bg-white rounded-3xl shadow-sm ring-1 ring-stone-100 px-6 py-16 max-w-lg mx-auto">
            <span className="inline-flex w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 items-center justify-center">
              <DocumentTextIcon className="w-6 h-6" />
            </span>
            <h1 className="font-display text-2xl font-bold mt-4">
              ব্লগটি পাওয়া যায়নি
            </h1>
            <p className="text-stone-500 mt-2">
              লিংকটি ভুল হতে পারে, বা ব্লগটি সরিয়ে নেওয়া হয়েছে।
            </p>
            <Link
              to="/blog"
              className="mt-6 inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition"
            >
              সব ব্লগ দেখুন
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
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

  return (
    <div className="bg-sand min-h-screen">

      {/* ================= Progress Bar ================= */}
      <div
        className="fixed top-0 left-0 h-1 bg-emerald-600 z-50 transition-all"
        style={{ width: `${progress}%` }}
      />

      {/* ================= HERO ================= */}

      <div
        className="relative h-[420px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${blog.coverImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-[#022c22]/55 to-transparent" />

        <div className="relative z-10 h-full flex items-end max-w-6xl mx-auto px-6 pb-12 text-white">
          <div className="min-w-0">
            <p className="text-sm mb-3 text-emerald-100/90 flex items-center gap-2 min-w-0">
              <Link to="/" className="hover:text-white transition shrink-0">
                হোম
              </Link>
              <span className="shrink-0">/</span>
              <Link to="/blog" className="hover:text-white transition shrink-0">
                ব্লগ
              </Link>
              <span className="shrink-0">/</span>
              <span className="text-white truncate">{blog.title}</span>
            </p>

            <span className="inline-block text-xs bg-white/15 text-white px-3 py-1 rounded-full font-medium backdrop-blur-sm">
              {BLOG_CATEGORY_LABELS[blog.category] ?? blog.category}
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 leading-snug">
              {blog.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-emerald-100/90 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <CalendarIcon className="w-4 h-4" />
                {blog.publishDate}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ClockIcon className="w-4 h-4" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT AREA ================= */}

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid lg:grid-cols-3 gap-10 lg:gap-16">

        {/* ================= MAIN CONTENT ================= */}

        <div className="lg:col-span-2 space-y-12">

          {/* Summary Box */}
          <div className="bg-emerald-50 p-6 rounded-2xl shadow">
            <h3 className="font-display font-bold text-lg mb-3">
              সারাংশ
            </h3>
            <p className="leading-relaxed text-stone-700">
              {blog.summary}
            </p>
          </div>

          {/* Blog Content */}
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm ring-1 ring-stone-100 leading-relaxed whitespace-pre-line text-stone-700 text-base md:text-lg first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-forest first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85]">
            {blog.content.trim()}
          </div>

          {/* Tags + back to blog list */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {blog.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 rounded-full text-sm font-medium hover:bg-emerald-100 transition"
                >
                  <span className="text-emerald-500">#</span>
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-semibold text-sm shrink-0"
            >
              <ArrowRightIcon className="w-4 h-4 rotate-180" />
              সব ব্লগ দেখুন
            </Link>
          </div>

          {/* Related Packages */}
          {relatedPackages.length > 0 && (
            <div>
              <div className="mb-6">
                <h2 className="font-display text-2xl font-bold">
                  এই গন্তব্যের প্যাকেজ
                </h2>
                <span className="block w-10 h-1 bg-amber-500 rounded-full mt-3" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {relatedPackages.map((pkg) => (
                  <Link
                    key={pkg.id}
                    to={`/package/${pkg.id}`}
                    className="group bg-white rounded-3xl shadow-sm ring-1 ring-stone-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={pkg.image}
                        className="h-44 w-full object-cover group-hover:scale-105 transition duration-500"
                        alt={pkg.title}
                       loading="lazy" decoding="async" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-bold leading-snug group-hover:text-emerald-700 transition">
                        {pkg.title}
                      </h3>
                      <p className="text-emerald-700 font-bold mt-2">
                        ৳{pkg.pricing?.perPerson}
                        <span className="text-xs font-medium text-stone-400 ml-1.5">
                          জনপ্রতি
                        </span>
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
              {destination.gallery?.[0] && (
                <Link to={`/destination/${destination.slug}`} className="block overflow-hidden">
                  <img
                    src={destination.gallery[0]}
                    alt={destination.name}
                    className="h-36 w-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
              )}
              <div className="flex items-center gap-3 px-6 pt-6 pb-4">
                <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-lg leading-tight">
                    গন্তব্য তথ্য
                  </h3>
                  <p className="font-display text-sm font-semibold text-emerald-700 leading-tight">
                    {destination.name}
                  </p>
                </div>
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
                <span className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                  {relatedBlogs.length.toLocaleString("bn-BD")}টি
                </span>
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
                     loading="lazy" decoding="async" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-emerald-700">
                        {BLOG_CATEGORY_LABELS[b.category] ?? b.category}
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
          <div className="relative overflow-hidden bg-forest text-white p-6 rounded-3xl shadow-lg">
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-emerald-600/30" />
            <div className="absolute -bottom-12 -left-8 w-32 h-32 rounded-full bg-emerald-800/50" />
            <div className="relative">
              <h3 className="font-display font-bold text-lg mb-4">
                ভ্রমণে যেতে চান?
              </h3>
              <Link
                to={`/destination/${blog.destinationSlug}`}
                className="inline-flex items-center gap-2 bg-white text-forest px-5 py-2.5 rounded-xl font-semibold hover:bg-emerald-50 transition"
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
