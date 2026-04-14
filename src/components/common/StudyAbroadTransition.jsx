'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoAirplane } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
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

const featuredCountryCards = [
  { title: "STUDY IN USA", image: "/Study-Abroad/USA.png" },
  { title: "STUDY IN UK", image: "/Study-Abroad/UK.png" },
  { title: "STUDY IN CANADA", image: "/Study-Abroad/canada.png" },
  { title: "STUDY IN AUSTRALIA", image: "/Study-Abroad/Australia.png" },
  { title: "STUDY IN GERMANY", image: "/Study-Abroad/Germany.png" },
  { title: "STUDY IN IRELAND", image: "/Study-Abroad/Ireland.png" },
  { title: "STUDY IN NEW ZEALAND", image: "/Study-Abroad/Newzealand.png" },
  { title: "STUDY IN SINGAPORE", image: "/Study-Abroad/Singapore.png" }
];

const StudyAbroadTransition = ({ isVisible, onComplete }) => {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [cardShiftIndex, setCardShiftIndex] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setCurrentCountryIndex(0);
      setCardShiftIndex(0);

      const interval = setInterval(() => {
        setCurrentCountryIndex((prev) => (prev + 1) % countries.length);
      }, 750);

      const cardSwapInterval = setInterval(() => {
        setCardShiftIndex((prev) => (prev + 1) % featuredCountryCards.length);
      }, 1500);

      const timer = setTimeout(() => {
        clearInterval(interval);
        clearInterval(cardSwapInterval);
        onComplete();
      }, 8500);

      return () => {
        clearInterval(interval);
        clearInterval(cardSwapInterval);
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
          <motion.div
            className="transition-travel-poster"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 0.22, scale: 1, y: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            aria-hidden
          >
            <img src="/Study-Abroad/hero-bg.png" alt="Travel inspiration" className="transition-travel-poster-img" />
          </motion.div>

          {/* Airplane flying across */}
          <motion.div
            className="transition-airplane-row"
            initial={{ x: '-20vw', y: '44vh', rotate: -16, scale: 0.9 }}
            animate={{ x: '114vw', y: '-34vh', rotate: 16, scale: 0.96 }}
            transition={{ duration: 8.5, ease: "linear" }}
          >
            <div className="transition-airplane-glow" />
            <IoAirplane size={102} className="transition-airplane-icon" />
          </motion.div>

          {/* Floating graduation caps */}
          <div className="graduation-caps-layer" aria-hidden>
            {[0, 1, 2].map((cap) => (
              <motion.div
                key={cap}
                className={`graduation-cap graduation-cap-${cap + 1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: [0, 0.8, 0.35], y: [20, -8, -24], rotate: [0, -8, 6] }}
                transition={{ duration: 3.2, delay: cap * 0.4, ease: "easeOut" }}
              >
                <FaGraduationCap />
              </motion.div>
            ))}
          </div>

          {/* Country cards inspired by intro reel */}
          <div className="transition-country-cards" aria-hidden>
            {[-2, -1, 0, 1, 2].map((offset) => {
              const cardIndex = (cardShiftIndex + offset + featuredCountryCards.length) % featuredCountryCards.length;
              const card = featuredCountryCards[cardIndex];
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={`${card.title}-${cardShiftIndex}-${offset}`}
                  className="transition-country-card"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.86,
                    x: offset * 195,
                    y: Math.abs(offset) * 14,
                    rotate: offset * 7,
                    scale: isCenter ? 1 : 0.88
                  }}
                  transition={{ duration: 1.3, ease: "easeOut" }}
                  style={{ zIndex: 10 - Math.abs(offset) }}
                >
                  <img src={card.image} alt={card.title} className="transition-country-card-img" />
                  <div className="transition-country-card-title">{card.title}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Rapid Country Ticker */}
          <div className="country-ticker-container">
            <motion.div
              key={countries[currentCountryIndex]}
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1.04, opacity: 1, y: 0 }}
              exit={{ scale: 1.5, opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
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
