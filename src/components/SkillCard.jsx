import { Card } from "react-bootstrap";

export const SKillCard = ({ skill }) => {
  return (
    <Card style={{ width: "22rem" }} className="p-1">
      <Card.Img
        variant="top"
        src={skill.img_url}
        width="100%"
        style={{ aspectRatio: "1/1", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{skill.name}</Card.Title>
        <Card.Text>
          <ul>
            {skill.description.map((val) => (
              <li>{val}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
