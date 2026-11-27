import companiesData from "../data/companiesData";
import destinationsData from "../data/destinationsData";
import packagesData from "../data/packagesData";

// লাতিন অঙ্ক → বাংলা অঙ্ক (সংখ্যা ডেটা থেকে dynamic, দেখাবে বাংলায়)
const toBn = (n) => String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);

const AboutPage = () => {
  const stats = [
    { value: companiesData.length, label: "যাচাই করা কোম্পানি" },
    { value: destinationsData.length, label: "গন্তব্য" },
    { value: packagesData.length, label: "ট্যুর প্যাকেজ" },
  ];

  return (
    <div className="min-h-screen bg-sand">

      {/* Hero Section */}
      <div className="bg-forest py-24 text-center text-white">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          আমাদের সম্পর্কে
        </h1>
        <p className="text-emerald-100 max-w-2xl mx-auto px-6">
          এটা কোনো বুকিং সাইট না। আমরা বাংলাদেশের ট্যুর কোম্পানিগুলোর আসল
          অফার এক জায়গায় সাজিয়ে দিই — যাতে আপনি দাম আর তারিখ মিলিয়ে
          নিজে সিদ্ধান্ত নিতে পারেন।
        </p>
      </div>

      {/* Content Card */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 bg-white -mt-16 rounded-3xl ring-1 ring-stone-100 shadow-sm">

        <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">আমাদের লক্ষ্য</h2>
        <p className="text-stone-600 leading-relaxed mb-8">
          ঘুরতে যাওয়ার আগে সবার একটাই ঝামেলা — দামটা আসল কি না, তারিখটা
          ঠিক আছে কি না। তাই আমরা {toBn(companiesData.length)}টি যাচাই করা
          কোম্পানির নিজের Facebook পেজ থেকে দাম আর তারিখ নিয়ে এখানে
          সাজাই। কিছু বদলালে সেটাও আপডেট করি।
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">তথ্য কোথা থেকে আসে</h2>
        <p className="text-stone-600 leading-relaxed mb-8">
          এই সাইটের দাম, তারিখ আর প্যাকেজের বিবরণ সংশ্লিষ্ট কোম্পানির
          নিজের পোস্ট থেকে নেওয়া — আমরা নিজে থেকে দাম বানাই না। কোনো
          তথ্য পুরনো মনে হলে কোম্পানির পেজে গিয়ে মিলিয়ে নেওয়াই
          সবচেয়ে নিরাপদ। বুকিংও সরাসরি কোম্পানির সঙ্গে করতে হয়;
          আমরা মাঝখানে টাকা নিই না।
        </p>

        <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">আমরা কী করি</h2>
        <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-16">
          <li>{toBn(companiesData.length)}টি যাচাই করা কোম্পানির ট্যুর প্যাকেজ — দাম, তারিখ, কী কী থাকছে</li>
          <li>৮ বিভাগের ভ্রমণ গাইড — কোথায় যাবেন, কখন যাবেন, কী খাবেন</li>
          <li>সেন্টমার্টিনের সিজন, জাহাজ আর ট্রাভেল পাসের মতো দরকারি আপডেট</li>
          <li>কোম্পানির ফোন আর WhatsApp — বুকিং সরাসরি ওদের সঙ্গেই</li>
        </ul>

        {/* Stat Row */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 border-t border-stone-100 pt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-forest">
                {toBn(stat.value)}
              </p>
              <p className="text-stone-600 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Independent Notice Section */}
      <div className="bg-sand">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">
            স্বাধীন তথ্যভিত্তিক প্ল্যাটফর্ম
          </h2>

          <p className="text-stone-600 leading-relaxed mb-4">
            ভ্রমণ.কম কোনো সরকারি সংস্থা, ট্রাভেল কোম্পানি বা বুকিং এজেন্সির
            অফিসিয়াল সাইট নয় — এটা একটা স্বাধীন তথ্যের সাইট।
          </p>

          <p className="text-stone-600 leading-relaxed">
            এখানে যা আছে তা তথ্য হিসেবে দেওয়া — শেষ সিদ্ধান্ত নেওয়ার আগে
            কোম্পানির সঙ্গে কথা বলে নিন।
          </p>

        </div>
      </div>

    </div>
  );
};

export default AboutPage;
