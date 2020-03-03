import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="nav-wrapper" style={{ overflow: "hidden" }}>
            <div className="container-fluid" style={{paddingLeft:"70px"}}>
                <Link to="/Home" className="brand-logo"><img src="images/Mandee.jfif" style={{fontSize:"60px"}}></img></Link>
                <ul className="right">
                    {/* <li><Link to="/">Shop</Link></li> */}
                    {/* <li><Link to="/cart">My cart</Link></li> */}
                    <li><Link to="/cart"><i className="material-icons" style={{fontSize:"40px"}}>shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar;