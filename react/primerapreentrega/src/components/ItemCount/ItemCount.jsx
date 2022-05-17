import { useState } from "react";
import "./ItemCount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icons = require("@fortawesome/free-solid-svg-icons");

const ItemCount = ({ name, stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  function addItem(count) {
    if (count < stock) {
      setCount(count + 1);
      onAdd(count + 1);
    }
  }

  function removeItem(count) {
    if (count > initial) setCount(count - 1);
  }

  return (
    <div className="itemCount">
      <h2 className="countItemName">{name}</h2>
      <h3 className="stock">Stock: {stock}</h3>
      <div className="countContainer">
        <button onClick={() => removeItem(count)} className="btn minBtn">
          <FontAwesomeIcon icon={Icons.faMinusCircle} />
        </button>
        <p className="count">{count}</p>
        <button onClick={() => addItem(count)} className="btn addBtn">
          <FontAwesomeIcon icon={Icons.faPlusCircle} />
        </button>
      </div>
      <button className="btn addToCartBtn">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
