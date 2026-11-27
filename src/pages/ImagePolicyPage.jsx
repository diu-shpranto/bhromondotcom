const ImagePolicyPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-6 md:p-10">

          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Image Usage Policy</h1>
          <div className="h-1 w-16 bg-emerald-600 rounded-full mb-8"></div>

          <p className="text-stone-600 leading-relaxed mb-6">
            ভ্রমণ.কম শুধুমাত্র উন্মুক্ত উৎস, লাইসেন্সপ্রাপ্ত অথবা
            পাবলিক ডোমেইন ইমেজ ব্যবহার করে।
          </p>

          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-3">
            আমাদের নীতি:
          </h2>

          <ul className="list-disc pl-6 text-stone-600 space-y-2">
            <li>কপিরাইট লঙ্ঘন এড়ানো</li>
            <li>উৎস উল্লেখ (যদি প্রযোজ্য হয়)</li>
            <li>অভিযোগ পেলে দ্রুত অপসারণ</li>
          </ul>

          <p className="text-stone-600 leading-relaxed mt-6">
            কোনো ছবি বা কন্টেন্ট নিয়ে সমস্যা থাকলে আমাদের সাথে যোগাযোগ করুন।
          </p>

        </div>
      </div>
    </div>
  );
};

export default ImagePolicyPage;
