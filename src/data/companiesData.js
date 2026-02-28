const companiesData = [
  {
    id: 1,
    name: "Bangladesh Tour Group – BTG",
    slug: "btg",
    verified: true,
    rating: 4.9,

    description:
      "Bangladesh Tour Group – BTG is a government-approved travel company providing affordable tour packages across Bangladesh.",

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

    destinations: [
      "coxsbazar",
      "bandarban",
      "sajek"
    ]
  }
];

export default companiesData;