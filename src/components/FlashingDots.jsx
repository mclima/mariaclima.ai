'use client';

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function FlashingDots() {
  const containerRef = useRef(null);
  const starsRef = useRef([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const starCount = 50;

      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 2 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;

        newStars.push({
          id: i,
          size,
          top,
          left
        });
      }
      return newStars;
    };

    setStars(generateStars());
  }, []);

  useEffect(() => {
    if (stars.length === 0) return;

    const starElements = starsRef.current;

    starElements.forEach((star) => {
      if (star) {
        gsap.fromTo(star, 
          {
            opacity: 0.1
          },
          {
            opacity: 1,
            duration: Math.random() * 1.5 + 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: Math.random() * 2
          }
        );
      }
    });
  }, [stars]);

  return (
    <div ref={containerRef} className="starfield">
      {stars.map((star) => (
        <span
          key={star.id}
          ref={(el) => (starsRef.current[star.id] = el)}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`
          }}
        />
      ))}
    </div>
  );
}
