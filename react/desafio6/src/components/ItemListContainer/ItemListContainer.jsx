import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { Ring } from "@uiball/loaders";
import { Container, Row} from 'react-bootstrap';
import getFetch from '../../getFetch';


const ItemListContainer = ({ greetings }) => {
  let [prod, setProd] = useState([]);
  let [bool, setBool] = useState(true);

  useEffect(() => {
    getFetch()
      .then((productos) => {
        setProd(productos);
      })
      .catch((err) => console.log(err))
      .finally(() => setBool(false));
  }, []);

  console.log(prod);

  return (
    <Container fluid className="bg-primary">
      <Row>
        <h2 className="title text-light p-2">{greetings}</h2>
      </Row>
      <Row className="justify-content-center">
      {bool ? (
        <Ring size={40} lineWeight={5} speed={2} color="black" />
      ) : (
        <ItemList products={prod} />
      )}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
