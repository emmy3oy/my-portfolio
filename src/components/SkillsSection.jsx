import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaReact, FaMobileAlt, FaServer, FaPaintBrush, FaBolt, FaGitAlt } from "react-icons/fa";

const skills = [
  { icon: <FaReact />, name: "React / Next.js", description: "Component-driven architecture with hooks and state management" },
  { icon: <FaMobileAlt />, name: "Responsive UI", description: "Mobile-first layouts with Tailwind CSS and modern frameworks" },
  { icon: <FaServer />, name: "REST APIs", description: "Integration with backends, authentication and data fetching" },
  { icon: <FaPaintBrush />, name: "UI/UX Design", description: "Clean interfaces with attention to typography and spacing" },
  { icon: <FaBolt />, name: "Performance", description: "Optimized bundles, lazy loading and efficient rendering" },
  { icon: <FaGitAlt />, name: "Git & Workflow", description: "Version control, CI/CD and collaborative development" },
];

const SkillsSection = () => {
  return (
    <div
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <p style={{ color: "#38bdf8", fontWeight: "500", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.85rem" }}>
            What I Do
          </p>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              background: "linear-gradient(to right, #38bdf8, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills & Expertise
          </h2>
        </motion.div>

        <Row>
          {skills.map((skill, index) => (
            <Col sm={6} lg={4} key={skill.name} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backdropFilter: "blur(20px)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "24px",
                  height: "100%",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.3)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    background: "rgba(56,189,248,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    color: "#38bdf8",
                    marginBottom: 16,
                  }}
                >
                  {skill.icon}
                </div>
                <h5 style={{ fontWeight: "600", marginBottom: 8 }}>{skill.name}</h5>
                <p style={{ opacity: 0.65, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                  {skill.description}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SkillsSection;
