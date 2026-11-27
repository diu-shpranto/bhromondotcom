import { Link } from "react-router-dom";
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
          <div className="order-1 lg:order-2 space-y-10">

            {/* Search */}
            <div className="bg-white p-6 rounded-3xl shadow">
              <h3 className="font-bold mb-4">ব্লগ খুঁজুন</h3>
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-3 border rounded-xl"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-3xl shadow">
              <h3 className="font-bold mb-4">ক্যাটাগরি</h3>
              <div className="flex flex-col gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`text-left px-4 py-2 rounded-xl transition ${
                      category === cat
                        ? "bg-emerald-600 text-white"
                        : "hover:bg-stone-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Blogs */}
            <div className="bg-white p-6 rounded-3xl shadow hidden lg:block">
              <h3 className="font-bold mb-6">জনপ্রিয় ব্লগ</h3>
              <div className="space-y-4">
                {popularBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    to={`/blog/${blog.slug}`}
                    className="flex gap-4 group"
                  >
                    <img
                      src={blog.coverImage}
                      className="w-20 h-16 object-cover rounded-xl"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-semibold group-hover:text-emerald-600 transition">
                        {blog.title}
                      </p>
                      <p className="text-xs text-stone-400">
                        {blog.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Destinations */}
            <div className="bg-white p-6 rounded-3xl shadow hidden lg:block">
              <h3 className="font-bold mb-6">জনপ্রিয় গন্তব্য</h3>
              <div className="flex flex-wrap gap-3">
                {destinationsData.slice(0, 6).map((dest) => (
                  <Link
                    key={dest.id}
                    to={`/destination/${dest.slug}`}
                    className="px-4 py-2 bg-stone-100 rounded-full text-sm hover:bg-emerald-600 hover:text-white transition"
                  >
                    {dest.name}
                  </Link>
                ))}
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
                    />
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