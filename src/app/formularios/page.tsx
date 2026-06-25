import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Lead } from "@/components/Lead";
import { SectionImage } from "@/components/SectionImage";
import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "Formularios",
  description: "Validación inicial para solicitar información personal o familiar en Golden Years."
};

export default function FormulariosPage() {
  return (
    <main className={styles.main}>
      <Lead
        title="Conversemos sobre cómo podemos ayudarle"
        text="Seleccione la opción que mejor describe su búsqueda para iniciar la orientación."
      />
      <div className={styles.choice}>
        <Button href="/formularios/para-mi">Busco información para mí</Button>
        <Button href="/formularios/familiar" variant="light">
          Busco información para un familiar
        </Button>
      </div>
      <SectionImage src="/assets/docs/formularios/image2.png" alt="Validación inicial" maxWidth={860} />
      <Footer />
    </main>
  );
}
