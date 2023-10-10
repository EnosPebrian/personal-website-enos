import { Card } from "react-bootstrap";

export const SKillCard = ({ skill }) => {
  return (
    <Card style={{ width: "22rem" }} className="p-1">
      <a href={skill.href} target="_blank">
        <Card.Img
          variant="top"
          src={skill.img_url}
          width="100%"
          style={{ aspectRatio: "1/1", objectFit: "contain" }}
          alt={skill.name}
        />
      </a>
      <Card.Body>
        <Card.Title>
          <a href={skill.href} target="_blank">
            {skill.name}
          </a>
        </Card.Title>
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
