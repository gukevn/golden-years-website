import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Lead } from "@/components/Lead";
import { SectionImage } from "@/components/SectionImage";
import { installationCards, whatsappUrl } from "@/data/site";
import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "Instalaciones",
  description: "Recepción, jardines, corredores, áreas sociales y espacios de convivencia de Golden Years."
};

export default function InstalacionesPage() {
  return (
    <main className={styles.main}>
      <Lead
        title="Conoce los espacios que forman parte de la experiencia diaria en Golden Years."
        text="Ambientes diseñados para brindar comodidad, seguridad y tranquilidad."
      />
      <section className={styles.section}>
        <SectionImage src="/assets/docs/habitaciones-instalaciones/image8.png" alt="Instalaciones Golden Years" maxWidth={980} />
        <div className={styles.grid}>
          {installationCards.map((item) => (
            <article className={styles.tile} key={item}>
              <h2>{item}</h2>
              <p>Espacio pensado para la comodidad, seguridad y convivencia de nuestros residentes.</p>
            </article>
          ))}
        </div>
        <div className={styles.choice}>
          <Button href={whatsappUrl}>Converse con un asesor familiar</Button>
        </div>
      </section>
      <SectionImage src="/assets/docs/habitaciones-instalaciones/image5.png" alt="Seguridad y tranquilidad diaria" maxWidth={920} />
      <Footer />
    </main>
  );
}
