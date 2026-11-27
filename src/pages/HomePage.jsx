import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import SeasonalPicks from '../components/home/SeasonalPicks';
import Destinations from '../components/home/Destinations';
import SajekNotice from '../components/home/SajekNotice';
import TrustStrip from '../components/home/TrustStrip';
import HomeGuides from '../components/home/HomeGuides';
import RegionalDetails from '../components/home/RegionalDetails';


const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <SeasonalPicks />
      <Destinations />
      <SajekNotice />
      <TrustStrip />
      <HomeGuides />
      <RegionalDetails />

    </motion.div>
  );
};

export default HomePage;
