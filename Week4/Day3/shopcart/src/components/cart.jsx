
import React from 'react';
import products from '../data/products';

function Cart({cart}) {

    // Calculate total cost of each product
    const totalCost = products.reduce((total, item) => {
        return total + (item.price * (cart[item.id] || 0));
    }, 0);

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

                        <div>
                            Original Price: ${item.price}
                        </div>

                        <div>
                            Value Price: ${(item.price * cart[item.id]).toFixed(2)}
                        </div>
                    </li>
                ))}
            </ul>

            {Object.values(cart).every((quantity) => quantity === 0) && (
                <p className="mt-3">Your cart is empty.</p>
            )}

            <div className='container mt-4'>
                <h4>
                    Total Cost: ${totalCost.toFixed(2)}
                </h4>
            </div>

        </div>
    );
}

export default Cart;
