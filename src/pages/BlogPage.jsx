import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  TagIcon,
  FireIcon,
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import blogData, { BLOG_CATEGORY_LABELS } from "../data/blogData";
import destinationsData from "../data/destinationsData";
import { useState } from "react";

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Destination Guide", "Travel Tips"];

  const filteredBlogs = blogData.filter((blog) => {
    const matchSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || blog.category === category;

    return matchSearch && matchCategory;
  });

  const popularBlogs = blogData.slice(0, 4);

  const isFiltering = search.trim() !== "" || category !== "All";
  const clearFilters = () => {
    setSearch("");
    setCategory("All");
  };

  return (
    <div className="bg-sand min-h-screen">
      {/* ================= Forest Header Band ================= */}
      <div className="bg-forest text-white">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-14 md:pt-28 md:pb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            ট্রাভেল ব্লগ
          </h1>
          <p className="mt-3 text-emerald-100/90 max-w-2xl leading-relaxed">
            গন্তব্যের গাইড, ভ্রমণ টিপস আর সিজনের আপডেট — মোট{" "}
            {blogData.length.toLocaleString("bn-BD")}টি ব্লগ, সব এক জায়গায়।
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* SIDEBAR */}
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-6">

              {/* Search */}
              <div className="bg-white rounded-3xl shadow-sm ring-1 ring-stone-100 overflow-hidden">
                <div className="flex items-center gap-3 px-6 pt-6 pb-4">
                  <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MagnifyingGlassIcon className="w-5 h-5" />
                  </span>
                  <h3 className="font-bold text-lg">ব্লগ খুঁজুন</h3>
                </div>
                <div className="px-6 pb-6">
                  <div className="relative">
                    <MagnifyingGlassIcon className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="ব্লগ খুঁজুন..."
                      className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-stone-400"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Categories — desktop sidebar list only */}
              <div className="bg-white rounded-3xl shadow-sm ring-1 ring-stone-100 overflow-hidden hidden lg:block">
                <div className="flex items-center gap-3 px-6 pt-6 pb-4">
                  <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <TagIcon className="w-5 h-5" />
                  </span>
                  <h3 className="font-bold text-lg">ক্যাটাগরি</h3>
                </div>
                <div className="px-4 pb-5 flex flex-col gap-1.5">
                  {categories.map((cat) => {
                    const count =
                      cat === "All"
                        ? blogData.length
                        : blogData.filter((b) => b.category === cat).length;
                    return (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-medium transition ${
                          category === cat
                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                            : "text-stone-700 hover:bg-emerald-50 hover:text-emerald-700"
                        }`}
                      >
                        <span>{BLOG_CATEGORY_LABELS[cat] ?? cat}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            category === cat
                              ? "bg-white/20 text-white"
                              : "bg-stone-100 text-stone-500"
                          }`}
                        >
                          {count.toLocaleString("bn-BD")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Popular Blogs */}
              <div className="bg-white rounded-3xl shadow-sm ring-1 ring-stone-100 overflow-hidden hidden lg:block">
                <div className="flex items-center gap-3 px-6 pt-6 pb-4">
                  <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <FireIcon className="w-5 h-5" />
                  </span>
                  <h3 className="font-bold text-lg">জনপ্রিয় ব্লগ</h3>
                </div>
                <div className="px-6 pb-6 space-y-5">
                  {popularBlogs.map((blog, i) => (
                    <Link
                      key={blog.id}
                      to={`/blog/${blog.slug}`}
                      className="flex gap-4 group"
                    >
                      <div className="relative shrink-0">
                        <img
                          src={blog.coverImage}
                          className="w-20 h-16 object-cover rounded-2xl group-hover:scale-105 transition"
                          alt=""
                         loading="lazy" decoding="async" />
                        <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shadow">
                          {(i + 1).toLocaleString("bn-BD")}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-emerald-700">
                          {BLOG_CATEGORY_LABELS[blog.category] ?? blog.category}
                        </p>
                        <p className="text-sm font-semibold leading-snug group-hover:text-emerald-600 transition">
                          {blog.title}
                        </p>
                        <p className="text-xs text-stone-400 mt-1">
                          {blog.readTime}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Destinations */}
              <div className="bg-white rounded-3xl shadow-sm ring-1 ring-stone-100 overflow-hidden hidden lg:block">
                <div className="flex items-center gap-3 px-6 pt-6 pb-4">
                  <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-5 h-5" />
                  </span>
                  <h3 className="font-bold text-lg">জনপ্রিয় গন্তব্য</h3>
                </div>
                <div className="px-6 pb-6 flex flex-wrap gap-2">
                  {destinationsData.slice(0, 6).map((dest) => (
                    <Link
                      key={dest.id}
                      to={`/destination/${dest.slug}`}
                      className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white transition"
                    >
                      {dest.name}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* MAIN BLOG */}
          <div className="order-2 lg:order-1 lg:col-span-2">

            {/* Mobile category chips — horizontal scroll, replaces the
                sidebar list below lg so the list starts sooner */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-1 mb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? blogData.length
                    : blogData.filter((b) => b.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition ring-1 ${
                      category === cat
                        ? "bg-emerald-600 text-white ring-emerald-600 shadow-md shadow-emerald-600/25"
                        : "bg-white text-stone-700 ring-stone-200 hover:ring-emerald-500 hover:text-emerald-700"
                    }`}
                  >
                    {BLOG_CATEGORY_LABELS[cat] ?? cat}
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full ${
                        category === cat
                          ? "bg-white/20 text-white"
                          : "bg-stone-100 text-stone-500"
                      }`}
                    >
                      {count.toLocaleString("bn-BD")}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Filtered result count */}
            {isFiltering && filteredBlogs.length > 0 && (
              <p className="text-sm text-stone-500 mb-6">
                <span className="font-semibold text-forest">
                  {filteredBlogs.length.toLocaleString("bn-BD")}টি ব্লগ
                </span>{" "}
                পাওয়া গেছে
              </p>
            )}

            {filteredBlogs.length === 0 ? (
              <div className="bg-white rounded-3xl shadow-sm ring-1 ring-stone-100 px-6 py-16 text-center">
                <span className="inline-flex w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 items-center justify-center">
                  <MagnifyingGlassIcon className="w-6 h-6" />
                </span>
                <h2 className="font-display text-2xl font-bold mt-4">
                  কোনো ব্লগ পাওয়া যায়নি
                </h2>
                <p className="text-stone-500 mt-2">
                  অন্য কিছু খুঁজে দেখুন, বা ক্যাটাগরি বদলে আবার চেষ্টা করুন।
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-6 inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition"
                >
                  ফিল্টার পরিষ্কার করুন
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-10">
                {filteredBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    to={`/blog/${blog.slug}`}
                    className="group bg-white rounded-3xl shadow-sm ring-1 ring-stone-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
                       loading="lazy" decoding="async" />
                    </div>

                    <div className="p-6">
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                        {BLOG_CATEGORY_LABELS[blog.category] ?? blog.category}
                      </span>

                      <h3 className="font-display text-xl font-bold mt-4 leading-snug group-hover:text-emerald-700 transition">
                        {blog.title}
                      </h3>

                      <p className="text-stone-500 mt-3 leading-relaxed">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between gap-3 border-t border-stone-100 pt-4 mt-5">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-stone-400">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarIcon className="w-4 h-4" />
                            {blog.publishDate}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <ClockIcon className="w-4 h-4" />
                            {blog.readTime}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 group-hover:gap-2 transition-all shrink-0">
                          পড়ুন
                          <ArrowRightIcon className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogPage;
