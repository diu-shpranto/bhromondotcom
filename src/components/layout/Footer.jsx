import { Link } from "react-router-dom";
import {
  MapPinIcon,
  EnvelopeIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const destinations = [
  { name: "কক্সবাজার", to: "/destination/coxsbazar" },
  { name: "সেন্টমার্টিন", to: "/destination/saintmartin" },
  { name: "সাজেক ভ্যালি", to: "/destination/sajek" },
  { name: "বান্দরবান", to: "/destination/bandarban" },
  { name: "সুন্দরবন", to: "/destination/sundarban" },
  { name: "সিলেট", to: "/destination/sylhet" },
];

const services = [
  { name: "ট্যুর প্যাকেজ", to: "/packages" },
  { name: "ফ্লাইট বুকিং", to: "/flight-booking" },
  { name: "হোটেল বুকিং", to: "/hotel-booking" },
  { name: "ভিসা সহায়তা", to: "/visa-assistance" },
];

const info = [
  { name: "আমাদের সম্পর্কে", to: "/about" },
  { name: "সব গন্তব্য", to: "/destinations" },
  { name: "ব্লগ", to: "/blog" },
];

const legal = [
  { name: "গোপনীয়তা নীতি", to: "/privacy" },
  { name: "শর্তাবলী", to: "/terms" },
  { name: "DMCA Notice", to: "/dmca" },
  { name: "Content Removal", to: "/content-removal" },
  { name: "Image Usage Policy", to: "/image-policy" },
];

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-sm text-stone-400 hover:text-emerald-400 transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

const FooterHeading = ({ children }) => (
  <h3 className="text-white font-semibold text-base mb-5">
    {children}
    <span className="block w-8 h-0.5 bg-emerald-500 rounded-full mt-2.5" />
  </h3>
);

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-stone-400">
      {/* Gradient top strip */}
      <div className="h-1 bg-gradient-to-r from-[#00C078] via-[#008F5A] to-[#006B46]" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <span className="relative shrink-0">
                <span className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00C078] via-[#008F5A] to-[#006B46] ring-2 ring-white/20 shadow-lg flex items-center justify-center text-white text-lg font-bold">
                  ভ্র
                </span>
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white ring-2 ring-emerald-950 flex items-center justify-center">
                  <PaperAirplaneIcon className="w-2.5 h-2.5 text-[#008F5A]" />
                </span>
              </span>
              <span className="text-2xl font-bold text-white">
                ভ্রমণ<span className="text-emerald-400">.com</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed mt-5">
              এই ওয়েবসাইটটি একটি স্বাধীন তথ্যভিত্তিক প্ল্যাটফর্ম।
              এখানে প্রদত্ত তথ্য শুধুমাত্র সাধারণ তথ্যের উদ্দেশ্যে।
              কোনো ট্রেডমার্ক, কোম্পানির নাম বা লোগো তাদের নিজ নিজ মালিকের সম্পত্তি।
              আমরা কোনো আর্থিক লেনদেন, টিকিট বিক্রয় বা সরাসরি বুকিং পরিচালনা করি না।
            </p>

            <div className="flex items-center gap-3 text-sm mt-6">
              <span className="w-8 h-8 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center shrink-0">
                <MapPinIcon className="w-4 h-4 text-emerald-400" />
              </span>
              <span className="text-stone-300">বাংলাদেশ</span>
            </div>

            <div className="flex items-center gap-3 text-sm mt-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center shrink-0">
                <EnvelopeIcon className="w-4 h-4 text-emerald-400" />
              </span>
              <span className="text-stone-300">legal@bhramon.com</span>
            </div>
          </div>

          {/* Destinations */}
          <div className="lg:col-span-2">
            <FooterHeading>জনপ্রিয় গন্তব্য</FooterHeading>
            <ul className="space-y-3">
              {destinations.map((d) => (
                <FooterLink key={d.to} to={d.to}>
                  {d.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <FooterHeading>পরিষেবা</FooterHeading>
            <ul className="space-y-3">
              {services.map((s) => (
                <FooterLink key={s.to} to={s.to}>
                  {s.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="lg:col-span-2">
            <FooterHeading>তথ্য</FooterHeading>
            <ul className="space-y-3">
              {info.map((i) => (
                <FooterLink key={i.to} to={i.to}>
                  {i.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <FooterHeading>আইনি</FooterHeading>
            <ul className="space-y-3">
              {legal.map((l) => (
                <FooterLink key={l.to} to={l.to}>
                  {l.name}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500 text-center sm:text-left">
            © 2026 ভ্রমণ.কম — সর্বস্ব সংরক্ষিত
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-emerald-400 font-semibold">
              A XolveKart Product
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="উপরে যান"
              className="p-2.5 rounded-full bg-white/5 ring-1 ring-white/10 text-stone-300 hover:bg-emerald-600 hover:text-white hover:ring-emerald-600 transition-colors duration-200"
            >
              <ArrowUpIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
