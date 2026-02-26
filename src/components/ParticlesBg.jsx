import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },

        particles: {
          number: { value: 50 },

          color: { value: "#38bdf8" },

          links: {
            enable: true,
            color: "#38bdf8",
            opacity: 0.3
          },

          move: { enable: true, speed: 1 },

          size: { value: 2 },

          opacity: { value: 0.5 }
        },

        background: {
          color: "#020617"
        }
      }}
    />
  );
}

export default ParticlesBg;