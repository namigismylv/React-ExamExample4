import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="header__left">
                    <Link>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp" alt="" />
                    </Link>
                </div>
                <div className="header__middle">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {/* <li><Link to=""></Link></li>
                    <li><Link to=""></Link></li>
                    <li><Link to=""></Link></li>
                    <li><Link to=""></Link></li> */}
                    </ul>
                </div>
                <div className="header__right">
                    <ul>
                        <li><Link to="#"></Link>Search</li>
                        <li><Link to="#"></Link>Wishlist</li>
                        <li><Link to="#"></Link>Basket</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header