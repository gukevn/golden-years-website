import { whatsappUrl } from "@/data/site";
import styles from "./WhatsAppButton.module.css";

export function WhatsAppButton() {
  return (
    <a className={styles.button} href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp">
      ☎
    </a>
  );
}
