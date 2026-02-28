const ImagePolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8">Image Usage Policy</h1>

        <p className="text-gray-600 mb-6">
          ভ্রমণ.কম শুধুমাত্র উন্মুক্ত উৎস, লাইসেন্সপ্রাপ্ত অথবা
          পাবলিক ডোমেইন ইমেজ ব্যবহার করে।
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          আমাদের নীতি:
        </h2>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>কপিরাইট লঙ্ঘন এড়ানো</li>
          <li>উৎস উল্লেখ (যদি প্রযোজ্য হয়)</li>
          <li>অভিযোগ পেলে দ্রুত অপসারণ</li>
        </ul>

        <p className="text-gray-600 mt-6">
          কোনো ছবি বা কন্টেন্ট নিয়ে সমস্যা থাকলে আমাদের সাথে যোগাযোগ করুন।
        </p>

      </div>
    </div>
  );
};

export default ImagePolicyPage;