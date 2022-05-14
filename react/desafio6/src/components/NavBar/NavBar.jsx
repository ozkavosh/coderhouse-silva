import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, Container, Offcanvas} from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar key="navbar" bg="primary" variant="dark" expand="sm" className="pt-3 pb-3">
      <Container>
        <Navbar.Brand className="navTitle" href="#">FarmaciaReact</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="navButton" href="#action1">Medicamentos</Nav.Link>
              <Nav.Link href="#action2">Cosmeticos</Nav.Link>
              <Nav.Link href="#action3">Equipo</Nav.Link>
              <Nav.Link as={()=><CartWidget/>} href="#action4"></Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
  );
};

export default NavBar;
