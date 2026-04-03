import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import ParticlesBg from "../components/ParticlesBg";
import CV from '../assets/EMMAN CV.pdf';
import IMG from '../assets/UI.png';
import { Link } from "react-router-dom"; 
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color: "white",
      }}
    >
      {/* <ParticlesBg /> */}

      <Container fluid className="px-3 px-md-5">
        <Row className="align-items-center justify-content-center flex-column flex-md-row g-4">
          {/* LEFT SIDE */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p style={{ color: "#38bdf8", fontWeight: "500" }}>Hello, I'm</p>

              <h1
                style={{
                  fontSize: "2.2rem",
                  fontWeight: "700",
                  background: "linear-gradient(to right,#38bdf8,#a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="mb-2"
              >
                Emmanuel Oyase
              </h1>

              <h4 className="mb-3">Full Stack Developer (React)</h4>

              <p style={{ opacity: 0.85, fontSize: "1rem" }}>
                I build modern responsive web applications using React,
                REST APIs, and scalable UI systems with clean architecture.
              </p>

              {/* BUTTONS */}
              <div className="mt-3 d-flex flex-column flex-sm-row align-items-center align-items-md-start gap-2">
                <Button
                  as={Link}
                  to="/projects"
                  className="px-4"
                  variant="primary"
                >
                  View Projects
                </Button>

                <Button
                  variant="outline-light"
                  href={CV}
                  download="Emmanuel_Oyase_CV.pdf"
                  className="px-4"
                >
                  Download CV
                </Button>
              </div>

              {/* SOCIAL ICONS */}
              <div className="mt-3 d-flex justify-content-center justify-content-md-start gap-3 fs-4">
                <a
                  href="https://github.com/emmy3oy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/emmanuel-oyase-4b709b280/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </Col>

          {/* RIGHT SIDE */}
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              style={{
                backdropFilter: "blur(20px)",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "10px", // reduced padding for closer alignment
                boxShadow: "0px 10px 40px rgba(0,0,0,0.6)",
                maxWidth: "280px", // slightly smaller
                width: "100%",
              }}
            >
              <img
                src={IMG}
                alt="profile"
                className="img-fluid rounded"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </motion.div>
          </Col>
        </Row>

        {/* PROJECTS SECTION */}
        <div className="mt-5">
          <ProjectsSection />
        </div>

        {/* SKILLS SECTION */}
        <div className="mt-5">
          <SkillsSection />
        </div>
      </Container>
    </div>
  );
}

export default Home;