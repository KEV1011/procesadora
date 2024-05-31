import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>KJ S.A.S</h1>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/products">Productos</Link></li>
                    <li><Link to="/cart">Carrito</Link></li>
                    <li><Link to="/reviews">Reseñas</Link></li>
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;