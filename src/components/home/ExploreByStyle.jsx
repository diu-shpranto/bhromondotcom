import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import packagesData from "../../data/packagesData";

const styles = [
  {
    name: "Beach",
    label: "সমুদ্র ভ্রমণ",
    description: "নীল সমুদ্র, সূর্যাস্ত ও রিসোর্ট অভিজ্ঞতা",
    image: "/images/styles/beach.jpg",
  },
  {
    name: "Mountain",
    label: "পাহাড় ভ্রমণ",
    description: "মেঘ, পাহাড় ও ঠান্ডা আবহাওয়া",
    image: "/images/styles/mountain.jpg",
  },
  {
    name: "Nature",
    label: "প্রকৃতি",
    description: "সবুজ বন ও নদী ভ্রমণ",
    image: "/images/styles/nature.jpg",
  },
  {
    name: "Couple",
    label: "কাপল ট্রিপ",
    description: "রোমান্টিক গন্তব্য ও রিসোর্ট",
    image: "/images/styles/couple.jpg",
  },
  {
    name: "Family",
    label: "ফ্যামিলি ট্যুর",
    description: "পরিবারের সাথে নিরাপদ ভ্রমণ",
    image: "/images/styles/family.jpg",
  },
  {
    name: "Adventure",
    label: "অ্যাডভেঞ্চার",
    description: "ট্রেকিং, হাইকিং ও এক্সপ্লোর",
    image: "/images/styles/adventure.jpg",
  },
];

const ExploreByStyle = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">
            আপনার ভ্রমণের স্টাইল বেছে নিন
          </h2>
          <p className="text-stone-600">
            আপনার পছন্দ অনুযায়ী curated প্যাকেজ দেখুন
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {styles.map((style, index) => {

            const count = packagesData.filter(pkg =>
              pkg.categories?.includes(style.name)
            ).length;

            return (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index, 3) * 0.06 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/style/${style.name}`}
                  className="group relative block h-72 rounded-3xl overflow-hidden ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition"
                >
                  <img
                    src={style.image}
                    alt={style.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                   loading="lazy" decoding="async" />

                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm group-hover:bg-black/60 transition" />

                  <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">

                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {style.label}
                      </h3>
                      <p className="text-sm opacity-90">
                        {style.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm bg-white/20 px-4 py-1 rounded-full">
                        {count} টি প্যাকেজ
                      </span>
                      <span className="text-sm font-semibold">
                        বিস্তারিত দেখুন →
                      </span>
                    </div>

                  </div>
                </Link>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ExploreByStyle;