import '../css/NavBar.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const [title, setTitle] = useState("");

  return (
    <nav className="navContainer">
        <h1 className="navBrand"> Renac<span className="textoBlanco">ER</span> {title} </h1>
        <ul className="navButtons">
            <li className="navButton"> <a href="#" onClick={() => setTitle("")}>Home</a> </li>
            <li className="navButton"> <a href="#" onClick={() => setTitle("| Nosotros")}>Nosotros</a> </li>
            <li className="navButton"> <a href="#" onClick={() => setTitle("| Contacto")}>Contacto</a> </li>
            <li className="navButton"> <a href="#" onClick={() => setTitle("| Cuenta")}><FontAwesomeIcon icon={faUserCircle}/></a> </li>
        </ul>
    </nav>
  );
}

export default NavBar;