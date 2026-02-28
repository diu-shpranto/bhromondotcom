import { useParams, Link } from "react-router-dom";
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
    <div className="bg-gray-50 min-h-screen">

      {/* ================= Progress Bar ================= */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all"
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

            <p className="mt-4 text-gray-200">
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
          <div className="bg-blue-50 p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-3">
            সারাংশ
            </h3>
            <p className="whitespace-pre-line">
              {aiSummary}
            </p>
          </div>

          {/* Blog Content */}
          <div className="bg-white p-8 rounded-3xl shadow leading-relaxed whitespace-pre-line text-gray-700 text-lg">
            {blog.content}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {blog.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm"
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
                      <p className="text-blue-600 font-bold">
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

        <div className="space-y-8">

          {/* Destination Info */}
          {destination && (
            <div className="bg-white p-6 rounded-3xl shadow">
              <h3 className="font-bold mb-4">
                গন্তব্য তথ্য
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                সেরা সময়: {destination.bestTime}
              </p>
              <Link
                to={`/destination/${destination.slug}`}
                className="text-blue-600 hover:underline text-sm"
              >
                বিস্তারিত দেখুন →
              </Link>
            </div>
          )}

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <div className="bg-white p-6 rounded-3xl shadow">
              <h3 className="font-bold mb-6">
                সম্পর্কিত ব্লগ
              </h3>

              <div className="space-y-4">
                {relatedBlogs.map((b) => (
                  <Link
                    key={b.id}
                    to={`/blog/${b.slug}`}
                    className="block hover:text-blue-600 transition"
                  >
                    {b.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Conversion CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-3xl shadow-lg">
            <h3 className="font-bold mb-3">
              ভ্রমণে যেতে চান?
            </h3>
            <Link
              to={`/destination/${blog.destinationSlug}`}
              className="inline-block mt-3 bg-white text-black px-5 py-2 rounded-xl font-semibold"
            >
              প্যাকেজ দেখুন
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogDetailPage;