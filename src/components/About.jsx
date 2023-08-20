import { Card, Container } from "react-bootstrap";
import { SKillCard } from "./SkillCard";
import { Skills } from "../asset/skilllist";

export const About = () => {
  console.log(Skills);
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center">
        <Card
          id="cover-container"
          className="p-5 mt-5 cardiora"
          style={{ borderRadius: "100px" }}
        >
          <Card.Header as="h2">Skill</Card.Header>
          <Card.Body
            className="d-flex flex-wrap flex-row align-content-center justify-content-center"
            style={{ gap: "10px" }}
          >
            {Skills.length &&
              Skills.map((skill) => <SKillCard skill={skill} />)}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
