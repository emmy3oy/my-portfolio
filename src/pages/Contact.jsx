import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

function Contact() {
  return (
    <Container className="mt-5 text-light" style={{ maxWidth: "700px" }}>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="mb-3">Get In Touch</h1>

        <p style={{ opacity: 0.85, lineHeight: "1.7" }}>
          I’m currently open to opportunities in Frontend and Full Stack Development,
          as well as roles that combine development with technical support or product-focused work.
          If you have a project, role, or collaboration in mind, feel free to reach out — I’d love to connect.
        </p>

        <div style={{ marginTop: "30px", lineHeight: "2" }}>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:emmanueloyase@gmail.com"
              style={{ color: "#38bdf8", textDecoration: "none" }}
            >
              emmanueloyase@gmail.com
            </a>
          </p>

          <p>
            <strong>Whatsapp:</strong>{" "}
            <a
              href="tel:+2347010535703"
              style={{ color: "#38bdf8", textDecoration: "none" }}
            >
              +234 701 053 5703
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/emmanuel-oyase-4b709b280"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#38bdf8", textDecoration: "none" }}
            >
              linkedin.com/in/emmanuel-oyase
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/emmy3oy"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#38bdf8", textDecoration: "none" }}
            >
              github.com/emmy3oy
            </a>
          </p>
        </div>
      </motion.div>
    </Container>
  );
}

export default Contact;