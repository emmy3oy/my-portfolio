import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

function About() {
  const skills = [
    { name: "React.js & Hooks", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "Node.js & MongoDB", level: 80 },
    { name: "REST APIs & Integration", level: 80 },
    { name: "Bootstrap & Responsive Design", level: 85 },
    { name: "Git & GitHub Workflow", level: 90 },
    { name: "UI/UX & Product Thinking", level: 80 },
    { name: "Technical Support & Debugging", level: 95 },
  ];

  return (
    <Container className="mt-5 text-light">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="mb-4">About Me</h1>

        <p style={{ opacity: 0.85, lineHeight: "1.7", maxWidth: "800px" }}>
          I’m a results-driven Full Stack Developer specializing in React.js and
          modern web technologies, with a strong focus on building responsive,
          user-centered applications that solve real-world problems. I transform
          complex ideas and designs into clean, functional interfaces while
          ensuring performance, scalability, and cross-device compatibility.
          <br /><br />
          Beyond development, I bring hands-on experience in technical support and
          system troubleshooting, allowing me to quickly diagnose issues, optimize
          performance, and improve overall user experience. I’ve built full
          applications including chat systems, dashboards, and high-conversion
          landing pages, working across both frontend and backend environments.
          <br /><br />
          I thrive in collaborative environments, enjoy solving challenging
          problems, and continuously learn new tools and technologies to grow into
          a product-focused engineer.
        </p>
      </motion.div>

      <Row className="mt-5">
        {/* EXPERIENCE */}
        <Col md={6}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <Card
              className="p-4 border-0 mb-4 mb-md-0"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                color: "white",
              }}
            >
              <h4>Experience</h4>

              <p style={{ opacity: 0.85 }}>
                • Built full-stack applications including a Chat App using React,
                Node.js, and MongoDB  
                <br />
                • Developed responsive landing pages and dashboards with modern UI/UX principles  
                <br />
                • Integrated REST APIs and handled real-time data updates  
                <br />
                • Collaborated in team environments using Git/GitHub workflows  
                <br />
                • Provided technical support, debugging issues, and improving system performance  
              </p>
            </Card>
          </motion.div>
        </Col>

        {/* SKILLS */}
        <Col md={6}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <Card
              className="p-4 border-0"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                color: "white",
              }}
            >
              <h4>Core Skills</h4>

              {skills.map((skill, idx) => (
                <div key={idx} style={{ marginBottom: "12px" }}>
                  <div style={{ fontSize: "0.85rem", marginBottom: "4px" }}>
                    {skill.name}
                  </div>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      height: "6px",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      style={{
                        height: "100%",
                        background:
                          "linear-gradient(to right, #38bdf8, #a78bfa)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;