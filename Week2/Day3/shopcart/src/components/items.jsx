import React, { useState } from 'react';
import products from '../data/products';

function Items({setTotal, setCart}) {
    const [quantities, setQuantities] = useState({});
    const [selectedItem, setSelectedItem] = useState(null);

    // Increase quantity
    const addQuantity = (id) => {
        const newQuantities = {
            ...quantities,
            [id]: (quantities[id] || 0) + 1
        };

        setQuantities(newQuantities);
        setCart(newQuantities);
        updateTotal(newQuantities);
    };

    // Decrease quantity
    const removeQuantity = (id) => {
        const newQuantities = {
            ...quantities,
            [id]: Math.max((quantities[id] || 0) - 1, 0)
        };

        setQuantities(newQuantities);
        setCart(newQuantities);
        updateTotal(newQuantities);
    };

    // Update total items
    const updateTotal = (newQuantities) => {
        const totalItems = Object.values(newQuantities).reduce(
            (sum, quantity) => sum + quantity, 0
        );

        setTotal(totalItems);
    };

    return (
        <div className="container mt-4">

            <ul className="list-group">
                {products.map((item) => (
                    <li
                        className="list-group-item d-flex align-items-center gap-3"
                        key={item.id}
                    >
                        <div
                            className=' text-align-center align-item-center'
                            onClick={() => setSelectedItem(item)}
                        >
                            <h3 className='card-title p-3'>{item.desc}</h3>

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
                            <button onClick={() => removeQuantity(item.id)}>
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
                            value={quantities[item.id] || 0}
                            onChange={(e) => {
                                const newQuantities = {
                                    ...quantities,
                                    [item.id]: Math.max(0, Number(e.target.value))
                                };

                                setQuantities(newQuantities);
                                setCart(newQuantities);
                                updateTotal(newQuantities);
                            }}
                        />

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
                                <p className='me-auto'>Ratings: {selectedItem.rate}</p>
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