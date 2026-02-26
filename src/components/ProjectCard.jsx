import { Card, Button } from "react-bootstrap";

function ProjectCard({title, desc, link}) {
  return (
    <Card className="shadow-sm border-0">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>

        <Button href={link} target="_blank">
          Live Demo
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;