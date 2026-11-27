import React from "react";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import packagesData from "../../data/packagesData";
import destinationsData from "../../data/destinationsData";
import companiesData from "../../data/companiesData";

const Hero = () => {
  const navigate = useNavigate();
const [searchTerm, setSearchTerm] = useState("");

const handleSearch = () => {
  if (searchTerm.trim()) {
    navigate(`/search?q=${searchTerm}`);
  }
};
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg1.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-sky-950/65" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-28 md:pt-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-left"
          >

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              আপনার স্বপ্নের
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-amber-300">
                ভ্রমণ শুরু হোক
              </span>
            </motion.h1>


            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <Link
                to="/packages"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl font-semibold text-white 
                           bg-sky-600
                           hover:bg-sky-700
                           shadow-lg shadow-sky-600/30
                           transition-all duration-300"
              >
                প্যাকেজ দেখুন
              </Link>
            </motion.div>

            {/* Search Bar */}
           <motion.div
  variants={itemVariants}
  className="mt-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 max-w-3xl mx-auto"
>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
               <input
  type="text"
  placeholder="লোকেশন, প্যাকেজ বা কোম্পানি..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
  className="w-full px-4 py-3 bg-white/20 rounded-lg text-white placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-white sm:col-span-2"
/>


             <button
  onClick={handleSearch}
  className="w-full px-6 py-3 bg-sky-600 rounded-lg font-semibold hover:bg-sky-700 transition-all duration-200 flex items-center justify-center space-x-2"
>
  <MagnifyingGlassIcon className="w-5 h-5" />
  <span>খুঁজুন</span>
</button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{packagesData.length.toLocaleString("bn-BD")}+</h3>
                <p className="text-stone-300 text-sm">ট্যুর প্যাকেজ</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{companiesData.length.toLocaleString("bn-BD")}টি</h3>
                <p className="text-stone-300 text-sm">যাচাই করা কোম্পানি</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{destinationsData.length.toLocaleString("bn-BD")}টি</h3>
                <p className="text-stone-300 text-sm">গন্তব্য</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">৮টি</h3>
                <p className="text-stone-300 text-sm">বিভাগের গাইড</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>


    </section>
  );
};

export default Hero;