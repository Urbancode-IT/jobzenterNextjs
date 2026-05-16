'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./StudentReviewsCarousel.css";

const reviews = [
  {
    name: "Priyadarshini",
    role: "React Native Developer",
    text: "Your patience and termination to teach kids ows how passionate you towards teaching. Such a immendable teacher you , I wish you all success...",
    img: "/feed1.png",
  },
  {
    name: "Mohamed Haleelulla",
    role: "Fullstack Developer",
    text: "What impressed me most was the placement assistance. The team constantly shared job updates, arranged mock interviews, and helped me tailor my resume. Highly recommend for career changers!",
    img: "/feed2.png",
  },
  {
    name: "Akash",
    role: "QA Engineer",
    text: "Jobzenter offers a friendly and practical environment that made learning enjoyable. The hands-on experience was invaluable in preparing me for the real world..",
    img: "/feed3.png",
  },
  {
    name: "Deepak",
    role: "Backend Developer",
    text: "I was working with a minimum package, but after joining Jobzenter's placement support, my salary doubled. I now earn 2X thanks to their career coaching..",
    img: "/feed4.png",
  },
  {
    name: "Kiran",
    role: "Frontend Developer",
    text: "I was struggling with frontend frameworks before joining Jobzenter. Their step-by-step approach and project guidance made me interview-ready.",
    img: "/feed5.png",
  },
  {
    name: "Manisha",
    role: "Data Analyst",
    text: "Jobzenter's Power BI course helped me land a data analytics role. The project-focused approach gave me strong visualization and DAX skills.",
    img: "/feed6.png",
  },
];

const StudentReviews = () => {
  const viewportRef = useRef(null);
  const titleRef = useRef(null);

  const [cardsPerView, setCardsPerView] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [index, setIndex] = useState(3); // will be reset after mount
  const [titleVisible, setTitleVisible] = useState(false);
  const [layout, setLayout] = useState({
    cardWidthPx: 0,
    gapPx: 24,
    slideStepPx: 0,
  });

  const getCardsPerView = useCallback((w) => {
    if (w < 640) return 1; // mobile
    if (w < 1024) return 2; // tablet
    return 3; // desktop
  }, []);

  useEffect(() => {
    const update = () => setCardsPerView(getCardsPerView(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [getCardsPerView]);

  /* ── Heading scroll observer (matches other sections) ── */
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

  const safeCardsPerView = useMemo(() => {
    return Math.max(1, Math.min(cardsPerView, reviews.length));
  }, [cardsPerView]);

  const gapPx = useMemo(() => {
    // Keep this in sync with our spacing in the visual reference.
    if (safeCardsPerView === 3) return 24;
    if (safeCardsPerView === 2) return 20;
    return 16;
  }, [safeCardsPerView]);

  const extendedSlides = useMemo(() => {
    const n = reviews.length;
    const k = safeCardsPerView;
    const prepend = reviews.slice(n - k);
    const append = reviews.slice(0, k);
    return [...prepend, ...reviews, ...append];
  }, [safeCardsPerView]);

  // Reset index when breakpoint changes so the viewport stays aligned.
  useEffect(() => {
    const start = safeCardsPerView;
    setTransitionEnabled(true);
    setIsAnimating(false);
    setIndex(start);
  }, [safeCardsPerView]);

  // Measure viewport width to compute exact pixel-based slide step.
  useEffect(() => {
    const measure = () => {
      const el = viewportRef.current;
      if (!el) return;

      const viewportWidth = el.clientWidth;
      const k = safeCardsPerView;

      const totalGap = gapPx * (k - 1);
      const cardWidthPx = k > 0 ? Math.max(0, (viewportWidth - totalGap) / k) : 0;
      const slideStepPx = cardWidthPx + gapPx;

      setLayout({
        cardWidthPx,
        gapPx,
        slideStepPx,
      });
    };

    measure();

    const handleResize = () => measure();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [gapPx, safeCardsPerView]);

  const goTo = useCallback(
    (nextIndex) => {
      if (isAnimating) return;
      if (layout.slideStepPx <= 0) return;

      setIsAnimating(true);
      setTransitionEnabled(true);
      setIndex(nextIndex);
      window.setTimeout(() => setIsAnimating(false), 520);
    },
    [isAnimating, layout.slideStepPx]
  );

  const goNext = useCallback(() => {
    goTo(index + 1);
  }, [goTo, index]);

  const goPrev = useCallback(() => {
    goTo(index - 1);
  }, [goTo, index]);

  const onTransitionEnd = useCallback(() => {
    const n = reviews.length;
    const k = safeCardsPerView;
    const minRealIndex = k;
    const maxRealIndex = k + n - 1;

    // When we land in a cloned region, jump back to the corresponding real index
    // without a transition (so it feels infinite).
    if (index < minRealIndex) {
      setTransitionEnabled(false);
      setIndex(index + n);
    } else if (index > maxRealIndex) {
      setTransitionEnabled(false);
      setIndex(index - n);
    }
  }, [index, safeCardsPerView]);

  useEffect(() => {
    if (transitionEnabled) return;
    // Re-enable transitions on the next frame after we jump.
    const id = window.requestAnimationFrame(() => setTransitionEnabled(true));
    return () => window.cancelAnimationFrame(id);
  }, [transitionEnabled, index]);

  const translateX = -(index * layout.slideStepPx);
  const trackStyle = {
    transform: `translateX(${translateX}px)`,
    transition: transitionEnabled ? "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
    gap: `${layout.gapPx}px`,
  };

  const cardBaseStyle = {
    width: layout.cardWidthPx ? `${layout.cardWidthPx}px` : "100%",
    flex: layout.cardWidthPx ? `0 0 ${layout.cardWidthPx}px` : "0 0 auto",
  };

  return (
    <section id="what-our-students-say" className="student-reviews-section">
      <div className="student-reviews-container">
        <header className="student-reviews-header">
          <h2
            ref={titleRef}
            className={`student-reviews-title ${titleVisible ? "title-sweep" : ""}`}
          >
            What our students say
          </h2>
        </header>

        <div className="student-reviews-carousel-wrap">
          <button
            type="button"
            className="student-reviews-nav student-reviews-nav--prev"
            onClick={goPrev}
            aria-label="Show previous testimonials"
            disabled={isAnimating}
          >
            <IoChevronBack />
          </button>

          <div ref={viewportRef} className="student-reviews-viewport" aria-label="Testimonials carousel">
            <div className="student-reviews-track" style={trackStyle} onTransitionEnd={onTransitionEnd}>
              {extendedSlides.map((review, i) => (
                <article key={`${review.name}-${i}`} className="student-review-card" style={cardBaseStyle}>
                  <div className="student-review-quote" aria-hidden="true">
                    <FaQuoteLeft />
                  </div>

                  <p className="student-review-text">{review.text}</p>

                  <footer className="student-review-footer">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="student-review-avatar"
                      loading="lazy"
                    />
                    <div className="student-review-meta">
                      <p className="student-review-name">{review.name}</p>
                      <p className="student-review-role">{review.role}</p>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="student-reviews-nav student-reviews-nav--next"
            onClick={goNext}
            aria-label="Show next testimonials"
            disabled={isAnimating}
          >
            <IoChevronForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentReviews;