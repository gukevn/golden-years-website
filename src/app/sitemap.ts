import { MetadataRoute } from "next";
import { seo } from "@/data/site";

const routes = [
  "",
  "/habitaciones",
  "/instalaciones",
  "/contacto",
  "/formularios",
  "/formularios/para-mi",
  "/formularios/familiar",
  "/preguntas-frecuentes"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${seo.baseUrl}${route}`,
    lastModified: new Date("2026-06-25"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
