import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Lead } from "@/components/Lead";
import { faqs, whatsappUrl } from "@/data/site";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description: "Preguntas frecuentes sobre ingreso, atención, visitas, alimentación y servicios de Golden Years."
};

export default function PreguntasPage() {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <Lead title="Preguntas frecuentes" text="Resolvemos sus dudas principales para su tranquilidad y la de su familia." />
        <div className={styles.faq}>
          {faqs.map((faq) => (
            <details key={faq.q} open>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
        <Button href={whatsappUrl}>Converse con un asesor familiar</Button>
      </section>
      <Footer />
    </main>
  );
}
