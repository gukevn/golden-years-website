import type { Metadata } from "next";
import { ContactForm } from "@/components/Form";
import { Footer } from "@/components/Footer";
import { Lead } from "@/components/Lead";
import styles from "../../inner.module.css";

export const metadata: Metadata = {
  title: "Formulario Para Un Familiar",
  description: "Formulario familiar de orientación inicial de Golden Years."
};

export default function FamiliarPage() {
  return (
    <main className={styles.main}>
      <Lead
        title="Cuéntenos sobre su familiar"
        text="En Golden Years comprendemos la importancia de encontrar el entorno adecuado para un ser querido."
      />
      <ContactForm mode="familiar" />
      <Footer />
    </main>
  );
}
