import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import noolu from "../assets/noolu.png";
import lemfi from "../assets/lemfi.png";
import jobportal from "../assets/jobportal.png";
import portfolio from "../assets/portfolio.png";
import salon from "../assets/salon.png";
import travel from "../assets/travel.png";
import liquor from "../assets/liquor.png";

const projects = [
  {
    title: "Noolu Landing Page",
    desc: "A modern NFT-inspired landing page built with React, featuring dynamic animations, interactive sections, and smooth navigation.",
    link: "https://noolu.vercel.app/",
    github: "https://github.com/emmy3oy/noolu.git",
    tags: ["React", "Framer Motion", "Responsive UI"],
    image: noolu
  },
  {
    title: "Lemfi Transact Landing Page",
    desc: "A fintech-inspired web app with a clean dashboard for tracking transactions and managing accounts in real time.",
    link: "https://lemfi-clone.vercel.app/",
    github: "https://github.com/emmy3oy/lemfi-clone.git",
    tags: ["React", "JavaScript", "UI/UX"],
    image: lemfi
  },
  {
    title: "Job Portal Website",
    desc: "A full-featured job portal with job search, applications, and admin job management functionality.",
    link: "https://job-portal-phi-six.vercel.app/",
    github: "https://github.com/chapordp/Job-portal",
    tags: ["React", "Next.js", "Bootstrap"],
    image: jobportal
  },
  {
    title: "Portfolio Website",
    desc: "A modern animated portfolio showcasing projects and skills with smooth transitions and responsive design.",
    link: "https://emann-portfoliosixvercelap.vercel.app/",
    github: "https://github.com/emmy3oy/my-portfolio.git",
    tags: ["React", "Framer Motion"],
    image: portfolio
  },
  {
    title: "Hair Salon Landing Page",
    desc: "A sleek, conversion-focused landing page showcasing services and pricing with strong visual appeal.",
    link: "https://radiant-sprite-b3baf3.netlify.app/",
    github: "https://github.com/emmy3oy/ginger-hair-salon",
    tags: ["React", "Responsive Design"],
    image: salon
  },
  {
    title: "Travel Agency Landing Page",
    desc: "A visually engaging travel landing page highlighting destinations and booking actions.",
    link: "https://profound-elf-2b9fc5.netlify.app/",
    github: "https://github.com/emmy3oy/Travelly",
    tags: ["React", "Bootstrap"],
    image: travel
  },
  {
    title: "Ronald Liquor Landing Page",
    desc: "A premium product landing page focused on brand storytelling and conversion-driven user flow.",
    link: "https://ronaldliqour.tiiny.site/",
    github: "#",
    tags: ["React", "Landing Page", "Product Design"],
    image: liquor
  }
];

function Projects() {
  return (
    <Container className="mt-5 text-light">
      <h1 className="mb-4">Projects</h1>

      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card
                className="border-0 shadow-lg h-100"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(20px)",
                  color: "white",
                  borderRadius: "20px",
                  overflow: "hidden"
                }}
              >
                {/* Image */}
                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{ height: "180px", objectFit: "cover" }}
                />

                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>

                  {/* Tags */}
                  <div className="mb-2">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        bg="light"
                        text="dark"
                        className="me-1 mb-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Card.Text style={{ flexGrow: 1 }}>
                    {project.desc}
                  </Card.Text>

                  {/* Buttons */}
                  <div className="d-flex gap-2 mt-2">
                    <Button
                      href={project.link}
                      target="_blank"
                      variant="primary"
                    >
                      Live
                    </Button>

                    {project.github !== "#" && (
                      <Button
                        href={project.github}
                        target="_blank"
                        variant="outline-light"
                      >
                        GitHub
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;