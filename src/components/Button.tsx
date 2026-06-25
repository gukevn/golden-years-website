import Link from "next/link";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "light";
};

export function Button({ children, href, variant = "primary" }: Props) {
  return (
    <Link className={`${styles.button} ${styles[variant]}`} href={href}>
      {children}
    </Link>
  );
}
