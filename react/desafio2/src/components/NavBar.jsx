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
            <li className="navButton"> <button onClick={() => setTitle("")}>Home</button> </li>
            <li className="navButton"> <button onClick={() => setTitle("| Nosotros")}>Nosotros</button> </li>
            <li className="navButton"> <button onClick={() => setTitle("| Contacto")}>Contacto</button> </li>
            <li className="navButton"> <button className="botonCuenta" onClick={() => setTitle("| Cuenta")}><FontAwesomeIcon icon={faUserCircle}/></button> </li>
        </ul>
    </nav>
  );
}

export default NavBar;