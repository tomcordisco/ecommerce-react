import React, {useState, useEffect} from 'react';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    const [categoria, setCategoria] = useState("Helton Store");

    useEffect( () => {
        document.title = categoria;
    }, [categoria]);

    const handleClick = (categoria) => {
        setCategoria(categoria);
    }
    return (
        <header>
            <Link to={"/"} >
                <h1>Helton</h1>
            </Link>
            
            <nav>
                <ul>
                    <li>
                        <NavLink onClick={()=> handleClick("Remeras")} to={"/categoria/1"} > Remeras </NavLink>
                    </li>
                    <li>
                        <NavLink  to={"/categoria/3"} > Hoodies </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={()=> handleClick("Pantalones")} to={"/categoria/2"} > Pantalones </NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar 