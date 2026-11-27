import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  TagIcon,
  FireIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import blogData from "../data/blogData";
import destinationsData from "../data/destinationsData";
import { useState } from "react";

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Destination Guide",
    "Travel Tips",
    "Adventure",
    "Budget Travel"
  ];

  const filteredBlogs = blogData.filter((blog) => {
    const matchSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || blog.category === category;

    return matchSearch && matchCategory;
  });

  const popularBlogs = blogData.slice(0, 4);

  return (
    <div className="bg-stone-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

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
                      placeholder="Search..."
                      className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-stone-400"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-3xl shadow-sm ring-1 ring-stone-100 overflow-hidden">
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
                        <span>{cat}</span>
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
                          {blog.category}
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
          <div className="order-2 lg:order-1 lg:col-span-2 space-y-12">

            <h1 className="text-4xl font-bold">
              ট্রাভেল ব্লগ
            </h1>

            <div className="grid md:grid-cols-2 gap-10">
              {filteredBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.slug}`}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
                >
                  <div className="overflow-hidden">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="h-52 w-full object-cover group-hover:scale-110 transition duration-700"
                     loading="lazy" decoding="async" />
                  </div>

                  <div className="p-6">
                    <span className="text-xs bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                      {blog.category}
                    </span>

                    <h3 className="text-xl font-bold mt-4 group-hover:text-emerald-600 transition">
                      {blog.title}
                    </h3>

                    <p className="text-stone-500 mt-3">
                      {blog.excerpt}
                    </p>

                    <p className="text-sm text-stone-400 mt-4">
                      {blog.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogPage;