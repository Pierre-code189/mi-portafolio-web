export const textos = {
  es: {
    nav: { inicio: "Inicio", sobreMi: "Sobre Mí", proyectos: "Proyectos", contacto: "Contacto" },
    inicio: {
      saludo: "Hola, soy",
      frases: ["Creando soluciones modernas", "Futuro Ingeniero de Sistemas", "Desarrollador Web", "Creando magia web ✨"],
      btnProyectos: "Ver Proyectos", btnContacto: "Contactarme"
    },
    sobreMi: {
      titulo: "Sobre Mí",
      parrafo1: "¡Hola! Soy Pierre, tengo 18 años y soy de Piura, Perú. Actualmente soy estudiante universitario con un gran enfoque en la creación de experiencias digitales y páginas web modernas.",
      parrafo2: "Me apasiona el desarrollo web y disfruto transformando ideas en aplicaciones funcionales y atractivas. Cuando no estoy programando o trabajando en proyectos como mi agencia NovaWeb, me gusta explorar nuevos modelos de negocio, la tecnología, o relajarme en una partida de Minecraft.",
      tituloStack: "Mi Stack Tecnológico"
    },
    proyectos: {
      titulo: "Mis Proyectos",
      btnDetalles: "Ver detalles ➔", btnVolver: "← Volver al Inicio", btnCodigo: "Ver Código", btnWeb: "Visitar Web",
      lista: [
        {
          id: "novaweb", /* <-- EL IDENTIFICADOR UNICO */
          titulo: "Agencia NovaWeb",
          descripcionBreve: "Diseño y desarrollo de páginas web modernas para negocios locales.",
          descripcionLarga: "Fundé NovaWeb con la visión de ayudar a empresas de Piura a digitalizarse. Utilizo tecnologías como React, Vite y CSS avanzado para crear landing pages súper rápidas, responsivas y con alto nivel de conversión.",
          tecnologias: ["React", "Vite", "CSS Moderno", "Figma"],
          imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "chocotejas", /* <-- EL IDENTIFICADOR UNICO */
          titulo: "App de Chocotejas",
          descripcionBreve: "Sistema web interactivo para gestionar pedidos y catálogo de chocotejas.",
          descripcionLarga: "Un proyecto emprendedor donde combiné mi pasión por el desarrollo web y los negocios. La aplicación permite a los clientes ver el catálogo de sabores, armar sus cajas personalizadas y enviar el pedido directamente estructurado por WhatsApp.",
          tecnologias: ["JavaScript", "HTML/CSS", "API WhatsApp"],
          imagen: "https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "portafolio", /* <-- EL IDENTIFICADOR UNICO */
          titulo: "Mi Portafolio",
          descripcionBreve: "Portafolio personal interactivo construido desde cero usando React y Vite.",
          descripcionLarga: "Este mismo sitio web. Implementé un diseño oscuro/claro, animaciones fluidas, un sistema de ruteo de componentes, formularios conectados a EmailJS y partículas interactivas de fondo para destacar mi perfil como desarrollador.",
          tecnologias: ["React", "EmailJS", "Framer Motion", "Netlify"],
          imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    contacto: {
      titulo: "¡Hablemos!",
      descripcion: "¿Tienes un proyecto en mente o buscas un desarrollador? Escríbeme y te responderé lo más pronto posible.",
      ubicacion: "Ubicación",
      mensajeWpp: "¡Hola Pierre! Vi tu portafolio y me gustaría hablar contigo.",
      form: {
        nombre: "Tu Nombre", phNombre: "Ej: Juan Pérez",
        correo: "Tu Correo", phCorreo: "Ej: juan@empresa.com",
        mensaje: "Mensaje", phMensaje: "Cuéntame sobre tu idea...",
        btnEnviar: "Enviar Mensaje 🚀", exito: "¡Mensaje enviado correctamente! Te responderé pronto.", error: "Hubo un error al enviar el mensaje. Intenta por WhatsApp."
      }
    }
  },
  en: {
    nav: { inicio: "Home", sobreMi: "About Me", proyectos: "Projects", contacto: "Contact" },
    inicio: {
      saludo: "Hi, I'm",
      frases: ["Creating modern solutions", "Future Systems Engineer", "Web Developer"],
      btnProyectos: "View Projects", btnContacto: "Contact Me"
    },
    sobreMi: {
      titulo: "About Me",
      parrafo1: "Hi! I'm Pierre, I'm 18 years old and I'm from Piura, Peru. Currently, I am a university student with a strong focus on creating digital experiences and modern web pages.",
      parrafo2: "I am passionate about web development and enjoy transforming ideas into functional and attractive applications. When I am not programming or working on projects like my agency NovaWeb, I like to explore new business models, technology, or relax playing Minecraft.",
      tituloStack: "My Tech Stack"
    },
    proyectos: {
      titulo: "My Projects",
      btnDetalles: "View details ➔", btnVolver: "← Back to Home", btnCodigo: "View Code", btnWeb: "Visit Website",
      lista: [
        {
          id: "novaweb",
          titulo: "NovaWeb Agency",
          descripcionBreve: "Design and development of modern web pages for local businesses.",
          descripcionLarga: "I founded NovaWeb with the vision of helping companies in Piura digitize. I use technologies like React, Vite, and advanced CSS to create super-fast, responsive landing pages with high conversion rates.",
          tecnologias: ["React", "Vite", "Modern CSS", "Figma"],
          imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "chocotejas",
          titulo: "Chocotejas App",
          descripcionBreve: "Interactive web system to manage orders and chocotejas catalog.",
          descripcionLarga: "An entrepreneurial project where I combined my passion for web development and business. The application allows customers to view the flavor catalog, build custom boxes, and send the structured order directly via WhatsApp.",
          tecnologias: ["JavaScript", "HTML/CSS", "WhatsApp API"],
          imagen: "https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "portafolio",
          titulo: "My Portfolio",
          descripcionBreve: "Interactive personal portfolio built from scratch using React and Vite.",
          descripcionLarga: "This very website. I implemented a dark/light design, fluid animations, a component routing system, forms connected to EmailJS, and interactive background particles to highlight my developer profile.",
          tecnologias: ["React", "EmailJS", "Framer Motion", "Netlify"],
          imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    contacto: {
      titulo: "Let's Talk!",
      descripcion: "Do you have a project in mind or are you looking for a developer? Write to me and I will reply as soon as possible.",
      ubicacion: "Location",
      mensajeWpp: "Hi Pierre! I saw your portfolio and would like to talk to you.",
      form: {
        nombre: "Your Name", phNombre: "Ex: John Doe",
        correo: "Your Email", phCorreo: "Ex: john@company.com",
        mensaje: "Message", phMensaje: "Tell me about your idea...",
        btnEnviar: "Send Message 🚀", exito: "Message sent successfully! I will reply soon.", error: "There was an error sending the message. Try WhatsApp."
      }
    }
  }
};