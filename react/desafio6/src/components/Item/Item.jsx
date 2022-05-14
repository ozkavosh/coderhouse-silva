import './Item.css'
import {Card, Button} from 'react-bootstrap'

const Item = ({title, price, pictureUrl, description, stock}) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pictureUrl} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary">Ver Detalle del Producto</Button>
  </Card.Body>
    </Card>
  )
}

export default Item