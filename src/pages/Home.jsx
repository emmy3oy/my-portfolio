import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ParticlesBg from "../components/ParticlesBg";
import CV from '../assets/EMMAN CV.pdf';
import IMG from '../assets/UI.png';
import { Link } from "react-router-dom"; 
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";

function Home() {
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color: "white"
      }}
    >
      <ParticlesBg />

      <Container fluid style={{ paddingLeft: 0, paddingRight: 150 }}>
        <Row className="align-items-center">

          {/* LEFT SIDE */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p style={{ color: "#38bdf8", fontWeight: "500" }}>Hello, I'm</p>

              <h1
                style={{
                  fontSize: "3.2rem",
                  fontWeight: "700",
                  background: "linear-gradient(to right,#38bdf8,#a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Emmanuel Oyase
              </h1>

              <h4 className="mb-3">Front-End Developer (React)</h4>

              <p style={{ opacity: 0.85 }}>
                I build modern responsive web applications using React,
                REST APIs and scalable UI systems with clean architecture.
              </p>

              {/* BUTTONS */}
              <div className="mt-4">
                <Button
                  as={Link}
                  to="/projects"
                  className="me-3 px-4"
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
              <div className="mt-4">
                <a
                  href="https://github.com/emmy3oy"
                  target="_blank"
                  rel="noreferrer"
                  className="me-3 text-light"
                  style={{ fontSize: "1.5rem" }}
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/emmanuel-oyase-4b709b280/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light"
                  style={{ fontSize: "1.5rem" }}
                >
                  <FaLinkedin />
                </a>
              </div>

            </motion.div>
          </Col>

          {/* RIGHT SIDE */}
          <Col md={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              style={{
                backdropFilter: "blur(20px)",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "20px",
                boxShadow: "0px 10px 40px rgba(0,0,0,0.6)"
              }}
            >
              <img
                src={IMG}
                alt="profile"
                className="img-fluid rounded"
              />
            </motion.div>
          </Col>
<ProjectsSection />
        <SkillsSection />
        </Row>
        
        
      </Container>
    </div>
  );
}

export default Home;
