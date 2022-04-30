import './NavBar.css';
import CartWidget from 'components/CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navContainer">
        <h1 className="navBrand"> Farma<span className="textoBlanco">cia</span> </h1>
        <ul className="navButtons">
            <li className="navButton"> <button>Home</button> </li>
            <li className="navButton"> <button>Nosotros</button> </li>
            <li className="navButton"> <button>Contacto</button> </li>
        </ul>
        <button className="navCartButton"><CartWidget/></button>
    </nav>
  );
}

export default NavBar;