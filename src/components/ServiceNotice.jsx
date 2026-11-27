import { Link } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

// সার্ভিস স্টাব পেজগুলোর শেয়ার্ড নোটিশ লেআউট —
// ভ্রমণ.কম নিজে এই সেবা দেয় না, সেটা সৎভাবে জানিয়ে প্যাকেজের দিকে পাঠায়।
// props: icon (heroicons কম্পোনেন্ট), title, message, externalLabel, externalUrl
const ServiceNotice = ({ icon: Icon, title, message, externalLabel, externalUrl }) => {
  return (
    <div className="bg-sand min-h-screen">
      {/* Header Band */}
      <div className="bg-forest py-16 md:py-20 text-center text-white">
        <h1 className="font-display text-4xl md:text-5xl font-bold px-6">
          {title}
        </h1>
      </div>

      {/* Notice Card */}
      <div className="max-w-2xl mx-auto px-6 -mt-10 pb-20">
        <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-8 md:p-10 text-center">
          <span className="w-14 h-14 rounded-2xl bg-[#E8F8F0] text-[#008F5A] inline-flex items-center justify-center">
            <Icon className="w-7 h-7" />
          </span>
          <h2 className="font-display text-2xl font-bold text-stone-900 mt-6">
            {title}
          </h2>
          <p className="text-stone-600 leading-relaxed mt-4">
            {message}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              to="/packages"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
            >
              প্যাকেজ দেখুন
            </Link>
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-3 ring-1 ring-stone-200 hover:ring-emerald-600 text-stone-700 hover:text-emerald-700 text-sm font-semibold rounded-xl transition-colors duration-200"
            >
              {externalLabel} (বাইরের সাইট)
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceNotice;
