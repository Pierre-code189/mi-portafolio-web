import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { textos } from './traducciones'; /* <-- Importamos el diccionario */
import './Contacto.css';

function Contacto({ idioma }) { /* <-- Recibimos el idioma */
  const form = useRef();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const t = textos[idioma].contacto; // Extraemos las palabras de contacto

  const numeroWhatsApp = "51975075015"; 
  const linkWhatsApp = `https://wa.me/${975075015}?text=${encodeURIComponent(t.mensajeWpp)}`;

  const enviarCorreo = (e) => {
    e.preventDefault();
    
    // RECUERDA PONER TUS CLAVES REALES AQUÍ:
    emailjs.sendForm('service_3jdzxdu', 'template_z8e3nxa', form.current, '2LmGGuriJ9m7SaLLH')
      .then((result) => {
          setMensajeEnviado(true);
          form.current.reset();
          setTimeout(() => setMensajeEnviado(false), 5000);
      }, (error) => {
          alert(t.form.error);
      });
  };

  return (
    <div className="seccion-contacto">
      <h2 className="titulo-seccion">{t.titulo}</h2>
      <p className="descripcion-contacto">{t.descripcion}</p>
      
      <div className="tarjeta-contacto-grid">
        <div className="info-contacto-lateral">
          <div className="item-info-lateral">
            <span className="icono">📍</span>
            <div>
              <h4>{t.ubicacion}</h4>
              <p>Piura, Perú</p>
            </div>
          </div>
          
          <div className="item-info-lateral">
            <span className="icono">✉️</span>
            <div>
              <h4>Email</h4>
              <p>giancordova9@gmail.com</p> 
            </div>
          </div>

          <div className="redes-contacto">
            <a href={linkWhatsApp} target="_blank" rel="noreferrer" className="btn-whatsapp-pequeno">WhatsApp</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-linkedin-pequeno">LinkedIn</a>
          </div>
        </div>

        <div className="formulario-contacto">
          <form ref={form} onSubmit={enviarCorreo} className="form-diseño">
            
            <div className="grupo-input">
              <label>{t.form.nombre}</label>
              <input type="text" name="user_name" placeholder={t.form.phNombre} required />
            </div>

            <div className="grupo-input">
              <label>{t.form.correo}</label>
              <input type="email" name="user_email" placeholder={t.form.phCorreo} required />
            </div>

            <div className="grupo-input">
              <label>{t.form.mensaje}</label>
              <textarea name="message" rows="4" placeholder={t.form.phMensaje} required></textarea>
            </div>

            <button type="submit" className="btn-enviar-form">{t.form.btnEnviar}</button>

            {mensajeEnviado && <p className="mensaje-exito">{t.form.exito}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacto;