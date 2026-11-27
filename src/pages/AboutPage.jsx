const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          আমাদের সম্পর্কে
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          এটা কোনো বুকিং সাইট না। আমরা বাংলাদেশের ট্যুর কোম্পানিগুলোর আসল
          অফার এক জায়গায় সাজিয়ে দিই — যাতে আপনি দাম আর তারিখ মিলিয়ে
          নিজে সিদ্ধান্ত নিতে পারেন।
        </p>
      </div>

      {/* Content Card */}
      <div className="max-w-5xl mx-auto px-6 py-20 bg-white -mt-16 rounded-3xl shadow-xl">

        <h2 className="text-2xl font-semibold mb-4">আমাদের লক্ষ্য</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          ঘুরতে যাওয়ার আগে সবার একটাই ঝামেলা — দামটা আসল কি না, তারিখটা
          ঠিক আছে কি না। তাই আমরা BTG আর ভ্রমণ বাড়ির মতো যাচাই করা
          কোম্পানির নিজের Facebook পেজ থেকে দাম আর তারিখ নিয়ে এখানে
          সাজাই। কিছু বদলালে সেটাও আপডেট করি।
        </p>

        <h2 className="text-2xl font-semibold mb-4">তথ্য কোথা থেকে আসে</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          এই সাইটের দাম, তারিখ আর প্যাকেজের বিবরণ সংশ্লিষ্ট কোম্পানির
          নিজের পোস্ট থেকে নেওয়া — আমরা নিজে থেকে দাম বানাই না। কোনো
          তথ্য পুরনো মনে হলে কোম্পানির পেজে গিয়ে মিলিয়ে নেওয়াই
          সবচেয়ে নিরাপদ। বুকিংও সরাসরি কোম্পানির সঙ্গে করতে হয়;
          আমরা মাঝখানে টাকা নিই না।
        </p>

        <h2 className="text-2xl font-semibold mb-4">আমরা কী করি</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-16">
          <li>BTG ও ভ্রমণ বাড়ির যাচাই করা ট্যুর প্যাকেজ — দাম, তারিখ, কী কী থাকছে</li>
          <li>৮ বিভাগের ভ্রমণ গাইড — কোথায় যাবেন, কখন যাবেন, কী খাবেন</li>
          <li>সেন্টমার্টিনের সিজন, জাহাজ আর ট্রাভেল পাসের মতো দরকারি আপডেট</li>
          <li>কোম্পানির ফোন আর WhatsApp — বুকিং সরাসরি ওদের সঙ্গেই</li>
        </ul>

      </div>

      {/* Independent Notice Section */}
      <div className="bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <h2 className="text-2xl font-bold mb-6">
            স্বাধীন তথ্যভিত্তিক প্ল্যাটফর্ম
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            ভ্রমণ.কম কোনো সরকারি সংস্থা, ট্রাভেল কোম্পানি বা বুকিং এজেন্সির
            অফিসিয়াল সাইট নয় — এটা একটা স্বাধীন তথ্যের সাইট।
          </p>

          <p className="text-gray-600 leading-relaxed">
            এখানে যা আছে তা তথ্য হিসেবে দেওয়া — শেষ সিদ্ধান্ত নেওয়ার আগে
            কোম্পানির সঙ্গে কথা বলে নিন।
          </p>

        </div>
      </div>

    </div>
  );
};

export default AboutPage;