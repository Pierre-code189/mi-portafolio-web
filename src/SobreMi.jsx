import './SobreMi.css';
import { textos } from './traducciones'; /* <-- Importamos el diccionario */

function SobreMi({ idioma }) { /* <-- Recibimos el idioma */
  const t = textos[idioma].sobreMi;
  const habilidades = ["HTML5", "CSS3", "JavaScript", "React", "Vite", "Node.js", "Git"];

  return (
    <div className="contenedor-sobremi">
      <h2 className="titulo-seccion">{t.titulo}</h2>
      
      <div className="contenido-sobremi">
        <div className="texto-sobremi">
          <p>{t.parrafo1}</p>
          <p>{t.parrafo2}</p>
        </div>

        <div className="habilidades-sobremi">
          <h3>{t.tituloStack}</h3>
          <div className="grid-habilidades">
            {habilidades.map((hab, index) => (
              <span key={index} className="badge-habilidad">{hab}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;