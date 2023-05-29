import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = ({nombre, precio}) => {
    return (
        <header>
            <h1>Helton</h1>
            <nav>
                <ul>
                    <li>Remeras</li>
                    <li>Hoodies</li>
                    <li>Pantalones</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar 