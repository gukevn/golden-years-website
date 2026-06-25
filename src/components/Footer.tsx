import Image from "next/image";
import Link from "next/link";
import { contact, navItems } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Image src="/assets/brand/logo-lockup.png" alt="Golden Years Calidad de Vida" width={210} height={75} />
        <div>
          <h2>Navegación</h2>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Contacto</h2>
          <p>Dirección: {contact.address}</p>
          <p>Teléfono: {contact.phone}</p>
          <p>WhatsApp: {contact.whatsapp}</p>
          <p>Email: {contact.email}</p>
          <p>Horario: {contact.schedule}</p>
        </div>
      </div>
      <p className={styles.social}>Conozca más de nosotros día a día en nuestras redes sociales</p>
      <p className={styles.copy}>© 2026 Golden Years Senior Residence. Todos los derechos reservados.</p>
      <p className={styles.copy}>Aviso de privacidad y términos de uso de datos.</p>
    </footer>
  );
}
