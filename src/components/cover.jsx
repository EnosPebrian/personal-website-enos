import { Button, Card, Container } from "react-bootstrap";
import profilepicture from "../asset/photos/Profile Picture.png";
import "../css/cover.css";
import { SVGmail } from "../asset/SVGmail";
import { SVGlinkedin } from "../asset/SVGlinkedin";
import { SVGgithub } from "../asset/SVGgithub";

export const Cover = () => {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ height: "95vh" }}
      >
        <Card
          id="cover-container"
          className="d-flex flex-row align-items-center justify-content-center p-5 mt-5 cardiora"
          style={{ borderRadius: "100px" }}
        >
          <Card.Body
            style={{
              maxWidth: "600px",
            }}
          >
            <Card.Text>Hi there...</Card.Text>
            <Card.Title as="h3">It's me Enos</Card.Title>
            <Card.Title as="h1">a Fullstack Web Developer</Card.Title>
            <Card.Text>I love simple, compact, and clean design</Card.Text>
            <Card.Text className="d-flex " style={{ gap: "5px" }}>
              <a
                target="_blank"
                href="mailto:enospebrian1@gmail.com"
                class="hyperlink-profile"
              >
                <Button
                  variant="light"
                  className="d-flex align-items-center justify-content-center border border-secondary"
                  style={{ height: "38px" }}
                >
                  <SVGmail />
                </Button>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/enospebrian/"
                class="hyperlink-profile"
              >
                <Button
                  variant="light"
                  className="d-flex align-items-center justify-content-center border border-secondary"
                  style={{ height: "38px" }}
                >
                  <SVGlinkedin />
                </Button>
              </a>
              <a
                class="hyperlink-profile"
                target="_blank"
                href="https://github.com/enospebrian1"
              >
                <Button
                  variant="light"
                  className="d-flex align-items-center justify-content-center border border-secondary"
                  style={{ height: "38px" }}
                >
                  <SVGgithub />
                </Button>
              </a>
              <a
                target="_blank"
                href="https://enospebrian.github.io/myresume/"
                class="hyperlink-profile"
              >
                <Button variant="secondary">My Resume</Button>
              </a>

              <a class="hyperlink-profile" href="#portfolio">
                <Button variant="secondary">My Portfolio</Button>
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Img
            id="avatarpicture"
            src={profilepicture}
            style={{
              maxWidth: "300px",
              borderRadius: "50%",
              aspectRatio: "1/1",
              border: "1px solid gray",
              order: "2",
            }}
          />
        </Card>
      </Container>
    </>
  );
};
