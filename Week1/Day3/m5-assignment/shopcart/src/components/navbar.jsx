import React from 'react';

const Navbar = ({total}) => {
    return(
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#5cc0f2" }}>
            <div className="container-fluid">
                <a className="navbar-brand h1" href="/">
                    Shop to React
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto">
                        <li>
                            <i className=' nav-link bi bi-cart-fill'></i>
                        </li>
                        <li className="navbar-text">
                            <p className="">({total})Items</p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;