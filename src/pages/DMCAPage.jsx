import LegalLayout from '../components/legal/LegalLayout';

const DMCAPage = () => {
  return (
    <LegalLayout title="DMCA Notice" showContact>
      <p className="text-stone-600 leading-relaxed mb-6">
        ভ্রমণ.কম অন্যের মেধাস্বত্ব (copyright) সম্মান করে।
        যদি আপনি মনে করেন আপনার কপিরাইটকৃত কন্টেন্ট আমাদের সাইটে
        অনুমতি ছাড়া ব্যবহার হয়েছে, তাহলে আমাদের সাথে যোগাযোগ করুন।
      </p>

      <h2 className="font-display text-xl font-bold text-stone-900 mt-8 mb-3">
        অভিযোগ জানানোর জন্য প্রয়োজনীয় তথ্য:
      </h2>

      <ul className="list-disc pl-6 text-stone-600 leading-relaxed space-y-2">
        <li>কপিরাইট মালিকের নাম</li>
        <li>কপিরাইটকৃত কন্টেন্টের বিবরণ</li>
        <li>ওয়েবসাইটের সুনির্দিষ্ট URL</li>
        <li>আপনার যোগাযোগের তথ্য</li>
        <li>সত্যতার ঘোষণা</li>
      </ul>

      <p className="text-stone-600 leading-relaxed mt-6">
        আমরা যাচাই করে প্রয়োজনীয় ব্যবস্থা গ্রহণ করবো।
      </p>
    </LegalLayout>
  );
};

export default DMCAPage;
