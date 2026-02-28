import { useEffect } from "react";

const FlightBookingPage = () => {
  useEffect(() => {
    window.location.href = "https://www.skyscanner.com"; 
  }, []);

  return null;
};

export default FlightBookingPage;