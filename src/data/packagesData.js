const packagesData = [

  // ================= 1️⃣ SAJEK – BTG =================
  {
    id: 801,
    destinationSlug: "sajek",
    companyId: 1,
categories: ["Single", "Family", "Couple", "Adventure", "Group"],
    title: "মেঘের রাজ্য সাজেক ভ্যালি",
    location: "সাজেক ভ্যালি",
    duration: "৩ রাত ২ দিন",
    tourStart: "Every Thursday",
    image: "/images/company/btg/packages/sajek/btg-sajek.jpg",

    pricing: {
      perPerson: 2899,
      couplePrice: 8000,
    },

    description:
      "ঢাকা - খাগড়াছড়ি - সাজেক ভ্রমণ। রুইলুই পাড়া, কংলাক পাহাড়, সূর্যোদয় দর্শন।",

    included: [
      "ঢাকা - খাগড়াছড়ি - ঢাকা বাস",
      "১ রাত রিসোর্ট",
      "৫ বেলা খাবার",
    ],

    excluded: [
      "চাঁদের গাড়ি খরচ",
      "এন্ট্রি ফি",
      "সার্ভিস চার্জ",
    ],

    tourPlan: [
      { day: "Day 1", details: "রাত ১০ টায় ঢাকা থেকে যাত্রা।" },
      { day: "Day 2", details: "রুইলুই পাড়া ও কংলাক পাহাড় ভ্রমণ।" },
      { day: "Day 3", details: "সূর্যোদয় দেখে ঢাকায় ফেরা।" },
    ],

    places: [
      { name: "রুইলুই পাড়া", image: "/images/places/ruilui.jpg" },
      { name: "কংলাক পাহাড়", image: "/images/places/konglak.jpg" },
      { name: "হেলিপ্যাড", image: "/images/places/sajek-helipad.jpg" },
    ],
  },

  // ================= 2️⃣ RANGAMATI – VROMON BARI =================
  {
    id: 802,
    destinationSlug: "rangamati",
    companyId: 2,
categories: ["Single", "Family", "Couple", "Group"],
    title: "লাল পাহাড়ের দেশ - রাঙ্গামাটি",
    location: "রাঙ্গামাটি - কাপ্তাই লেক",
    duration: "২ রাত ১ দিন",
    tourStart: "Every Thursday",
    image: "/images/company/btg/packages/rangamati/btg-rangamati.jpg",

    pricing: {
      perPerson: 1699,
      couplePrice: null,
    },

    description:
      "কাপ্তাই লেক, শুভলং ঝর্ণা, ঝুলন্ত ব্রিজ ভ্রমণ।",

    included: [
      "ঢাকা - রাঙ্গামাটি বাস",
      "সকাল + দুপুর খাবার",
      "ট্রলার ভাড়া",
    ],

    excluded: [
      "ব্যক্তিগত খরচ",
      "সার্ভিস চার্জ",
    ],

    tourPlan: [
      { day: "Day 1", details: "রাতে ঢাকা থেকে যাত্রা।" },
      { day: "Day 2", details: "কাপ্তাই লেক ও শুভলং ঝর্ণা ভ্রমণ।" },
    ],

    places: [
      { name: "কাপ্তাই লেক", image: "/images/places/kaptai.jpg" },
      { name: "শুভলং ঝর্ণা", image: "/images/places/shuvolong.jpg" },
      { name: "ঝুলন্ত ব্রিজ", image: "/images/places/bridge.jpg" },
    ],
  },

  // ================= 3️⃣ COX DAY LONG – BTG =================
  {
    id: 803,
    destinationSlug: "coxsbazar",
    companyId: 1,
categories: ["Single", "Family", "Couple", "Group"],
    title: "কক্সবাজার ডে লং ট্যুর",
    location: "কক্সবাজার",
    duration: "১ দিন",
    tourStart: "Every Thursday",
    image: "/images/company/btg/packages/cox/coxs.jpg",

    pricing: {
      perPerson: 999,
      couplePrice: null,
    },

    description:
      "সুগন্ধা, লাবনী, ইনানি ও হিমছড়ি ভ্রমণ।",

    included: [
      "ঢাকা - কক্সবাজার বাস",
      "সকাল ও দুপুর খাবার",
      "গাইড",
    ],

    excluded: [
      "ইনানি যাতায়াত",
      "এন্ট্রি ফি",
    ],

    tourPlan: [
      { day: "Day Tour", details: "সকাল থেকে সমুদ্র ভ্রমণ।" },
    ],

    places: [
      { name: "সুগন্ধা বিচ", image: "/images/places/sugandha.jpg" },
      { name: "লাবনী বিচ", image: "/images/places/laboni.jpg" },
      { name: "ইনানি বিচ", image: "/images/places/inani.webp" },
      { name: "হিমছড়ি", image: "/images/places/himchori.webp" },
    ],
  },

  // ================= 4️⃣ BANDARBAN + COX – BTG =================
  {
    id: 804,
    destinationSlug: "bandarban",
    companyId: 1,
categories: ["Single", "Family", "Couple", "Group"],
    title: "বান্দরবন সিটি ও কক্সবাজার",
    location: "বান্দরবন - কক্সবাজার",
    duration: "৩ রাত ২ দিন",
    tourStart: "Every Thursday",
    image: "/images/company/btg/packages/bandarban/btg-bandarban.jpg",

    pricing: {
      perPerson: 3499,
      couplePrice: 8000,
    },

    description:
      "নীলগিরি, নীলাচল, চিম্বুক পাহাড় ও কক্সবাজার ভ্রমণ।",

    included: [
      "বাস সার্ভিস",
      "৫ বেলা খাবার",
      "১ রাত হোটেল",
    ],

    excluded: [
      "চাঁদের গাড়ি",
      "এন্ট্রি ফি",
    ],

    tourPlan: [
      { day: "Day 1", details: "ঢাকা থেকে বান্দরবন যাত্রা।" },
      { day: "Day 2", details: "নীলগিরি, নীলাচল, চিম্বুক পাহাড়।" },
      { day: "Day 3", details: "কক্সবাজার সমুদ্র ভ্রমণ।" },
    ],

    places: [
      { name: "নীলগিরি", image: "/images/places/nilgiri.jpg" },
      { name: "নীলাচল", image: "/images/places/nilachal.jpg" },
      { name: "চিম্বুক পাহাড়", image: "/images/places/chimbuk.webp" },
      { name: "কক্সবাজার", image: "/images/places/cox.jpg" },
    ],
  },

  // ================= 5️⃣ SAINT MARTIN – BTG =================
  {
    id: 805,
    destinationSlug: "saintmartin",
    companyId: 1,
categories: ["Single", "Family", "Couple", "Group"],
    title: "সেন্টমার্টিন ভ্রমণ",
    location: "কক্সবাজার - সেন্টমার্টিন",
    duration: "৪ রাত ৩ দিন",
    tourStart: "Every Thursday",
    image: "/images/company/btg/packages/saintmartin/btg-saintmartin.jpg",

    pricing: {
      perPerson: 7999,
      couplePrice: 17000,
    },

    description:
      "সেন্টমার্টিন দ্বীপ, নাফ নদী ও দারুচিনি দ্বীপ ভ্রমণ।",

    included: [
      "বাস",
      "শিপ টিকেট",
      "৭ বেলা খাবার",
      "রিসোর্ট ২ রাত",
    ],

    excluded: [
      "মিনারেল ওয়াটার",
      "সার্ভিস চার্জ",
    ],

    tourPlan: [
      { day: "Day 1", details: "ঢাকা থেকে কক্সবাজার।" },
      { day: "Day 2", details: "শিপে সেন্টমার্টিন যাত্রা।" },
      { day: "Day 3", details: "সমুদ্র ও ফ্রি টাইম।" },
    ],

    places: [
      { name: "সেন্টমার্টিন দ্বীপ", image: "/images/places/stmartin.jpg" },
      { name: "নাফ নদী", image: "/images/places/naf.jpg" },
      { name: "দারুচিনি দ্বীপ", image: "/images/places/daruchini.jpg" },
    ],
  },

  // ================= 6️⃣ DEBOTA KHUM – BTG =================
  {
    id: 806,
    destinationSlug: "bandarban",
    companyId: 1,
categories: ["Single", "Family", "Group"],
    title: "দেবতাখুম ডে লং ট্যুর",
    location: "দেবতাখুম - বান্দরবন",
    duration: "ডে লং",
    tourStart: "Every Thursday",
    image: "/images/company/btg/packages/debotakhum/btg-debotakhum.jpeg",

    pricing: {
      perPerson: 1399,
      couplePrice: null,
    },

    description:
      "দেবতাখুম, রোয়াংছড়ি, শীলবান্ধা ঝর্ণা ভ্রমণ।",

    included: [
      "বাস",
      "২ বেলা খাবার",
      "চাঁদের গাড়ি",
    ],

    excluded: [
      "লাইফ জ্যাকেট",
      "এন্ট্রি ফি",
    ],

    tourPlan: [
      { day: "Day Tour", details: "দেবতাখুম ট্রেকিং ও ভেলা ভ্রমণ।" },
    ],

    places: [
      { name: "দেবতাখুম", image: "/images/places/debotakhum.jpg" },
      { name: "রোয়াংছড়ি", image: "/images/places/roangchori.webp" },
      { name: "শীলবান্ধা ঝর্ণা", image: "/images/places/shilbandha.jpg" },
    ],
  },

  // ================= 7️⃣ SREEMANGAL – GREEN BELT =================
{
  id: 906,
  destinationSlug: "sreemangal",
  companyId: 2,

  categories: ["Family", "Couple", "Group"],

  title: "শ্রীমঙ্গল টি গার্ডেন ট্যুর",
  location: "শ্রীমঙ্গল - সিলেট",
  duration: "২ রাত ১ দিন",
  tourStart: "Every Friday",
  image: "/images/destinations/sreemangal.jpg",

  pricing: {
    perPerson: 5000,
    couplePrice: 10500,
  },

  description:
    "চা বাগান, লাউয়াছড়া জাতীয় উদ্যান, মাধবপুর লেক ও বাইক্কা বিল ভ্রমণ।",

  included: [
    "ঢাকা - শ্রীমঙ্গল যাতায়াত",
    "১ রাত হোটেল থাকা",
    "৫ বেলা খাবার",
    "লোকাল ট্রান্সপোর্ট",
    "গাইড সার্ভিস",
  ],

  excluded: [
    "এন্ট্রি ফি",
    "ব্যক্তিগত খরচ",
  ],

  tourPlan: [
    { day: "Day 1", details: "চা বাগান, মাধবপুর লেক ও মনিপুরি গ্রাম ভ্রমণ।" },
    { day: "Day 2", details: "লাউয়াছড়া বন ও বাইক্কা বিল ঘুরে ঢাকায় ফেরা।" },
  ],

  places: [
    { name: "লাউয়াছড়া জাতীয় উদ্যান", image: "/images/places/lawachara.webp" },
    { name: "মাধবপুর লেক", image: "/images/places/madhabpur.webp" },
    { name: "মালিনিছড়া চা বাগান", image: "/images/places/malinichara.jpg" },
    { name: "বাইক্কা বিল", image: "/images/places/baikka.jpg" },
  ],
},
// ================= 8️⃣ SUNDARBAN – KITE =================
{
  id: 907,
  destinationSlug: "sundarban",
  companyId: 3,

  categories: ["Adventure", "Group"],

  title: "সুন্দরবন ২ রাত ৩ দিন ট্যুর",
  location: "খুলনা - সুন্দরবন",
  duration: "২ রাত ৩ দিন",
  tourStart: "Weekly",
  image: "/images/destinations/sundarban/cover.jpg",

  pricing: {
    perPerson: 8500,
    couplePrice: null,
  },

  description:
    "রয়েল বেঙ্গল টাইগার, ম্যানগ্রোভ বন, করমজল ও কটকা সমুদ্র সৈকত ভ্রমণ।",

  included: [
    "লঞ্চ/শীপে থাকা",
    "সব বেলা খাবার",
    "ফরেস্ট পারমিট ও এন্ট্রি ফি",
    "গাইড ও নিরাপত্তা গার্ড",
  ],

  excluded: [
    "ঢাকা থেকে খুলনা যাতায়াত",
    "ব্যক্তিগত খরচ",
  ],

  tourPlan: [
    { day: "Day 1", details: "খুলনা থেকে সুন্দরবন প্রবেশ ও ক্যানেল ভ্রমণ।" },
    { day: "Day 2", details: "কটকা, জামতলা ও হিরণ পয়েন্ট ঘোরা।" },
    { day: "Day 3", details: "সকাল ক্যানেল ক্রুজ শেষে ফেরা।" },
  ],

  places: [
    { name: "করমজল", image: "/images/places/karamjal.jpg" },
    { name: "কটকা", image: "/images/places/kotka.jpg" },
    { name: "জামতলা সৈকত", image: "/images/places/jamtala.jpg" },
    { name: "হিরণ পয়েন্ট", image: "/images/places/hironpoint.jpeg" },
  ],
},

];

export default packagesData;