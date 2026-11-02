import React from 'react';
import products from '../data/products';


function Items({setTotal}) {
    return (
        <div className="container mt-4">
            <ul className="list-group">
                {products.map((item) => (
                    <li
                        className="list-group-item d-flex align-items-center gap-3"
                        key={item.id}
                    >
                        <div className='card text-align-center align-item-center'>
                            <h3 className='card-title p-3'>{item.desc}</h3>
                            <img
                                src={item.image}
                                alt={item.desc}
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    objectFit: 'cover'
                                }}
                                className='card-body '
                            />
                        </div>
                        <div className=''>
                            Quantity
                            <input
                                type="number"
                                min="0"
                                className="form-control"
                                onChange={(e) => setTotal(
                                    prev => prev + Number(e.target.value)
                                )}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Items;
