import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogData from "../../data/blogData";

const HomeGuides = () => {
  const latest = [...blogData].sort((a, b) => b.id - a.id).slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className="py-14 md:py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-2">
                ভ্রমণ গাইড
              </h2>
              <p className="text-stone-600 max-w-2xl text-sm md:text-base">
                যাওয়ার আগে পড়ে নিন — দাম, জাহাজ, সিজন আর সতর্কতার আসল তথ্য।
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden md:block shrink-0 text-sm font-semibold text-emerald-700 hover:text-emerald-800 whitespace-nowrap"
            >
              সব গাইড দেখুন →
            </Link>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index, 2) * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl transition duration-500 overflow-hidden"
            >
              <Link to={`/blog/${blog.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  {blog.coverImage ? (
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-emerald-600" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  {blog.category && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 shadow">
                      {blog.category}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-stone-900 leading-snug mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  {blog.excerpt && (
                    <p className="text-stone-600 text-sm leading-relaxed line-clamp-2 mb-3">
                      {blog.excerpt}
                    </p>
                  )}
                  <p className="text-stone-500 text-[13px]">
                    {blog.publishDate}
                    {blog.readTime ? ` · ${blog.readTime}` : ""}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            to="/blog"
            className="text-sm font-semibold text-emerald-700"
          >
            সব গাইড দেখুন →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGuides;
