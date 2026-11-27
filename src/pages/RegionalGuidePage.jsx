import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  TruckIcon,
  BuildingOfficeIcon,
  PaperAirplaneIcon,
  HomeIcon,
  CakeIcon,
  CameraIcon,
  InformationCircleIcon,
  ChevronLeftIcon,
  StarIcon,
  PhoneIcon,
  GlobeAltIcon,
  ShoppingBagIcon,
  HeartIcon,
  UserGroupIcon,
  CalendarIcon,
  SunIcon,
  CloudIcon
} from '@heroicons/react/24/outline';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Badge from '../components/ui/Badge';

// বিভাগভিত্তিক ভ্রমণ গাইড ডেটা (৮টি বিভাগ)
const divisionGuides = {
  // ১. ঢাকা বিভাগ
  dhaka: {
    name: 'ঢাকা বিভাগ',
    bnName: 'ঢাকা বিভাগ',
    description: 'ঐতিহ্য ও আধুনিকতার সমন্বয়ে গঠিত বাংলাদেশের প্রাণকেন্দ্র',
    image: "/images/dhaka1.webp",
    bestTime: 'অক্টোবর - মার্চ',
    weather: 'মৃদু শীতকালীন',
    famousFood: ['বাকরখানি', 'হাজী বিরিয়ানি', 'ফুচকা', 'চটপটি', 'মোরগ পোলাও'],
    
    attractions: [
      {
        name: 'জাতীয় স্মৃতিসৌধ',
        location: 'সাভার',
        type: 'ঐতিহাসিক',
        time: 'সকাল ৮টা - বিকাল ৫টা',
        entryFee: '৩০ টাকা',
        description: 'বাংলাদেশের স্বাধীনতা যুদ্ধের শহীদদের স্মরণে নির্মিত স্মৃতিসৌধ',
        howToGo: 'ঢাকা শহর থেকে বাস বা সিএনজি করে সাভার যাওয়া যায়',
        tips: 'সকালে যাওয়া ভালো, বিকেলে অনেক ভিড় হয়',
        image: "/images/jatiyo.jpg",
      },
      {
        name: 'লালবাগ কেল্লা',
        location: 'পুরান ঢাকা',
        type: 'ঐতিহাসিক',
        time: 'সকাল ১০টা - বিকাল ৫টা (শুক্রবার বন্ধ)',
        entryFee: '৫০ টাকা',
        description: 'মোগল আমলের অসমাপ্ত দুর্গ, পুরান ঢাকার অন্যতম প্রধান দর্শনীয় স্থান',
        howToGo: 'গুলিস্তান বা শাহবাগ থেকে রিক্সা বা বাসে করে লালবাগ যাওয়া যায়',
        tips: 'শুক্রবার বন্ধ থাকে, শীতকালে বিকেলে ঘুরতে ভালো লাগে',
        image: "/images/dhaka3.jpg",
      },
      {
        name: 'আহসান মঞ্জিল',
        location: 'পুরান ঢাকা',
        type: 'জাদুঘর',
        time: 'সকাল ১০:৩০ - বিকাল ৫:৩০ (বুধবার বন্ধ)',
        entryFee: '৭৫ টাকা',
        description: 'ঢাকার নবাবদের প্রাসাদ, বর্তমানে জাদুঘর হিসেবে ব্যবহৃত',
        howToGo: 'গুলিস্তান থেকে রিক্সায় সহজেই যাওয়া যায়',
        tips: 'ছবি তোলার জন্য আলাদা ফি লাগে',
        image: "/images/dhaka2.jpg",
      },
      {
        name: 'জাতীয় জাদুঘর',
        location: 'শাহবাগ',
        type: 'জাদুঘর',
        time: 'সকাল ১০:৩০ - বিকাল ৫:৩০ (বৃহস্পতিবার বন্ধ)',
        entryFee: '৭৫ টাকা',
        description: 'বাংলাদেশের ইতিহাস, সংস্কৃতি ও মুক্তিযুদ্ধের নিদর্শন সমৃদ্ধ জাদুঘর',
        howToGo: 'শাহবাগ মোড় থেকে হেঁটেই যাওয়া যায়',
        tips: 'ছুটির দিনে ভিড় থাকে, মুক্তিযুদ্ধ কর্ণার অবশ্যই দেখবেন',
        image: "/images/dhaka4.jpg",
      },
      {
        name: 'সোনারগাঁও',
        location: 'নারায়ণগঞ্জ',
        type: 'ঐতিহাসিক',
        time: 'সকাল ৯টা - বিকাল ৫টা',
        entryFee: '৫০ টাকা',
        description: 'প্রাচীন বাংলার রাজধানী, লোকশিল্প জাদুঘর ও প্রত্নতাত্ত্বিক নিদর্শন',
        howToGo: 'সায়দাবাদ বাস টার্মিনাল থেকে বাসে সোনারগাঁও যাওয়া যায়',
        tips: 'শীতকালে ঘুরতে ভালো, পুরো দিন সময় নিয়ে যেতে হবে',
        image: "/images/dhaka5.jpg",
      }
    ],

    transportation: {
      bus: [
        { name: 'গাবতলী বাস টার্মিনাল', details: 'উত্তরবঙ্গের বাস ছেড়ে যায়' },
        { name: 'সায়দাবাদ বাস টার্মিনাল', details: 'নারায়ণগঞ্জ ও সোনারগাঁও এর বাস' },
        { name: 'মহাখালী বাস টার্মিনাল', details: 'চট্টগ্রাম, সিলেটের বাস' }
      ],
      train: [
        { name: 'কমলাপুর রেলওয়ে স্টেশন', details: 'দেশের সব প্রধান রুটের ট্রেন' },
        { name: 'বিমানবন্দর রেলওয়ে স্টেশন', details: 'উত্তরবঙ্গের ট্রেন' }
      ],
      air: [
        { name: 'হজরত শাহজালাল আন্তর্জাতিক বিমানবন্দর', details: 'দেশি-বিদেশি ফ্লাইট' }
      ]
    },

    accommodations: [
      {
        name: 'প্যান প্যাসিফিক সোনারগাঁও',
        area: 'কাকরাইল',
        type: '৫ স্টার',
        price: '১৫,০০০+',
        contact: '০২-৮৩৫১১২২',
      },
      {
        name: 'রেডিসন ব্লু ঢাকা',
        area: 'বারিধারা',
        type: '৫ স্টার',
        price: '১২,০০০+',
        contact: '০২-৮৮৩৪৫৫৫',
      },
      {
        name: 'হোটেল সারিনা',
        area: 'গুলশান',
        type: '৫ স্টার',
        price: '১০,০০০+',
        contact: '০২-৮৮৫৬৭৮৯',
      },
      {
        name: 'হোটেল লা মেরিডিয়ান',
        area: 'ধানমন্ডি',
        type: '৪ স্টার',
        price: '৮,০০০+',
        contact: '০২-৯৬৬১২৩৪',
      }
    ],

    restaurants: [
      {
        name: 'হাজী বিরিয়ানি',
        area: 'পুরান ঢাকা',
        specialty: 'বিরিয়ানি, বোরহানি',
        price: '৫০০-৮০০ টাকা',
      },
      {
        name: 'সুলতানস ডাইন',
        area: 'ধানমন্ডি',
        specialty: 'কাচ্চি বিরিয়ানি',
        price: '৬০০-১০০০ টাকা',
      },
      {
        name: 'ফুচকা ও চটপটি',
        area: 'নিউ মার্কেট, ঢাকা কলেজ',
        specialty: 'ফুচকা, চটপটি, জিলাপি',
        price: '৫০-২০০ টাকা',
      },
      {
        name: 'ভোজন রাজ',
        area: 'ধানমন্ডি',
        specialty: 'বাংলাদেশি খাবার',
        price: '৪০০-৭০০ টাকা',
      }
    ],

    shopping: [
      {
        name: 'নিউ মার্কেট',
        area: 'আজিমপুর',
        items: 'কাপড়, জুতা, ইলেকট্রনিক্স',
        bestTime: 'বিকাল ৩টা - রাত ৮টা'
      },
      {
        name: 'বসুন্ধরা সিটি',
        area: 'পান্থপথ',
        items: 'শপিং মল, রেস্টুরেন্ট, সিনেমা হল',
        bestTime: 'সকাল ১০টা - রাত ৯টা'
      },
      {
        name: 'চাঁদনী চক',
        area: 'পুরান ঢাকা',
        items: 'গয়না, সুইট, ফুচকা',
        bestTime: 'সকাল ১০টা - রাত ৮টা'
      }
    ],

    emergency: {
      police: '৯৯৯',
      ambulance: '১৯৯০',
      fire: '১৯৯১',
      touristPolice: '০১৭৬৯৬৯৭৫০০',
      hospitals: [
        'ঢাকা মেডিকেল কলেজ হাসপাতাল',
        'স্কয়ার হাসপাতাল',
        'অ্যাপোলো হাসপাতাল'
      ]
    }
  },

  // ২. চট্টগ্রাম বিভাগ
  chattogram: {
    name: 'চট্টগ্রাম বিভাগ',
    bnName: 'চট্টগ্রাম বিভাগ',
    description: 'সমুদ্র, পাহাড় ও সবুজের সমন্বয়ে গঠিত প্রকৃতির অপার সৌন্দর্যের লীলাভূমি',
    image: "/images/ctg1.jpg",
    bestTime: 'নভেম্বর - মার্চ',
    weather: 'উষ্ণ ও আর্দ্র',
    famousFood: ['মেজবানি', 'কালাভুনা', 'দুরুস চকলেট', 'শুঁটকি মাছ', 'ব্যালাকরি'],
    
    attractions: [
      {
        name: 'কক্সবাজার সমুদ্র সৈকত',
        location: 'কক্সবাজার',
        type: 'প্রাকৃতিক',
        time: 'সব সময়',
        entryFee: 'ফ্রি',
        description: 'বিশ্বের দীর্ঘতম সমুদ্র সৈকত, ১২০ কিমি দীর্ঘ',
        howToGo: 'ঢাকা থেকে বাস বা প্লেনে কক্সবাজার, তারপর হোটেল থেকে রিক্সা',
        tips: 'সূর্যোদয় ও সূর্যাস্ত দেখার সেরা জায়গা',
        image: "/images/destinations/coxsbazar/3.jpg",
      },
      {
        name: 'সেন্ট মার্টিন দ্বীপ',
        location: 'কক্সবাজার',
        type: 'প্রাকৃতিক',
        time: 'নভেম্বর-মার্চ',
        entryFee: 'ফ্রি (বোট ভাড়া আলাদা)',
        description: 'বাংলাদেশের একমাত্র প্রবাল দ্বীপ',
        howToGo: 'টেকনাফ থেকে বোটে যেতে হয়, সময় লাগে ২-৩ ঘণ্টা',
        tips: 'শীতকালে যাওয়া ভালো, রাতে দ্বীপে থাকার ব্যবস্থা আছে',
        image: "/images/places/stmartin.jpg",
      },
      {
        name: 'বান্দরবান',
        location: 'বান্দরবান',
        type: 'পাহাড়ি',
        time: 'অক্টোবর-মার্চ',
        entryFee: 'ভিন্ন ভিন্ন',
        description: 'পাহাড়ের শহর, চিম্বুক, নীলগিরি, বুদ্ধ ধাতু জাদি',
        howToGo: 'চট্টগ্রাম থেকে বাসে ২-৩ ঘণ্টা',
        tips: 'পাহাড়ি এলাকায় গাইড নিয়ে যাওয়া ভালো',
        image: "/images/destinations/bandarban.jpg",
      },
      {
        name: 'রাঙ্গামাটি',
        location: 'রাঙ্গামাটি',
        type: 'লেক',
        time: 'অক্টোবর-মার্চ',
        entryFee: 'ভিন্ন ভিন্ন',
        description: 'কাপ্তাই লেকের পাড়ে শহর, হাউজবোটে রাত্রি যাপন',
        howToGo: 'চট্টগ্রাম থেকে বাসে ২ ঘণ্টা',
        tips: 'হাউজবোটে রাত কাটানোর অভিজ্ঞতা নিন',
        image: "/images/company/btg/packages/rangamati/btg-rangamati.jpg",
      },
      {
        name: 'পতেঙ্গা সমুদ্র সৈকত',
        location: 'চট্টগ্রাম',
        type: 'প্রাকৃতিক',
        time: 'সব সময়',
        entryFee: 'ফ্রি',
        description: 'চট্টগ্রাম শহরের কাছে সমুদ্র সৈকত',
        howToGo: 'চট্টগ্রাম শহর থেকে বাস বা রিক্সা',
        tips: 'বিকেলে ঘুরতে যাওয়া ভালো',
        image: "/images/ctg1.jpg",
      }
    ],

    transportation: {
      bus: [
        { name: 'চট্টগ্রাম বাস টার্মিনাল', details: 'ঢাকা ও অন্যান্য শহরের বাস' },
        { name: 'কক্সবাজার বাস টার্মিনাল', details: 'চট্টগ্রাম ও ঢাকার বাস' }
      ],
      train: [
        { name: 'চট্টগ্রাম রেলওয়ে স্টেশন', details: 'ঢাকা ও কমলাপুর রুট' }
      ],
      air: [
        { name: 'শাহ আমানত আন্তর্জাতিক বিমানবন্দর', details: 'ঢাকা ও আন্তর্জাতিক ফ্লাইট' }
      ]
    },

    accommodations: [
      {
        name: 'হোটেল সী ক্রাউন',
        area: 'কক্সবাজার',
        type: '৫ স্টার',
        price: '৮,০০০+',
        contact: '০১৭১২৩৪৫৬৭৮',
      },
      {
        name: 'লং বিচ হোটেল',
        area: 'কক্সবাজার',
        type: '৫ স্টার',
        price: '৭,০০০+',
        contact: '০১৭১২৩৪৫৬৭৯',
      },
      {
        name: 'হোটেল আগা',
        area: 'বান্দরবান',
        type: '৩ স্টার',
        price: '৩,০০০+',
        contact: '০১৭১২৩৪৫৬৮০',
      }
    ],

    restaurants: [
      {
        name: 'জালি না রেস্টুরেন্ট',
        area: 'কক্সবাজার',
        specialty: 'সামুদ্রিক মাছ, লবস্টার',
        price: '৮০০-২০০০ টাকা',
      },
      {
        name: 'পাহাড়িকা রেস্টুরেন্ট',
        area: 'বান্দরবান',
        specialty: 'স্থানীয় খাবার',
        price: '৪০০-৮০০ টাকা',
      },
      {
        name: 'মেজবানি ঘর',
        area: 'চট্টগ্রাম',
        specialty: 'মেজবানি গরু, কালাভুনা',
        price: '৫০০-১০০০ টাকা',
      }
    ],

    shopping: [
      {
        name: 'বর্মন মার্কেট',
        area: 'বান্দরবান',
        items: 'স্থানীয় হস্তশিল্প, কাপড়',
        bestTime: 'সকাল ১০টা - সন্ধ্যা ৬টা'
      },
      {
        name: 'বার্মিজ মার্কেট',
        area: 'কক্সবাজার',
        items: 'শুঁটকি মাছ, স্থানীয় পণ্য',
        bestTime: 'সকাল ৯টা - রাত ৮টা'
      }
    ],

    emergency: {
      police: '৯৯৯',
      ambulance: '১৯৯০',
      fire: '১৯৯১',
      touristPolice: '০১৭৬৯৬৯৭৫০১',
      hospitals: [
        'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
        'কক্সবাজার জেলা হাসপাতাল'
      ]
    }
  },

  // ৩. সিলেট বিভাগ
  sylhet: {
    name: 'সিলেট বিভাগ',
    bnName: 'সিলেট বিভাগ',
    description: 'চা বাগান, ঝর্ণা আর প্রাকৃতিক সৌন্দর্যের এক অপূর্ব সমাহার',
    image: "/images/sylhet.png",
    bestTime: 'অক্টোবর - এপ্রিল',
    weather: 'শীতল ও সতেজ',
    famousFood: ['সাতকরার চা', 'পান্তা ইলিশ', 'টাং', 'শীতল পাটি', 'হাতকরা চাল'],
    
    attractions: [
      {
        name: 'শ্রীমঙ্গল চা বাগান',
        location: 'শ্রীমঙ্গল',
        type: 'প্রাকৃতিক',
        time: 'সকাল ৮টা - বিকাল ৫টা',
        entryFee: '৫০ টাকা',
        description: 'বাংলাদেশের চা-এর রাজধানী, অসংখ্য চা বাগান',
        howToGo: 'সিলেট থেকে বাসে ২ ঘণ্টা',
        tips: 'সকালে যাওয়া ভালো, চা বাগানের সৌন্দর্য উপভোগ করুন',
        image: "/images/destinations/sreemangal.jpg",
      },
      {
        name: 'জাফলং',
        location: 'গোয়াইনঘাট',
        type: 'প্রাকৃতিক',
        time: 'সকাল ৮টা - বিকাল ৫টা',
        entryFee: 'ফ্রি',
        description: 'পাথরের নদী, পাহাড়ি এলাকা',
        howToGo: 'সিলেট থেকে বাসে ১.৫ ঘণ্টা',
        tips: 'বর্ষাকালে পানির প্রবল স্রোত থাকে',
        image: "/images/jaflon.webp", 
      },
      {
        name: 'রাতারগুল',
        location: 'গোয়াইনঘাট',
        type: 'প্রাকৃতিক',
        time: 'সকাল ৮টা - বিকাল ৫টা',
        entryFee: '৩০ টাকা',
        description: 'ভাসমান বন, নৌকায় চড়ে ঘোরার ব্যবস্থা',
        howToGo: 'সিলেট থেকে বাসে ১.৫ ঘণ্টা',
        tips: 'বর্ষাকালে বন পানিতে ডুবে থাকে, তখন দেখতে ভালো',
        image: "/images/ratarkul.jpg",
      },
      {
        name: 'বিছানাকান্দি',
        location: 'সিলেট',
        type: 'প্রাকৃতিক',
        time: 'সকাল ৮টা - বিকাল ৫টা',
        entryFee: 'ফ্রি',
        description: 'পাথরের নদী ও পাহাড়ের দৃশ্য',
        howToGo: 'সিলেট শহর থেকে ২০ কিমি',
        tips: 'শীতকালে পানির পরিমাণ কম থাকে',
        image: "/images/bichanakandi.jpg",
      }
    ],

    transportation: {
      bus: [
        { name: 'সিলেট বাস টার্মিনাল', details: 'ঢাকা ও অন্যান্য শহরের বাস' }
      ],
      train: [
        { name: 'সিলেট রেলওয়ে স্টেশন', details: 'ঢাকা ও কমলাপুর রুট' }
      ],
      air: [
        { name: 'ওসমানী আন্তর্জাতিক বিমানবন্দর', details: 'ঢাকা ও আন্তর্জাতিক ফ্লাইট' }
      ]
    },

    accommodations: [
      {
        name: 'গ্র্যান্ড সুলতান',
        area: 'শ্রীমঙ্গল',
        type: '৫ স্টার',
        price: '১০,০০০+',
        contact: '০১৭১২৩৪৫৬৮১',
      },
      {
        name: 'রোজভিউ হোটেল',
        area: 'সিলেট',
        type: '৪ স্টার',
        price: '৬,০০০+',
        contact: '০১৭১২৩৪৫৬৮২',
      }
    ],

    restaurants: [
      {
        name: 'পাঁচভাই রেস্টুরেন্ট',
        area: 'সিলেট',
        specialty: 'টাং, স্থানীয় খাবার',
        price: '৪০০-৮০০ টাকা',
      },
      {
        name: 'চা বাগান ক্যাফে',
        area: 'শ্রীমঙ্গল',
        specialty: 'সাতকরার চা, পিঠা',
        price: '২০০-৫০০ টাকা',
      }
    ],

    shopping: [
      {
        name: 'চা বাগান এলাকা',
        area: 'শ্রীমঙ্গল',
        items: 'চা, হস্তশিল্প',
        bestTime: 'সকাল ১০টা - সন্ধ্যা ৬টা'
      }
    ],

    emergency: {
      police: '৯৯৯',
      ambulance: '১৯৯০',
      fire: '১৯৯১',
      touristPolice: '০১৭৬৯৬৯৭৫০২',
      hospitals: [
        'সিলেট এমএজি ওসমানী মেডিকেল কলেজ হাসপাতাল'
      ]
    }
  },

  // ৪. খুলনা বিভাগ
  khulna: {
    name: 'খুলনা বিভাগ',
    bnName: 'খুলনা বিভাগ',
    description: 'ম্যানগ্রোভ বন সুন্দরবনের জন্য বিখ্যাত এই অঞ্চল। রয়েল বেঙ্গল টাইগারের আবাসস্থল।',
    image: "/images/khulna.jpg",
    bestTime: 'নভেম্বর - মার্চ',
    weather: 'মৃদু ও শুষ্ক',
    famousFood: ['চিংড়ি মাছ', 'মধু', 'খেজুরের গুড়', 'পায়েস', 'ক্ষীর'],
    
    attractions: [
      {
        name: 'সুন্দরবন',
        location: 'খুলনা',
        type: 'ম্যানগ্রোভ',
        time: 'সকাল ৮টা - বিকাল ৫টা',
        entryFee: 'ভিন্ন ভিন্ন',
        description: 'বিশ্বের বৃহত্তম ম্যানগ্রোভ বন, রয়েল বেঙ্গল টাইগারের আবাসস্থল',
        howToGo: 'খুলনা শহর থেকে বোটে করে সুন্দরবন যাওয়া যায়',
        tips: 'গাইড নিয়ে যাওয়া বাধ্যতামূলক, সাথে খাবার ও পানি রাখবেন',
        image: "/images/destinations/sundarban.jpg",
      },
      {
        name: 'ষাট গম্বুজ মসজিদ',
        location: 'বাগেরহাট',
        type: 'ঐতিহাসিক',
        time: 'সকাল ৯টা - বিকাল ৫টা',
        entryFee: '৫০ টাকা',
        description: 'ইউনেস্কো বিশ্ব ঐতিহ্যের অংশ, ষাট গম্বুজ বিশিষ্ট মসজিদ',
        howToGo: 'খুলনা থেকে বাসে বাগেরহাট, তারপর রিক্সা',
        tips: 'শীতকালে ঘুরতে ভালো, স্থানীয় গাইড নিন',
        image: "/images/mosque.jpg",
      },
      {
        name: 'কর্ণফুলী গার্ডেন সিটি',
        location: 'খুলনা',
        type: 'বিনোদন',
        time: 'সকাল ১০টা - রাত ৮টা',
        entryFee: '১০০ টাকা',
        description: 'বিনোদন পার্ক, লেক, শিশুদের জন্য রাইড',
        howToGo: 'খুলনা শহর থেকে রিক্সা বা সিএনজি',
        tips: 'ছুটির দিনে ভিড় থাকে, শিশুদের জন্য ভালো',
        image: "/images/city.jpg",
      },
      {
        name: 'মংলা বন্দর',
        location: 'মংলা',
        type: 'বন্দর',
        time: 'সকাল ৯টা - বিকাল ৫টা',
        entryFee: 'ফ্রি',
        description: 'বাংলাদেশের দ্বিতীয় বৃহত্তম সমুদ্র বন্দর',
        howToGo: 'খুলনা থেকে বাসে মংলা',
        tips: 'বন্দর এলাকা ঘুরে দেখতে পারেন',
        image: "/images/mongla.webp",
      }
    ],

    transportation: {
      bus: [
        { name: 'খুলনা বাস টার্মিনাল', details: 'ঢাকা ও অন্যান্য শহরের বাস' },
        { name: 'বাগেরহাট বাস স্ট্যান্ড', details: 'স্থানীয় বাস সার্ভিস' }
      ],
      train: [
        { name: 'খুলনা রেলওয়ে স্টেশন', details: 'ঢাকা ও রাজশাহী রুটের ট্রেন' }
      ],
      air: [
        { name: 'যশোর বিমানবন্দর', details: 'ঢাকা থেকে ফ্লাইট' }
      ]
    },

    accommodations: [
      {
        name: 'হোটেল সিটি ইন',
        area: 'খুলনা',
        type: '৪ স্টার',
        price: '৫,০০০+',
        contact: '০৪১-৭২১২৩৪',
      },
      {
        name: 'হোটেল ওয়েস্ট ইন',
        area: 'খুলনা',
        type: '৩ স্টার',
        price: '৩,৫০০+',
        contact: '০৪১-৭২৫৬৭৮',
      },
      {
        name: 'হোটেল রয়্যাল',
        area: 'বাগেরহাট',
        type: '৩ স্টার',
        price: '২,৮০০+',
        contact: '০৪৬৫-৬২৩৪৫',
      }
    ],

    restaurants: [
      {
        name: 'চিংড়ি ঘর',
        area: 'খুলনা',
        specialty: 'চিংড়ি মাছের বিভিন্ন পদ',
        price: '৪০০-৮০০ টাকা',
      },
      {
        name: 'মিষ্টান্ন ভান্ডার',
        area: 'খুলনা',
        specialty: 'খেজুরের গুড়ের মিষ্টি, পায়েস',
        price: '২০০-৫০০ টাকা',
      },
      {
        name: 'সুন্দরবন ক্যাফে',
        area: 'মংলা',
        specialty: 'স্থানীয় মাছের পদ',
        price: '৩০০-৬০০ টাকা',
      }
    ],

    shopping: [
      {
        name: 'নিউ মার্কেট',
        area: 'খুলনা',
        items: 'কাপড়, জুতা, হস্তশিল্প',
        bestTime: 'বিকাল ৪টা - রাত ৮টা'
      },
      {
        name: 'মংলা বাজার',
        area: 'মংলা',
        items: 'মাছ, শুঁটকি, স্থানীয় পণ্য',
        bestTime: 'সকাল ৭টা - সকাল ১০টা'
      }
    ],

    emergency: {
      police: '৯৯৯',
      ambulance: '১৯৯০',
      fire: '১৯৯১',
      touristPolice: '০১৭৬৯৬৯৭৫০৩',
      hospitals: [
        'খুলনা মেডিকেল কলেজ হাসপাতাল',
        'সিটি হাসপাতাল খুলনা'
      ]
    }
  },

  // ৫. রাজশাহী বিভাগ
  rajshahi: {
    name: 'রাজশাহী বিভাগ',
    bnName: 'রাজশাহী বিভাগ',
    description: 'আমের রাজধানী খ্যাত রাজশাহী। পুদিনা, সিল্ক ও ঐতিহাসিক স্থাপত্যের জন্য বিখ্যাত।',
    image: "/images/raj1.jpg",
    weather: 'উষ্ণ ও শুষ্ক',
    famousFood: ['আম', 'মিষ্টি', 'সিল্ক', 'পিঠা', 'খেজুরের রস'],
    
    attractions: [
      {
        name: 'পাহাড়পুর বৌদ্ধ বিহার',
        location: 'নওগাঁ',
        type: 'ঐতিহাসিক',
        time: 'সকাল ৯টা - বিকাল ৫টা',
        entryFee: '৫০ টাকা',
        description: 'ইউনেস্কো বিশ্ব ঐতিহ্যের অংশ, প্রাচীন বৌদ্ধ বিহার',
        howToGo: 'রাজশাহী থেকে বাসে নওগাঁ, তারপর স্থানীয় পরিবহন',
        tips: 'শীতকালে ঘুরতে ভালো, গাইড নিয়ে ঘুরলে ভালো হয়',
        image: "/images/Paharpur.jpg",
      },
      {
        name: 'মহাস্থানগড়',
        location: 'বগুড়া',
        type: 'ঐতিহাসিক',
        time: 'সকাল ৯টা - বিকাল ৫টা',
        entryFee: '৫০ টাকা',
        description: 'প্রাচীন বাংলার রাজধানী, প্রত্নতাত্ত্বিক নিদর্শন',
        howToGo: 'বগুড়া শহর থেকে বাস বা সিএনজি',
        tips: 'গরমের দিনে ছাতা সাথে নিন, জাদুঘর দেখতে ভুলবেন না',
        image: "/images/mohashtan.jpg",
      },
      {
        name: 'বরেন্দ্র জাদুঘর',
        location: 'রাজশাহী',
        type: 'জাদুঘর',
        time: 'সকাল ১০টা - বিকাল ৫টা (শুক্রবার বন্ধ)',
        entryFee: '৩০ টাকা',
        description: 'বাংলাদেশের প্রাচীন জাদুঘর, ঐতিহাসিক নিদর্শন',
        howToGo: 'রাজশাহী শহরের কেন্দ্রস্থলে অবস্থিত',
        tips: 'ছবি তোলা নিষিদ্ধ, মুক্তিযুদ্ধের কর্ণার দেখবেন',
        image: "/images/borendo.jpg",
      },
      {
        name: 'ছোট সোনা মসজিদ',
        location: 'চাঁপাইনবাবগঞ্জ',
        type: 'ঐতিহাসিক',
        time: 'সকাল ৯টা - বিকাল ৫টা',
        entryFee: '৩০ টাকা',
        description: 'মোগল আমলের মসজিদ, সোনালি রঙের কারুকাজ',
        howToGo: 'রাজশাহী থেকে বাসে চাঁপাইনবাবগঞ্জ',
        tips: 'শুক্রবারে নামাজের সময় বন্ধ থাকে',
        image: "/images/sona.jpg",
      }
    ],

    transportation: {
      bus: [
        { name: 'রাজশাহী বাস টার্মিনাল', details: 'ঢাকা ও উত্তরবঙ্গের বাস' },
        { name: 'বগুড়া বাস টার্মিনাল', details: 'স্থানীয় ও দূরপাল্লার বাস' }
      ],
      train: [
        { name: 'রাজশাহী রেলওয়ে স্টেশন', details: 'ঢাকা ও চিলহাটি রুট' },
        { name: 'বগুড়া রেলওয়ে স্টেশন', details: 'স্থানীয় ট্রেন' }
      ],
      air: [
        { name: 'শাহ মখদুম বিমানবন্দর', details: 'ঢাকা থেকে ফ্লাইট' }
      ]
    },

    accommodations: [
      {
        name: 'হোটেল নাইস ইন',
        area: 'রাজশাহী',
        type: '৪ স্টার',
        price: '৪,৫০০+',
        contact: '০৭২১-৭৭২২৩৩',
      },
      {
        name: 'হোটেল রিভার ভিউ',
        area: 'রাজশাহী',
        type: '৩ স্টার',
        price: '৩,২০০+',
        contact: '০৭২১-৭৭৩৩৪৪',
      },
      {
        name: 'হোটেল আম বাগান',
        area: 'চাঁপাইনবাবগঞ্জ',
        type: '৩ স্টার',
        price: '২,৮০০+',
        contact: '০৭৮২-৫৬৭৮৯',
      }
    ],

    restaurants: [
      {
        name: 'আম ক্যাফে',
        area: 'রাজশাহী',
        specialty: 'আমের বিভিন্ন পদ, আমের জুস',
        price: '২০০-৫০০ টাকা',
      },
      {
        name: 'মিষ্টি ঘর',
        area: 'রাজশাহী',
        specialty: 'রাজশাহীর মিষ্টি, ক্ষীর',
        price: '১৫০-৪০০ টাকা',
      },
      {
        name: 'সিল্ক সিটি রেস্টুরেন্ট',
        area: 'রাজশাহী',
        specialty: 'বাংলাদেশি ও চাইনিজ খাবার',
        price: '৩০০-৬০০ টাকা',
      }
    ],

    shopping: [
      {
        name: 'সোনাদিঘি মার্কেট',
        area: 'রাজশাহী',
        items: 'সিল্কের শাড়ি, কাপড়',
        bestTime: 'সকাল ১০টা - রাত ৮টা'
      },
      {
        name: 'আম বাজার',
        area: 'চাঁপাইনবাবগঞ্জ',
        items: 'আম, আমের পণ্য',
        bestTime: 'মে-জুলাই, সকাল ৭টা - সকাল ১০টা'
      }
    ],

    emergency: {
      police: '৯৯৯',
      ambulance: '১৯৯০',
      fire: '১৯৯১',
      touristPolice: '০১৭৬৯৬৯৭৫০৪',
      hospitals: [
        'রাজশাহী মেডিকেল কলেজ হাসপাতাল',
        'বগুড়া শহীদ জিয়াউর রহমান মেডিকেল কলেজ'
      ]
    }
  },

  // ৬. রংপুর বিভাগ
  rangpur: {
    name: 'রংপুর বিভাগ',
    bnName: 'রংপুর বিভাগ',
    description: 'উত্তরের এ অঞ্চল তার বৈচিত্র্যময় সংস্কৃতি, কারুশিল্প ও প্রাকৃতিক সৌন্দর্যের জন্য পরিচিত।',
    image: "/images/rangpur.jpg",
    bestTime: 'নভেম্বর - মার্চ',
    weather: 'শীতল',
    famousFood: ['মিষ্টি দই', 'কারুশিল্প', 'হাজিরবাড়ি', 'তিস্তার ইলিশ', 'পিঠা'],
    
    attractions: [
      {
        name: 'তাজহাট রাজবাড়ি',
        location: 'রংপুর',
        type: 'ঐতিহাসিক',
        time: 'সকাল ৯টা - বিকাল ৫টা',
        entryFee: '৩০ টাকা',
        description: 'ঐতিহাসিক রাজবাড়ি, স্থাপত্যকলার অনন্য নিদর্শন',
        howToGo: 'রংপুর শহর থেকে রিক্সা বা সিএনজি',
        tips: 'ছবি তোলার জন্য ভালো জায়গা, বিকেলে আলো সুন্দর হয়',
        image: "/images/tajhat.jpg",
      },
      {
        name: 'কান্তজীর মন্দির',
        location: 'দিনাজপুর',
        type: 'ঐতিহাসিক',
        time: 'সকাল ৯টা - বিকাল ৫টা',
        entryFee: '৫০ টাকা',
        description: 'টেরাকোটা স্থাপত্যের অনন্য নিদর্শন, হিন্দু মন্দির',
        howToGo: 'দিনাজপুর শহর থেকে বাস বা সিএনজি',
        tips: 'শীতকালে ঘুরতে ভালো, কারুকাজ দেখার মতো',
        image: "/images/mondir.jpg",
      },
      {
        name: 'তিস্তা ব্যারাজ',
        location: 'নীলফামারী',
        type: 'প্রাকৃতিক',
        time: 'সকাল ৮টা - বিকাল ৫টা',
        entryFee: 'ফ্রি',
        description: 'তিস্তা নদীর উপর নির্মিত ব্যারাজ, প্রাকৃতিক দৃশ্য',
        howToGo: 'রংপুর থেকে বাসে নীলফামারী',
        tips: 'বর্ষাকালে পানির প্রবল স্রোত দেখা যায়',
        image: "/images/tista.jpg",
      },
      {
        name: 'সীতাকোট বিহার',
        location: 'দিনাজপুর',
        type: 'ঐতিহাসিক',
        time: 'সকাল ৯টা - বিকাল ৫টা',
        entryFee: '৩০ টাকা',
        description: 'প্রাচীন বৌদ্ধ বিহারের ধ্বংসাবশেষ',
        howToGo: 'দিনাজপুর শহর থেকে স্থানীয় পরিবহন',
        tips: 'প্রত্নতাত্ত্বিক স্থান, গাইড নিয়ে ঘুরলে ভালো',
        image: "/images/bihar.jpg",
      }
    ],

    transportation: {
      bus: [
        { name: 'রংপুর বাস টার্মিনাল', details: 'ঢাকা ও উত্তরবঙ্গের বাস' },
        { name: 'দিনাজপুর বাস স্ট্যান্ড', details: 'স্থানীয় বাস সার্ভিস' }
      ],
      train: [
        { name: 'রংপুর রেলওয়ে স্টেশন', details: 'ঢাকা ও পার্বতীপুর রুট' },
        { name: 'দিনাজপুর রেলওয়ে স্টেশন', details: 'স্থানীয় ট্রেন' }
      ],
      air: [
        { name: 'সৈয়দপুর বিমানবন্দর', details: 'ঢাকা থেকে ফ্লাইট' }
      ]
    },

    accommodations: [
      {
        name: 'হোটেল উত্তর কন্যা',
        area: 'রংপুর',
        type: '৪ স্টার',
        price: '৪,০০০+',
        contact: '০৫২১-৬১২৩৪',
      },
      {
        name: 'হোটেল তিস্তা',
        area: 'নীলফামারী',
        type: '৩ স্টার',
        price: '২,৮০০+',
        contact: '০৫৫২-৫৬৭৮৯',
      },
      {
        name: 'হোটেল উত্তরার হাট',
        area: 'দিনাজপুর',
        type: '৩ স্টার',
        price: '৩,০০০+',
        contact: '০৫৩১-৬২৩৪৫',
      }
    ],

    restaurants: [
      {
        name: 'দই ঘর',
        area: 'রংপুর',
        specialty: 'মিষ্টি দই, ক্ষীর',
        price: '১৫০-৩০০ টাকা',
      },
      {
        name: 'তিস্তা ক্যাফে',
        area: 'নীলফামারী',
        specialty: 'তিস্তার ইলিশ, স্থানীয় মাছ',
        price: '৩০০-৭০০ টাকা',
      },
      {
        name: 'পিঠা পুলি',
        area: 'রংপুর',
        specialty: 'বিভিন্ন ধরনের পিঠা',
        price: '১০০-৩০০ টাকা',
      }
    ],

    shopping: [
      {
        name: 'রংপুর শহর বাজার',
        area: 'রংপুর',
        items: 'কারুশিল্প, হস্তশিল্প, কাপড়',
        bestTime: 'সকাল ১০টা - রাত ৮টা'
      },
      {
        name: 'দিনাজপুর বাজার',
        area: 'দিনাজপুর',
        items: 'কাঁঠাল, লিচু, স্থানীয় পণ্য',
        bestTime: 'সকাল ৮টা - সন্ধ্যা ৬টা'
      }
    ],

    emergency: {
      police: '৯৯৯',
      ambulance: '১৯৯০',
      fire: '১৯৯১',
      touristPolice: '০১৭৬৯৬৯৭৫০৫',
      hospitals: [
        'রংপুর মেডিকেল কলেজ হাসপাতাল',
        'দিনাজপুর মেডিকেল কলেজ হাসপাতাল'
      ]
    }
  },

  // ৭. বরিশাল বিভাগ
  barisal: {
    name: 'বরিশাল বিভাগ',
    bnName: 'বরিশাল বিভাগ',
    description: 'নদ-নদীর দেশ বরিশাল। নারিকেল, ধান ও মাছের জন্য বিখ্যাত। শান্ত প্রাকৃতিক সৌন্দর্যের লীলাভূমি।',
    image: "/images/barishal.jpg",
    bestTime: 'অক্টোবর - মার্চ',
    weather: 'মৃদু',
    famousFood: ['নারিকেল', 'চাল', 'মাছ', 'পিঠা', 'চিড়া'],
    
    attractions: [
      {
        name: 'কুয়াকাটা সমুদ্র সৈকত',
        location: 'পটুয়াখালী',
        type: 'সমুদ্র সৈকত',
        time: 'সব সময়',
        entryFee: 'ফ্রি',
        description: 'সূর্যোদয় ও সূর্যাস্ত দেখা যায় এমন সমুদ্র সৈকত',
        howToGo: 'বরিশাল থেকে বাসে কুয়াকাটা, ৩-৪ ঘণ্টা',
        tips: 'শীতকালে যাওয়া ভালো, সূর্যোদয় দেখতে ভোরেই যেতে হবে',
        image: "/images/potukhali-kuakata.webp",
      },
      {
        name: 'লালকমল নীলকমল',
        location: 'বরিশাল',
        type: 'ঐতিহাসিক',
        time: 'সকাল ৯টা - বিকাল ৫টা',
        entryFee: '৩০ টাকা',
        description: 'দুইটি প্রাচীন দীঘি, স্থানীয় কিংবদন্তি',
        howToGo: 'বরিশাল শহর থেকে রিক্সা',
        tips: 'শীতকালে ঘুরতে ভালো, পাশে মন্দির আছে',
        image: "/images/lalkomol.jpg",
      },
      {
        name: 'মঠবাড়ি',
        location: 'পিরোজপুর',
        type: 'ঐতিহাসিক',
        time: 'সকাল ৯টা - বিকাল ৫টা',
        entryFee: 'ফ্রি',
        description: 'প্রাচীন মঠ, স্থানীয় ইতিহাসের অংশ',
        howToGo: 'বরিশাল থেকে বাসে পিরোজপুর',
        tips: 'স্থানীয় গাইড নিয়ে ঘুরতে পারেন',
        image: "/images/modbari.jpg",
      },
      {
        name: 'দক্ষিণ ডিহি',
        location: 'বরিশাল',
        type: 'প্রাকৃতিক',
        time: 'সকাল ৯টা - বিকাল ৫টা',
        entryFee: 'ফ্রি',
        description: 'বড় জলাশয়, নৌকায় ঘোরার ব্যবস্থা',
        howToGo: 'বরিশাল শহর থেকে রিক্সা',
        tips: 'বিকেলে ঘুরতে ভালো, নৌকায় চড়তে পারেন',
        image: "/images/dihi.jpg",
      }
    ],

    transportation: {
      bus: [
        { name: 'বরিশাল বাস টার্মিনাল', details: 'ঢাকা ও খুলনার বাস' },
        { name: 'কুয়াকাটা বাস স্ট্যান্ড', details: 'স্থানীয় বাস সার্ভিস' }
      ],
      train: [
        { name: 'বরিশাল রেলওয়ে স্টেশন', details: 'ঢাকা ও খুলনা রুট (নির্মাণাধীন)' }
      ],
      air: [
        { name: 'বরিশাল বিমানবন্দর', details: 'ঢাকা থেকে ফ্লাইট' }
      ]
    },

    accommodations: [
      {
        name: 'হোটেল গ্র্যান্ড পার্ক',
        area: 'বরিশাল',
        type: '৪ স্টার',
        price: '৪,৫০০+',
        contact: '০৪৩১-৬৫৬৭৮',
      },
      {
        name: 'হোটেল সী ইন',
        area: 'কুয়াকাটা',
        type: '৩ স্টার',
        price: '৩,৫০০+',
        contact: '০৪৬৮-৫৬৭৮৯',
      },
      {
        name: 'হোটেল নদী ভিউ',
        area: 'বরিশাল',
        type: '৩ স্টার',
        price: '২,৮০০+',
        contact: '০৪৩১-৬২৩৪৫',
      }
    ],

    restaurants: [
      {
        name: 'নারিকেল বাগান',
        area: 'বরিশাল',
        specialty: 'নারিকেলের বিভিন্ন পদ',
        price: '২০০-৫০০ টাকা',
      },
      {
        name: 'মাছের ঘর',
        area: 'কুয়াকাটা',
        specialty: 'তাজা সামুদ্রিক মাছ',
        price: '৩০০-৭০০ টাকা',
      },
      {
        name: 'নদী ক্যাফে',
        area: 'বরিশাল',
        specialty: 'স্থানীয় খাবার, পিঠা',
        price: '১৫০-৪০০ টাকা',
      }
    ],

    shopping: [
      {
        name: 'বরিশাল নিউ মার্কেট',
        area: 'বরিশাল',
        items: 'কাপড়, জুতা, হস্তশিল্প',
        bestTime: 'বিকাল ৪টা - রাত ৮টা'
      },
      {
        name: 'কুয়াকাটা বাজার',
        area: 'কুয়াকাটা',
        items: 'শুঁটকি মাছ, স্থানীয় পণ্য',
        bestTime: 'সকাল ৮টা - সকাল ১১টা'
      }
    ],

    emergency: {
      police: '৯৯৯',
      ambulance: '১৯৯০',
      fire: '১৯৯১',
      touristPolice: '০১৭৬৯৬৯৭৫০৬',
      hospitals: [
        'বরিশাল শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল',
        'কুয়াকাটা হাসপাতাল'
      ]
    }
  },

  // ৮. ময়মনসিংহ বিভাগ
  mymensingh: {
    name: 'ময়মনসিংহ বিভাগ',
    bnName: 'ময়মনসিংহ বিভাগ',
    description: 'গারো পাহাড়ের পাদদেশে অবস্থিত এ অঞ্চল। হাওর, বন ও পাহাড়ের অপূর্ব সমন্বয়।',
    image: "/images/mymensingh.jpg",
    bestTime: 'অক্টোবর - এপ্রিল',
    weather: 'শীতল',
    famousFood: ['হাওরের চাল', 'মাছ', 'পিঠা', 'দুধ', 'মণ্ডা'],
    
    attractions: [
      {
        name: 'গারো পাহাড়',
        location: 'হালুয়াঘাট',
        type: 'প্রাকৃতিক',
        time: 'সকাল ৮টা - বিকাল ৫টা',
        entryFee: 'ফ্রি',
        description: 'পাহাড়ি এলাকা, ক্ষুদ্র নৃগোষ্ঠীর বসবাস',
        howToGo: 'ময়মনসিংহ থেকে বাসে হালুয়াঘাট',
        tips: 'স্থানীয় গাইড নিয়ে যাওয়া ভালো, পাহাড়ি পথে সাবধান',
        image: "/images/garo.jpg",
      },
      {
        name: 'মধুটিলা',
        location: 'হালুয়াঘাট',
        type: 'প্রাকৃতিক',
        time: 'সকাল ৮টা - বিকাল ৫টা',
        entryFee: '৩০ টাকা',
        description: 'পাহাড়ের চূড়া থেকে চমৎকার দৃশ্য',
        howToGo: 'হালুয়াঘাট থেকে স্থানীয় পরিবহন',
        tips: 'সকালে যাওয়া ভালো, কুয়াশার দৃশ্য অপূর্ব',
        image: "/images/modutila.jpg",
      },
      {
        name: 'শশী লজ',
        location: 'ময়মনসিংহ',
        type: 'ঐতিহাসিক',
        time: 'সকাল ১০টা - বিকাল ৫টা (শুক্রবার বন্ধ)',
        entryFee: '৫০ টাকা',
        description: 'প্রাচীন রাজবাড়ি, বর্তমানে জাদুঘর',
        howToGo: 'ময়মনসিংহ শহরের কেন্দ্রস্থলে',
        tips: 'স্থাপত্য দেখার মতো, পুরনো আসবাবপত্র আছে',
        image: "/images/shoshi.jpg",
      },
      {
        name: 'হাওর অঞ্চল',
        location: 'নেত্রকোণা',
        type: 'প্রাকৃতিক',
        time: 'বর্ষাকালে',
        entryFee: 'ফ্রি',
        description: 'বিশাল হাওর, বর্ষাকালে পানিতে ভরা',
        howToGo: 'ময়মনসিংহ থেকে বাসে নেত্রকোণা',
        tips: 'বর্ষাকালে নৌকায় ঘুরতে পারেন, শীতকালে পাখি দেখতে পাবেন',
        image: "/images/hanggor.webp",
      }
    ],

    transportation: {
      bus: [
        { name: 'ময়মনসিংহ বাস টার্মিনাল', details: 'ঢাকা ও উত্তরবঙ্গের বাস' },
        { name: 'নেত্রকোণা বাস স্ট্যান্ড', details: 'স্থানীয় বাস সার্ভিস' }
      ],
      train: [
        { name: 'ময়মনসিংহ রেলওয়ে স্টেশন', details: 'ঢাকা ও জামালপুর রুট' }
      ],
      air: [
        { name: 'ময়মনসিংহ বিমানবন্দর', details: 'নির্মাণাধীন' }
      ]
    },

    accommodations: [
      {
        name: 'হোটেল আম্বার',
        area: 'ময়মনসিংহ',
        type: '৪ স্টার',
        price: '৪,২০০+',
        contact: '০৯১-৬৩৪৫৬',
      },
      {
        name: 'হোটেল পাহাড়িকা',
        area: 'হালুয়াঘাট',
        type: '৩ স্টার',
        price: '৩,০০০+',
        contact: '০৯৫-৬২৩৪৫',
      },
      {
        name: 'হোটেল হাওর ভিউ',
        area: 'নেত্রকোণা',
        type: '৩ স্টার',
        price: '২,৮০০+',
        contact: '০৯৬-৫৬৭৮৯',
      }
    ],

    restaurants: [
      {
        name: 'হাওর ক্যাফে',
        area: 'নেত্রকোণা',
        specialty: 'হাওরের চালের পিঠা, মাছ',
        price: '২০০-৫০০ টাকা',
      },
      {
        name: 'মণ্ডা মিষ্টান্ন',
        area: 'ময়মনসিংহ',
        specialty: 'মণ্ডা, দই, মিষ্টি',
        price: '১৫০-৩০০ টাকা',
      },
      {
        name: 'পাহাড়ি ক্যাফে',
        area: 'হালুয়াঘাট',
        specialty: 'স্থানীয় খাবার, পাহাড়ি মুরগি',
        price: '২৫০-৫৫০ টাকা',
      }
    ],

    shopping: [
      {
        name: 'ময়মনসিংহ শহর বাজার',
        area: 'ময়মনসিংহ',
        items: 'কাপড়, হস্তশিল্প, মণ্ডা',
        bestTime: 'সকাল ১০টা - রাত ৮টা'
      },
      {
        name: 'গারো পাহাড় বাজার',
        area: 'হালুয়াঘাট',
        items: 'স্থানীয় পণ্য, হস্তশিল্প',
        bestTime: 'সকাল ৯টা - বিকাল ৫টা'
      }
    ],

    emergency: {
      police: '৯৯৯',
      ambulance: '১৯৯০',
      fire: '১৯৯১',
      touristPolice: '০১৭৬৯৬৯৭৫০৭',
      hospitals: [
        'ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল',
        'নেত্রকোণা জেলা হাসপাতাল'
      ]
    }
  }
};

const RegionalGuidePage = () => {
  const { divisionId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('attractions');
  
  const guideData = divisionGuides[divisionId] || divisionGuides.dhaka;

  // রেটিং দেখানোর জন্য স্টার জেনারেটর

  return (
    <div className="min-h-screen bg-stone-50">
      {/* হিরো সেকশন */}
      <section className="relative bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => navigate('/')}
            className="flex items-center text-white/90 hover:text-white mb-6 transition-all group"
          >
            <ChevronLeftIcon className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">হোম পেজে ফিরুন</span>
          </motion.button>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="relative">
              <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                <img 
                  src={guideData.image} 
                  alt={guideData.bnName}
                  className="w-full h-full object-cover"
                 loading="lazy" decoding="async" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-sky-500 w-6 h-6 rounded-full border-4 border-white"></div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tracking-tight"
              >
                {guideData.bnName}
                <span className="block text-2xl md:text-3xl font-light text-sky-200 mt-1">ভ্রমণ গাইড</span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-sky-100 mb-4 max-w-2xl mx-auto md:mx-0 leading-relaxed"
              >
                {guideData.description}
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start"
              >
                <Badge variant="primary" size="lg" className="bg-white/20 text-white border-white/30">
                  <CameraIcon className="w-4 h-4 mr-1" />
                  {guideData.attractions.length}টি দর্শনীয় স্থান
                </Badge>
                <Badge variant="success" size="lg" className="bg-white/20 text-white border-white/30">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  {guideData.bestTime}
                </Badge>
                <Badge variant="warning" size="lg" className="bg-white/20 text-white border-white/30">
                  <SunIcon className="w-4 h-4 mr-1" />
                  {guideData.weather}
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ট্যাব নেভিগেশন */}
      <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-xl border-b border-stone-200/50 shadow-sm">
        <div className="container-custom">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {[
              { id: 'attractions', icon: CameraIcon, label: 'দর্শনীয় স্থান' },
              { id: 'food', icon: CakeIcon, label: 'খাবার' },
              { id: 'stay', icon: HomeIcon, label: 'থাকার ব্যবস্থা' },
              { id: 'transport', icon: TruckIcon, label: 'যাতায়াত' },
              { id: 'shopping', icon: ShoppingBagIcon, label: 'শপিং' },
              { id: 'tips', icon: InformationCircleIcon, label: 'জরুরি তথ্য' }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-5 py-2.5 rounded-xl font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/30' 
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  <Icon className={`w-5 h-5 mr-2 ${activeTab === tab.id ? 'text-white' : 'text-stone-500'}`} />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* কন্টেন্ট এরিয়া */}
      <section className="py-16">
        <div className="container-custom">
          {/* দর্শনীয় স্থান ট্যাব */}
          {activeTab === 'attractions' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
                  📍 দর্শনীয় স্থানসমূহ
                </h2>
                <Badge variant="primary" size="lg">
                  মোট {guideData.attractions.length}টি স্থান
                </Badge>
              </div>
              
              <div className="grid gap-8">
                {guideData.attractions.map((place, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: Math.min(index, 3) * 0.06 }}
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="md:flex">
                      <div className="md:w-72 h-64 md:h-auto relative overflow-hidden">
                        <img 
                          src={place.image} 
                          alt={place.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                         loading="lazy" decoding="async" />
                        <div className="absolute top-4 left-4">
                          <Badge variant="primary" size="sm" className="bg-white/90 text-sky-600">
                            {place.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-8 flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-stone-900">{place.name}</h3>

                        </div>
                        
                        <p className="text-stone-600 mb-6 leading-relaxed">{place.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <MapPinIcon className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-stone-500">অবস্থান</p>
                                <p className="font-semibold">{place.location}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <ClockIcon className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-stone-500">সময়</p>
                                <p className="font-semibold">{place.time}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <CurrencyDollarIcon className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-stone-500">প্রবেশ মূল্য</p>
                                <p className="font-semibold">{place.entryFee}</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <TruckIcon className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-stone-500">কিভাবে যাবেন</p>
                                <p className="text-sm">{place.howToGo}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-sky-50 p-4 rounded-xl ring-1 ring-sky-100">
                          <p className="text-sm text-sky-800 flex items-start">
                            <span className="font-bold mr-2">💡 টিপস:</span>
                            {place.tips}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* খাবার ট্যাব */}
          {activeTab === 'food' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
                🍽️ স্থানীয় খাবার ও রেস্টুরেন্ট
              </h2>
              
              <div className="bg-sky-50 rounded-2xl p-8 mb-8 ring-1 ring-sky-100">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CakeIcon className="w-6 h-6 text-sky-500 mr-2" />
                  বিখ্যাত স্থানীয় খাবার
                </h3>
                <div className="flex flex-wrap gap-3">
                  {guideData.famousFood.map((food, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-5 py-2.5 bg-white text-sky-700 rounded-full text-sm font-medium shadow-sm border border-sky-200"
                    >
                      {food}
                    </motion.span>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">🍳 সেরা রেস্টুরেন্ট</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {guideData.restaurants.map((restaurant, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 ring-1 ring-stone-100 shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-stone-900">{restaurant.name}</h4>

                    </div>
                    <p className="text-stone-500 mb-2 flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      {restaurant.area}
                    </p>
                    <p className="text-stone-700 mb-3 font-medium">🍳 {restaurant.specialty}</p>
                    <p className="text-sky-700 font-bold text-lg">{restaurant.price}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* থাকার ব্যবস্থা ট্যাব */}
          {activeTab === 'stay' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
                🏨 হোটেল ও থাকার ব্যবস্থা
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {guideData.accommodations.map((hotel, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 ring-1 ring-stone-100 shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-stone-900">{hotel.name}</h4>
                        <p className="text-stone-500 flex items-center mt-1">
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          {hotel.area}
                        </p>
                      </div>
                      <Badge variant="primary" size="md" className="bg-sky-600">
                        {hotel.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">

                      <span className="text-2xl font-bold text-sky-700">{hotel.price}</span>
                    </div>
                    
                    <div className="flex items-center text-stone-600 bg-stone-50 p-3 rounded-xl ring-1 ring-stone-100">
                      <PhoneIcon className="w-4 h-4 mr-2 text-stone-500" />
                      <span>{hotel.contact}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* যাতায়াত ট্যাব */}
          {activeTab === 'transport' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
                🚌 কিভাবে যাবেন ও চলাফেরা
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* বাস */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-sky-50 rounded-2xl p-6 ring-1 ring-sky-100 shadow-sm"
                >
                  <div className="bg-sky-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <TruckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">বাস</h3>
                  <div className="space-y-3">
                    {guideData.transportation.bus.map((item, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl ring-1 ring-stone-100">
                        <p className="font-semibold text-stone-800">{item.name}</p>
                        <p className="text-sm text-stone-600 mt-1">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* ট্রেন */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-sky-50 rounded-2xl p-6 ring-1 ring-sky-100 shadow-sm"
                >
                  <div className="bg-sky-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <BuildingOfficeIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">ট্রেন</h3>
                  <div className="space-y-3">
                    {guideData.transportation.train.map((item, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl ring-1 ring-stone-100">
                        <p className="font-semibold text-stone-800">{item.name}</p>
                        <p className="text-sm text-stone-600 mt-1">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* বিমান */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-sky-50 rounded-2xl p-6 ring-1 ring-sky-100 shadow-sm"
                >
                  <div className="bg-sky-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <PaperAirplaneIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">বিমান</h3>
                  <div className="space-y-3">
                    {guideData.transportation.air.map((item, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl ring-1 ring-stone-100">
                        <p className="font-semibold text-stone-800">{item.name}</p>
                        <p className="text-sm text-stone-600 mt-1">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* শপিং ট্যাব */}
          {activeTab === 'shopping' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
                🛍️ শপিং ও মার্কেট
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {guideData.shopping.map((shop, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 ring-1 ring-stone-100 shadow-sm hover:shadow-xl transition-all"
                  >
                    <h4 className="text-xl font-bold text-stone-900 mb-2">{shop.name}</h4>
                    <p className="text-stone-500 mb-3 flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      {shop.area}
                    </p>
                    <p className="text-stone-700 mb-3">{shop.items}</p>
                    <div className="flex items-center text-sky-600 bg-sky-50 p-3 rounded-xl ring-1 ring-sky-100">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span className="font-medium">⏰ {shop.bestTime}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* জরুরি তথ্য ট্যাব */}
          {activeTab === 'tips' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
                📞 জরুরি তথ্য ও টিপস
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* জরুরি নম্বর */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-red-50 rounded-2xl p-6 ring-1 ring-red-100 shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center text-red-700">
                    <span className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center mr-2">
                      🚨
                    </span>
                    জরুরি নম্বর
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl ring-1 ring-stone-100 flex justify-between items-center">
                      <span className="font-medium">পুলিশ</span>
                      <span className="text-2xl font-bold text-red-600">{guideData.emergency.police}</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl ring-1 ring-stone-100 flex justify-between items-center">
                      <span className="font-medium">অ্যাম্বুলেন্স</span>
                      <span className="text-2xl font-bold text-red-600">{guideData.emergency.ambulance}</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl ring-1 ring-stone-100 flex justify-between items-center">
                      <span className="font-medium">ফায়ার সার্ভিস</span>
                      <span className="text-2xl font-bold text-red-600">{guideData.emergency.fire}</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl ring-1 ring-stone-100 flex justify-between items-center">
                      <span className="font-medium">ট্যুরিস্ট পুলিশ</span>
                      <span className="text-xl font-bold text-red-600">{guideData.emergency.touristPolice}</span>
                    </div>
                  </div>
                </motion.div>

                {/* হাসপাতাল */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-sky-50 rounded-2xl p-6 ring-1 ring-sky-100 shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center text-sky-700">
                    <span className="w-8 h-8 bg-sky-100 rounded-xl flex items-center justify-center mr-2">
                      🏥
                    </span>
                    হাসপাতাল
                  </h3>
                  <div className="space-y-3">
                    {guideData.emergency.hospitals.map((hospital, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl ring-1 ring-stone-100">
                        <p className="font-semibold">{hospital}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* ভ্রমণ টিপস */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 ring-1 ring-stone-100 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center text-stone-900">
                  <span className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center mr-3">
                    💡
                  </span>
                  ভ্রমণ টিপস
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sky-600 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mr-2">✅</span>
                      করণীয়
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-stone-700">
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
                        আগে থেকে হোটেল বুক করুন (পিক সিজনে)
                      </li>
                      <li className="flex items-center text-stone-700">
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
                        পাহাড়ি এলাকায় স্থানীয় গাইড নিন
                      </li>
                      <li className="flex items-center text-stone-700">
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
                        প্রয়োজনীয় ওষুধ সাথে রাখুন
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">❌</span>
                      বর্জনীয়
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-stone-700">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                        একা রাতে বের হবেন না
                      </li>
                      <li className="flex items-center text-stone-700">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                        স্থানীয় সংস্কৃতিকে অসম্মান করবেন না
                      </li>
                      <li className="flex items-center text-stone-700">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                        পরিবেশ নোংরা করবেন না
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RegionalGuidePage;