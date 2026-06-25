"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 8);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <Link className={styles.logo} href="/" aria-label="Golden Years página principal">
        <Image
          src="/assets/brand/logo-calidad-vida-transparent.png"
          alt="Calidad de Vida Golden Years"
          width={1070}
          height={578}
          priority
        />
      </Link>
      <button
        className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        id="primary-navigation"
        className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        aria-label="Navegación principal"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            className={pathname === item.href ? styles.active : undefined}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
