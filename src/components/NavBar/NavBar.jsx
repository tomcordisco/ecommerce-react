import React, {useState, useEffect} from 'react';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    const [categoria, setCategoria] = useState("Helton Store");
    const [ menu , setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu )
    }

    useEffect( () => {
        document.title = categoria;
    }, [categoria]);

    const handleClick = (categoria) => {
        setCategoria(categoria);
    }
    return (
        <header className='header'>
            <Link className='header-title' to={"/"} >
                <h1>Helton</h1>
            </Link>
            
            <div className='menu-lateral'>
                <CartWidget/>
                
                <svg onClick={ toggleMenu } xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icono-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
                
                
                

            <nav className={`nav ${ menu ? 'isActive' : '' }`}>
                <ul>
                    <li>
                        <NavLink className="navLink" onClick={()=> handleClick("Remeras")} to={"/categoria/1"} > Remeras </NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" onClick={()=> handleClick("Hoodies")} to={"/categoria/3"} > Hoodies </NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" onClick={()=> handleClick("Pantalones")} to={"/categoria/2"} > Pantalones </NavLink>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default NavBar 