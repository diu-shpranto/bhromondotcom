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
    <div className="py-20 max-w-6xl mx-auto px-6">

      <h1 className="text-4xl font-bold mb-6">
        {type} ভ্রমণ
      </h1>

      <p className="mb-10 text-stone-600">
        {styleDescriptions[type]}
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {filtered.map(pkg => (
          <div key={pkg.id} className="bg-white p-6 rounded-xl shadow">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">
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