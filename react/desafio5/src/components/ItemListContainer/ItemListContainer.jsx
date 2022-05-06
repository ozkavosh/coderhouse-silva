import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { Ring } from "@uiball/loaders";

const productos = [
  {
    title: "Ibuprofeno",
    price: 234.56,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
    pictureUrl:
      "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-08-256.png",
    id: 1,
  },
  {
    title: "Suero",
    price: 345.67,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
    pictureUrl:
      "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-31-256.png",
    id: 2,
  },
  {
    title: "Jeringa",
    price: 123.45,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
    pictureUrl:
      "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-03-256.png",
    id: 3,
  },
  {
    title: "Mortero",
    price: 234.56,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
    pictureUrl:
      "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-36-256.png",
    id: 4,
  },
  {
    title: "Curitas",
    price: 345.67,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
    pictureUrl:
      "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-20-256.png",
    id: 5,
  },
  {
    title: "Cuentagotas",
    price: 345.67,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
    pictureUrl:
      "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-14-256.png",
    id: 6,
  }
];

const fetchProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

const ItemListContainer = ({ greetings }) => {
  let [prod, setProd] = useState([]);
  let [bool, setBool] = useState(true);

  useEffect(() => {
    fetchProductos
      .then((productos) => {
        setProd(productos);
      })
      .catch((err) => console.log(err))
      .finally(() => setBool(false));
  }, []);

  console.log(prod);

  return (
    <div className="itemListContainer">
      <h2 className="title">{greetings}</h2>
      {bool ? (
        <Ring size={40} lineWeight={5} speed={2} color="black" />
      ) : (
        <ItemList products={prod} />
      )}
    </div>
  );
};

export default ItemListContainer;
