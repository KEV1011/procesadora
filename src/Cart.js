import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('/api/cart')
            .then(response => {
                setCart(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the cart items!', error);
            });
    }, []);

    const removeFromCart = (productId) => {
        axios.delete(`/api/cart/${productId}`)
            .then(response => {
                setCart(cart.filter(item => item._id !== productId));
            })
            .catch(error => {
                console.error('Hubo un error eliminando el producto del carrito', error);
            });
    };

    const checkout = () => {
        axios.post('/api/checkout')
            .then(response => {
                alert('Pago procesado exitosamente!');
                setCart([]);
            })
            .catch(error => {
                console.error('Hubo un error procesando el pago', error);
            });
    };

    return (
        <section id="carrito">
            <h2>Carrito de Compras</h2>
            <div id="cart-items">
                {cart.map(item => (
                    <div key={item._id}>
                        <p>{item.name} - ${item.price}</p>
                        <button onClick={() => removeFromCart(item._id)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
            <button onClick={checkout}>Pagar</button>
        </section>
    );
}

export default Cart;