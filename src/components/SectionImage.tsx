import styles from "./SectionImage.module.css";

type Props = {
  src: string;
  alt: string;
  maxWidth?: number;
};

export function SectionImage({ src, alt, maxWidth = 950 }: Props) {
  return (
    <figure className={styles.figure} style={{ maxWidth }}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}
