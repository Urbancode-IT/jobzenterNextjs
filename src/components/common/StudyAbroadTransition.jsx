'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoAirplane } from "react-icons/io5";
import './StudyAbroadTransition.css';

const countries = [
  "USA", 
  "UK", 
  "CANADA", 
  "AUSTRALIA", 
  "GERMANY", 
  "IRELAND", 
  "NEW ZEALAND", 
  "SINGAPORE"
];

const StudyAbroadTransition = ({ isVisible, onComplete }) => {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentCountryIndex((prev) => (prev + 1) % countries.length);
      }, 70); // Very fast cycling to fit in ~0.6s

      const timer = setTimeout(() => {
        clearInterval(interval);
        onComplete();
      }, 800); // Slightly more than 0.6s to allow 8 countries to show

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="study-abroad-transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {/* Airplane flying across */}
          <motion.div
            className="transition-airplane-row"
            initial={{ x: '-120vw' }}
            animate={{ x: '120vw' }}
            transition={{ duration: 0.8, ease: "linear" }}
          >
            <IoAirplane size={60} className="transition-airplane-icon" />
            <div className="airplane-trail" />
          </motion.div>

          {/* Rapid Country Ticker */}
          <div className="country-ticker-container">
            <motion.div
              key={countries[currentCountryIndex]}
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1.2, opacity: 1, y: 0 }}
              exit={{ scale: 1.5, opacity: 0, y: -20 }}
              transition={{ duration: 0.1 }}
              className="country-name-text"
            >
              {countries[currentCountryIndex]}
            </motion.div>
          </div>

          {/* Subtext */}
          <motion.div 
            className="transition-subtext"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Launching Your Global Career...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StudyAbroadTransition;
