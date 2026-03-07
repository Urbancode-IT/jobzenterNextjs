'use client';
import React from 'react';

const SpecialBanner = () => {
  return (
    <div className="special-banner-wrapper">
      <div className="banner-container">
        <img
          src="/women's%20day%20banner%20JZ.png"
          alt="Women's Day Special"
          className="special-banner-img"
        />
      </div>
      <style jsx>{`
        .special-banner-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
          width: 100%;
          background: linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%);
        }
        .banner-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .special-banner-img {
          width: 100%;
          max-width: 1000px;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .special-banner-img:hover {
          transform: translateY(-10px) scale(1.01);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
        @media (max-width: 768px) {
          .special-banner-wrapper {
            padding: 30px 15px;
          }
          .special-banner-img {
            border-radius: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default SpecialBanner;
