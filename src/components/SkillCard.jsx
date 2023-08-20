import { Card } from "react-bootstrap";

export const SKillCard = ({ skill }) => {
  return (
    <Card style={{ width: "18rem" }} className="p-1">
      <Card.Img
        variant="top"
        src={skill.img_url}
        width="100%"
        style={{ aspectRatio: "1/1", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{skill.name}</Card.Title>
        <Card.Text>{skill.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
