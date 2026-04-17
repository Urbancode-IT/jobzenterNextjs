import React, { useEffect, useRef, useState } from "react";
import "./WhoIsThisFor.css";

const WhoIsThisFor = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const titleRef = useRef(null);
  const itemRefs = useRef([]);

  /* ── Heading scroll observer ── */
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

  /* ── Items scroll observer ── */
  useEffect(() => {
    const observers = [];
    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 150);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const items = [
    {
      number: "01",
      title: "Students",
      desc: "Preparing for their first corporate interview."
    },
    {
      number: "02",
      title: "Freshers",
      desc: "Looking to build confidence and crack entry-level roles."
    },
    {
      number: "03",
      title: "Experienced Professionals",
      desc: "Preparing for role-switch, promotions, or career transitions."
    },
    {
      number: "04",
      title: "Non-IT to IT switching",
      desc: "Moving from non-tech work into IT roles with hands-on training and steady support."
    }
  ];

  return (
    <section className="who-wrapper">
      <div className="container">
        <div className="text-center">
          <h2
            ref={titleRef}
            className={`who-title ${titleVisible ? 'title-sweep' : ''}`}
          >
            Who is this for?
          </h2>
        </div>

        <div className="row g-4 mt-2">
          {items.map((box, index) => (
            <div
              className="col-12 col-md-6 col-lg-3"
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div className={`who-card ${visibleItems.includes(index) ? "who-visible" : "who-hidden"}`}>
                <div className="who-number">
                  <span className="num-bg"></span>
                  <span className="num-text">{box.number}</span>
                </div>

                <h3 className="who-card-title">{box.title}</h3>
                <p className="who-card-desc">{box.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
