import { Button, Card, Container } from "react-bootstrap";
import profilepicture from "../asset/photos/Profile Picture.png";
import "../css/cover.css";

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
                  <img
                    src="https://img.freepik.com/free-icon/email_318-859700.jpg?w=360"
                    width="15px"
                    alt="mail"
                  />
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
                  <img
                    id="linkedin"
                    src="https://logospng.org/download/linkedin/logo-linkedin-icon-4096.png"
                    width="15px"
                    alt="logo linkedin"
                  />
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
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/900px-Octicons-mark-github.svg.png?20180806170715"
                    width="15px"
                    alt="logo github"
                  />
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
