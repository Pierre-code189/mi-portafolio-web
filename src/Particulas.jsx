import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particulas() {
  const [listo, setListo] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setListo(true);
    });
  }, []);

  const opciones = {
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" }, /* Reacciona al mouse */
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#0ea5e9" }, /* Color azul de tu diseño */
      links: {
        color: "#0ea5e9",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: { enable: true, speed: 1 },
      number: { density: { enable: true }, value: 60 }, /* Cantidad de luces */
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  if (listo) {
    return <Particles id="tsparticles" options={opciones} className="particulas-fondo" />;
  }
  return null;
}

export default Particulas;