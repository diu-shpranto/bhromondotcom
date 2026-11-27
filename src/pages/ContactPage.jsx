import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  TicketIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const ContactPage = () => {
  return (
    <div className="bg-sand min-h-screen">
      {/* Header Band */}
      <div className="bg-forest py-16 md:py-20 text-center text-white">
        <h1 className="font-display text-4xl md:text-5xl font-bold">
          যোগাযোগ
        </h1>
        <p className="text-emerald-100 mt-4 max-w-2xl mx-auto px-6 leading-relaxed">
          প্রশ্ন, তথ্য সংশোধন বা কন্টেন্ট অপসারণের অনুরোধ — নিচের মাধ্যমে জানান।
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 -mt-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-6 md:p-8">
            <span className="w-12 h-12 rounded-2xl bg-[#E8F8F0] text-[#008F5A] flex items-center justify-center">
              <EnvelopeIcon className="w-6 h-6" />
            </span>
            <h2 className="font-display text-xl font-bold text-stone-900 mt-5">ইমেইল</h2>
            <p className="text-stone-600 text-sm leading-relaxed mt-2">
              যেকোনো প্রশ্ন বা পরামর্শের জন্য আমাদের ইমেইল করুন।
            </p>
            <p className="text-emerald-700 font-semibold mt-3">
              legal@bhramon.com
            </p>
            <a
              href="mailto:legal@bhramon.com"
              className="inline-block mt-5 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
            >
              ইমেইল করুন
            </a>
          </div>

          {/* Booking */}
          <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-6 md:p-8">
            <span className="w-12 h-12 rounded-2xl bg-[#E8F8F0] text-[#008F5A] flex items-center justify-center">
              <TicketIcon className="w-6 h-6" />
            </span>
            <h2 className="font-display text-xl font-bold text-stone-900 mt-5">বুকিং</h2>
            <p className="text-stone-600 text-sm leading-relaxed mt-2">
              ভ্রমণ.কম বুকিং করে না — বুকিং সরাসরি সংশ্লিষ্ট কোম্পানির
              সঙ্গে করতে হয়। প্যাকেজ দেখে কোম্পানির নম্বরে যোগাযোগ করুন।
            </p>
            <Link
              to="/packages"
              className="inline-block mt-5 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
            >
              প্যাকেজ দেখুন
            </Link>
          </div>

          {/* Content removal */}
          <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-6 md:p-8">
            <span className="w-12 h-12 rounded-2xl bg-[#E8F8F0] text-[#008F5A] flex items-center justify-center">
              <DocumentTextIcon className="w-6 h-6" />
            </span>
            <h2 className="font-display text-xl font-bold text-stone-900 mt-5">
              কন্টেন্ট অপসারণ
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed mt-2">
              কোনো ছবি বা তথ্য অপসারণের অনুরোধ থাকলে বিস্তারিতসহ জানান —
              যাচাই করে ব্যবস্থা নেওয়া হবে।
            </p>
            <Link
              to="/content-removal"
              className="inline-block mt-5 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
            >
              অপসারণের অনুরোধ
            </Link>
          </div>
        </div>

        {/* Note */}
        <div className="bg-white rounded-3xl ring-1 ring-stone-100 shadow-sm p-6 md:p-8 mt-6">
          <p className="text-stone-600 leading-relaxed">
            ভ্রমণ.কম একটি স্বাধীন তথ্যের সাইট। এখানকার দাম, তারিখ আর
            প্যাকেজের বিবরণ সংশ্লিষ্ট কোম্পানির নিজের পোস্ট থেকে নেওয়া —
            আমরা নিজে থেকে দাম বানাই না। শেষ সিদ্ধান্ত নেওয়ার আগে
            কোম্পানির সঙ্গে কথা বলে নেওয়াই সবচেয়ে নিরাপদ।
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
