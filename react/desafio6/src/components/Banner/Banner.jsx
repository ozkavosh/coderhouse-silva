import './Banner.css'
import { Container } from 'react-bootstrap'

const Banner = () => {
  return (
    <Container fluid className="banner bg-light align-items-center d-flex justify-content-center">
        <h2 className="text-primary">Soy Banner Component</h2>
    </Container>
  )
}

export default Banner