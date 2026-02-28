import { useEffect } from "react";

const HotelBookingPage = () => {
  useEffect(() => {
    window.location.href = "https://www.booking.com";
  }, []);

  return null;
};

export default HotelBookingPage;