import imgGrid from "./assets/inno-grid.webp";
import imgSolar from "./assets/inno-panel.webp";

export const innovationsSection = {
  title: "Innovaciones que Transforman",
  subheading1_1: "Tecnología verde",
  subheading1_2: "para un futuro brillante",
  innovations: [
    {
      title: "Redes Inteligentes",
      description:
        "Optimiza, conecta y transforma tu energía. Nuestra integración de redes inteligentes asegura eficiencia, sostenibilidad y respuesta inmediata a las necesidades del mañana.",
      visual: imgGrid,
    },
    {
      title: "Paneles Solares de Alta Eficiencia",
      description:
        "Captura más sol, genera más energía y potencia tu productividad. Nuestros paneles solares avanzados no solo maximizan la eficiencia energética, sino que también se integran perfectamente con actividades económicas como la agricultura, impulsando prácticas sostenibles en zonas rurales y productivas.",
      visual: imgSolar,
    },
  ],
  visual: "innovations-section-image.jpg",
  callToAction: "Avanza hacia la energía del futuro con [Nombre de la Empresa]",
  button: "Descubrir más",
};
