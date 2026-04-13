"use client";
import React, { useState, useEffect, useRef } from 'react';
import './FutureSection.css';

const FutureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const prevActiveRef = useRef(0);
  const titleRef = useRef(null);

  // Auto-swap every 4 seconds, but pause if hovering
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Stop videos when they leave the center
  useEffect(() => {
    if (prevActiveRef.current !== activeIndex) {
      const iframes = document.querySelectorAll('.future-video');
      const prevIframe = iframes[prevActiveRef.current];
      if (prevIframe) {
        // Refreshing the src is the most reliable way to force a stop on cross-origin Instagram embeds
        const currentSrc = prevIframe.src;
        prevIframe.src = '';
        prevIframe.src = currentSrc;
      }
      prevActiveRef.current = activeIndex;
    }
  }, [activeIndex]);

  // Title sweep intersection observer
  useEffect(() => {
    if (!titleRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const getCardClass = (index) => {
    if (index === activeIndex) return 'card-center';
    if (index === (activeIndex + 1) % 3) return 'card-right';
    if (index === (activeIndex + 2) % 3) return 'card-left';
    return '';
  };

  return (
    <section className="future-section">
      <div className="future-container">
        
        {/* Top Centered Text Area */}
        <div className="future-content">
          <h2 
            ref={titleRef}
            className={`future-title ${titleVisible ? "title-sweep" : ""}`}
          >
            Where Your Future Begins
          </h2>
          <p className="future-subtitle">
            Master the most demanded skills in the industry. Learn from experts and build a successful career with hands-on training.
          </p>
          <button className="future-btn">Start Your Journey</button>
        </div>

        {/* 3D Swapping Carousel */}
        <div 
          className="future-carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Card 0: Power BI */}
          <div 
            className={`future-card-3d ${getCardClass(0)}`}
            onClick={() => handleCardClick(0)}
          >
            <div className="video-container">
              <iframe 
                src="https://www.instagram.com/p/DWgpOk4kx6V/embed"
                frameBorder="0" 
                scrolling="no" 
                allowtransparency="true"
                allow="encrypted-media"
                className="future-video"
                style={{ border: 'none' }}
              ></iframe>
            </div>
            {/* Small corner link */}
            <div className="insta-corner-link" onClick={(e) => { e.stopPropagation(); window.open('https://www.instagram.com/reel/DWgpOk4kx6V/', '_blank'); }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="IG" className="insta-icon-mini" />
              <span>View</span>
            </div>
            <div className="click-overlay" onClick={() => handleCardClick(0)}></div>
          </div>

          {/* Card 1: React Native */}
          <div 
            className={`future-card-3d ${getCardClass(1)}`}
            onClick={() => handleCardClick(1)}
          >
            <div className="video-container">
              <iframe 
                src="https://www.instagram.com/p/DWEWcFAk0sg/embed"
                frameBorder="0" 
                scrolling="no" 
                allowtransparency="true"
                allow="encrypted-media"
                className="future-video"
                style={{ border: 'none' }}
              ></iframe>
            </div>
            {/* Small corner link */}
            <div className="insta-corner-link" onClick={(e) => { e.stopPropagation(); window.open('https://www.instagram.com/reel/DWEWcFAk0sg/', '_blank'); }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="IG" className="insta-icon-mini" />
              <span>View</span>
            </div>
            <div className="click-overlay" onClick={() => handleCardClick(1)}></div>
          </div>

          {/* Card 2: CCNA */}
          <div 
            className={`future-card-3d ${getCardClass(2)}`}
            onClick={() => handleCardClick(2)}
          >
            <div className="video-container">
              <iframe 
                src="https://www.instagram.com/p/DUii4sjgj4O/embed"
                frameBorder="0" 
                scrolling="no" 
                allowtransparency="true"
                allow="encrypted-media"
                className="future-video"
                style={{ border: 'none' }}
              ></iframe>
            </div>
            {/* Small corner link */}
            <div className="insta-corner-link" onClick={(e) => { e.stopPropagation(); window.open('https://www.instagram.com/reel/DUii4sjgj4O/', '_blank'); }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="IG" className="insta-icon-mini" />
              <span>View</span>
            </div>
            <div className="click-overlay" onClick={() => handleCardClick(2)}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FutureSection;
