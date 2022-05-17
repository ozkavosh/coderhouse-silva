import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CartWidget.css'
import { Badge } from 'react-bootstrap'
const Icons = require('@fortawesome/free-solid-svg-icons')

const CartWidget = () => {
  return (
    <button className="cart">
        <FontAwesomeIcon icon={Icons.faShoppingCart}/>
        <Badge pill bg="warning">0</Badge>
    </button>
  )
}

export default CartWidget