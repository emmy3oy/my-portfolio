import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// ✅ Import images
import noolu from "../assets/noolu.png";
import lemfi from "../assets/lemfi.png";
import jobportal from "../assets/jobportal.png";
import portfolio from "../assets/portfolio.png"; // add portfolio image

const projects = [
  {
    title: "Lemfi Transact Page",
    description: "A modern fintech web application with a clean dashboard for managing accounts and tracking transactions in real time.",
    tags: ["React", "UI/UX", "Dashboard"],
    github: "https://github.com/emmy3oy/lemfi-clone.git",
    live: "https://lemfi-clone.vercel.app/",
    image: lemfi, 
  },
  {
    title: "Job Portal Website",
    description: "A full-featured job portal enabling users to browse and apply for jobs, with admin tools for managing listings.",
    tags: ["React", "Next.js", "Fullstack"],
    github: "https://github.com/chapordp/Job-portal",
    live: "https://job-portal-phi-six.vercel.app/",
    image: jobportal,
  },
  {
    title: "Noolu Landing Page",
    description: "An animated NFT-inspired landing page with interactive sections and smooth user experience.",
    tags: ["React", "Framer Motion", "UI Design"],
    github: "https://github.com/emmy3oy/noolu.git",
    live: "https://noolu.vercel.app/",
    image: noolu,
  },
  {
    title: "Portfolio Website",
    description: "Modern animated portfolio.",
    tags: ["React"],
    github: "#",
    live: "#",
    image: portfolio,
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #020617, #0f172a)",
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
          <p style={{ color: "#a78bfa", letterSpacing: "2px", fontSize: "0.85rem" }}>
            My Work
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
            Featured Projects
          </h2>
        </motion.div>

        <Row>
          {featuredProjects.map((project, index) => (
            <Col md={6} lg={4} key={project.title} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  backdropFilter: "blur(20px)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "24px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* 👇 Project Image */}
                <div style={{ marginBottom: 16, borderRadius: "12px", overflow: "hidden" }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "180px", objectFit: "cover" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div>
                  <h5>{project.title}</h5>
                  <p style={{ opacity: 0.65, fontSize: "0.9rem" }}>
                    {project.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.75rem",
                          padding: "4px 12px",
                          borderRadius: "999px",
                          background: "rgba(56,189,248,0.1)",
                          color: "#38bdf8",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Link to="/projects">
            <Button
              style={{
                background: "linear-gradient(to right, #38bdf8, #a78bfa)",
                border: "none",
                padding: "10px 24px",
                borderRadius: "999px",
                fontWeight: "500",
              }}
            >
              View More Projects →
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSection;