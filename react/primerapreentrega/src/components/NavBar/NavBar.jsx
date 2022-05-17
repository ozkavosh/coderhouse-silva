import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";
import logo from '../../img/logo.png'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Navbar bg="success" expand="lg" variant="dark" className="pt-2">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/"><img src={logo} alt="" style={{height: "4rem"}}/></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navBar" />
          <Navbar.Collapse id="navBar" className="justify-content-lg-center">
            <Nav className="me-auto">
              <NavLink to="/medicamentos" className="nav-link" activeClassName="active">MEDICAMENTOS</NavLink>
              <NavLink to="/cosmeticos" className="nav-link" activeClassName="active">COSMETICOS</NavLink>
              <NavLink to="/equipo" className="nav-link" activeClassName="active">EQUIPO</NavLink>
            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
