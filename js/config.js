var pageConfig = {
  site: {
    title: "Tu landing page",
    description: "",
    author: "juan-brecevich-48",
    favicon: "assets/logo-alfa.png"
  },
  nav: {
    brand: "Tu marca",
    logo: "assets/logo-alfa.png",
    button: { text: "Contactanos", href: "#contact" },
  },
  masthead: {
    title: "Tu empresa",
    subtitle: "Una propuesta de valor clara y atractiva",
    button: { text: "Nuestra Trabajo", href: "#showcases" },
    backgroundImg: "assets/img/banner.png",
    backgroundAlt: "Imagen de fondo del masthead",
    backgroundColor: "#343a40"
  },
  features: { 
    featureOne: {
      icon: "bi bi-globe m-auto text-primary",
      title: "Soluciones Inteligentes",
      text: "Optimiza tus procesos con herramientas diseñadas para mejorar la eficiencia y resultados de tu negocio. Nuestra tecnología se adapta a tus necesidades, brindando una experiencia ágil y confiable."
    },
    featureTwo: {
      icon: "bi bi-phone m-auto text-primary",
      title: "Diseño Enfocado en el Usuario",
      text: "Creamos experiencias modernas, intuitivas y atractivas que conectan con tus clientes. Cada detalle está pensado para facilitar la navegación y potenciar la conversión."
    },
    featureThree: {
      icon: "bi bi-person-plus m-auto text-primary",
      title: "Soporte y Escalabilidad",
      text: "Acompañamos el crecimiento de tu proyecto con soluciones flexibles que evolucionan contigo. Nuestro equipo está disponible para brindarte soporte continuo y asegurar el mejor rendimiento."
    }
  },
  showcases: {
    showcaseOne: {
      title: "Proyecto Alpha",
      text: "Desarrollamos una plataforma integral que mejoró la presencia digital del cliente, incrementando su alcance y posicionamiento en el mercado.",
      image: { src: "assets/img/bg-showcase-1.jpg", alt: "..." }
    },
    showcaseTwo: {
      title: "Proyecto Beta",
      text: "Implementamos una solución personalizada que optimizó los procesos internos, logrando mayor productividad y una mejor gestión de recursos.",
      image: { src: "assets/img/bg-showcase-2.jpg", alt: "..." }
    },
    showcaseThree: {
      title: "Proyecto Gamma",
      text: "Creamos una experiencia digital innovadora que fortaleció la relación con los usuarios, aumentando la interacción y fidelización.",
      image: { src: "assets/img/bg-showcase-3.jpg", alt: "..." }
    }
  },
  contact: {
    title: "¿Listo para empezar? ¡Contáctanos ahora!",
    backgroundImg: "assets/img/banner-2.png",
    backgroundAlt: "Imagen de fondo del masthead",
    backgroundColor: "#343a40",
  },
  footer: {
    year: " " + new Date().getFullYear() + " todos los derechos reservados.",
    social: [
      { icono: "bi-twitter", href: "#!" },
      { icono: "bi-facebook", href: "#!" },
      { icono: "bi-instagram", href: "#!" }
    ]
  }
};
