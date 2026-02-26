import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Job Portal App",
    desc: "React + Bootstrap job portal UI",
    link: "https://job-portal-phi-six.vercel.app/"
  },

  {
    title: "Hair Salon",
    desc: "Building this lovely Hair Salon landing page",
    link: "https://lnkd.in/dKmq5iB3"
  },
   {
    title: "Travelly",
    desc: " Travel website and all it features it offer",
    link: "https://lnkd.in/dGceCwx2"
  },
   {
    title: "Isley Liqour",
    desc: "Responsive React landing page",
    link: "https://ronaldliqour.tiiny.site/"
  },
   {
    title: "Landing Page UI",
    desc: "Responsive React landing page",
    link: "#"
  },
   {
    title: "Landing Page UI",
    desc: "Responsive React landing page",
    link: "#"
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
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:index * 0.2 }}
            >

              <Card
                className="border-0 shadow-lg"
                style={{
                  background:"rgba(255,255,255,0.05)",
                  backdropFilter:"blur(20px)",
                  color:"white"
                }}
              >
                <Card.Body>

                  <Card.Title>{project.title}</Card.Title>

                  <Card.Text>
                    {project.desc}
                  </Card.Text>

                  <Button
                    href={project.link}
                    target="_blank"
                  >
                    Live Demo
                  </Button>

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