import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  MapPinIcon,
  ClockIcon,
  StarIcon,
  HeartIcon,
  ArrowRightIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

// বিভাগভিত্তিক প্যাকেজ ডেটা
const packagesByDivision = {
  dhaka: {
    name: 'ঢাকা বিভাগ',
    bnName: 'ঢাকা বিভাগ',
    description: 'ঐতিহ্য ও আধুনিকতার সমন্বয়ে গঠিত বাংলাদেশের প্রাণকেন্দ্র',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    packages: [
      {
        id: 101,
        name: 'ঢাকা সিটি ট্যুর প্যাকেজ',
        location: 'ঢাকা',
        duration: '২ দিন ১ রাত',
        price: 4500,
        discount: 10,
        rating: 4.5,
        reviews: 128,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['হোটেল', 'গাইড', 'পরিবহন', 'দর্শনীয় স্থান'],
        type: 'cultural',
        description: 'ঢাকার ঐতিহাসিক স্থানগুলো ঘুরে দেখুন। লালবাগ কেল্লা, আহসান মঞ্জিল, জাতীয় স্মৃতিসৌধ'
      },
      {
        id: 102,
        name: 'সাভার স্মৃতিসৌধ ট্যুর',
        location: 'সাভার',
        duration: '১ দিন',
        price: 2500,
        discount: 0,
        rating: 4.6,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['পরিবহন', 'গাইড', 'লাঞ্চ'],
        type: 'historical',
        description: 'জাতীয় স্মৃতিসৌধ ও জাদুঘর ভ্রমণ'
      },
      {
        id: 103,
        name: 'সোনারগাঁও ঐতিহাসিক ট্যুর',
        location: 'নারায়ণগঞ্জ',
        duration: '১ দিন',
        price: 2800,
        discount: 5,
        rating: 4.7,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['পরিবহন', 'গাইড', 'লাঞ্চ', 'এন্ট্রি ফি'],
        type: 'historical',
        description: 'প্রাচীন বাংলার রাজধানী সোনারগাঁও ভ্রমণ'
      }
    ]
  },
  chattogram: {
    name: 'চট্টগ্রাম বিভাগ',
    bnName: 'চট্টগ্রাম বিভাগ',
    description: 'সমুদ্র, পাহাড় ও সবুজের সমন্বয়ে গঠিত প্রকৃতির অপার সৌন্দর্যের লীলাভূমি',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    packages: [
      {
        id: 201,
        name: 'কক্সবাজার ফ্যামিলি প্যাকেজ',
        location: 'কক্সবাজার',
        duration: '৩ দিন ২ রাত',
        price: 8500,
        discount: 15,
        rating: 4.8,
        reviews: 342,
        image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['হোটেল', 'খাবার', 'সাইট সিয়িং', 'গাইড'],
        type: 'family',
        description: 'পরিবার নিয়ে কক্সবাজার ভ্রমণের সেরা প্যাকেজ। সমুদ্র সৈকতের পাশে হোটেল, সুস্বাদু খাবার ও গাইডেড ট্যুর।'
      },
      {
        id: 202,
        name: 'সেন্টমার্টিন রোমান্টিক প্যাকেজ',
        location: 'সেন্টমার্টিন',
        duration: '৪ দিন ৩ রাত',
        price: 12500,
        discount: 10,
        rating: 4.9,
        reviews: 256,
        image: 'https://images.unsplash.com/photo-1580540149927-0d132125f11c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['রিসোর্ট', 'সমুদ্র ভিউ রুম', 'ডিনার', 'বোট ট্যুর'],
        type: 'couple',
        description: 'নবদম্পতি বা কাপলদের জন্য বিশেষ প্যাকেজ। সমুদ্র সৈকতে সানসেট ডিনার ও প্রাইভেট বোট ট্যুর।'
      },
      {
        id: 203,
        name: 'বান্দরবান ট্রেকিং প্যাকেজ',
        location: 'বান্দরবান',
        duration: '৪ দিন ৩ রাত',
        price: 11200,
        discount: 12,
        rating: 4.8,
        reviews: 167,
        image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['গাইড', 'ক্যাম্পিং', 'খাবার', 'পাহাড় ট্রেকিং'],
        type: 'adventure',
        description: 'পাহাড়প্রেমীদের জন্য ট্রেকিং প্যাকেজ। নীলগিরি, চিম্বুক ও তাজিংডং পাহাড় ভ্রমণ।'
      },
      {
        id: 204,
        name: 'রাঙ্গামাটি লেক ভিউ প্যাকেজ',
        location: 'রাঙ্গামাটি',
        duration: '৩ দিন ২ রাত',
        price: 8900,
        discount: 10,
        rating: 4.6,
        reviews: 134,
        image: 'https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['রিসোর্ট', 'লেক ট্যুর', 'বোটিং', 'গাইড'],
        type: 'family',
        description: 'কাপ্তাই লেকের পাড়ে রিসোর্ট। হাউজবোটে রাত যাপন, ক্ষুদ্র নৃগোষ্ঠীর সংস্কৃতি দেখা।'
      },
      {
        id: 205,
        name: 'কক্সবাজার সী বিচ প্যাকেজ',
        location: 'কক্সবাজার',
        duration: '২ দিন ১ রাত',
        price: 5500,
        discount: 5,
        rating: 4.5,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['হোটেল', 'নাস্তা', 'বিচ ভ্রমণ'],
        type: 'budget',
        description: 'স্বল্প বাজেটে কক্সবাজার ভ্রমণ। সমুদ্র সৈকতে সূর্যোদয় দেখা।'
      }
    ]
  },
  sylhet: {
    name: 'সিলেট বিভাগ',
    bnName: 'সিলেট বিভাগ',
    description: 'চা বাগান, ঝর্ণা আর প্রাকৃতিক সৌন্দর্যের এক অপূর্ব সমাহার',
    image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    packages: [
      {
        id: 301,
        name: 'শ্রীমঙ্গল চা বাগান প্যাকেজ',
        location: 'শ্রীমঙ্গল',
        duration: '২ দিন ১ রাত',
        price: 5500,
        discount: 0,
        rating: 4.5,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['রিসোর্ট', 'চা বাগান ট্যুর', 'নাশতা', 'স্থানীয় খাবার'],
        type: 'relax',
        description: 'চা বাগানের শহরে শান্তিপূর্ণ ছুটি কাটান। চা বাগান দেখুন, সাতছড়ি জাতীয় উদ্যান ভ্রমণ।'
      },
      {
        id: 302,
        name: 'জাফলং পিকনিক প্যাকেজ',
        location: 'জাফলং',
        duration: '১ দিন',
        price: 3200,
        discount: 0,
        rating: 4.6,
        reviews: 76,
        image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['পরিবহন', 'লাঞ্চ', 'বোটিং'],
        type: 'adventure',
        description: 'পাথরের নদী জাফলংয়ে দিনভর পিকনিক। বোটিং ও স্থানীয় খাবার।'
      },
      {
        id: 303,
        name: 'রাতারগুল জলাবন ট্যুর',
        location: 'গোয়াইনঘাট',
        duration: '১ দিন',
        price: 2800,
        discount: 0,
        rating: 4.7,
        reviews: 54,
        image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['পরিবহন', 'বোটিং', 'গাইড'],
        type: 'nature',
        description: 'ভাসমান বন রাতারগুল ঘুরে দেখুন। নৌকায় চড়ে জলাবনের অভিজ্ঞতা।'
      }
    ]
  },
  khulna: {
    name: 'খুলনা বিভাগ',
    bnName: 'খুলনা বিভাগ',
    description: 'ম্যানগ্রোভ বন সুন্দরবনের জন্য বিখ্যাত এই অঞ্চল',
    image: 'https://images.unsplash.com/photo-1589197124730-8b87b5fc2acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    packages: [
      {
        id: 401,
        name: 'সুন্দরবন ক্রুজ প্যাকেজ',
        location: 'সুন্দরবন',
        duration: '৩ দিন ২ রাত',
        price: 15000,
        discount: 5,
        rating: 4.8,
        reviews: 145,
        image: 'https://images.unsplash.com/photo-1589197124730-8b87b5fc2acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['বোট', 'গাইড', 'খাবার', 'রাত্রি যাপন'],
        type: 'adventure',
        description: 'ম্যানগ্রোভ ফরেস্টে ক্রুজ। রয়েল বেঙ্গল টাইগার দেখা, জেলে গ্রাম ভ্রমণ।'
      },
      {
        id: 402,
        name: 'ষাট গম্বুজ মসজিদ ট্যুর',
        location: 'বাগেরহাট',
        duration: '১ দিন',
        price: 2200,
        discount: 0,
        rating: 4.6,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1589197124730-8b87b5fc2acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['পরিবহন', 'গাইড', 'এন্ট্রি ফি'],
        type: 'historical',
        description: 'ইউনেস্কো বিশ্ব ঐতিহ্যের অংশ ষাট গম্বুজ মসজিদ ভ্রমণ।'
      }
    ]
  },
  rajshahi: {
    name: 'রাজশাহী বিভাগ',
    bnName: 'রাজশাহী বিভাগ',
    description: 'আমের রাজধানী খ্যাত রাজশাহী। পুদিনা, সিল্ক ও ঐতিহাসিক স্থাপত্যের জন্য বিখ্যাত।',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    packages: [
      {
        id: 501,
        name: 'পাহাড়পুর বৌদ্ধ বিহার ট্যুর',
        location: 'নওগাঁ',
        duration: '২ দিন ১ রাত',
        price: 4800,
        discount: 0,
        rating: 4.7,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['হোটেল', 'পরিবহন', 'গাইড', 'এন্ট্রি ফি'],
        type: 'historical',
        description: 'প্রাচীন বৌদ্ধ বিহার পাহাড়পুর ভ্রমণ। ইউনেস্কো বিশ্ব ঐতিহ্যের অংশ।'
      },
      {
        id: 502,
        name: 'মহাস্থানগড় ঐতিহাসিক ট্যুর',
        location: 'বগুড়া',
        duration: '১ দিন',
        price: 2500,
        discount: 0,
        rating: 4.6,
        reviews: 78,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['পরিবহন', 'গাইড', 'এন্ট্রি ফি'],
        type: 'historical',
        description: 'প্রাচীন বাংলার রাজধানী মহাস্থানগড় ভ্রমণ।'
      }
    ]
  },
  rangpur: {
    name: 'রংপুর বিভাগ',
    bnName: 'রংপুর বিভাগ',
    description: 'উত্তরের এ অঞ্চল তার বৈচিত্র্যময় সংস্কৃতি, কারুশিল্প ও প্রাকৃতিক সৌন্দর্যের জন্য পরিচিত।',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    packages: [
      {
        id: 601,
        name: 'তাজহাট রাজবাড়ি ট্যুর',
        location: 'রংপুর',
        duration: '১ দিন',
        price: 2000,
        discount: 0,
        rating: 4.5,
        reviews: 45,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['পরিবহন', 'গাইড', 'এন্ট্রি ফি'],
        type: 'historical',
        description: 'ঐতিহাসিক তাজহাট রাজবাড়ি ভ্রমণ।'
      },
      {
        id: 602,
        name: 'কান্তজীর মন্দির ট্যুর',
        location: 'দিনাজপুর',
        duration: '১ দিন',
        price: 2300,
        discount: 0,
        rating: 4.7,
        reviews: 56,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['পরিবহন', 'গাইড', 'এন্ট্রি ফি'],
        type: 'historical',
        description: 'টেরাকোটা স্থাপত্যের অনন্য নিদর্শন কান্তজীর মন্দির।'
      }
    ]
  },
  barisal: {
    name: 'বরিশাল বিভাগ',
    bnName: 'বরিশাল বিভাগ',
    description: 'নদ-নদীর দেশ বরিশাল। নারিকেল, ধান ও মাছের জন্য বিখ্যাত।',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    packages: [
      {
        id: 701,
        name: 'কুয়াকাটা সমুদ্র সৈকত প্যাকেজ',
        location: 'কুয়াকাটা',
        duration: '২ দিন ১ রাত',
        price: 4800,
        discount: 0,
        rating: 4.6,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['হোটেল', 'নাস্তা', 'সমুদ্র ভ্রমণ'],
        type: 'beach',
        description: 'সূর্যোদয় ও সূর্যাস্ত দেখা যায় এমন সমুদ্র সৈকত কুয়াকাটা।'
      }
    ]
  },
  mymensingh: {
    name: 'ময়মনসিংহ বিভাগ',
    bnName: 'ময়মনসিংহ বিভাগ',
    description: 'গারো পাহাড়ের পাদদেশে অবস্থিত এ অঞ্চল। হাওর, বন ও পাহাড়ের অপূর্ব সমন্বয়।',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    packages: [
      {
        id: 801,
        name: 'গারো পাহাড় ট্রেকিং',
        location: 'হালুয়াঘাট',
        duration: '২ দিন ১ রাত',
        price: 5200,
        discount: 0,
        rating: 4.6,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        includes: ['গাইড', 'কটেজ', 'খাবার', 'ট্রেকিং'],
        type: 'adventure',
        description: 'গারো পাহাড়ে ট্রেকিং ও ক্ষুদ্র নৃগোষ্ঠীর সংস্কৃতি দেখা।'
      }
    ]
  }
};

const RegionalPackagesPage = () => {
  const { divisionId } = useParams();
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [filterType, setFilterType] = useState('all');
  
  // ডিভিশন ডেটা লোড করুন
  const divisionData = packagesByDivision[divisionId] || packagesByDivision.chattogram;
  const packages = divisionData.packages || [];

  // ফিল্টার এবং সর্ট করা প্যাকেজ
  const filteredPackages = packages.filter(pkg => {
    if (filterType === 'all') return true;
    return pkg.type === filterType;
  });

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return (a.price - (a.price * (a.discount || 0) / 100)) - (b.price - (b.price * (b.discount || 0) / 100));
      case 'price-high':
        return (b.price - (b.price * (b.discount || 0) / 100)) - (a.price - (a.price * (a.discount || 0) / 100));
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
      default:
        return b.reviews - a.reviews;
    }
  });

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  // প্যাকেজ টাইপের তালিকা
  const packageTypes = [
    { value: 'all', label: 'সব ধরণের' },
    { value: 'family', label: 'ফ্যামিলি' },
    { value: 'couple', label: 'কাপল' },
    { value: 'adventure', label: 'অ্যাডভেঞ্চার' },
    { value: 'historical', label: 'ঐতিহাসিক' },
    { value: 'beach', label: 'সমুদ্র সৈকত' },
    { value: 'budget', label: 'বাজেট' },
    { value: 'relax', label: 'রিল্যাক্স' },
    { value: 'nature', label: 'প্রকৃতি' },
    { value: 'cultural', label: 'সাংস্কৃতিক' }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* হিরো সেকশন */}
      <section className="relative bg-gradient-to-r from-[#006B46] to-[#008F5A] py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate('/packages')}
            className="flex items-center text-white mb-6 hover:text-emerald-200 transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5 mr-1" />
            <span>সব প্যাকেজে ফিরুন</span>
          </button>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={divisionData.image} 
                alt={divisionData.bnName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {divisionData.bnName}
              </h1>
              <p className="text-xl text-emerald-100 mb-4">
                {divisionData.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Badge variant="primary" size="lg">
                  {packages.length}টি প্যাকেজ
                </Badge>
                <Badge variant="success" size="lg">
                  ⭐ ৪.৭ গড় রেটিং
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ফিল্টার ও সর্ট সেকশন */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* ফিল্টার */}
            <div className="flex flex-wrap gap-2">
              {packageTypes.map(type => (
                <button
                  key={type.value}
                  onClick={() => setFilterType(type.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filterType === type.value
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {/* সর্ট */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-auto rounded-2xl border border-stone-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="popular">জনপ্রিয়</option>
              <option value="rating">রেটিং</option>
              <option value="price-low">মূল্য: কম থেকে বেশি</option>
              <option value="price-high">মূল্য: বেশি থেকে কম</option>
            </select>
          </div>
        </div>
      </section>

      {/* প্যাকেজ গ্রিড */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {sortedPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedPackages.map((pkg, index) => {
                const discountedPrice = pkg.price - (pkg.price * (pkg.discount || 0) / 100);
                const isInWishlist = wishlist.includes(pkg.id);

                return (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    {/* ইমেজ */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* ডিসকাউন্ট ব্যাজ */}
                      {pkg.discount > 0 && (
                        <div className="absolute top-4 left-4">
                          <Badge variant="primary" size="sm">
                            {pkg.discount}% ছাড়
                          </Badge>
                        </div>
                      )}

                      {/* উইশলিস্ট বাটন */}
                      <button
                        onClick={() => toggleWishlist(pkg.id)}
                        className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      >
                        {isInWishlist ? (
                          <HeartIconSolid className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <HeartIcon className="w-5 h-5 text-stone-600" />
                        )}
                      </button>
                    </div>

                    {/* কন্টেন্ট */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1">
                          <MapPinIcon className="w-4 h-4 text-stone-400" />
                          <span className="text-sm text-stone-600">{pkg.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <StarIcon className="w-4 h-4 text-amber-400" />
                          <span className="font-semibold">{pkg.rating}</span>
                          <span className="text-sm text-stone-500">({pkg.reviews})</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-stone-900 mb-2 line-clamp-1">
                        {pkg.name}
                      </h3>

                      <p className="text-stone-600 text-sm mb-4 line-clamp-2">
                        {pkg.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-1 text-stone-500">
                          <ClockIcon className="w-4 h-4" />
                          <span className="text-sm">{pkg.duration}</span>
                        </div>
                        <div>
                          {pkg.discount > 0 && (
                            <span className="text-sm text-stone-400 line-through mr-2">
                              ৳{pkg.price}
                            </span>
                          )}
                          <span className="text-2xl font-bold text-emerald-700">
                            ৳{discountedPrice}
                          </span>
                        </div>
                      </div>

                      {/* ইনক্লুডস */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pkg.includes.slice(0, 3).map((item, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                        {pkg.includes.length > 3 && (
                          <span className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">
                            +{pkg.includes.length - 3}
                          </span>
                        )}
                      </div>

                      {/* অ্যাকশন বাটন */}
                      <div className="flex gap-3">
                        <Link to={`/package/${pkg.id}`} className="flex-1">
                          <Button variant="outline" size="md" fullWidth>
                            বিস্তারিত
                          </Button>
                        </Link>
                        <Link to={`/booking/${pkg.id}`} className="flex-1">
                          <Button variant="primary" size="md" fullWidth>
                            বুক করুন
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            // কোনো প্যাকেজ না থাকলে
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm px-6"
            >
              <div className="text-6xl mb-4">🏝️</div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">
                এই বিভাগে কোনো প্যাকেজ নেই
              </h3>
              <p className="text-stone-600 mb-6">
                অন্য বিভাগ দেখুন বা ফিল্টার পরিবর্তন করুন
              </p>
              <Button variant="primary" onClick={() => navigate('/packages')}>
                সব প্যাকেজ দেখুন
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RegionalPackagesPage;