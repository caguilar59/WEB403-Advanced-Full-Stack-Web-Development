import React from 'react';
import products from '../data/products';

function Cart({cart}) {

    return (
        <div className="container mt-4">

            <h2>Your Cart Items</h2>

            <ul className="list-group">
                {products.filter((item) => cart[item.id] > 0).map((item) => (
                    <li
                        className="list-group-item d-flex align-items-center gap-3"
                        key={item.id}
                    >
                        <img
                            src={item.image}
                            alt={item.desc}
                            style={{
                                width: '100px',
                                height: '100px',
                                objectFit: 'cover'
                            }}
                        />

                        <div>
                            <h5>{item.desc}</h5>
                            <p>Quantity: {cart[item.id]}</p>
                            
                        </div>

                    </li>
                ))}
            </ul>

            {Object.values(cart).every((quantity) => quantity === 0) && (
                <p className="mt-3">Your cart is empty.</p>
            )}

        </div>
    );
}

export default Cart;