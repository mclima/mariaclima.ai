'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <section aria-labelledby="hero-title">
      <h1 ref={headingRef} id="hero-title">
        maria c. lima
      </h1>
      <p className="hero-description">
        Exploring the possibilities of artificial intelligence through practical applications.
      </p>
    </section>
  );
}
