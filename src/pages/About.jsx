import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import { motion } from "framer-motion";

function About() {
  const skills = [
    { name: "React.js & Hooks", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "Bootstrap & Responsive Design", level: 80 },
    { name: "RESTful APIs & JSON", level: 75 },
    { name: "Git & GitHub Workflow", level: 85 },
    { name: "UI/UX Best Practices", level: 70 },
  ];

  return (
    <Container className="mt-5 text-light">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="mb-4">About Me</h1>

        <p style={{ opacity: 0.85, lineHeight: "1.6" }}>
          I’m a Front-End Developer passionate about building modern, responsive,
          and high-performance web applications. I specialize in React.js,
          creating reusable components, integrating REST APIs, and ensuring
          seamless user experiences. I enjoy turning designs into functional
          applications while optimizing for performance and scalability.
        </p>
      </motion.div>

      <Row className="mt-5">

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
                cursor: "pointer",
              }}
            >
              <h4>Experience</h4>
              <p>
                I have built landing pages, interactive dashboards, and full
                web applications using React and Bootstrap. My experience includes
                responsive design, API integration, and creating scalable, reusable
                components.
              </p>
            </Card>
          </motion.div>
        </Col>

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
                cursor: "pointer",
              }}
            >
              <h4>Skills</h4>
              <div>
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.2 }}
                    style={{
                      background: "#fff",
                      height: "8px",
                      borderRadius: "5px",
                      marginBottom: "15px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        background: "linear-gradient(90deg, #00f, #0ff)",
                        height: "100%",
                      }}
                    ></div>
                  </motion.div>
                ))}
                <ul style={{ marginTop: "10px", paddingLeft: "20px", opacity: 0.85 }}>
                  {skills.map((skill, idx) => (
                    <li key={idx}>{skill.name}</li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </Col>

      </Row>

    </Container>
  );
}

export default About;