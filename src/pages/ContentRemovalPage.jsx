import LegalLayout from '../components/legal/LegalLayout';

const ContentRemovalPage = () => {
  return (
    <LegalLayout title="Content Removal Request" showContact>
      <p className="text-stone-600 leading-relaxed mb-6">
        যদি আপনি মনে করেন আমাদের ওয়েবসাইটে প্রদর্শিত কোনো তথ্য,
        ছবি বা কন্টেন্ট অপসারণ করা উচিত, তাহলে নিচের তথ্যসহ
        আমাদের সাথে যোগাযোগ করুন।
      </p>

      <ul className="list-disc pl-6 text-stone-600 leading-relaxed space-y-2">
        <li>আপনার পূর্ণ নাম</li>
        <li>প্রাসঙ্গিক কন্টেন্টের URL</li>
        <li>অপসারণের কারণ</li>
        <li>আপনার যোগাযোগের ইমেইল</li>
      </ul>

      <p className="text-stone-600 leading-relaxed mt-6">
        আমরা যুক্তিসঙ্গত সময়ের মধ্যে অনুরোধ পর্যালোচনা করবো।
      </p>
    </LegalLayout>
  );
};

export default ContentRemovalPage;
