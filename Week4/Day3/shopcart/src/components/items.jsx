
import React, { useState } from 'react';
import products from '../data/products';
import Filter from './filter';

function Items({cart, setCart}) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [sort, setSort] = useState('None');

    // Sort products by price
    const sortedProducts = [...products].sort((a, b) => {
        if (sort === 'Highest') {
            return b.price - a.price;
        }

        if (sort === 'Lowest') {
            return a.price - b.price;
        }

        return 0;
    });

    // Increase quantity
    const addQuantity = (id) => {
        const newQuantities = {
            ...cart,
            [id]: (cart[id] || 0) + 1
        };

        setCart(newQuantities);
    };

    // Decrease quantity
    const removeQuantity = (id) => {
        const newQuantities = {
            ...cart,
            [id]: Math.max((cart[id] || 0) - 1, 0)
        };

        setCart(newQuantities);
    };

    return (
        <div className="container mt-4">

            <div>
                <Filter onSortChange={setSort} />
            </div>

            <ul className="list-group">
                {sortedProducts.map((item) => (
                    <li
                        className="list-group-item d-flex align-items-center gap-3"
                        key={item.id}
                    >
                        <div
                            className='text-align-center align-item-center'
                            onClick={() => setSelectedItem(item)}
                        >
                            <h3 className='card-title p-3'>
                                {item.desc}
                            </h3>

                            <div className='card-title text-danger text-sm'>
                                ${item.price}
                            </div>

                            <img
                                src={item.image}
                                alt={item.desc}
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    objectFit: 'cover',
                                    cursor: 'pointer'
                                }}
                                className='card-body d-block mx-auto'
                            />
                        </div>

                        <div className='m-4'>
                            <button
                                onClick={() => removeQuantity(item.id)}
                                disabled={!cart[item.id]}
                            >
                                <i className='bi bi-dash'></i>
                            </button>

                            <button onClick={() => addQuantity(item.id)}>
                                <i className='bi bi-plus'></i>
                            </button>
                        </div>

                        Quantity

                        <input
                            type="number"
                            className="form-control"
                            style={{width: '80px'}}
                            min="0"
                            value={cart[item.id] || 0}
                            onChange={(e) => {
                                const newQuantities = {
                                    ...cart,
                                    [item.id]: Math.max(0, Number(e.target.value))
                                };

                                setCart(newQuantities);
                            }}
                        />

                        <div className="text-success fw-bold">
                            Value: ${(item.price * (cart[item.id] || 0)).toFixed(2)}
                        </div>

                    </li>
                ))}
            </ul>

            {/* Product Dialog */}
            {selectedItem && (
                <div className="modal d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {selectedItem.desc}
                                </h5>

                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setSelectedItem(null)}
                                ></button>
                            </div>

                            <div className="modal-body">
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.desc}
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                        objectFit: 'cover'
                                    }}
                                    className="d-block mx-auto"
                                />
                            </div>

                            <div className="modal-footer">
                                <p className='me-auto'>
                                    Ratings: {selectedItem.rate}
                                </p>

                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setSelectedItem(null)}
                                >
                                    Close
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Items;
