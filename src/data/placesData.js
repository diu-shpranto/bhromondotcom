const placesData = [

  // ================= SAJEK =================
  {
    slug: "ruilui-para",
    name: "রুইলুই পাড়া",
    destinationSlug: "sajek",
    image: "/images/places/ruilui.jpg",
    overview: "সাজেক ভ্যালির প্রধান গ্রাম যেখানে স্থানীয় উপজাতিদের বসবাস।",
    famousFor: "উপজাতি সংস্কৃতি ও পাহাড়ি দৃশ্য",
    bestTime: "অক্টোবর – মার্চ",
    thingsToDo: ["গ্রাম ভ্রমণ", "ফটোগ্রাফি", "সূর্যাস্ত দেখা"],
    foodSuggestions: ["ব্যাম্বু চিকেন", "লোকাল পাহাড়ি খাবার"],
    tips: ["স্থানীয়দের সম্মান করুন", "পাহাড়ে সাবধানে হাঁটুন"]
  },

  {
    slug: "konglak-pahar",
    name: "কংলাক পাহাড়",
    destinationSlug: "sajek",
    image: "/images/places/konglak.jpg",
    overview: "সাজেকের সবচেয়ে উঁচু পাহাড়।",
    famousFor: "মেঘ সমুদ্র ও সূর্যাস্ত",
    bestTime: "ভোর ও বিকেল",
    thingsToDo: ["ট্রেকিং", "সূর্যাস্ত দেখা"],
    foodSuggestions: ["চা"],
    tips: ["পানি সঙ্গে রাখুন", "জুতা পরুন"]
  },

  // ================= RANGAMATI =================
  {
    slug: "kaptai-lake",
    name: "কাপ্তাই লেক",
    destinationSlug: "rangamati",
    image: "/images/places/kaptai.jpg",
    overview: "বাংলাদেশের বৃহত্তম কৃত্রিম হ্রদ।",
    famousFor: "নৌকা ভ্রমণ",
    bestTime: "শীতকাল",
    thingsToDo: ["ট্রলার ভ্রমণ", "ফটোগ্রাফি"],
    foodSuggestions: ["কাঁচকি মাছ ভাজি"],
    tips: ["লাইফ জ্যাকেট ব্যবহার করুন"]
  },

  {
    slug: "shuvolong-jhorna",
    name: "শুভলং ঝর্ণা",
    destinationSlug: "rangamati",
    image: "/images/places/shuvolong.jpg",
    overview: "রাঙ্গামাটির জনপ্রিয় ঝর্ণা।",
    famousFor: "প্রাকৃতিক সৌন্দর্য",
    bestTime: "বর্ষাকাল",
    thingsToDo: ["ঝর্ণা ভ্রমণ"],
    foodSuggestions: ["লোকাল খাবার"],
    tips: ["পাথরে সাবধানে হাঁটুন"]
  },

  // ================= COX =================
  {
    slug: "inani-beach",
    name: "ইনানি বিচ",
    destinationSlug: "coxsbazar",
    image: "/images/places/inani.webp",
    overview: "কক্সবাজারের শান্ত ও পাথুরে সমুদ্র সৈকত।",
    famousFor: "নীল জল ও পাথর",
    bestTime: "বিকেল",
    thingsToDo: ["সমুদ্র গোসল", "ফটোগ্রাফি"],
    foodSuggestions: ["সামুদ্রিক মাছ"],
    tips: ["জোয়ার-ভাটা সময় জেনে যান"]
  },

  {
    slug: "himchori",
    name: "হিমছড়ি",
    destinationSlug: "coxsbazar",
    image: "/images/places/himchori.webp",
    overview: "পাহাড় ও সমুদ্রের মিলনস্থল।",
    famousFor: "ভিউ পয়েন্ট",
    bestTime: "বিকেল",
    thingsToDo: ["ভিউ পয়েন্ট দেখা"],
    foodSuggestions: ["লোকাল খাবার"],
    tips: ["সিঁড়ি ওঠার সময় সতর্ক থাকুন"]
  },

  // ================= BANDARBAN =================
  {
    slug: "nilgiri",
    name: "নীলগিরি",
    destinationSlug: "bandarban",
    image: "/images/places/nilgiri.jpg",
    overview: "বাংলাদেশের অন্যতম উচ্চ পাহাড়।",
    famousFor: "মেঘ ও পাহাড়",
    bestTime: "ভোর",
    thingsToDo: ["সূর্যোদয় দেখা"],
    foodSuggestions: ["চা"],
    tips: ["শীতের কাপড় নিন"]
  },

  {
    slug: "debotakhum",
    name: "দেবতাখুম",
    destinationSlug: "bandarban",
    image: "/images/places/debotakhum.jpg",
    overview: "পাহাড় ঘেরা জলপ্রপাত ও খুম।",
    famousFor: "ট্রেকিং ও ভেলা ভ্রমণ",
    bestTime: "শীতকাল",
    thingsToDo: ["ট্রেকিং", "ভেলা ভ্রমণ"],
    foodSuggestions: ["লোকাল খাবার"],
    tips: ["গাইড ছাড়া যাবেন না"]
  },

  // ================= SAINT MARTIN =================
  {
    slug: "saintmartin-island",
    name: "সেন্টমার্টিন দ্বীপ",
    destinationSlug: "saintmartin",
    image: "/images/places/stmartin.jpg",
    overview: "বাংলাদেশের একমাত্র প্রবাল দ্বীপ।",
    famousFor: "নীল সমুদ্র",
    bestTime: "নভেম্বর – ফেব্রুয়ারি",
    thingsToDo: ["সমুদ্র ভ্রমণ", "বারবিকিউ"],
    foodSuggestions: ["সামুদ্রিক মাছ"],
    tips: ["রাতের ঠান্ডা বেশি হয়"]
  },

// ================= SREEMANGAL =================
{
  slug: "lawachara-national-park",
  name: "লাউয়াছড়া জাতীয় উদ্যান",
  destinationSlug: "sreemangal",
  image: "/images/places/lawachara.webp",
  overview: "বাংলাদেশের অন্যতম বিখ্যাত রেইনফরেস্ট ও জীববৈচিত্র্যের অভয়ারণ্য।",
  famousFor: "ঘন বন ও বিরল প্রজাতির বানর",
  bestTime: "অক্টোবর – মার্চ",
  thingsToDo: [
    "জঙ্গলে ট্রেকিং",
    "বন্যপ্রাণী দেখা",
    "ফটোগ্রাফি"
  ],
  foodSuggestions: [
    "লোকাল পাহাড়ি খাবার",
    "চা"
  ],
  tips: [
    "গাইড নিয়ে প্রবেশ করুন",
    "হাঁটার সময় শব্দ কম রাখুন"
  ]
},

{
  slug: "madhabpur-lake",
  name: "মাধবপুর লেক",
  destinationSlug: "sreemangal",
  image: "/images/places/madhabpur.webp",
  overview: "চা বাগানের মাঝে অবস্থিত দৃষ্টিনন্দন একটি লেক।",
  famousFor: "পাহাড় ও চা বাগানের মনোরম দৃশ্য",
  bestTime: "শীতকাল",
  thingsToDo: [
    "লেক ভিউ উপভোগ",
    "ফটোগ্রাফি"
  ],
  foodSuggestions: [
    "চা",
    "লোকাল স্ন্যাকস"
  ],
  tips: [
    "পাহাড়ি পথে সাবধানে হাঁটুন"
  ]
},

{
  slug: "malnichara-tea-estate",
  name: "মালিনিছড়া চা বাগান",
  destinationSlug: "sreemangal",
  image: "/images/places/malinichara.jpg",
  overview: "বাংলাদেশের অন্যতম প্রাচীন চা বাগান।",
  famousFor: "চা উৎপাদন ও সবুজ প্রাকৃতিক পরিবেশ",
  bestTime: "সারা বছর",
  thingsToDo: [
    "চা বাগান ঘোরা",
    "চা স্বাদ গ্রহণ"
  ],
  foodSuggestions: [
    "সাত রঙা চা"
  ],
  tips: [
    "স্থানীয়দের অনুমতি নিয়ে ছবি তুলুন"
  ]
},

{
  slug: "baikka-beel",
  name: "বাইক্কা বিল",
  destinationSlug: "sreemangal",
  image: "/images/places/baikka.jpg",
  overview: "পাখি ও জলজ জীববৈচিত্র্যের জন্য বিখ্যাত একটি জলাভূমি।",
  famousFor: "পাখি দেখা",
  bestTime: "শীতকাল",
  thingsToDo: [
    "বার্ড ওয়াচিং",
    "প্রকৃতি উপভোগ"
  ],
  foodSuggestions: [
    "লোকাল খাবার"
  ],
  tips: [
    "দূরবীন সঙ্গে রাখুন"
  ]
},
 
// ================= SUNDARBAN =================
{
  slug: "karamjal",
  name: "করমজল",
  destinationSlug: "sundarban",
  image: "/images/places/karamjal.jpg",
  overview: "সুন্দরবনের প্রবেশদ্বার ও কুমির প্রজনন কেন্দ্র।",
  famousFor: "ম্যানগ্রোভ বন ও কুমির কেন্দ্র",
  bestTime: "নভেম্বর – ফেব্রুয়ারি",
  thingsToDo: [
    "কুমির দেখা",
    "বন ভ্রমণ"
  ],
  foodSuggestions: [
    "লোকাল সামুদ্রিক মাছ"
  ],
  tips: [
    "বন্যপ্রাণীর কাছাকাছি যাবেন না"
  ]
},

{
  slug: "kotka",
  name: "কটকা",
  destinationSlug: "sundarban",
  image: "/images/places/kotka.jpg",
  overview: "সুন্দরবনের অন্যতম জনপ্রিয় পর্যটন স্পট।",
  famousFor: "বন্যপ্রাণী ও সমুদ্র সৈকত",
  bestTime: "শীতকাল",
  thingsToDo: [
    "টাইগার ট্র্যাকিং",
    "সমুদ্র ভ্রমণ"
  ],
  foodSuggestions: [
    "লঞ্চের খাবার"
  ],
  tips: [
    "নিরাপত্তা নির্দেশনা মেনে চলুন"
  ]
},

{
  slug: "hiron-point",
  name: "হিরণ পয়েন্ট",
  destinationSlug: "sundarban",
  image: "/images/places/hironpoint.jpeg",
  overview: "রয়েল বেঙ্গল টাইগার দেখার অন্যতম সম্ভাবনাময় স্থান।",
  famousFor: "বন্যপ্রাণী",
  bestTime: "শীতকাল",
  thingsToDo: [
    "ওয়াচ টাওয়ারে ওঠা",
    "প্রকৃতি পর্যবেক্ষণ"
  ],
  foodSuggestions: [
    "প্যাকেট খাবার"
  ],
  tips: [
    "নিরবতা বজায় রাখুন"
  ]
},

{
  slug: "jamtala-beach",
  name: "জামতলা সৈকত",
  destinationSlug: "sundarban",
  image: "/images/places/jamtala.jpg",
  overview: "সুন্দরবনের নির্জন ও সুন্দর সৈকত।",
  famousFor: "প্রাকৃতিক নীরবতা",
  bestTime: "শীতকাল",
  thingsToDo: [
    "সৈকত ভ্রমণ",
    "ফটোগ্রাফি"
  ],
  foodSuggestions: [
    "লঞ্চের খাবার"
  ],
  tips: [
    "সমুদ্রের ঢেউ সম্পর্কে সতর্ক থাকুন"
  ]
},
];

export default placesData;