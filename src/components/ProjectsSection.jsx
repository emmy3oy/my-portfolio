import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
   {
    title: "Job Portal Website",
    description: "A modern job portal web application where users can browse, search, and apply for jobs, with admin features for posting and managing listings. Built with a responsive design and smooth user interactions.",
    tags: ["React", "Next.js", "React-bootstrap CSS"],
    github: "#", 
    live: "https://job-portal-phi-six.vercel.app/",
  },
  {
    title: "Hair Salon Landing Page",
  description: "A sleek and modern landing page for a hair salon, showcasing services, pricing, and contact information. Fully responsive with smooth scrolling, attractive visuals, and clear calls-to-action.",
  tags: ["React", "React Bootstrap", "Responsive Design", "UI/UX Design"],
  github: "https://github.com/emmy3oy/ginger-hair-salon", 
  live: "https://radiant-sprite-b3baf3.netlify.app/"  },
  {
    title: "Portfolio Website",
    description: "A modern, animated portfolio site showcasing projects and skills with smooth scroll and responsive design.",
    tags: ["React", "Framer Motion", "React Bootstrap"],
    github: "#",
    live: "https://emann-portfoliosixvercelap.vercel.app/",
  },
  {
     title: "Travel Agency Landing Page",
  description: "A visually appealing and responsive landing page for a travel agency, highlighting destinations, services, and packages. Features smooth scrolling, attractive imagery, and clear call-to-actions for bookings.",
  tags: ["React", "Tailwind CSS", "Responsive Design", "UI/UX Design"],
  github: "https://github.com/emmy3oy/Travelly", 
  live: "https://profound-elf-2b9fc5.netlify.app/",
  }
];

const ProjectsSection = () => {
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
          <p style={{ color: "#a78bfa", fontWeight: "500", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.85rem" }}>
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
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={project.title} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
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
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                <div>
                  <h5 style={{ fontWeight: "600", marginBottom: 12 }}>{project.title}</h5>
                  <p style={{ opacity: 0.65, fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.75rem",
                          padding: "4px 12px",
                          borderRadius: "999px",
                          background: "rgba(56,189,248,0.1)",
                          color: "#38bdf8",
                          fontWeight: "500",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.2rem", transition: "color 0.2s" }}>
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.2rem", transition: "color 0.2s" }}>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsSection;
