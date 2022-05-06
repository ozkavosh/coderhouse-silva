import './Item.css'

const Item = ({title, price, pictureUrl, description, stock}) => {
  return (
    <div className="item">
        <div className="itemTitle">{title}</div>
        <div className="itemImg">
            <img src={pictureUrl} alt="imagen del item" /> 
        </div>
        <p className="itemDescription">{description}</p>
        <p className="itemPrice">${price}</p>
        <button className="btn itemDetailBtn"> Ver detalle del producto </button>
    </div>
  )
}

export default Item