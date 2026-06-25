import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Lead } from "@/components/Lead";
import { SectionImage } from "@/components/SectionImage";
import { roomCards, whatsappUrl } from "@/data/site";
import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "Habitaciones",
  description: "Habitaciones compartidas, privadas, estándar y deluxe de Golden Years Senior Residence."
};

export default function HabitacionesPage() {
  return (
    <main className={styles.main}>
      <Lead
        title="Espacios diseñados para la comodidad y el bienestar de nuestros residentes."
        text="Habitaciones compartidas y privadas diseñadas para brindar comodidad, privacidad y accesibilidad."
      />
      <section className={styles.section}>
        <div className={styles.stack}>
          {roomCards.map((room) => (
            <article className={styles.room} key={room.title}>
              <Image src={room.image} alt={room.title} width={520} height={520} />
              <div>
                <h2>{room.title}</h2>
                <h3>{room.heading}</h3>
                <ul>
                  {room.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Button href={whatsappUrl}>Agendar una visita</Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SectionImage src="/assets/docs/habitaciones-instalaciones/image1.png" alt="Más información sobre habitaciones" />
      <Footer />
    </main>
  );
}
