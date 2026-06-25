"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label="Golden Years página principal">
        <Image
          src="/assets/brand/logo-lockup.png"
          alt="Calidad de Vida Golden Years"
          width={238}
          height={85}
          priority
        />
      </Link>
      <nav className={styles.nav} aria-label="Navegación principal">
        {navItems.map((item) => (
          <Link
            key={item.href}
            className={pathname === item.href ? styles.active : undefined}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
