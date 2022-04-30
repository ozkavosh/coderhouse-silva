import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CartWidget.css'
const Icons = require('@fortawesome/free-solid-svg-icons')

const CartWidget = () => {
  return (
    <div className="cart">
        <FontAwesomeIcon icon={Icons.faShoppingCart}/>
        <div className="cartBadge">
            0
        </div>
    </div>
  )
}

export default CartWidget