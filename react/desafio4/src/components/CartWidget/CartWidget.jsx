import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CartWidget.css'
const Icons = require('@fortawesome/free-solid-svg-icons')

const CartWidget = () => {
  return (
    <button className="cart">
        <FontAwesomeIcon icon={Icons.faShoppingCart}/>
        <div className="cartBadge">
            0
        </div>
    </button>
  )
}

export default CartWidget