import { Card, Container } from "react-bootstrap";
import { works } from "../asset/project";
import { SKillCard } from "./SkillCard";

export const Works = () => {
  return (
    <>
      <Container
        id="portfolio"
        className="d-flex align-items-center justify-content-center"
      >
        <Card className="p-5 mt-5 cardiora" style={{ borderRadius: "100px" }}>
          <Card.Header as="h2">Works or Projects</Card.Header>
          <Card.Body
            className="d-flex flex-wrap flex-row align-content-center justify-content-center"
            style={{ gap: "10px" }}
          >
            {works.length &&
              works.map((workproject) => <SKillCard skill={workproject} />)}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
