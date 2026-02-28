import { useParams, Link } from "react-router-dom";
import destinationsData from "../data/destinationsData";
import packagesData from "../data/packagesData";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const DestinationDetailsPage = () => {
  const { slug } = useParams();

  const destination = destinationsData.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    return (
      <div className="py-40 text-center text-2xl font-semibold">
        Destination Not Found
      </div>
    );
  }

  const relatedPackages = packagesData.filter((pkg) =>
    pkg.location?.toLowerCase().includes(destination.name.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">

      {/* HERO SECTION */}
      <div
        className="relative h-[500px] md:h-[650px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${destination.gallery[0]})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            {destination.name}
          </motion.h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
            {destination.description}
          </p>
        </div>
      </div>

      {/* ANALYTICS SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-3xl shadow-xl text-center hover:-translate-y-2 transition"
        >
          <h3 className="text-4xl font-bold text-blue-600">
            <CountUp end={relatedPackages.length} duration={2} />
          </h3>
          <p className="mt-2 text-gray-600">Available Packages</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-3xl shadow-xl text-center hover:-translate-y-2 transition"
        >
          <h3 className="text-4xl font-bold text-orange-500">
            <CountUp end={5000} duration={2} />
          </h3>
          <p className="mt-2 text-gray-600">Monthly Visitors</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-3xl shadow-xl text-center hover:-translate-y-2 transition"
        >
          <h3 className="text-xl font-bold text-green-600">
            {destination.bestTime}
          </h3>
          <p className="mt-2 text-gray-600">Best Time</p>
        </motion.div>
      </div>

      {/* FAMOUS FOR */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          কেন মানুষ যায়?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destination.famousFor.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destination.gallery.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt=""
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl h-72 w-full object-cover shadow-xl hover:scale-105 transition duration-500"
            />
          ))}
        </div>
      </div>

      {/* RELATED PACKAGES */}
      <div className="max-w-6xl mx-auto px-6 pb-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          এই গন্তব্যের প্যাকেজ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPackages.length === 0 ? (
            <p className="text-center col-span-3">
              কোন প্যাকেজ পাওয়া যায়নি
            </p>
          ) : (
            relatedPackages.map((pkg) => (
              <Link
                key={pkg.id}
                to={`/package/${pkg.id}`}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={pkg.image}
                  alt=""
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-blue-600 font-bold text-lg">
                    ৳{pkg.pricing?.perPerson}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

    </div>
  );
};

export default DestinationDetailsPage;