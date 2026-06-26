import Link from "next/link";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "light";
};

export function Button({ children, href, variant = "primary" }: Props) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href.startsWith("http")) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
