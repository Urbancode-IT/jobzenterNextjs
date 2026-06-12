"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./Chatbot.css"; // move your CSS here
import Chatbot from "./Chatbot";
import EnquiryFormModal from "../enquiryForm/EnquiryFormModal";

const ChatbotWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoPosition, setDemoPosition] = useState(null);
  const hasUserDraggedDemoRef = useRef(false);

  const chatbotTriggerRef = useRef(null);
  const chatbotContainerRef = useRef(null);
  const dragStateRef = useRef({
    isDragging: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    moved: false,
  });

  const clampPosition = (x, y) => {
    if (typeof window === "undefined") return { x, y };
    const widgetWidth = 210;
    const widgetHeight = 56;
    return {
      x: Math.min(Math.max(12, x), window.innerWidth - widgetWidth - 12),
      y: Math.min(Math.max(80, y), window.innerHeight - widgetHeight - 12),
    };
  };

  const getInitialDemoPosition = () => {
    if (typeof window === "undefined") return { x: 0, y: 0 };

    const titleEl = document.querySelector(".hero-centered-title");
    if (titleEl) {
      const rect = titleEl.getBoundingClientRect();
      const anchorX = rect.left + rect.width * 0.86;
      const anchorY = rect.top + rect.height * 0.58;
      return clampPosition(anchorX, anchorY);
    }

    return clampPosition(window.innerWidth - 230, window.innerHeight - 170);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const setHeroAnchoredPosition = () => {
      if (hasUserDraggedDemoRef.current) return;
      setDemoPosition(getInitialDemoPosition());
    };

    const rafId = window.requestAnimationFrame(setHeroAnchoredPosition);
    window.addEventListener("resize", setHeroAnchoredPosition);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", setHeroAnchoredPosition);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isChatOpen &&
        chatbotContainerRef.current &&
        chatbotTriggerRef.current &&
        !chatbotContainerRef.current.contains(event.target) &&
        !chatbotTriggerRef.current.contains(event.target)
      ) {
        setIsChatOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isChatOpen]);

  const handleDemoPointerDown = (event) => {
    const dragState = dragStateRef.current;
    dragState.isDragging = true;
    dragState.pointerId = event.pointerId;
    dragState.startX = event.clientX;
    dragState.startY = event.clientY;
    dragState.initialX = demoPosition?.x ?? 0;
    dragState.initialY = demoPosition?.y ?? 0;
    dragState.moved = false;
  };

  const handleDemoPointerMove = (event) => {
    const dragState = dragStateRef.current;
    if (!dragState.isDragging || dragState.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;
    const next = clampPosition(dragState.initialX + deltaX, dragState.initialY + deltaY);
    dragState.moved = dragState.moved || Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5;
    if (dragState.moved) {
      hasUserDraggedDemoRef.current = true;
    }
    setDemoPosition(next);
  };

  const handleDemoPointerUp = (event) => {
    const dragState = dragStateRef.current;
    if (dragState.pointerId !== event.pointerId) return;
    dragState.isDragging = false;
    dragState.pointerId = null;
  };

  const handleDemoClick = () => {
    if (dragStateRef.current.moved) return;
    setIsDemoOpen(true);
  };

  return (
    <>
      {/* Quick contact icons (WhatsApp + Phone) */}
      <div className="quick-contact-float" aria-label="Quick contact">
        <a
          href="https://wa.me/919057770577"
          target="_blank"
          rel="noopener noreferrer"
          className="quick-contact-btn whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <i className="bi bi-whatsapp" />
        </a>
        <a
          href="tel:+919057770577"
          className="quick-contact-btn phone"
          aria-label="Call us"
        >
          <i className="bi bi-telephone-fill" />
        </a>
      </div>

      {/* Chatbot Trigger + teaser (Urbancode-style bubble above icon) */}
      <div
        id="chatbot-trigger"
        ref={chatbotTriggerRef}
        className="chatbot-trigger"
        onClick={() => setIsChatOpen((prev) => !prev)}
      >
        <div className="chatbot-offer-bubble" aria-live="polite">
          <span className="chatbot-offer-line1">How may I assist you today?</span>
          <button
            type="button"
            className="chatbot-offer-cta"
            onClick={(e) => {
              e.stopPropagation();
              setIsDemoOpen(true);
            }}
          >
            Please ask here →
          </button>
        </div>
        <div className="chatbot-icon-stack">
          <div className="chatbot-icon">
            <Image
              src="/bee.jpg"
              width={60}
              height={60}
              alt="Chat with us"
              className="rounded-circle"
            />
          </div>
          <span className="chatbot-pulse" aria-hidden />
        </div>
      </div>

      {/* Chatbot Container */}
      <div
        id="chatbot-container"
        ref={chatbotContainerRef}
        className={`chatbot-container ${isChatOpen ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div
          className="chatbot-close"
          onClick={() => setIsChatOpen(false)}
          role="button"
          aria-label="Close chat"
          tabIndex={0}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* <iframe
          src="https://uc-chatbot.netlify.app"
          frameBorder="0"
          className="chatbot-iframe"
        ></iframe> */}
        <Chatbot />
      </div>

      {/* Draggable Book demo CTA */}
      {demoPosition && (
        <button
          type="button"
          className="book-demo-float"
          style={{ left: `${demoPosition.x}px`, top: `${demoPosition.y}px` }}
          onPointerDown={handleDemoPointerDown}
          onPointerMove={handleDemoPointerMove}
          onPointerUp={handleDemoPointerUp}
          onPointerCancel={handleDemoPointerUp}
          onClick={handleDemoClick}
          aria-label="Book demo"
        >
          <i className="bi bi-calendar2-check-fill" aria-hidden />
          <span>Book a demo</span>
        </button>
      )}

      <EnquiryFormModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
};

export default ChatbotWidget;
