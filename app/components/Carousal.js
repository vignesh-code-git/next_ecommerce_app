"use client";
import React, { useState, useEffect } from "react";

export default function Carousel() {
  // Use relative URLs directly from public/
  const images = ["/banner_1.jpg", "/banner_2.jpg", "/banner_3.jpg"];
  const [index, setIndex] = useState(0);
  const duration = 3000; // 3 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, duration);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((index + 1) % images.length);

  return (
    <div className="carousel-container">
      {/* Slides */}
      <div
        className="carousel-slides"
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`carousel-${i}`}
            style={{ width: "100%", flexShrink: 0, objectFit: "cover" }}
          />
        ))}
      </div>

      {/* Left Button */}
      <button className="carousel-btn prev" onClick={prevSlide}>
        ❮
      </button>

      {/* Right Button */}
      <button className="carousel-btn next" onClick={nextSlide}>
        ❯
      </button>

      {/* Progress bars */}
      <div className="carousel-progress">
        {images.map((_, i) => (
          <div
            key={i}
            className="progress-bar"
            style={{ width: i === index ? "1cm" : "0.5cm" }}
          >
            <div
              className="progress-fill"
              style={{
                animation:
                  i === index ? `progress ${duration}ms linear forwards` : "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        .carousel-container {
          position: relative;
          overflow: hidden;
          max-width: 100%;
          
          
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.4);
          border: none;
          width: 45px;
          height: 60px;
          cursor: pointer;
          font-size: 22px;
          color: #000;
          transition: background 0.3s;
        }

        .carousel-btn:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        .carousel-btn.prev { left: 0; }
        .carousel-btn.next { right: 0; }

        .carousel-progress {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 8px;
        }

        .progress-bar {
          height: 4px;
          background: rgba(0,0,0,0.1);
          border-radius: 2px;
          overflow: hidden;
          transition: width 0.3s ease;
        }

        .progress-fill {
          width: 100%;
          height: 100%;
          background: #000;
        }

        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
