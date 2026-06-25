import styles from "./Lead.module.css";

export function Lead({
  eyebrow,
  title,
  text
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className={styles.lead}>
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h1>{title}</h1>
      <span aria-hidden="true" />
      {text ? <p className={styles.text}>{text}</p> : null}
    </div>
  );
}
