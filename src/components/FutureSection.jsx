"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import "./FutureSection.css";

const REELS = [
  {
    embed: "https://www.instagram.com/reel/DWgpOk4kx6V/embed",
    url: "https://www.instagram.com/reel/DWgpOk4kx6V/",
    label: "Power BI",
  },
  {
    embed: "https://www.instagram.com/reel/DWEWcFAk0sg/embed",
    url: "https://www.instagram.com/reel/DWEWcFAk0sg/",
    label: "Jobzenter",
  },
  {
    embed: "https://www.instagram.com/reel/DUii4sjgj4O/embed",
    url: "https://www.instagram.com/reel/DUii4sjgj4O/",
    label: "CCNA",
  },
];

const ROTATE_MS = 3500;

const FutureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [playerKey, setPlayerKey] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);

  const stopWatching = useCallback(() => {
    setPlayingIndex(null);
    setPlayerKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (isHovered || playingIndex !== null) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REELS.length);
    }, ROTATE_MS);

    return () => clearInterval(interval);
  }, [isHovered, playingIndex]);

  useEffect(() => {
    if (playingIndex === null) return;

    const onPointerDown = (e) => {
      if (carouselRef.current?.contains(e.target)) return;
      stopWatching();
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [playingIndex, stopWatching]);

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

  const activateCard = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (playingIndex === index) return;

    if (playingIndex !== null) {
      setPlayerKey((k) => k + 1);
    }

    setPlayingIndex(index);

    if (playingIndex === null) {
      setActiveIndex(index);
    }
  };

  const goToSlide = (direction) => {
    stopWatching();

    setActiveIndex((prev) => {
      if (direction === "prev") {
        return (prev - 1 + REELS.length) % REELS.length;
      }
      return (prev + 1) % REELS.length;
    });
  };

  return (
    <section className="future-section">
      <div className="future-container">
        <div className="future-content">
          <h2
            ref={titleRef}
            className={`future-title ${titleVisible ? "title-sweep" : ""}`}
          >
            {"Let's Explore the Course"}
          </h2>
          <p className="future-subtitle">
            Master the most demanded skills in the industry. Learn from experts
            and build a successful career with hands-on training.
          </p>
          <button type="button" className="future-btn">
            Start Your Journey
          </button>
        </div>

        <div
          className="future-slider-wrap"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            type="button"
            className="future-nav-btn future-nav-btn--prev"
            onClick={() => goToSlide("prev")}
            aria-label="Previous video"
          >
            <i className="bi bi-chevron-left" aria-hidden="true" />
          </button>

          <div
            ref={carouselRef}
            className={`future-video-row ${playingIndex !== null ? "is-interacting" : ""}`}
          >
            {REELS.map((reel, index) => {
              const isCarouselActive =
                playingIndex === null && index === activeIndex;
              const isPlaying = playingIndex === index;

              return (
                <article
                  key={reel.url}
                  className={`future-video-card ${isCarouselActive ? "is-active" : ""} ${
                    isPlaying ? "is-playing" : ""
                  }`}
                >
                  <div className="video-container">
                    <iframe
                      src={reel.embed}
                      title={`Course reel preview ${index + 1}`}
                      scrolling="no"
                      allow="encrypted-media"
                      className="future-video future-video--preview"
                      tabIndex={-1}
                    />

                    {isPlaying && (
                      <iframe
                        key={`player-${playerKey}`}
                        src={reel.embed}
                        title={`Course reel player ${index + 1}`}
                        scrolling="no"
                        allow="encrypted-media; autoplay"
                        className="future-video future-video--playing"
                      />
                    )}
                  </div>

                  {!isPlaying && (
                    <button
                      type="button"
                      className="video-tap-layer"
                      onClick={(e) => activateCard(index, e)}
                      aria-label={`Open course reel ${index + 1}`}
                    />
                  )}
                </article>
              );
            })}
          </div>

          <button
            type="button"
            className="future-nav-btn future-nav-btn--next"
            onClick={() => goToSlide("next")}
            aria-label="Next video"
          >
            <i className="bi bi-chevron-right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
