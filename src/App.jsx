import Chatbot from './Chatbot'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' /* <-- Importamos el Enrutador */
import './App.css'
import Particulas from './Particulas'
import Navbar from './Navbar'
import PaginaInicio from './PaginaInicio'
import DetalleProyecto from './DetalleProyecto'

function App() {
  const [idioma, setIdioma] = useState(() => {
    return localStorage.getItem('portafolio-idioma') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('portafolio-idioma', idioma);
  }, [idioma]);

  return (
    // Envolvemos TODO en el Router
    <Router>
      <div className="contenedor-layout">
        <Particulas />
        {/* El menú siempre se queda arriba sin importar en qué página estemos */}
        <Navbar idioma={idioma} setIdioma={setIdioma} />

        {/* Aquí es donde la magia ocurre: Las rutas */}
        <Routes>
          {/* Ruta 1: La URL raíz "/" muestra tu portafolio completo */}
          <Route path="/" element={<PaginaInicio idioma={idioma} />} />
          
          {/* Ruta 2: La URL "/proyecto/algo" abre la nueva pantalla separada */}
          <Route path="/proyecto/:id" element={<DetalleProyecto idioma={idioma} />} />
        </Routes>
        <Chatbot />
        
      </div>
    </Router>
  )
}

export default App