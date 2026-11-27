import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPinIcon, 
  SunIcon, 
  BuildingLibraryIcon,
  CakeIcon,
  CameraIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  StarIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
const getDivisionEnglishName = (bnName) => {
  const map = {
    "ঢাকা বিভাগ": "dhaka",
    "চট্টগ্রাম বিভাগ": "chattogram",
    "সিলেট বিভাগ": "sylhet",
    "খুলনা বিভাগ": "khulna",
    "রাজশাহী বিভাগ": "rajshahi",
    "রংপুর বিভাগ": "rangpur",
    "বরিশাল বিভাগ": "barisal",
    "ময়মনসিংহ বিভাগ": "mymensingh",
  };

  return map[bnName] || "";
};
// বিভাগভিত্তিক ডেটা
const divisionsData = [
  {
    id: 'dhaka',
    name: 'ঢাকা বিভাগ',
    bnName: 'ঢাকা বিভাগ',
    capital: 'ঢাকা',
    districts: 13,
    image: "images/dhakabg.jpg",
    description: 'ঐতিহ্য ও আধুনিকতার সমন্বয়ে গঠিত বাংলাদেশের প্রাণকেন্দ্র। শত বছরের পুরনো স্থাপত্য থেকে শুরু করে আধুনিক শহরের সব কিছু এখানে।',
    bestTime: 'অক্টোবর - মার্চ',
    weather: 'মৃদু শীতকালীন',
    famousFood: ['বাকরখানি', 'হাজী বিরিয়ানি', 'ফুচকা', 'চটপটি'],
    attractions: [
      { name: 'জাতীয় স্মৃতিসৌধ', type: 'ঐতিহাসিক' },
      { name: 'লালবাগ কেল্লা', type: 'ঐতিহাসিক' },
      { name: 'আহসান মঞ্জিল', type: 'ঐতিহাসিক' },
      { name: 'জাদুঘর', type: 'সাংস্কৃতিক' }
    ],
    popularDestinations: [
      { name: 'সাভার', type: 'ঐতিহাসิก', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523' },
      { name: 'সোনারগাঁও', type: 'ঐতিহাসিক', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523' },
      { name: 'জাতীয় সংসদ', type: 'আধুনিক', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523' }
    ],
  },
  {
    id: 'chattogram',
    name: 'চট্টগ্রাম বিভাগ',
    bnName: 'চট্টগ্রাম বিভাগ',
    capital: 'চট্টগ্রাম',
    districts: 11,
    image: "images/ctgbg.webp",
    description: 'সমুদ্র, পাহাড় ও সবুজের সমন্বয়ে গঠিত প্রকৃতির অপার সৌন্দর্যের লীলাভূমি। বিশ্বের দীর্ঘতম সমুদ্র সৈকত কক্সবাজার এখানেই।',
    bestTime: 'নভেম্বর - মার্চ',
    weather: 'উষ্ণ ও আর্দ্র',
    famousFood: ['মেজবানি', 'কালাভুনা', 'দুরুস চকলেট', 'শুঁটকি মাছ'],
    attractions: [
      { name: 'কক্সবাজার সমুদ্র সৈকত', type: 'প্রাকৃতিক' },
      { name: 'সেন্ট মার্টিন দ্বীপ', type: 'প্রাকৃতিক' },
      { name: 'বান্দরবান', type: 'পাহাড়ি' },
      { name: 'রাঙ্গামাটি', type: 'লেক' }
    ],
    popularDestinations: [
      { name: 'কক্সবাজার', type: 'সমুদ্র সৈকত', image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf' },
      { name: 'সেন্টমার্টিন', type: 'দ্বীপ', image: 'https://images.unsplash.com/photo-1580540149927-0d132125f11c' },
      { name: 'বান্দরবান', type: 'পাহাড়', image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d' }
    ],
  },
  {
    id: 'sylhet',
    name: 'সিলেট বিভাগ',
    bnName: 'সিলেট বিভাগ',
    capital: 'সিলেট',
    districts: 4,
    image: "images/sylhetbg.png",
    description: 'চা বাগান, ঝর্ণা আর প্রাকৃতিক সৌন্দর্যের এক অপূর্ব সমাহার। বাংলাদেশের চা-এর রাজধানী বলা হয় সিলেটকে।',
    bestTime: 'অক্টোবর - এপ্রিল',
    weather: 'শীতল ও সতেজ',
    famousFood: ['সাতকরার চা', 'পান্তা ইলিশ', 'টাং', 'শীতল পাটি'],
    attractions: [
      { name: 'শ্রীমঙ্গল চা বাগান', type: 'প্রাকৃতিক' },
      { name: 'জাফলং', type: 'প্রাকৃতিক' },
      { name: 'রাতারগুল', type: 'জলাবন' },
      { name: 'বিছানাকান্দি', type: 'প্রাকৃতিক' }
    ],
    popularDestinations: [
      { name: 'শ্রীমঙ্গল', type: 'চা বাগান', image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce' },
      { name: 'জাফলং', type: 'পাহাড়ি', image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce' },
      { name: 'রাতারগুল', type: 'জলাবন', image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce' }
    ],
  },
  {
    id: 'khulna',
    name: 'খুলনা বিভাগ',
    bnName: 'খুলনা বিভাগ',
    capital: 'খুলনা',
    districts: 10,
    image: "images/khulnabg.jpg",
    description: 'ম্যানগ্রোভ বন সুন্দরবনের জন্য বিখ্যাত এই অঞ্চল। রয়েল বেঙ্গল টাইগারের আবাসস্থল এবং নদীমাতৃক এলাকা।',
    bestTime: 'নভেম্বর - মার্চ',
    weather: 'মৃদু ও শুষ্ক',
    famousFood: ['চিংড়ি মাছ', 'মধু', 'খেজুরের গুড়', 'পায়েস'],
    attractions: [
      { name: 'সুন্দরবন', type: 'ম্যানগ্রোভ' },
      { name: 'মংলা বন্দর', type: 'বন্দর' },
      { name: 'ষাট গম্বুজ মসজিদ', type: 'ঐতিহাসিক' },
      { name: 'কাটকা বিচ', type: 'সমুদ্র সৈকত' }
    ],
    popularDestinations: [
      { name: 'সুন্দরবন', type: 'বন', image: 'https://images.unsplash.com/photo-1589197124730-8b87b5fc2acf' },
      { name: 'বাগেরহাট', type: 'ঐতিহাসিক', image: 'https://images.unsplash.com/photo-1589197124730-8b87b5fc2acf' }
    ],
  },
  {
    id: 'rajshahi',
    name: 'রাজশাহী বিভাগ',
    bnName: 'রাজশাহী বিভাগ',
    capital: 'রাজশাহী',
    districts: 8,
    image: "/images/rajshahibg.jpg",
    weather: 'উষ্ণ ও শুষ্ক',
    famousFood: ['আম', 'মিষ্টি', 'সিল্ক', 'পিঠা'],
    attractions: [
      { name: 'পাহাড়পুর বৌদ্ধ বিহার', type: 'ঐতিহাসিক' },
      { name: 'মহাস্থানগড়', type: 'ঐতিহাসিক' },
      { name: 'বরেন্দ্র জাদুঘর', type: 'জাদুঘর' }
    ],
    popularDestinations: [
      { name: 'পাহাড়পুর', type: 'ঐতিহাসিক', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523' },
      { name: 'মহাস্থান', type: 'ঐতিহাসিক', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523' }
    ],
  },
  {
    id: 'rangpur',
    name: 'রংপুর বিভাগ',
    bnName: 'রংপুর বিভাগ',
    capital: 'রংপুর',
    districts: 8,
    image: "images/rangpurbg.jpg",
    description: 'উত্তরের এ অঞ্চল তার বৈচিত্র্যময় সংস্কৃতি, কারুশিল্প ও প্রাকৃতিক সৌন্দর্যের জন্য পরিচিত।',
    bestTime: 'নভেম্বর - মার্চ',
    weather: 'শীতল',
    famousFood: ['মিষ্টি দই', 'কারুশিল্প', 'হাজিরবাড়ি'],
    attractions: [
      { name: 'তাজহাট রাজবাড়ি', type: 'ঐতিহাসিক' },
      { name: 'কান্তজীর মন্দির', type: 'ঐতিহাসিক' },
      { name: 'বিহার', type: 'ঐতিহাসিক' }
    ],
    popularDestinations: [
      { name: 'দিনাজপুর', type: 'ঐতিহাসিক', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523' },
      { name: 'রংপুর', type: 'শহর', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523' }
    ],
  },
  {
    id: 'barisal',
    name: 'বরিশাল বিভাগ',
    bnName: 'বরিশাল বিভাগ',
    capital: 'বরিশাল',
    districts: 6,
    image: "images/barishalbg.jpg",
    description: 'নদ-নদীর দেশ বরিশাল। নারিকেল, ধান ও মাছের জন্য বিখ্যাত। শান্ত প্রাকৃতিক সৌন্দর্যের লীলাভূমি।',
    bestTime: 'অক্টোবর - মার্চ',
    weather: 'মৃদু',
    famousFood: ['নারিকেল', 'চাল', 'মাছ', 'পিঠা'],
    attractions: [
      { name: 'কুয়াকাটা সমুদ্র সৈকত', type: 'সমুদ্র' },
      { name: 'মঠবাড়ি', type: 'ঐতিহাসিক' },
      { name: 'দক্ষিণ ডিহি', type: 'প্রাকৃতিক' }
    ],
    popularDestinations: [
      { name: 'কুয়াকাটা', type: 'সমুদ্র সৈকত', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523' },
      { name: 'পটুয়াখালী', type: 'শহর', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523' }
    ],
  },
  {
    id: 'mymensingh',
    name: 'ময়মনসিংহ বিভাগ',
    bnName: 'ময়মনসিংহ বিভাগ',
    capital: 'ময়মনসিংহ',
    districts: 4,
    image: "images/mymbg.jpg",
    description: 'গারো পাহাড়ের পাদদেশে অবস্থিত এ অঞ্চল। হাওর, বন ও পাহাড়ের অপূর্ব সমন্বয়।',
    bestTime: 'অক্টোবর - এপ্রিল',
    weather: 'শীতল',
    famousFood: ['হাওরের চাল', 'মাছ', 'পিঠা'],
    attractions: [
      { name: 'গারো পাহাড়', type: 'প্রাকৃতিক' },
      { name: 'মধুটিলা', type: 'প্রাকৃতিক' },
      { name: 'শশী লজ', type: 'ঐতিহাসিক' }
    ],
    popularDestinations: [
      { name: 'গারো পাহাড়', type: 'পাহাড়', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523' },
      { name: 'নেত্রকোণা', type: 'হাওর', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523' }
    ],
  }
];

const RegionalDetails = () => {
  const [selectedDivision, setSelectedDivision] = useState(divisionsData[0]);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="primary" size="lg" className="mb-4">
            বাংলাদেশের বিভাগসমূহ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            বিভাগভিত্তিক{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">
              ভ্রমণ গাইড
            </span>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            বাংলাদেশের ৮টি বিভাগের ভ্রমণ তথ্য, দর্শনীয় স্থান, খাবার ও আবহাওয়া সম্পর্কে বিস্তারিত জানুন
          </p>
        </motion.div>

        {/* Division Tabs */}
        <div className="mb-8 overflow-x-auto pb-4">
          <div className="flex space-x-2 min-w-max">
            {divisionsData.map((division) => (
              <motion.button
                key={division.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDivision(division)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedDivision.id === division.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-white text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 border border-stone-200'
                }`}
              >
                {division.bnName}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDivision.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm overflow-hidden"
          >
            {/* Hero Image with Stats */}
            <div className="relative h-72 md:h-96 overflow-hidden group">
              <img
                src={selectedDivision.image}
                alt={selectedDivision.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
               loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex flex-wrap gap-6">
                  <div>
                    <p className="text-3xl font-bold">{selectedDivision.districts}টি</p>
                    <p className="text-sm opacity-90">জেলা</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{selectedDivision.bestTime || 'সারা বছর'}</p>
                    <p className="text-sm opacity-90">যাওয়ার সেরা সময়</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{selectedDivision.weather}</p>
                    <p className="text-sm opacity-90">আবহাওয়া</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{selectedDivision.famousFood[0]}</p>
                    <p className="text-sm opacity-90">বিখ্যাত খাবার</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="border-b border-stone-200">
              <div className="flex space-x-4 px-6 md:px-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-4 px-2 font-medium transition-all duration-300 border-b-2 ${
                    activeTab === 'overview'
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-transparent text-stone-500 hover:text-stone-700'
                  }`}
                >
                  সারসংক্ষেপ
                </button>
                <button
                  onClick={() => setActiveTab('attractions')}
                  className={`py-4 px-2 font-medium transition-all duration-300 border-b-2 ${
                    activeTab === 'attractions'
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-transparent text-stone-500 hover:text-stone-700'
                  }`}
                >
                  দর্শনীয় স্থান
                </button>
                <button
                  onClick={() => setActiveTab('food')}
                  className={`py-4 px-2 font-medium transition-all duration-300 border-b-2 ${
                    activeTab === 'food'
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-transparent text-stone-500 hover:text-stone-700'
                  }`}
                >
                  স্থানীয় খাবার
                </button>
                <button
                  onClick={() => setActiveTab('travel-tips')}
                  className={`py-4 px-2 font-medium transition-all duration-300 border-b-2 ${
                    activeTab === 'travel-tips'
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-transparent text-stone-500 hover:text-stone-700'
                  }`}
                >
                  ভ্রমণ টিপস
                </button>
              </div>
            </div>

          {/* Tab Content */}
            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">

                {/* ================= OVERVIEW ================= */}
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-stone-900 mb-4">
                        {selectedDivision.bnName} সম্পর্কে
                      </h3>
                      <p className="text-stone-600 mb-6 leading-relaxed">
                        {selectedDivision.description}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* ================= ATTRACTIONS ================= */}
                {activeTab === 'attractions' && (
                  <motion.div
                    key="attractions"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-stone-900 mb-6">
                      জনপ্রিয় দর্শনীয় স্থান
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedDivision.attractions.map((attraction, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -5 }}
                          className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm p-5 hover:shadow-xl hover:-translate-y-0.5 transition"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-stone-900">
                              {attraction.name}
                            </h4>

                            <Badge variant="success" size="sm">
                              {attraction.type}
                            </Badge>
                          </div>

                          <p className="text-sm text-stone-600">
                            {attraction.type}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ================= FOOD ================= */}
                {activeTab === 'food' && (
                  <motion.div
                    key="food"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-stone-900 mb-6">
                      বিখ্যাত স্থানীয় খাবার
                    </h3>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedDivision.famousFood.map((food, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="bg-emerald-50 p-6 rounded-2xl ring-1 ring-emerald-100 shadow-sm text-center"
                        >
                          <CakeIcon className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                          <p className="font-semibold">{food}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ================= TRAVEL TIPS ================= */}
                {activeTab === 'travel-tips' && (
                  <motion.div
                    key="tips"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-stone-900 mb-6">
                      ভ্রমণ টিপস
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-emerald-50 p-6 rounded-2xl ring-1 ring-emerald-100 shadow-sm">
                        <h4 className="font-semibold text-emerald-800 mb-3">
                          ✅ করণীয়
                        </h4>
                        <ul className="space-y-2 text-stone-700">
                          <li>• আগে থেকে হোটেল বুক করুন</li>
                          <li>• স্থানীয় গাইড নিন</li>
                          <li>• প্রয়োজনীয় ওষুধ সাথে রাখুন</li>
                        </ul>
                      </div>

                      <div className="bg-red-50 p-6 rounded-2xl ring-1 ring-red-100 shadow-sm">
                        <h4 className="font-semibold text-red-800 mb-3">
                          ❌ বর্জনীয়
                        </h4>
                        <ul className="space-y-2 text-stone-700">
                          <li>• রাতে একা বের হবেন না</li>
                          <li>• স্থানীয় সংস্কৃতিকে অসম্মান করবেন না</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </motion.div>   {/* 🔥 Main Content Wrapper Close */}
        </AnimatePresence>

        {/* ================= FOOTER ACTION ================= */}
        <div className="mt-8 p-6 md:p-8 bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="text-lg font-semibold text-stone-900">
                {selectedDivision.bnName} ভ্রমণ গাইড
              </h4>
              <p className="text-stone-600">
                {selectedDivision.attractions.length}টি দর্শনীয় স্থান
              </p>
            </div>

            <Link to={`/guide/${getDivisionEnglishName(selectedDivision.bnName)}`}>
              <Button variant="primary" size="lg">
                ভ্রমণ গাইড দেখুন →
              </Button>
            </Link>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {divisionsData.map((division) => (
            <Link
              key={division.id}
              to={`/guide/${getDivisionEnglishName(division.bnName)}`}
              className="p-3 bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 hover:border-emerald-500 transition-all text-center"
            >
              <p className="font-medium text-stone-900">
                {division.bnName}
              </p>
              <p className="text-sm text-stone-600">
                {division.attractions.length}টি স্থান
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RegionalDetails;