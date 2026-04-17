"use client";
import { useEffect } from "react";
import Image from "next/image";
import "./Chatbot.css"; // move your CSS here
import Chatbot from "./Chatbot";

const ChatbotWidget = () => {
  useEffect(() => {
    const chatbotTrigger = document.getElementById("chatbot-trigger");
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatbotClose = document.querySelector(".chatbot-close");

    if (!chatbotTrigger || !chatbotContainer || !chatbotClose) return;

    const toggleChat = () => chatbotContainer.classList.toggle("active");
    const closeChat = () => chatbotContainer.classList.remove("active");

    const handleOutsideClick = (event) => {
      if (
        chatbotContainer.classList.contains("active") &&
        !chatbotContainer.contains(event.target) &&
        !chatbotTrigger.contains(event.target)
      ) {
        closeChat();
      }
    };

    chatbotTrigger.addEventListener("click", toggleChat);
    chatbotClose.addEventListener("click", closeChat);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      chatbotTrigger.removeEventListener("click", toggleChat);
      chatbotClose.removeEventListener("click", closeChat);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* Chatbot Trigger + teaser (Urbancode-style bubble above icon) */}
      <div id="chatbot-trigger" className="chatbot-trigger">
        <div className="chatbot-offer-bubble" aria-live="polite">
          <span className="chatbot-offer-line1">🎉 Exciting offers are live!</span>
          <span className="chatbot-offer-line2">Enroll in a course today.</span>
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
      <div id="chatbot-container" className="chatbot-container">
        <div className="chatbot-close">
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
    </>
  );
};

export default ChatbotWidget;
