import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-center mt-5 p-4 bg-dark text-light">
      <div className="mb-3">
        <a
          href="https://github.com/emmy3oy"
          target="_blank"
          rel="noreferrer"
          className="text-light mx-3 fs-4"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/emmanuel-oyase-4b709b280/"
          target="_blank"
          rel="noreferrer"
          className="text-light mx-3 fs-4"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="mb-0">
        © {new Date().getFullYear()} Emmanuel | React Portfolio
      </p>
    </footer>
  );
}

export default Footer;