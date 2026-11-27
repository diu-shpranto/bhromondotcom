const ContentRemovalPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-6 md:p-10">

          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Content Removal Request</h1>
          <div className="h-1 w-16 bg-emerald-600 rounded-full mb-8"></div>

          <p className="text-stone-600 leading-relaxed mb-6">
            যদি আপনি মনে করেন আমাদের ওয়েবসাইটে প্রদর্শিত কোনো তথ্য,
            ছবি বা কন্টেন্ট অপসারণ করা উচিত, তাহলে নিচের তথ্যসহ
            আমাদের সাথে যোগাযোগ করুন।
          </p>

          <ul className="list-disc pl-6 text-stone-600 space-y-2">
            <li>আপনার পূর্ণ নাম</li>
            <li>প্রাসঙ্গিক কন্টেন্টের URL</li>
            <li>অপসারণের কারণ</li>
            <li>আপনার যোগাযোগের ইমেইল</li>
          </ul>

          <p className="text-stone-600 leading-relaxed mt-6">
            আমরা যুক্তিসঙ্গত সময়ের মধ্যে অনুরোধ পর্যালোচনা করবো।
          </p>

        </div>
      </div>
    </div>
  );
};

export default ContentRemovalPage;
