import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import ServiceNotice from "../components/ServiceNotice";

const HotelBookingPage = () => {
  return (
    <ServiceNotice
      icon={BuildingOffice2Icon}
      title="হোটেল বুকিং"
      message="ভ্রমণ.কম হোটেল বুকিং করে না — প্যাকেজে হোটেল ধরা থাকলে সেটা কোম্পানির প্যাকেজের অংশ; আলাদা হোটেল নিজে বুক করতে হয়।"
      externalLabel="Booking.com-এ হোটেল দেখুন"
      externalUrl="https://www.booking.com"
    />
  );
};

export default HotelBookingPage;
