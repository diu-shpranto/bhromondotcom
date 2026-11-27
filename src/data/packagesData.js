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
    companyId: 1,
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
    tourStart: "সিজন: ১ নভেম্বর ২০২৬ – ১৫ মার্চ ২০২৭",
    image: "/images/company/btg/packages/saintmartin/btg-saintmartin.jpg",

    pricing: {
      perPerson: 6999,
      couplePrice: null,
    },

    description:
      "সেন্টমার্টিন দ্বীপ, নাফ নদী ও দারুচিনি দ্বীপ ভ্রমণ। সিজন ১ নভেম্বর ২০২৬ – ১৫ মার্চ ২০২৭; ট্রাভেল পাস ও জনপ্রতি ৳১০০ পরিবেশ ফি লাগবে। জাহাজ: কর্ণফুলী এক্সপ্রেস, বারো আউলিয়া, টেকনাফ। নভেম্বর ২০২৬-এ জাহাজের টিকিটে ৫% ছাড়।",

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
  companyId: 1,

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


// ================= 9️⃣ VROMON BARI WEEKLY — COX BUDGET =================
{
  id: 908,
  destinationSlug: "coxsbazar",
  companyId: 2,
  categories: ["Single", "Family", "Couple", "Group"],
  title: "কক্সবাজার বাজেট ট্যুর",
  location: "কক্সবাজার",
  duration: "৩ রাত ২ দিন",
  tourStart: "Every Thursday",
  image: "/images/company/btg/packages/cox/coxs.jpg",
  pricing: { perPerson: 2499, couplePrice: 6499 },
  description:
    "ভ্রমণ বাড়ির সাপ্তাহিক ট্যুর — প্রতি বৃহস্পতিবার রাতে সায়েদাবাদ থেকে ছাড়ে। হোটেল: Sea Welcome / Grand Beach বা সমমানের। বুকিং: ০১৫৩৩-০৯৬৮০৯।",
  included: [
    "সায়েদাবাদ - কক্সবাজার রিজার্ভ বাস",
    "১ রাত নন-এসি রুম",
    "৫ বেলা খাবার",
    "গাইড",
  ],
  excluded: [
    "মেরিন ড্রাইভ, হিমছড়ি ও লাল কাঁকড়া বিচ যাতায়াত",
    "ব্যক্তিগত খরচ",
  ],
  tourPlan: [
    { day: "Day 1", details: "বৃহস্পতিবার রাতে সায়েদাবাদ থেকে যাত্রা।" },
    { day: "Day 2", details: "কক্সবাজার সমুদ্র ভ্রমণ।" },
    { day: "Day 3", details: "সকালে ঘুরে ঢাকায় ফেরা।" },
  ],
  places: [
    { name: "সুগন্ধা বিচ", image: "/images/places/sugandha.jpg" },
    { name: "লাবনী বিচ", image: "/images/places/laboni.jpg" },
    { name: "ইনানি বিচ", image: "/images/places/inani.webp" },
  ],
},
// ================= 🔟 VROMON BARI — SAINT MARTIN =================
{
  id: 909,
  destinationSlug: "saintmartin",
  companyId: 2,
  categories: ["Single", "Family", "Couple", "Group"],
  title: "সেন্টমার্টিন ভ্রমণ",
  location: "কক্সবাজার - সেন্টমার্টিন",
  duration: "৪ রাত ৩ দিন",
  tourStart: "Every Thursday",
  image: "/images/destinations/saintmartin/cover.jpg",
  pricing: { perPerson: 8499, couplePrice: 18499 },
  description:
    "ভ্রমণ বাড়ির সাপ্তাহিক ট্যুর — প্রতি বৃহস্পতিবার রাতে সায়েদাবাদ থেকে ছাড়ে। সিজন ১ নভেম্বর ২০২৬ – ১৫ মার্চ ২০২৭; ট্রাভেল পাস ও পরিবেশ ফি অন্তর্ভুক্ত। বুকিং: ০১৫৩৩-০৯৬৮০৯।",
  included: [
    "ঢাকা - কক্সবাজার - ঢাকা বাস",
    "রিসোর্টে ২ রাত",
    "জাহাজ টিকেট (বারো আউলিয়া / টেকনাফ / মালঞ্চ)",
    "৭ বেলা খাবার",
    "পরিবেশ ফি",
  ],
  excluded: [
    "ছেঁড়া দ্বীপ ভ্রমণ খরচ",
    "প্রথম দিনের সকালের নাস্তা ও যাত্রা/ফেরার দিনের রাতের খাবার",
    "ব্যক্তিগত খরচ",
  ],
  tourPlan: [
    { day: "Day 1", details: "বৃহস্পতিবার রাতে ঢাকা থেকে যাত্রা।" },
    { day: "Day 2", details: "জাহাজে সেন্টমার্টিন যাত্রা।" },
    { day: "Day 3", details: "সমুদ্র ও ফ্রি টাইম।" },
    { day: "Day 4", details: "ফিরতি জাহাজ ও বাসে ঢাকায় ফেরা।" },
  ],
  places: [
    { name: "সেন্টমার্টিন দ্বীপ", image: "/images/places/stmartin.jpg" },
    { name: "নাফ নদী", image: "/images/places/naf.jpg" },
    { name: "দারুচিনি দ্বীপ", image: "/images/places/daruchini.jpg" },
  ],
},
// ================= 1️⃣1️⃣ VROMON BARI — COX PREMIUM SLEEPER =================
{
  id: 910,
  destinationSlug: "coxsbazar",
  companyId: 2,
  categories: ["Family", "Couple", "Group"],
  title: "কক্সবাজার প্রিমিয়াম স্লিপার ট্যুর",
  location: "কক্সবাজার",
  duration: "৪ রাত ৩ দিন",
  tourStart: "Every Thursday",
  image: "/images/company/btg/packages/cox/coxs.jpg",
  pricing: { perPerson: 4999, couplePrice: null },
  description:
    "ভ্রমণ বাড়ির সাপ্তাহিক ট্যুর — প্রতি বৃহস্পতিবার রাতে সায়েদাবাদ থেকে ছাড়ে। বিস্তারিত ও বুকিং: ০১৫৩৩-০৯৬৮০৯।",
  included: [ "ঢাকা - কক্সবাজার যাতায়াত", "হোটেলে থাকা", "খাবার", "গাইড সার্ভিস" ],
  excluded: [ "ব্যক্তিগত খরচ", "সার্ভিস চার্জ" ],
  tourPlan: [
    { day: "Day 1", details: "বৃহস্পতিবার রাতে ঢাকা থেকে যাত্রা।" },
    { day: "Day 2", details: "কক্সবাজার সমুদ্র ভ্রমণ।" },
    { day: "Day 3", details: "ইনানি ও হিমছড়ি ভ্রমণ।" },
    { day: "Day 4", details: "ঢাকায় ফেরা।" },
  ],
  places: [
    { name: "সুগন্ধা বিচ", image: "/images/places/sugandha.jpg" },
    { name: "লাবনী বিচ", image: "/images/places/laboni.jpg" },
    { name: "ইনানি বিচ", image: "/images/places/inani.webp" },
    { name: "হিমছড়ি", image: "/images/places/himchori.webp" },
  ],
},
// ================= 1️⃣2️⃣ VROMON BARI — COX SAMUDRA BILAS =================
{
  id: 911,
  destinationSlug: "coxsbazar",
  companyId: 2,
  categories: ["Family", "Couple", "Group"],
  title: "কক্সবাজার সমুদ্র বিলাস ট্যুর",
  location: "কক্সবাজার",
  duration: "৪ রাত ৩ দিন",
  tourStart: "Every Thursday",
  image: "/images/company/btg/packages/cox/coxs.jpg",
  pricing: { perPerson: 3499, couplePrice: null },
  description:
    "ভ্রমণ বাড়ির সাপ্তাহিক ট্যুর — প্রতি বৃহস্পতিবার রাতে সায়েদাবাদ থেকে ছাড়ে। বিস্তারিত ও বুকিং: ০১৫৩৩-০৯৬৮০৯।",
  included: [ "ঢাকা - কক্সবাজার যাতায়াত", "হোটেলে থাকা", "খাবার", "গাইড সার্ভিস" ],
  excluded: [ "ব্যক্তিগত খরচ", "সার্ভিস চার্জ" ],
  tourPlan: [
    { day: "Day 1", details: "বৃহস্পতিবার রাতে ঢাকা থেকে যাত্রা।" },
    { day: "Day 2", details: "কক্সবাজার সমুদ্র ভ্রমণ।" },
    { day: "Day 3", details: "ইনানি ও হিমছড়ি ভ্রমণ।" },
    { day: "Day 4", details: "ঢাকায় ফেরা।" },
  ],
  places: [
    { name: "সুগন্ধা বিচ", image: "/images/places/sugandha.jpg" },
    { name: "লাবনী বিচ", image: "/images/places/laboni.jpg" },
    { name: "ইনানি বিচ", image: "/images/places/inani.webp" },
  ],
},
// ================= 1️⃣3️⃣ VROMON BARI — SYLHET RELAX =================
{
  id: 912,
  destinationSlug: "sylhet",
  companyId: 2,
  categories: ["Family", "Couple", "Group"],
  title: "সিলেট রিলাক্স ট্যুর",
  location: "সিলেট",
  duration: "৩ রাত ২ দিন",
  tourStart: "Every Thursday",
  image: "/images/destinations/sreemangal.jpg",
  pricing: { perPerson: 3499, couplePrice: null },
  description:
    "ভ্রমণ বাড়ির সাপ্তাহিক ট্যুর — প্রতি বৃহস্পতিবার রাতে সায়েদাবাদ থেকে ছাড়ে। বিস্তারিত ও বুকিং: ০১৫৩৩-০৯৬৮০৯।",
  included: [ "ঢাকা - সিলেট যাতায়াত", "হোটেলে থাকা", "খাবার", "গাইড সার্ভিস" ],
  excluded: [ "ব্যক্তিগত খরচ", "এন্ট্রি ফি" ],
  tourPlan: [
    { day: "Day 1", details: "বৃহস্পতিবার রাতে ঢাকা থেকে যাত্রা।" },
    { day: "Day 2", details: "সিলেটের দর্শনীয় স্থান ভ্রমণ।" },
    { day: "Day 3", details: "ঘুরে ঢাকায় ফেরা।" },
  ],
},
// ================= 1️⃣4️⃣ VROMON BARI — BANDARBAN RELAX =================
{
  id: 913,
  destinationSlug: "bandarban",
  companyId: 2,
  categories: ["Family", "Couple", "Group"],
  title: "বান্দরবান রিলাক্স ট্যুর",
  location: "বান্দরবান",
  duration: "৩ রাত ২ দিন",
  tourStart: "Every Thursday",
  image: "/images/destinations/bandarban/cover.jpg",
  pricing: { perPerson: 3999, couplePrice: null },
  description:
    "ভ্রমণ বাড়ির সাপ্তাহিক ট্যুর — প্রতি বৃহস্পতিবার রাতে সায়েদাবাদ থেকে ছাড়ে। বিস্তারিত ও বুকিং: ০১৫৩৩-০৯৬৮০৯।",
  included: [ "ঢাকা - বান্দরবান যাতায়াত", "হোটেলে থাকা", "খাবার", "গাইড সার্ভিস" ],
  excluded: [ "চাঁদের গাড়ি খরচ", "এন্ট্রি ফি" ],
  tourPlan: [
    { day: "Day 1", details: "বৃহস্পতিবার রাতে ঢাকা থেকে যাত্রা।" },
    { day: "Day 2", details: "নীলগিরি, নীলাচল, চিম্বুক পাহাড়।" },
    { day: "Day 3", details: "ঘুরে ঢাকায় ফেরা।" },
  ],
  places: [
    { name: "নীলগিরি", image: "/images/places/nilgiri.jpg" },
    { name: "নীলাচল", image: "/images/places/nilachal.jpg" },
    { name: "চিম্বুক পাহাড়", image: "/images/places/chimbuk.webp" },
  ],
},
// ================= 1️⃣5️⃣ VROMON BARI — BOGALAKE & KEOKRADONG =================
{
  id: 914,
  destinationSlug: "bandarban",
  companyId: 2,
  categories: ["Adventure", "Group"],
  title: "বগালেক ও কেওক্রাডং রিলাক্স ট্যুর",
  location: "বগালেক - বান্দরবান",
  duration: "৩ রাত ২ দিন",
  tourStart: "Every Thursday",
  image: "/images/destinations/bandarban/cover.jpg",
  pricing: { perPerson: 4499, couplePrice: null },
  description:
    "ভ্রমণ বাড়ির সাপ্তাহিক ট্যুর — প্রতি বৃহস্পতিবার রাতে সায়েদাবাদ থেকে ছাড়ে। বিস্তারিত ও বুকিং: ০১৫৩৩-০৯৬৮০৯।",
  included: [ "ঢাকা - বান্দরবান যাতায়াত", "হোটেলে থাকা", "খাবার", "গাইড সার্ভিস" ],
  excluded: [ "ব্যক্তিগত খরচ", "এন্ট্রি ফি" ],
  tourPlan: [
    { day: "Day 1", details: "বৃহস্পতিবার রাতে ঢাকা থেকে যাত্রা।" },
    { day: "Day 2", details: "বগালেক ভ্রমণ।" },
    { day: "Day 3", details: "কেওক্রাডং ঘুরে ঢাকায় ফেরা।" },
  ],
  places: [
    { name: "নীলগিরি", image: "/images/places/nilgiri.jpg" },
    { name: "নীলাচল", image: "/images/places/nilachal.jpg" },
  ],
},
// ================= 1️⃣6️⃣ VROMON BARI — RANGAMATI DAY =================
{
  id: 915,
  destinationSlug: "rangamati",
  companyId: 2,
  categories: ["Single", "Family", "Group"],
  title: "রাঙ্গামাটি ডে ট্যুর",
  location: "রাঙ্গামাটি - কাপ্তাই লেক",
  duration: "২ রাত ১ দিন",
  tourStart: "Every Thursday",
  image: "/images/company/btg/packages/rangamati/btg-rangamati.jpg",
  pricing: { perPerson: 1599, couplePrice: null },
  description:
    "ভ্রমণ বাড়ির সাপ্তাহিক ট্যুর — প্রতি বৃহস্পতিবার রাতে সায়েদাবাদ থেকে ছাড়ে। বিস্তারিত ও বুকিং: ০১৫৩৩-০৯৬৮০৯।",
  included: [ "ঢাকা - রাঙ্গামাটি যাতায়াত", "খাবার", "ট্রলার ভাড়া", "গাইড সার্ভিস" ],
  excluded: [ "ব্যক্তিগত খরচ", "সার্ভিস চার্জ" ],
  tourPlan: [
    { day: "Day 1", details: "বৃহস্পতিবার রাতে ঢাকা থেকে যাত্রা।" },
    { day: "Day 2", details: "কাপ্তাই লেক ও শুভলং ঝর্ণা ভ্রমণ।" },
  ],
  places: [
    { name: "কাপ্তাই লেক", image: "/images/places/kaptai.jpg" },
    { name: "শুভলং ঝর্ণা", image: "/images/places/shuvolong.jpg" },
    { name: "ঝুলন্ত ব্রিজ", image: "/images/places/bridge.jpg" },
  ],
},
// ================= 1️⃣7️⃣ VROMON BARI — SYLHET BHOLAGANJ DAY =================
{
  id: 916,
  destinationSlug: "sylhet",
  companyId: 2,
  categories: ["Single", "Family", "Group"],
  title: "সিলেট ভোলাগঞ্জ ডে ট্যুর",
  location: "সিলেট - ভোলাগঞ্জ",
  duration: "২ রাত ১ দিন",
  tourStart: "Every Thursday",
  image: "/images/destinations/sreemangal.jpg",
  pricing: { perPerson: 1599, couplePrice: null },
  description:
    "ভ্রমণ বাড়ির সাপ্তাহিক ট্যুর — প্রতি বৃহস্পতিবার রাতে সায়েদাবাদ থেকে ছাড়ে। বিস্তারিত ও বুকিং: ০১৫৩৩-০৯৬৮০৯।",
  included: [ "ঢাকা - সিলেট যাতায়াত", "খাবার", "গাইড সার্ভিস" ],
  excluded: [ "ব্যক্তিগত খরচ", "এন্ট্রি ফি" ],
  tourPlan: [
    { day: "Day 1", details: "বৃহস্পতিবার রাতে ঢাকা থেকে যাত্রা।" },
    { day: "Day 2", details: "ভোলাগঞ্জ সাদা পাথর ভ্রমণ।" },
  ],
},
// ================= 1️⃣8️⃣ VROMON BARI — BANDARBAN CITY DAY =================
{
  id: 917,
  destinationSlug: "bandarban",
  companyId: 2,
  categories: ["Single", "Family", "Group"],
  title: "বান্দরবান সিটি ডে ট্যুর",
  location: "বান্দরবান",
  duration: "২ রাত ১ দিন",
  tourStart: "Every Thursday",
  image: "/images/destinations/bandarban/cover.jpg",
  pricing: { perPerson: 2199, couplePrice: null },
  description:
    "ভ্রমণ বাড়ির সাপ্তাহিক ট্যুর — প্রতি বৃহস্পতিবার রাতে সায়েদাবাদ থেকে ছাড়ে। বিস্তারিত ও বুকিং: ০১৫৩৩-০৯৬৮০৯।",
  included: [ "ঢাকা - বান্দরবান যাতায়াত", "খাবার", "গাইড সার্ভিস" ],
  excluded: [ "ব্যক্তিগত খরচ", "এন্ট্রি ফি" ],
  tourPlan: [
    { day: "Day 1", details: "বৃহস্পতিবার রাতে ঢাকা থেকে যাত্রা।" },
    { day: "Day 2", details: "বান্দরবান শহর ও আশপাশ ভ্রমণ।" },
  ],
  places: [
    { name: "নীলগিরি", image: "/images/places/nilgiri.jpg" },
    { name: "নীলাচল", image: "/images/places/nilachal.jpg" },
  ],
},
// ================= 1️⃣9️⃣ VROMON BARI — COX DAY =================
{
  id: 918,
  destinationSlug: "coxsbazar",
  companyId: 2,
  categories: ["Single", "Family", "Group"],
  title: "কক্সবাজার ডে ট্যুর",
  location: "কক্সবাজার",
  duration: "২ রাত ১ দিন",
  tourStart: "Every Thursday",
  image: "/images/company/btg/packages/cox/coxs.jpg",
  pricing: { perPerson: 1599, couplePrice: null },
  description:
    "ভ্রমণ বাড়ির সাপ্তাহিক ট্যুর — প্রতি বৃহস্পতিবার রাতে সায়েদাবাদ থেকে ছাড়ে। বিস্তারিত ও বুকিং: ০১৫৩৩-০৯৬৮০৯।",
  included: [ "ঢাকা - কক্সবাজার যাতায়াত", "খাবার", "গাইড সার্ভিস" ],
  excluded: [ "ব্যক্তিগত খরচ", "এন্ট্রি ফি" ],
  tourPlan: [
    { day: "Day 1", details: "বৃহস্পতিবার রাতে ঢাকা থেকে যাত্রা।" },
    { day: "Day 2", details: "কক্সবাজার সমুদ্র ভ্রমণ।" },
  ],
  places: [
    { name: "সুগন্ধা বিচ", image: "/images/places/sugandha.jpg" },
    { name: "লাবনী বিচ", image: "/images/places/laboni.jpg" },
    { name: "ইনানি বিচ", image: "/images/places/inani.webp" },
  ],
},
// ================= DUR JATRA — MALDIVES + SRI LANKA =================
{
  id: 919,
  destinationSlug: "maldives",
  companyId: 3,
  categories: ["Family", "Group"],
  title: "মালদ্বীপ + শ্রীলঙ্কা গ্রুপ ট্যুর",
  location: "মালদ্বীপ ও শ্রীলঙ্কা",
  duration: "৬ রাত ৭ দিন",
  tourStart: "২১ ডিসেম্বর ২০২৬",
  image: "/images/destinations/maldives.jpg",
  pricing: { perPerson: 89999, couplePrice: null },
  description:
    "দূরযাত্রার গ্রুপ ট্যুর — ২১ ডিসেম্বর ২০২৬ যাত্রা ৳৮৯,৯৯৯ (২২ নভেম্বরের পোস্ট অনুযায়ী ৩টি সিট বাকি ছিল)। জানুয়ারিতে আরও ৪টি যাত্রা — ৭, ১৮, ২১ ও ২৮ জানুয়ারি, প্রতিটি ৳৮৭,৯৯৯। ফিটসএয়ার ফ্লাইট, এয়ারপোর্ট পিক-ড্রপ, প্রতিদিন নাশতা, হুলহুমালে ৩ রাত (৩-তারকা), নেগম্বো/কলম্বো ১ রাত, ক্যান্ডি ২ রাত, ক্যান্ডি-নুওয়ারা এলিয়া-কলম্বো সিটি ট্যুর ও সব ট্রান্সফার অন্তর্ভুক্ত। শ্রীলঙ্কার ভিসা ফি (USD ২৫, প্রায় ৳৩,৫০০) ও দুপুর-রাতের খাবার আলাদা। বুকিং মানি জনপ্রতি ৳৫০,০০০। বুকিং: ০১৯০৭-৭৮০৪১০।",
  included: [
    "ফিটসএয়ার ফ্লাইট",
    "এয়ারপোর্ট পিক-ড্রপ",
    "হুলহুমালে ৩ রাত (৩-তারকা), নেগম্বো/কলম্বো ১ রাত, ক্যান্ডি ২ রাত",
    "সকালের নাশতা",
    "ক্যান্ডি, নুওয়ারা এলিয়া ও কলম্বো সিটি ট্যুর",
    "সব ট্রান্সফার, ভ্যাট/ট্যাক্স",
  ],
  excluded: [
    "শ্রীলঙ্কা ভিসা ফি USD ২৫ (প্রায় ৳৩,৫০০)",
    "দুপুর ও রাতের খাবার",
    "ব্যক্তিগত খরচ",
  ],
},
];

export default packagesData;