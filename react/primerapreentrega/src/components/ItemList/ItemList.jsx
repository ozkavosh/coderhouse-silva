import "./ItemList.css";
import Item from "../Item/Item";
import { Row, Col } from "react-bootstrap";

const ItemList = ({ products, category }) => {
  return (
    <Row className="justify-content-center">
      {category
        ? products
            .filter((product) => product.category === category)
            .map((product) => {
              return (
                <Col className="d-flex flex-grow-0 mb-3">
                  <Item
                    product = {product}
                  />
                </Col>
              );
            })
        : products.map((product) => {
            return (
              <Col className="d-flex flex-grow-0 mb-3">
                <Item
                  product = {product}
                />
              </Col>
            );
          })}
    </Row>
  );
};

export default ItemList;
