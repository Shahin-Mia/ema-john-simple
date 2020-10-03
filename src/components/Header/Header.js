import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser] = useContext(UserContext);

    return (
        <div className="header">
            <img src={logo} alt="ema-john-logo" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link>{loggedInUser.displayName}</Link>
            </nav>
        </div>
    );
};

export default Header;