import "./ItemList.css";
import Item from "../Item/Item";
import {Row, Col} from "react-bootstrap"

const ItemList = ({ products }) => {
  return (
    <Row className="justify-content-center">
      {products.map((product) => {
        return (
          <Col className="d-flex flex-grow-0 mb-3">
          <Item
            key={product.id}
            title={product.title}
            price={product.price}
            pictureUrl={product.pictureUrl}
            description={product.description}
          />
          </Col>
        );
      })}
    </Row>
  );
};

export default ItemList;
