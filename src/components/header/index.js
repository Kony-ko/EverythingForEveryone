import React, { useContext } from 'react';
import Nike from '../../images/Nike.jpg';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/dataProvider';

export const Header = () => {

    const value = useContext(DataContext);
    const [cart] = value.cart;
    const [menu, setMenu] = value.menu;
    

    const toogleMenu = () => {
        setMenu(!menu);
    }

    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={Nike} alt='logo' width='150'/>
                </div>
            </Link>

            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/products">PRODUCTS</Link>
                </li>
            </ul>

            <div className="cart__header" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{cart.length}</span>
            </div>
        </header>
    )
}
