import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/Form";
import { Footer } from "@/components/Footer";
import { Lead } from "@/components/Lead";
import { SectionImage } from "@/components/SectionImage";
import { contact, processSteps, whatsappUrl } from "@/data/site";
import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto, dirección, horarios y proceso para ingresar a Golden Years Senior Residence."
};

export default function ContactoPage() {
  return (
    <main className={styles.main}>
      <Lead
        title="Estamos para acompañarle"
        text="Conversemos y encontremos juntos la mejor opción para su familiar."
      />
      <section className={styles.section}>
        <div className={styles.contactGrid}>
          <div className={styles.contactBox}>
            <h2>Información de contacto</h2>
            <p>WhatsApp: {contact.whatsapp}</p>
            <p>Teléfono: {contact.phone}</p>
            <p>Correo: {contact.email}</p>
            <p>Dirección: {contact.address}</p>
            <p>Horarios: {contact.schedule}</p>
            <Button href={whatsappUrl}>Converse con un asesor familiar</Button>
          </div>
          <SectionImage src="/assets/docs/contacto/image2.png" alt="Contacto Golden Years" maxWidth={600} />
        </div>
        <Lead title="Conoce Golden Years en persona" />
        <div className={styles.steps}>
          {processSteps.map((step) => (
            <article className={styles.step} key={step}>
              <h3>{step}</h3>
              <p>La familia recibe acompañamiento para tomar una decisión informada y humana.</p>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <Lead title="Cuéntenos sobre su familiar" text="En Golden Years comprendemos la importancia de encontrar el entorno adecuado." />
        <ContactForm mode="familiar" />
      </section>
      <Footer />
    </main>
  );
}
