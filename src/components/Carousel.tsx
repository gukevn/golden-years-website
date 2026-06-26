"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

const slides = [
  "/assets/hero-carousel/facility-garden.jpeg",
  "/assets/hero-carousel/facility-corridor.jpg",
  "/assets/hero-carousel/facility-patio.jpg",
  "/assets/hero-carousel/residence-dog.jpg",
  "/assets/hero-carousel/sarchi-outing.png"
];

const visibleDurationMs = 4000;
const transitionDurationMs = 4000;

export function Carousel() {
  const [index, setIndex] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    const delay = hasStarted.current ? visibleDurationMs + transitionDurationMs : visibleDurationMs;
    const timer = window.setTimeout(() => {
      hasStarted.current = true;
      setIndex((current) => (current + 1) % slides.length);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [index]);

  const move = (direction: 1 | -1) => {
    setIndex((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <section className={styles.carousel} aria-label="Galería principal">
      <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide) => (
          <div className={styles.slide} key={slide}>
            <Image
              src={slide}
              alt="Instalaciones y vida en Golden Years"
              fill
              priority={slide === slides[0]}
              sizes="100vw"
            />
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
