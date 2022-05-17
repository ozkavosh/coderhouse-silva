import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { Ring } from "@uiball/loaders";
import { Container, Row} from 'react-bootstrap';
import getFetch from '../../getFetch';
import { useParams} from 'react-router-dom'

const ItemListContainer = ({ greetings }) => {
  let [prod, setProd] = useState([]);
  let [bool, setBool] = useState(true);
  const {categoria} = useParams();

  useEffect(() => {
    getFetch()
      .then((productos) => setProd(productos))
      .catch((err) => console.log(err))
      .finally(() => {
        setBool(false)
      });
  }, [prod, categoria]);

  console.log(prod);

  return (
    <Container fluid className="bg-success" style={{minHeight: "40vh"}}>
      <Row>
        <h2 className="title text-light p-2">{greetings ? greetings.toUpperCase() : categoria.toUpperCase()}</h2>
      </Row>
      <Row className="justify-content-center">
      {bool ? (
        <Ring size={40} lineWeight={5} speed={2} color="white" />
      ) : (
        categoria ? <ItemList products={prod} category={categoria} />
        : <ItemList products={prod} />
      )}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
