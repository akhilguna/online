import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="nav-wrapper " style={{ overflow: "hidden" }}>
            <div className="container-fluid">
                <Link to="/" className="brand-logo">Mandee Online</Link>
                <ul className="right">
                    {/* <li><Link to="/">Shop</Link></li> */}
                    {/* <li><Link to="/cart">My cart</Link></li> */}
                    <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar;