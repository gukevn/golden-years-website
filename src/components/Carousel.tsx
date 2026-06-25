"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

const slides = [
  "/assets/brand/hero-facility.jpg",
  "/assets/brand/hero-doc-2.jpg",
  "/assets/brand/hero-doc-3.jpg",
  "/assets/brand/hero-doc-4.jpg"
];

export function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: 1 | -1) => {
    setIndex((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <section className={styles.carousel} aria-label="Galería principal">
      <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide) => (
          <div className={styles.slide} key={slide}>
            <Image src={slide} alt="Instalaciones de Golden Years" fill priority sizes="100vw" />
          </div>
        ))}
      </div>
      <button className={`${styles.control} ${styles.prev}`} onClick={() => move(-1)} aria-label="Imagen anterior">
        ‹
      </button>
      <button className={`${styles.control} ${styles.next}`} onClick={() => move(1)} aria-label="Imagen siguiente">
        ›
      </button>
    </section>
  );
}
