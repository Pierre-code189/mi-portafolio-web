import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { textos } from './traducciones';
import './Proyectos.css';

// NUEVO: Importamos las herramientas de búsqueda de Firebase
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';

function DetalleProyecto({ idioma }) {
  const { id } = useParams(); // Obtenemos el ID de la URL
  const t = textos[idioma].proyectos; // Textos estáticos (botones)

  // Memoria para el proyecto que viene de la nube
  const [proyecto, setProyecto] = useState(null);
  const [cargando, setCargando] = useState(true);

  // Efecto que va a la nube a buscar el proyecto específico
  useEffect(() => {
    const obtenerDetalle = async () => {
      try {
        // 1. Preparamos la búsqueda: "Busca en 'proyectos' donde 'id_url' sea igual al de la URL"
        const q = query(collection(db, 'proyectos'), where('id_url', '==', id));
        
        // 2. Ejecutamos la búsqueda
        const snapshot = await getDocs(q);

        // 3. Si encontramos el proyecto, lo guardamos en la memoria
        if (!snapshot.empty) {
          setProyecto(snapshot.docs[0].data());
        } else {
          setProyecto(null);
        }
      } catch (error) {
        console.error("Error al buscar el proyecto:", error);
      } finally {
        // Terminamos de cargar, ya sea que lo hayamos encontrado o no
        setCargando(false);
      }
    };

    obtenerDetalle();
  }, [id]); // Si el ID de la URL cambia, volvemos a buscar

  // PANTALLA 1: Mientras esperamos a que Firebase responda
  if (cargando) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '100vh', color: 'var(--texto-claro)' }}>
        <h2 className="pulso">Cargando caso de estudio... ⏳</h2>
      </div>
    );
  }

  // PANTALLA 2: Si el usuario escribe una URL que no existe
  if (!proyecto) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '100vh', color: 'var(--texto-claro)' }}>
        <h2>Proyecto no encontrado 🛑</h2>
        <Link to="/" className="btn-primario" style={{ marginTop: '20px', display: 'inline-block' }}>{t.btnVolver}</Link>
      </div>
    );
  }

  // PANTALLA 3: ¡Proyecto encontrado! Elegimos los textos según el idioma
  const tituloMostrar = idioma === 'es' ? proyecto.titulo : proyecto.titulo_en;
  const descripcionMostrar = idioma === 'es' ? proyecto.descripcionLarga : proyecto.descripcionLarga_en;

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '80px', maxWidth: '800px', margin: '0 auto', textAlign: 'left', paddingLeft: '20px', paddingRight: '20px' }}>
      
      <Link to="/" className="btn-secundario" style={{ marginBottom: '30px', display: 'inline-block' }}>
        {t.btnVolver}
      </Link>

      <h2 className="titulo-seccion" style={{ textAlign: 'left', marginBottom: '30px' }}>
        {tituloMostrar}
      </h2>

      <img 
        src={proyecto.imagen} 
        alt={tituloMostrar} 
        style={{ width: '100%', borderRadius: '16px', marginBottom: '30px', boxShadow: '0 10px 30px var(--sombra-panel)', objectFit: 'cover', maxHeight: '400px' }} 
      />

      <p style={{ fontSize: '1.15rem', color: 'var(--texto-gris)', lineHeight: '1.8', marginBottom: '30px' }}>
        {descripcionMostrar}
      </p>

      {/* Recorremos el 'array' de tecnologías de la nube */}
      {proyecto.tecnologias && (
        <div className="modal-tecnologias" style={{ marginBottom: '40px' }}>
          {proyecto.tecnologias.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
      )}

      <div className="modal-botones" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
         <a href="#" className="btn-primario">{t.btnCodigo}</a>
         <a href="#" className="btn-secundario">{t.btnWeb}</a>
      </div>

    </div>
  );
}

export default DetalleProyecto;