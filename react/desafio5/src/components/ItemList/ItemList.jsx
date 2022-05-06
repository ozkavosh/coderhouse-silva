import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="itemList">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            title={product.title}
            price={product.price}
            pictureUrl={product.pictureUrl}
            description={product.description}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
