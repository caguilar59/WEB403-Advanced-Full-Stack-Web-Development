import React, { useState } from 'react';

function Filter({ onSortChange }) {
    const [price, setPrice] = useState('None');

    function handleSort(sortOption) {
        console.log('Selected:', sortOption);

        setPrice(sortOption);
        onSortChange(sortOption);
    }

    return (
        <div className="dropdown mb-3">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Sort Price by: {price}
            </button>

            <ul className="dropdown-menu">
                <li>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleSort('None')}
                    >
                        None
                    </button>
                </li>

                <li>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleSort('Highest')}
                    >
                        Highest
                    </button>
                </li>

                <li>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleSort('Lowest')}
                    >
                        Lowest
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Filter;
