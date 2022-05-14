import "./ItemDetail.css";
import { Row, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ItemList = ({ product }) => {
  return (
    <Row className="justify-content-center">
      <Card className="mb-3 flex-row align-items-center" style={{ width: "32rem" }}>
        <Card.Img variant="top" src={product.pictureUrl} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>${product.price}</ListGroupItem>
        </ListGroup>
      </Card>
    </Row>
  );
};

export default ItemList;
