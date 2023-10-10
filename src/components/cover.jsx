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
                aria-label="email"
              >
                <Button
                  variant="light"
                  name="email-link-button"
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
                aria-label="linkedin"
              >
                <Button
                  variant="light"
                  name="linkedin-link-button"
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
                aria-label="github"
              >
                <Button
                  variant="light"
                  name="github-link-button"
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
                aria-label="profile"
              >
                <Button variant="secondary" name="resume">
                  My Resume
                </Button>
              </a>

              <a
                class="hyperlink-profile"
                href="#portfolio"
                aria-label="portfolio"
              >
                <Button variant="secondary" name="portfolio">
                  My Portfolio
                </Button>
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
            alt="enos-photo"
          />
        </Card>
      </Container>
    </>
  );
};
