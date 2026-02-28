const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          আমাদের সম্পর্কে
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          ভ্রমণ.কম বাংলাদেশের অন্যতম আধুনিক ভ্রমণ তথ্যভিত্তিক প্ল্যাটফর্ম।
        </p>
      </div>

      {/* Content Card */}
      <div className="max-w-5xl mx-auto px-6 py-20 bg-white -mt-16 rounded-3xl shadow-xl">

        <h2 className="text-2xl font-semibold mb-4">আমাদের লক্ষ্য</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          আমাদের লক্ষ্য হলো ভ্রমণ পরিকল্পনাকে সহজ, স্বচ্ছ এবং তথ্যসমৃদ্ধ করা।
          আমরা চাই প্রত্যেক ভ্রমণপ্রেমী যেন নির্ভরযোগ্য তথ্যের ভিত্তিতে সিদ্ধান্ত নিতে পারেন।
        </p>

        <h2 className="text-2xl font-semibold mb-4">আমাদের ভিশন</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          আমরা একটি প্রযুক্তিনির্ভর ভ্রমণ ইকোসিস্টেম তৈরি করতে চাই যেখানে
          ভ্রমণ সংক্রান্ত সব তথ্য, গাইডলাইন এবং পরিষেবা এক প্ল্যাটফর্মে থাকবে।
        </p>

        <h2 className="text-2xl font-semibold mb-4">আমরা কী করি</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-16">
          <li>বিভাগভিত্তিক ভ্রমণ গাইড</li>
          <li>জনপ্রিয় গন্তব্যের বিস্তারিত তথ্য</li>
          <li>ভ্রমণ টিপস ও নিরাপত্তা নির্দেশনা</li>
          <li>প্যাকেজ ও সার্ভিস তথ্য</li>
        </ul>

      </div>

      {/* Independent Notice Section */}
      <div className="bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <h2 className="text-2xl font-bold mb-6">
            স্বাধীন তথ্যভিত্তিক প্ল্যাটফর্ম
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            ভ্রমণ.কম কোনো সরকারি সংস্থা, বেসরকারি ট্রাভেল কোম্পানি বা বুকিং এজেন্সির অফিসিয়াল সাইট নয়।
          </p>

          <p className="text-gray-600 leading-relaxed">
            এটি একটি স্বাধীন, তথ্যভিত্তিক গাইড প্ল্যাটফর্ম যা শুধুমাত্র সাধারণ তথ্য প্রদান করে।
          </p>

        </div>
      </div>

    </div>
  );
};

export default AboutPage;