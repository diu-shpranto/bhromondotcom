import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import ServiceNotice from "../components/ServiceNotice";

const FlightBookingPage = () => {
  return (
    <ServiceNotice
      icon={PaperAirplaneIcon}
      title="ফ্লাইটের টিকিট"
      message="ভ্রমণ.কম ফ্লাইটের টিকিট বিক্রি করে না — টিকিট কিনতে হয় এয়ারলাইন বা টিকিট সাইট থেকে। আমাদের প্যাকেজগুলোতে যাতায়াতসহ দাম ধরা থাকে, প্যাকেজ দেখে কোম্পানির সঙ্গে যোগাযোগ করুন।"
      externalLabel="Skyscanner-এ ফ্লাইট দেখুন"
      externalUrl="https://www.skyscanner.com"
    />
  );
};

export default FlightBookingPage;
