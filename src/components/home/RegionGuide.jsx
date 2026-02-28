import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const regions = [
  {
    slug: "dhaka",
    name: "ঢাকা বিভাগ",
    highlight: "ঐতিহাসিক ও নগর ভ্রমণ",
    image: "/images/regions/dhaka.jpg",
  },
  {
    slug: "chattogram",
    name: "চট্টগ্রাম বিভাগ",
    highlight: "সমুদ্র ও পাহাড়ের সমন্বয়",
    image: "/images/regions/chattogram.jpg",
  },
  {
    slug: "sylhet",
    name: "সিলেট বিভাগ",
    highlight: "চা বাগান ও ঝর্ণা",
    image: "/images/regions/sylhet.jpg",
  },
  {
    slug: "khulna",
    name: "খুলনা বিভাগ",
    highlight: "সুন্দরবন ও নদী অঞ্চল",
    image: "/images/regions/khulna.jpg",
  },
  {
    slug: "rangpur",
    name: "রংপুর বিভাগ",
    highlight: "পাহাড় ও প্রাকৃতিক সৌন্দর্য",
    image: "/images/regions/rangpur.jpg",
  },
  {
    slug: "rajshahi",
    name: "রাজশাহী বিভাগ",
    highlight: "ঐতিহ্য ও স্থাপত্য",
    image: "/images/regions/rajshahi.jpg",
  },
];

const RegionGuide = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            বাংলাদেশের জেলা ভ্রমণ গাইড
          </h2>
          <p className="text-gray-500 mt-3">
            বিভাগভিত্তিক ভ্রমণ তথ্য এক নজরে
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={region.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/region/${region.slug}`}
                className="group relative h-56 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${region.image})` }}
                />

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold">
                    {region.name}
                  </h3>
                  <p className="text-sm text-gray-200 mt-1">
                    {region.highlight}
                  </p>
                  <span className="mt-3 text-sm text-blue-200 group-hover:text-white transition">
                    গাইড দেখুন →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionGuide;