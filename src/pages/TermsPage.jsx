const TermsPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-6 md:p-10">

          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">শর্তাবলী</h1>
          <div className="h-1 w-16 bg-emerald-600 rounded-full mb-8"></div>

          <h2 className="text-xl font-bold text-stone-900 mt-6 mb-3">১. ব্যবহারের নিয়ম</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            এই ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি আমাদের শর্তাবলীতে সম্মত হচ্ছেন।
          </p>

          <h2 className="text-xl font-bold text-stone-900 mt-6 mb-3">২. তথ্যের দায়বদ্ধতা</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            আমরা তথ্য সঠিক রাখার চেষ্টা করি, তবে সম্পূর্ণ নির্ভুলতার নিশ্চয়তা দিই না।
          </p>

          <h2 className="text-xl font-bold text-stone-900 mt-6 mb-3">৩. বুদ্ধিবৃত্তিক সম্পত্তি</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            ওয়েবসাইটের সব কন্টেন্ট আমাদের সম্পত্তি।
          </p>

          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-3">
            দায় সীমাবদ্ধতা (Limitation of Liability)
          </h2>

          <p className="text-stone-600 leading-relaxed mb-6">
            ভ্রমণ.কম ওয়েবসাইটে প্রদত্ত তথ্য শুধুমাত্র সাধারণ তথ্যের জন্য।
            আমরা কোনো আর্থিক লেনদেন, বুকিং, ট্যুর ব্যবস্থাপনা বা পরিষেবা প্রদান করি না।
            ব্যবহারকারীরা নিজ দায়িত্বে সিদ্ধান্ত গ্রহণ করবেন।
          </p>

          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-3">
            ট্রেডমার্ক ও কপিরাইট
          </h2>

          <p className="text-stone-600 leading-relaxed">
            ওয়েবসাইটে উল্লেখিত সকল কোম্পানির নাম, লোগো ও ট্রেডমার্ক
            তাদের নিজ নিজ মালিকদের সম্পত্তি।
            আমরা কোনো ট্রেডমার্ক দাবি করি না।
          </p>

        </div>
      </div>
    </div>
  );
};

export default TermsPage;
