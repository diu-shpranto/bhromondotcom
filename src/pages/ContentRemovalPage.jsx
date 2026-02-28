const ContentRemovalPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8">Content Removal Request</h1>

        <p className="text-gray-600 mb-6">
          যদি আপনি মনে করেন আমাদের ওয়েবসাইটে প্রদর্শিত কোনো তথ্য,
          ছবি বা কন্টেন্ট অপসারণ করা উচিত, তাহলে নিচের তথ্যসহ
          আমাদের সাথে যোগাযোগ করুন।
        </p>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>আপনার পূর্ণ নাম</li>
          <li>প্রাসঙ্গিক কন্টেন্টের URL</li>
          <li>অপসারণের কারণ</li>
          <li>আপনার যোগাযোগের ইমেইল</li>
        </ul>

        <p className="text-gray-600 mt-6">
          আমরা যুক্তিসঙ্গত সময়ের মধ্যে অনুরোধ পর্যালোচনা করবো।
        </p>

      </div>
    </div>
  );
};

export default ContentRemovalPage;