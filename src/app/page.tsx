import Image from "next/image";
import { Button } from "@/components/Button";
import { Carousel } from "@/components/Carousel";
import { ContactForm } from "@/components/Form";
import { Footer } from "@/components/Footer";
import { Lead } from "@/components/Lead";
import { SectionImage } from "@/components/SectionImage";
import { careCards, faqs, philosophy, serviceCards, whatsappUrl } from "@/data/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Carousel />
      <section className={styles.banner}>
        <div className={styles.bannerTitle}>
          <div>
            <p>Residencia</p>
            <h1>Golden Years</h1>
            <p>Senior Residence</p>
          </div>
        </div>
        <div className={styles.bannerText}>
          <p>
            En Golden Years, comprendemos profundamente que cada etapa de la madurez conlleva retos particulares y deseos específicos. Por ello, nos enfocamos con exclusividad en la atención integral de la salud del Adulto Mayor, creando un refugio de seguridad, calidez y plenitud para todos nuestros residentes. Sabemos que encomendar a un ser querido a terceros representa una de las decisiones más sensibles para cualquier familia.
          </p>
          <p>
            Nuestra misión es otorgar esa serenidad y respaldo emocional que ustedes necesitan. Permanecemos a su lado para guiarles, esclarecer sus dudas y procurar que cada núcleo familiar se sienta plenamente integrado en nuestra afectuosa comunidad.
          </p>
        </div>
      </section>
      <section className={styles.bannerButton}>
        <Button href={whatsappUrl}>
          Hablar por WhatsApp con un asesor
        </Button>
      </section>

      <section className={styles.section}>
        <Lead
          title="Lo que nos caracteriza"
          text="El bienestar físico y emocional de nuestros residentes es, sin duda, nuestra máxima prioridad. A través de programas de atención integral, actividades enriquecedoras y un entorno diseñado para promover la autonomía y la tranquilidad."
        />
      </section>

      <section className={styles.section}>
        <div className={styles.cards}>
          {serviceCards.map((card) => (
            <article className={styles.card} key={card.title}>
              <Image src={card.image} alt={card.title} width={420} height={320} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>
              <Button href="/formularios">{card.cta}</Button>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.gold}`}>
        <Lead title="Conversemos sobre cómo podemos ayudarle" text="Seleccione la opción que mejor describe su búsqueda." />
        <div className={styles.choice}>
          <Button href="/formularios/para-mi">Busco información para mí</Button>
          <Button href="/formularios/familiar" variant="light">
            Busco información para un familiar
          </Button>
        </div>
      </section>

      <section className={`${styles.section} ${styles.gold}`}>
        <Lead title="Cuidado integral incluido en nuestros servicios" text="Todo lo necesario para vivir con bienestar, seguridad y tranquilidad cada día." />
        <div className={styles.careGrid}>
          {careCards.map((item) => (
            <article className={styles.careCard} key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
        <Button href={whatsappUrl}>Consultar asesoría</Button>
      </section>

      <section className={styles.section}>
        <SectionImage src="/assets/docs/home/image14.png" alt="Nuestras hermosas habitaciones" />
      </section>
      <section className={styles.section}>
        <SectionImage src="/assets/docs/home/image13.png" alt="Nuestras bellas instalaciones" />
      </section>

      <section className={styles.section}>
        <Lead title="La filosofía Golden Years" text="Una filosofía de cuidado centrada en la dignidad, el bienestar y el acompañamiento humano." />
        <div className={styles.philosophy}>
          {philosophy.map((item) => (
            <article className={styles.miniCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.gold}`}>
        <Lead title="Vida en Golden Years" text="Momentos que promueven bienestar, compañía y una vida con sentido." />
        <SectionImage src="/assets/docs/home/image17.png" alt="Vida en Golden Years" />
      </section>

      <section className={styles.section}>
        <Lead title="Preguntas frecuentes" text="Resolvemos sus dudas principales para su tranquilidad y la de su familia." />
        <div className={styles.faq}>
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
        <Button href="/preguntas-frecuentes">Converse con un asesor familiar</Button>
      </section>

      <section className={styles.section}>
        <Lead title="Nuestra ubicación y contacto" text="Ubicados en Sarchí, en un entorno seguro y acogedor para nuestros residentes." />
        <SectionImage src="/assets/docs/home/image7.png" alt="Ubicación Golden Years" />
      </section>

      <section className={styles.section}>
        <Lead title="Conversemos sobre cómo podemos ayudarle" text="Cuéntenos un poco sobre su familiar y sus necesidades." />
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
