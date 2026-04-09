"use client";
import React, { useState, useEffect, useRef } from "react";

/**
 * A reusable animated heading component that splits text into a black part
 * and a shimmering yellow part based on the last word(s).
 */
const AnimatedHeading = ({ 
  text, 
  className = "", 
  style = {},
  variant = "h2"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  const Tag = variant;

  return (
    <Tag 
      ref={titleRef} 
      className={`${className} ${isVisible ? "title-sweep" : ""}`} 
      style={style}
    >
      {text}
    </Tag>
  );
};

export default AnimatedHeading;
