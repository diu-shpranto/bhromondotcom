const DMCAPage = () => {
  return (
    <div className="min-h-screen bg-stone-50 px-6 py-20">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8">DMCA Notice</h1>

        <p className="text-stone-600 mb-6">
          ভ্রমণ.কম অন্যের মেধাস্বত্ব (copyright) সম্মান করে।
          যদি আপনি মনে করেন আপনার কপিরাইটকৃত কন্টেন্ট আমাদের সাইটে
          অনুমতি ছাড়া ব্যবহার হয়েছে, তাহলে আমাদের সাথে যোগাযোগ করুন।
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          অভিযোগ জানানোর জন্য প্রয়োজনীয় তথ্য:
        </h2>

        <ul className="list-disc pl-6 text-stone-600 space-y-2">
          <li>কপিরাইট মালিকের নাম</li>
          <li>কপিরাইটকৃত কন্টেন্টের বিবরণ</li>
          <li>ওয়েবসাইটের সুনির্দিষ্ট URL</li>
          <li>আপনার যোগাযোগের তথ্য</li>
          <li>সত্যতার ঘোষণা</li>
        </ul>

        <p className="text-stone-600 mt-6">
          আমরা যাচাই করে প্রয়োজনীয় ব্যবস্থা গ্রহণ করবো।
        </p>

      </div>
    </div>
  );
};

export default DMCAPage;