import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navContainer">
        <h1 className="navBrand"> Farma<span className="textoBlanco">cia</span> </h1>
        <ul className="navButtons">
            <li className="navButton"> <button>Home</button> </li>
            <li className="navButton"> <button>Nosotros</button> </li>
            <li className="navButton"> <button>Contacto</button> </li>
        </ul>
        <CartWidget/>
    </nav>
  );
}

export default NavBar;