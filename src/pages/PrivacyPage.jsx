const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-stone-50 px-6 py-20">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8">গোপনীয়তা নীতি</h1>

        <p className="text-stone-600 mb-6">
          ভ্রমণ.কম ব্যবহারকারীদের ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ।
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">১. আমরা কী তথ্য সংগ্রহ করি</h2>
        <p className="text-stone-600 mb-4">
          ইমেইল, ব্রাউজিং তথ্য, ডিভাইস তথ্য ইত্যাদি।
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">২. তথ্য ব্যবহারের উদ্দেশ্য</h2>
        <p className="text-stone-600 mb-4">
          সেবা উন্নত করা, আপডেট প্রদান এবং নিরাপত্তা নিশ্চিত করা।
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">৩. তৃতীয় পক্ষের সাথে শেয়ার</h2>
        <p className="text-stone-600">
          আমরা ব্যবহারকারীর অনুমতি ছাড়া ব্যক্তিগত তথ্য বিক্রি করি না।
        </p>

      </div>
      <h2 className="text-xl font-semibold mt-8 mb-3">
আমরা কোনো বাণিজ্যিক বুকিং প্ল্যাটফর্ম নই
</h2>

<p className="text-stone-600">
ভ্রমণ.কম কোনো সরাসরি বুকিং, টিকিট বিক্রয়, 
হোটেল সংরক্ষণ বা আর্থিক লেনদেন পরিচালনা করে না।
আমরা শুধুমাত্র তথ্য প্রদান করি।
</p>
    </div>
  );
};

export default PrivacyPage;