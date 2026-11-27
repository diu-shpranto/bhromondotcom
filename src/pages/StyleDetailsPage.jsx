import { useParams } from "react-router-dom";
import packagesData from "../data/packagesData";

const styleDescriptions = {
  Beach: "সমুদ্র ভ্রমণ মানেই রিলাক্সেশন, সূর্যাস্ত ও রিসোর্ট লাইফ।",
  Mountain: "পাহাড়ি গন্তব্য ঠান্ডা আবহাওয়া ও মেঘের অভিজ্ঞতা দেয়।",
  Nature: "সবুজ বন, নদী ও প্রাকৃতিক সৌন্দর্য উপভোগ করুন।",
  Couple: "রোমান্টিক ট্রিপ ও শান্ত পরিবেশ।",
  Family: "পরিবারের জন্য নিরাপদ ও উপভোগ্য গন্তব্য।",
  Adventure: "ট্রেকিং, পাহাড়ি রাস্তা ও এক্সপ্লোরেশন।",
};

const StyleDetailsPage = () => {
  const { type } = useParams();

  const filtered = packagesData.filter(pkg =>
    pkg.categories?.includes(type)
  );

  return (
    <div className="bg-stone-50 min-h-screen py-20 max-w-7xl mx-auto px-6">

      <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
        {type} ভ্রমণ
      </h1>

      <div className="h-1 w-16 rounded-full bg-emerald-600 mb-6" />

      <p className="mb-10 text-stone-600">
        {styleDescriptions[type]}
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {filtered.map(pkg => (
          <div key={pkg.id} className="group bg-white p-6 rounded-2xl ring-1 ring-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition overflow-hidden">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="h-40 w-full object-cover rounded-xl mb-4 group-hover:scale-105 transition"
            />
            <h3 className="font-semibold text-stone-900 mb-2">
              {pkg.title}
            </h3>
            <p className="text-emerald-700 font-bold">
              ৳{pkg.pricing?.perPerson}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default StyleDetailsPage;