'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoIntro() {
  const [stage, setStage] = useState('checking'); // 'checking', 'video', 'done'
  const videoRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isReloading = sessionStorage.getItem('study_abroad_reloading');
      if (isReloading === 'true') {
        sessionStorage.removeItem('study_abroad_reloading');
        window.location.replace('/');
        return;
      }
    }

    const handleBeforeUnload = () => {
      sessionStorage.setItem('study_abroad_reloading', 'true');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Initial check complete, start video
    setStage('video');
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (stage === 'done') { 
      document.body.style.overflow = 'unset'; 
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [stage]);

  const handleVideoEnd = () => {
    // Skip animation right to done state
    setStage('done');
  };

  if (stage === 'checking') {
    return <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#ffffff', zIndex: 99999 }}></div>;
  }

  return (
    <AnimatePresence>
      {stage === 'video' && (
        <motion.div
           initial={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.5 }}
           style={{
             position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
             zIndex: 99999, overflow: 'hidden', background: '#000000',
             display: 'flex', justifyContent: 'center', alignItems: 'center'
           }}
        >
          {/* Rotated to make vertical video horizontal */}
          <video
            ref={videoRef}
            src="/Study-Abroad/video_trimmed_3s.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vh', 
              height: '100vw', 
              transform: 'translate(-50%, -50%) rotate(90deg)',
              objectFit: 'cover' 
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
