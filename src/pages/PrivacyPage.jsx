const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-6 md:p-10">

          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">গোপনীয়তা নীতি</h1>
          <div className="h-1 w-16 bg-sky-600 rounded-full mb-8"></div>

          <p className="text-stone-600 leading-relaxed mb-6">
            ভ্রমণ.কম ব্যবহারকারীদের ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ।
          </p>

          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-3">১. আমরা কী তথ্য সংগ্রহ করি</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            ইমেইল, ব্রাউজিং তথ্য, ডিভাইস তথ্য ইত্যাদি।
          </p>

          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-3">২. তথ্য ব্যবহারের উদ্দেশ্য</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            সেবা উন্নত করা, আপডেট প্রদান এবং নিরাপত্তা নিশ্চিত করা।
          </p>

          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-3">৩. তৃতীয় পক্ষের সাথে শেয়ার</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            আমরা ব্যবহারকারীর অনুমতি ছাড়া ব্যক্তিগত তথ্য বিক্রি করি না।
          </p>

          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-3">
            আমরা কোনো বাণিজ্যিক বুকিং প্ল্যাটফর্ম নই
          </h2>

          <p className="text-stone-600 leading-relaxed">
            ভ্রমণ.কম কোনো সরাসরি বুকিং, টিকিট বিক্রয়,
            হোটেল সংরক্ষণ বা আর্থিক লেনদেন পরিচালনা করে না।
            আমরা শুধুমাত্র তথ্য প্রদান করি।
          </p>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
