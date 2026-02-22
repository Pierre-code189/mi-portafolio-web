import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { textos } from './traducciones';
import './Proyectos.css';

// NUEVO: Importamos tu base de datos y las funciones para leer
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; 

function Proyectos({ idioma }) {
  const t = textos[idioma].proyectos;
  
  // NUEVO: Memoria para los proyectos que vienen de la nube (empieza vacía)
  const [misProyectos, setMisProyectos] = useState([]);

  // NUEVO: Este efecto va a la nube cuando la página carga
  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        // 1. Buscamos la carpeta "proyectos" en tu base de datos
        const carpeta = collection(db, 'proyectos');
        
        // 2. Traemos todos los documentos
        const snapshot = await getDocs(carpeta);
        
        // 3. Los convertimos en una lista que React entienda
        const listaDeLaNube = snapshot.docs.map(doc => doc.data());
        
        // 4. Los guardamos en la memoria
        setMisProyectos(listaDeLaNube);
      } catch (error) {
        console.error("Error al buscar en Firebase:", error);
      }
    };

    obtenerProyectos();
  }, []);

  return (
    <div className="seccion-proyectos">
      <h2 className="titulo-seccion">{t.titulo}</h2>
      
      <div className="grid-proyectos">
        {/* Si aún no cargan los datos, mostramos un pequeño texto */}
        {misProyectos.length === 0 ? (
          <p style={{ color: 'var(--texto-gris)' }}>Cargando proyectos desde la nube...</p>
        ) : (
          misProyectos.map((proyecto, index) => (
            <motion.div 
              key={index} 
              className="tarjeta-proyecto"
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10, boxShadow: "0 20px 40px var(--sombra-panel)" }}
            >
            <h3>{idioma === 'es' ? proyecto.titulo : proyecto.titulo_en}</h3>
            <p>{idioma === 'es' ? proyecto.descripcionBreve : proyecto.descripcionBreve_en}</p>
            
            <Link to={`/proyecto/${proyecto.id_url}`} className="btn-detalles" style={{ display: 'inline-block', marginTop: '15px' }}>
              {t.btnDetalles}
            </Link>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

export default Proyectos;