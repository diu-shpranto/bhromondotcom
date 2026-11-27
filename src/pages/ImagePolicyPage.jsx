import LegalLayout from '../components/legal/LegalLayout';

const ImagePolicyPage = () => {
  return (
    <LegalLayout title="Image Usage Policy" showContact>
      <p className="text-stone-600 leading-relaxed mb-6">
        ভ্রমণ.কম শুধুমাত্র উন্মুক্ত উৎস, লাইসেন্সপ্রাপ্ত অথবা
        পাবলিক ডোমেইন ইমেজ ব্যবহার করে।
      </p>

      <h2 className="font-display text-xl font-bold text-stone-900 mt-8 mb-3">
        আমাদের নীতি:
      </h2>

      <ul className="list-disc pl-6 text-stone-600 leading-relaxed space-y-2">
        <li>কপিরাইট লঙ্ঘন এড়ানো</li>
        <li>উৎস উল্লেখ (যদি প্রযোজ্য হয়)</li>
        <li>অভিযোগ পেলে দ্রুত অপসারণ</li>
      </ul>

      <p className="text-stone-600 leading-relaxed mt-6">
        কোনো ছবি বা কন্টেন্ট নিয়ে সমস্যা থাকলে আমাদের সাথে যোগাযোগ করুন।
      </p>
    </LegalLayout>
  );
};

export default ImagePolicyPage;
