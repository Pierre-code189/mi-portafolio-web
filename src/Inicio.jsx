import { useEffect, useState } from 'react';
import { textos } from './traducciones';

function Inicio({ idioma }) {
  const [fraseActual, setFraseActual] = useState(0);
  
  // Extraemos las palabras de inicio según el idioma
  const t = textos[idioma].inicio;

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFraseActual((prev) => (prev + 1) % t.frases.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, [idioma]); // Si el idioma cambia, reiniciamos la animación

  return (
    <section id="inicio" className="seccion-pantalla">
      <div className="tarjeta-principal flotante">
        <img src="/perfil.jpg" alt="Foto de Pierre" className="foto-perfil pulso" />
        
        <h1>{t.saludo} <span className="texto-neon">Pierre</span></h1>
        
        <div style={{ height: '30px' }}>
          {/* Al cambiar de idioma, la animación de la máquina de escribir se reinicia */}
          <p key={`${idioma}-${fraseActual}`} className="subtitulo maquina-escribir">
            {t.frases[fraseActual]}
          </p>
        </div>

        <div className="botones-inicio">
          <a href="#proyectos" className="btn-primario">{t.btnProyectos}</a>
          <a href="#contacto" className="btn-secundario">{t.btnContacto}</a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;