'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoAirplane } from "react-icons/io5";
import './FlightTransition.css';

const FlightTransition = ({ isVisible, onComplete }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flight-transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Animated Clouds */}
          <div className="clouds-container">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`cloud cloud-${i + 1}`}
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: '100vw', opacity: 0.6 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Central Airplane Flight */}
          <motion.div
            className="flight-airplane-wrapper"
            initial={{ x: '-50vw', y: '20vh', scale: 0.5, rotate: 10 }}
            animate={{ 
              x: '110vw', 
              y: '-20vh', 
              scale: 2.5,
              rotate: -5
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1], // Custom jet-like easing
            }}
            onAnimationComplete={onComplete}
          >
            <IoAirplane size={80} className="flight-airplane-icon" />
          </motion.div>

          <motion.div 
            className="transition-sweep"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlightTransition;
