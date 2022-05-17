import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { Ring } from "@uiball/loaders";
import { Container, Row} from 'react-bootstrap';
import getFetch from '../../getFetch';
import { useParams} from "react-router-dom";


const ItemDetailContainer = ({ greetings }) => {
  let [prod, setProd] = useState([]);
  let [bool, setBool] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    console.log(id);
    getFetch(Number(id))
      .then((producto) => {
        setProd(producto);
      })
      .catch((err) => console.log(err))
      .finally(() => setBool(false));
  }, [id]);

  return (
    <Container fluid className="bg-success" style={{minHeight: "90vh"}}>
      <Row>
        <h2 className="title text-light p-2">{greetings}</h2>
      </Row>
      <Row className="justify-content-center align-items-center">
      {bool ? (
        <Ring size={40} lineWeight={5} speed={2} color="white" />
      ) : (
        <ItemDetail product={prod} />
      )}
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;