import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './Chatbot.css';

// Conectamos la IA usando tu llave secreta
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const instruccionesSistema = `Eres el asistente virtual de la página web de Pierre, un estudiante universitario de 18 años de Piura, Perú. 
Pierre tiene proyectos increíbles como la 'Agencia NovaWeb' y una 'App de Chocotejas'.
Tu trabajo es responder de forma amable, casual y breve a los visitantes. Háblales sobre las habilidades de Pierre creando páginas web y anímalos a contactarlo.
Si te preguntan algo fuera de contexto o que no sabes, invítalos amablemente a usar la sección de Contacto para hablar directamente con Pierre.`;

function Chatbot() {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState([
    { texto: "¡Hola! Soy el asistente virtual de Pierre. ¿En qué puedo ayudarte hoy?", esBot: true }
  ]);
  const [inputTexto, setInputTexto] = useState("");
  const [cargando, setCargando] = useState(false);
  const mensajesFinRef = useRef(null);

  useEffect(() => {
    mensajesFinRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes]);

  const enviarMensaje = async (e) => {
    e.preventDefault();
    if (!inputTexto.trim()) return;

    // 1. Guardamos el texto y el historial ANTES de actualizar la pantalla
    const textoUsuario = inputTexto;
    const historialPrevio = [...mensajes];

    // 2. Mostramos el mensaje en pantalla
    setMensajes((prev) => [...prev, { texto: textoUsuario, esBot: false }]);
    setInputTexto("");
    setCargando(true);

    try {
      // 3. ¡EL CAMBIO MAESTRO! Usamos el modelo PRO
      const modelo = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash", 
        systemInstruction: instruccionesSistema 
      });

      // 4. Preparamos el historial (ignorando el saludo inicial)
      const chat = modelo.startChat({
        history: historialPrevio.slice(1).map(m => ({
          role: m.esBot ? "model" : "user",
          parts: [{ text: m.texto }],
        }))
      });

      // 5. Enviamos el mensaje a Google
      const resultado = await chat.sendMessage(textoUsuario);
      const respuestaIA = resultado.response.text();

      setMensajes((prev) => [...prev, { texto: respuestaIA, esBot: true }]);
    } catch (error) {
      console.error("Error con la IA:", error);
      setMensajes((prev) => [...prev, { texto: "Ups, mi conexión falló. ¿Podrías intentar de nuevo en un momento?", esBot: true }]);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="contenedor-chatbot">
      <button className={`boton-flotante ${abierto ? 'oculto' : ''}`} onClick={() => setAbierto(true)}>
        🤖
      </button>

      <div className={`ventana-chat ${abierto ? 'abierta' : ''}`}>
        <div className="cabecera-chat">
          <h3>Asistente Virtual</h3>
          <button onClick={() => setAbierto(false)}>✖</button>
        </div>

        <div className="cuerpo-chat">
          {mensajes.map((msg, index) => (
            <div key={index} className={`burbuja-chat ${msg.esBot ? 'bot' : 'usuario'}`}>
              {msg.texto}
            </div>
          ))}
          {cargando && <div className="burbuja-chat bot escribiendo">Pensando...</div>}
          <div ref={mensajesFinRef} />
        </div>

        <form className="pie-chat" onSubmit={enviarMensaje}>
          <input 
            type="text" 
            placeholder="Escribe un mensaje..." 
            value={inputTexto}
            onChange={(e) => setInputTexto(e.target.value)}
            disabled={cargando}
          />
          <button type="submit" disabled={cargando || !inputTexto.trim()}>➤</button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;