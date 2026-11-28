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
      email: "bangladeshtourgroupbtg@gmail.com",
      whatsapp: "https://wa.me/8801886943888",
      messenger: "https://m.me/bangladeshtourgroupbtg2.0",
      facebookPage: "https://www.facebook.com/bangladeshtourgroupbtg2.0",
      facebookGroup: "https://www.facebook.com/groups/bangladeshtourgroupbtg",
      website: "https://bangladeshtourgroupbtg.com",
    },

    location: "Kader Shopping Mall, 3rd floor, Shop 51, Hatkhola Road, Tikatuli, Dhaka",
    logo: "/images/company/btg/logo.jpg",
    phone: "+8801986003601",
    email: "bangladeshtourgroupbtg@gmail.com",
    website: "https://bangladeshtourgroupbtg.com",
    facebook: "https://www.facebook.com/bangladeshtourgroupbtg2.0",

    // 🔥 relation
    destinations: [
      "coxsbazar",
      "saintmartin",
      "sajek",
      "bandarban",
      "rangamati",
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
      phone2: "+8801601096806",
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
    phone2: "+8801601096806",
    email: "vromonbaritravelgroup@gmail.com",
    facebook: "https://www.facebook.com/profile.php?id=100083138951935",

    destinations: [
      "coxsbazar",
      "saintmartin",
      "sylhet",
      "bandarban",
      "rangamati",
      "sreemangal"
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
    logo: "/images/company/durjatra/logo.jpg",
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
      "সাভারিয়ান ট্যুর এন্ড ট্রাভেল গ্রুপ — সাভারভিত্তিক ট্রাভেল কোম্পানি (সাভার, পল্লী বিদ্যুৎ ও ধামরাইয়ে ৩টি অফিস)। কক্সবাজার, শ্রীমঙ্গল আর সেন্টমার্টিনের বাজেট ট্যুর আয়োজন করে।",

    contact: {
      phone: "+8801819466681",
      phone2: "+8801635023478",
      email: "ahripon32@gmail.com",
      whatsapp: "https://wa.me/8801819466681",
      facebookPage: "https://www.facebook.com/Savariantourgroup01"
    },

    location: "Savar, Dhaka",
    logo: "/images/company/savarian/logo.jpg",
    phone: "+8801819466681",
    phone2: "+8801635023478",
    email: "ahripon32@gmail.com",
    facebook: "https://www.facebook.com/Savariantourgroup01",

    destinations: [
      "coxsbazar",
      "sreemangal",
      "saintmartin"
    ]
  },

  {
    id: 5,
    name: "STG – Sajek Travel Group",
    slug: "stg",
    verified: false,

    description:
      "সাজেক ট্রাভেল গ্রুপ (STG) — সাজেক, কক্সবাজার, বান্দরবান, সিলেট আর সেন্টমার্টিনের গ্রুপ ট্যুর আয়োজন করে। সাজেকে নিজের রিসোর্ট মেঘপল্লী রিসোর্ট আর টাঙ্গুয়ার হাওরে টাঙ্গুয়া রিট্রিট আছে।",

    contact: {
      phone: "+8801839396895",
      phone2: "+8801620011702",
      facebookPage: "https://www.facebook.com/sajektravelgroup",
      website: "https://sajektravelgroup.com"
    },

    location: "33 Hafiz Mansion (4th floor), Kazi Nazrul Islam Avenue, Karwan Bazar, Dhaka-1215",
    logo: "/images/company/stg/logo.jpg",
    phone: "+8801839396895",
    phone2: "+8801620011702",
    website: "https://sajektravelgroup.com",
    facebook: "https://www.facebook.com/sajektravelgroup",

    destinations: [
      "coxsbazar",
      "bandarban",
      "sylhet",
      "saintmartin",
      "sajek"
    ]
  },

  {
    id: 6,
    name: "Green Belt",
    slug: "green-belt",
    verified: false,

    description:
      "গ্রিন বেল্ট — সুন্দরবন, সাজেক, রাঙ্গামাটি, শ্রীমঙ্গল, সিলেট আর সেন্টমার্টিনের ট্যুর আয়োজন করে। সুন্দরবনে জাহাজভিত্তিক প্যাকেজের জন্য পরিচিত।",

    contact: {
      phone: "+8801869649817",
      facebookPage: "https://www.facebook.com/GreenBelt.BD",
      website: "https://greenbelt.com.bd"
    },

    location: "1403, Shah Ali Plaza, Mirpur 10 Circle, Dhaka 1216",
    logo: "/images/company/green-belt/logo.jpg",
    phone: "+8801869649817",
    website: "https://greenbelt.com.bd",
    facebook: "https://www.facebook.com/GreenBelt.BD",

    destinations: [
      "sundarban",
      "sajek",
      "rangamati",
      "sreemangal",
      "sylhet",
      "saintmartin"
    ]
  },

  {
    id: 7,
    name: "Travelers BD – TBD",
    slug: "travelers-bd",
    verified: false,

    description:
      "ট্রাভেলার্স বিডি (TBD) — ২০১৮ সাল থেকে কক্সবাজারসহ দেশের নানা গন্তব্যে গ্রুপ ট্যুর আয়োজন করে।",

    contact: {
      phone: "+8801886160710",
      whatsapp: "https://wa.me/8801886160710",
      facebookPage: "https://www.facebook.com/Travelersbd.com.bd",
      website: "https://travelersbd.com"
    },

    location: "6th Floor, ML Village (Daily Shopping Building), 147 Shantinagar Main Road, Dhaka",
    logo: "/images/company/travelers-bd/logo.jpg",
    phone: "+8801886160710",
    website: "https://travelersbd.com",
    facebook: "https://www.facebook.com/Travelersbd.com.bd",

    destinations: [
      "coxsbazar",
      "bandarban"
    ]
  },

  {
    id: 8,
    name: "Kite Bangladesh Holidays",
    slug: "kite-bangladesh",
    verified: true,

    description:
      "কাইট বাংলাদেশ হলিডেজ — কক্সবাজার, সেন্টমার্টিন আর সাজেকের ট্যুর আয়োজন করে। Meta-ভেরিফায়েড Facebook পেজ।",

    contact: {
      phone: "+8801877825570",
      facebookPage: "https://www.facebook.com/kitebangladesh",
      website: "https://kitebangladesh.com"
    },

    location: "Plot #87, BNS Center (4th floor), Suite No. 507/A, Sector #07, Uttara, Dhaka 1230",
    logo: "/images/company/kite-bangladesh/logo.jpg",
    phone: "+8801877825570",
    website: "https://kitebangladesh.com",
    facebook: "https://www.facebook.com/kitebangladesh",

    destinations: [
      "coxsbazar",
      "saintmartin",
      "sajek",
      "sundarban"
    ]
  }
];

export default companiesData;