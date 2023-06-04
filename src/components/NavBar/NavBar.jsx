import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import Categories from '../Categories/Categories'

const NavBar = ({nombre, precio}) => {
    return (
        <header>
            <h1>Helton</h1>
            <nav>
                <ul>
                    <Categories />
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar 