"use client";

import { useState } from "react";
import styles from "./Form.module.css";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "textarea";
  placeholder?: string;
  required?: boolean;
};

export function ContactForm({ mode = "contacto" }: { mode?: "contacto" | "personal" | "familiar" }) {
  const [sent, setSent] = useState(false);
  const fields: Field[] = [
    { name: "nombre", label: "Nombre *", required: true },
    { name: "apellido", label: "Apellido *", required: true },
    { name: "edad", label: mode === "familiar" ? "Edad del adulto mayor *" : "Edad *", type: "number", required: true },
    { name: "telefono", label: "Número de teléfono *", type: "tel", required: true },
    { name: "residencia", label: "Lugar de residencia *", placeholder: "Ej. Provincia, cantón, distrito", required: true },
    { name: "condiciones", label: "Condiciones clínicas *", type: "textarea", placeholder: "Ej. Hipertensión", required: true },
    { name: "notas", label: "Notas", type: "textarea", placeholder: "Cuéntenos un poco sobre sus necesidades." }
  ];

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        if (event.currentTarget.checkValidity()) setSent(true);
      }}
    >
      {fields.map((field) => (
        <label className={field.type === "textarea" || field.name === "residencia" ? styles.wide : undefined} key={field.name}>
          <span>{field.label}</span>
          {field.type === "textarea" ? (
            <textarea name={field.name} placeholder={field.placeholder} required={field.required} rows={4} />
          ) : (
            <input name={field.name} type={field.type ?? "text"} placeholder={field.placeholder} required={field.required} />
          )}
        </label>
      ))}
      <p className={styles.note}>
        Cuéntenos un poco sobre usted, sus necesidades y lo que espera encontrar en nuestra residencia.
      </p>
      <button type="submit">Enviar información</button>
      {sent ? <p className={styles.success}>Información recibida. Pronto nos pondremos en contacto.</p> : null}
    </form>
  );
}
