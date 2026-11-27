const companiesData = [
  {
    id: 1,
    name: "Bangladesh Tour Group – BTG",
    slug: "btg",
    verified: true,
    rating: 4.9,

    description:
      "বাংলাদেশ ট্যুর গ্রুপ (BTG) — সরকার-অনুমোদিত ট্রাভেল কোম্পানি। সারাদেশে সাশ্রয়ী ট্যুর প্যাকেজের আয়োজন করে।",

    contact: {
      phone: "+8801986003601",
      email: "info@bangladeshtourgroupbtg.com",
      whatsapp: "https://wa.me/8801986003601",
      messenger: "https://m.me/bangladeshtourgroupbtg2.0",
      facebookPage: "https://www.facebook.com/bangladeshtourgroupbtg2.0",
      facebookGroup: "https://www.facebook.com/groups/bangladeshtourgroupbtg",
    },

    location: "Tikatuli, Dhaka",
    logo: "/images/company/btg/logo.jpg",
    phone: "+8801986003601",
    email: "info@bangladeshtourgroupbtg.com",
    facebook: "https://www.facebook.com/bangladeshtourgroupbtg2.0",

    // 🔥 relation
    destinations: [
      "coxsbazar",
      "saintmartin",
      "sajek",
      "bandarban",
      "sreemangal",
      "sundarban"
    ]
  },

  {
    id: 2,
    name: "ভ্রমণ বাড়ি – Travel Group",
    slug: "vromon-bari",
    verified: true,
    rating: 4.7,

    description:
      "ভ্রমণ বাড়ি-Travel Group স্বল্প খরচে নিরাপদ ট্যুর আয়োজন করে থাকে।",

    contact: {
      phone: "+8801533096809",
      email: "vromonbaritravelgroup@gmail.com",
      whatsapp: "https://wa.me/8801533096809",
      messenger: "https://m.me/100083138951935",
      facebookPage: "https://www.facebook.com/profile.php?id=100083138951935",
      facebookGroup: "https://www.facebook.com/groups/328307164567785/"
    },

    location:
      "Saydabad Super Market, Dhaka",
    logo: "/images/company/vromonbari/logo.jpg",
    phone: "+8801533096809",
    email: "vromonbaritravelgroup@gmail.com",
    facebook: "https://www.facebook.com/profile.php?id=100083138951935",

    destinations: [
      "coxsbazar",
      "bandarban",
      "sajek"
    ]
  },

  {
    id: 3,
    name: "দূরযাত্রা – Dur Jatra Tours",
    slug: "dur-jatra",
    verified: true,

    description:
      "দূরযাত্রা (Dur Jatra Tours) — Facebook-ভেরিফায়েড ট্রাভেল কোম্পানি। মালদ্বীপ, শ্রীলঙ্কা, মালয়েশিয়া, সিঙ্গাপুর আর উমরাহ গ্রুপ ট্যুর আয়োজন করে।",

    contact: {
      phone: "+8801907780410",
      email: "durjatra.bd@gmail.com",
      whatsapp: "https://wa.me/8801907780410",
      facebookPage: "https://www.facebook.com/DurJatraSocial",
      website: "https://durjatratravels.com"
    },

    location: "RH Home Centre, Green Road, Farmgate, Dhaka",
    phone: "+8801907780410",
    email: "durjatra.bd@gmail.com",
    website: "https://durjatratravels.com",
    facebook: "https://www.facebook.com/DurJatraSocial",

    destinations: [
      "maldives"
    ]
  },

  {
    id: 4,
    name: "সাভারিয়ান ট্যুর এন্ড ট্রাভেল গ্রুপ",
    slug: "savarian",
    verified: false,

    description:
      "সাভারিয়ান ট্যুর এন্ড ট্রাভেল গ্রুপ — সাভারভিত্তিক ট্রাভেল কোম্পানি। কক্সবাজার, শ্রীমঙ্গল আর সেন্টমার্টিনের বাজেট ট্যুর আয়োজন করে।",

    contact: {
      phone: "+8801819466681",
      email: "ahripon32@gmail.com",
      whatsapp: "https://wa.me/8801819466681",
      facebookPage: "https://www.facebook.com/Savariantourgroup01"
    },

    location: "Savar, Dhaka",
    phone: "+8801819466681",
    email: "ahripon32@gmail.com",
    facebook: "https://www.facebook.com/Savariantourgroup01",

    destinations: [
      "coxsbazar",
      "sreemangal",
      "saintmartin"
    ]
  }
];

export default companiesData;