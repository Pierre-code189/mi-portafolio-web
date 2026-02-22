import { useState, useEffect } from 'react';
import { textos } from './traducciones';

function Navbar({ idioma, setIdioma }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  
  // NUEVO 1: Al cargar, preguntamos al navegador si el tema guardado era 'claro'
  const [esModoClaro, setEsModoClaro] = useState(() => {
    return localStorage.getItem('portafolio-tema') === 'claro';
  });

  const t = textos[idioma].nav; 

  // NUEVO 2: Cuando cambia el modo, además de pintar la pantalla, lo guardamos.
  useEffect(() => {
    if (esModoClaro) {
      document.body.classList.add('modo-claro');
      localStorage.setItem('portafolio-tema', 'claro');
    } else {
      document.body.classList.remove('modo-claro');
      localStorage.setItem('portafolio-tema', 'oscuro');
    }
  }, [esModoClaro]);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const toggleTema = () => setEsModoClaro(!esModoClaro);
  const toggleIdioma = () => setIdioma(idioma === 'es' ? 'en' : 'es');

  return (
    <nav className="barra-navegacion">
      <h2 className="logo-nav">GP</h2>

      <ul className={`links-nav ${menuAbierto ? 'abierto' : ''}`}>
        <li><a href="/#inicio" onClick={() => setMenuAbierto(false)}>{t.inicio}</a></li>
        <li><a href="/#sobre-mi" onClick={() => setMenuAbierto(false)}>{t.sobreMi}</a></li>
        <li><a href="/#proyectos" onClick={() => setMenuAbierto(false)}>{t.proyectos}</a></li>
        <li><a href="/#contacto" onClick={() => setMenuAbierto(false)}>{t.contacto}</a></li>
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        
        <button 
          onClick={toggleIdioma}
          style={{
            background: 'transparent', border: '1px solid var(--acento-neon)', 
            color: 'var(--acento-neon)', borderRadius: '5px', padding: '3px 8px', 
            cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem'
          }}
        >
          {idioma === 'es' ? 'EN' : 'ES'}
        </button>

        <button 
          onClick={toggleTema} 
          title={esModoClaro ? "Modo Oscuro" : "Modo Claro"}
          style={{ background: 'transparent', border: 'none', fontSize: '1.4rem', cursor: 'pointer' }}
        >
          {esModoClaro ? '🌙' : '☀️'}
        </button>

        <button className="boton-menu" onClick={toggleMenu}>
          {menuAbierto ? '✖' : '☰'} 
        </button>
      </div>
    </nav>
  );
}

export default Navbar;