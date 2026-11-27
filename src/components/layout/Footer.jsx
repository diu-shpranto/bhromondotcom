import { Link } from "react-router-dom";
import {
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-14">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              ভ্রমণ<span className="text-emerald-400">.com</span>
            </h2>

            <p className="text-sm leading-relaxed mb-6">
             এই ওয়েবসাইটটি একটি স্বাধীন তথ্যভিত্তিক প্ল্যাটফর্ম। 
          এখানে প্রদত্ত তথ্য শুধুমাত্র সাধারণ তথ্যের উদ্দেশ্যে। 
          কোনো ট্রেডমার্ক, কোম্পানির নাম বা লোগো তাদের নিজ নিজ মালিকের সম্পত্তি। 
          আমরা কোনো আর্থিক লেনদেন, টিকিট বিক্রয় বা সরাসরি বুকিং পরিচালনা করি না।
            </p>

            <div className="flex items-center gap-2 text-sm">
              <MapPinIcon className="w-4 h-4 text-emerald-400" />
              <span>বাংলাদেশ</span>
            </div>

            <div className="flex items-center gap-2 text-sm mt-2">
              <EnvelopeIcon className="w-4 h-4 text-emerald-400" />
              <span>legal@bhramon.com</span>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">তথ্য</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-emerald-400">আমাদের সম্পর্কে</Link></li>
              <li><Link to="/blog" className="hover:text-emerald-400">ব্লগ</Link></li>
            </ul>

            <h3 className="text-white font-semibold mt-10 mb-6 text-lg">আইনি</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy" className="hover:text-emerald-400">গোপনীয়তা নীতি</Link></li>
              <li><Link to="/terms" className="hover:text-emerald-400">শর্তাবলী</Link></li>
              <li><Link to="/dmca" className="hover:text-emerald-400">DMCA Notice</Link></li>
              <li><Link to="/content-removal" className="hover:text-emerald-400">Content Removal</Link></li>
              <li><Link to="/image-policy" className="hover:text-emerald-400">Image Usage Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">পরিষেবা</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/flight-booking" className="hover:text-emerald-400">ফ্লাইট বুকিং</Link></li>
              <li><Link to="/hotel-booking" className="hover:text-emerald-400">হোটেল বুকিং</Link></li>
              <li><Link to="/packages" className="hover:text-emerald-400">ট্যুর প্যাকেজ</Link></li>
              <li><Link to="/visa-assistance" className="hover:text-emerald-400">ভিসা সহায়তা</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-emerald-900 pt-6 text-center text-sm text-stone-500">
          © 2026 ভ্রমণ.কম — সর্বস্ব সংরক্ষিত
        </div>

      </div>
    </footer>
  );
};

export default Footer;