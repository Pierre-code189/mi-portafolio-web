import { useEffect } from 'react';
import Inicio from './Inicio';
import SobreMi from './SobreMi';
import Proyectos from './Proyectos';
import Contacto from './Contacto';

function PaginaInicio({ idioma }) {
  
  // El vigilante de animaciones ahora vive aquí, en la página principal
  useEffect(() => {
    const vigilante = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('mostrar');
        }
      });
    });

    const elementosOcultos = document.querySelectorAll('.oculto');
    elementosOcultos.forEach((el) => vigilante.observe(el));

    return () => vigilante.disconnect();
  }, []);

  return (
    <main className="contenido-principal">
      <Inicio idioma={idioma} />
      
      <section id="sobre-mi" className="seccion-pantalla oculto">
        <SobreMi idioma={idioma} />
      </section>
      
      <section id="proyectos" className="seccion-pantalla oculto">
        <Proyectos idioma={idioma} />
      </section>
      
      <section id="contacto" className="seccion-pantalla oculto">
        <Contacto idioma={idioma} />
      </section>
    </main>
  );
}

export default PaginaInicio;