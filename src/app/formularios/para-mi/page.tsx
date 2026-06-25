import type { Metadata } from "next";
import { ContactForm } from "@/components/Form";
import { Footer } from "@/components/Footer";
import { Lead } from "@/components/Lead";
import styles from "../../inner.module.css";

export const metadata: Metadata = {
  title: "Formulario Para Mí",
  description: "Formulario personal de orientación inicial de Golden Years."
};

export default function ParaMiPage() {
  return (
    <main className={styles.main}>
      <Lead
        title="Conversemos sobre su próxima etapa de bienestar"
        text="En Golden Years, creemos que cada persona merece vivir esta etapa con tranquilidad, bienestar y dignidad."
      />
      <ContactForm mode="personal" />
      <Footer />
    </main>
  );
}
