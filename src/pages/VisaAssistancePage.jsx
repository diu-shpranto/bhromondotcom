import { IdentificationIcon } from "@heroicons/react/24/outline";
import ServiceNotice from "../components/ServiceNotice";

const VisaAssistancePage = () => {
  return (
    <ServiceNotice
      icon={IdentificationIcon}
      title="ভিসা সহায়তা"
      message="ভ্রমণ.কম ভিসা করে দেয় না — ভিসার তথ্য ও আবেদন সংশ্লিষ্ট কর্তৃপক্ষ বা ভিসা সেবাদাতার মাধ্যমে করতে হয়।"
      externalLabel="bdvisa.com-এ দেখুন"
      externalUrl="https://www.bdvisa.com/contact.html"
    />
  );
};

export default VisaAssistancePage;
