import React from 'react';

import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(props) {
    const { totalPrice } = useCart();

    return (
        <header>
            <Link to={process.env.PUBLIC_URL + '/'}>
                <div className="headerLeft">
                    <img width={40} height={40} src="./img/logo.png" alt="Logo"/>
                    <div>
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кросовок</p>
                    </div>
                </div>
            </Link>
            <ul className="headerRight">
                <li onClick={props.onClickCart}>
                    <img className='cart' width={18} height={18} src='./img/cart.svg' alt="Корзина"/>
                    <span>{totalPrice} руб.</span>
                </li>
                    <li>
                        <Link to={process.env.PUBLIC_URL + '/favorites'}>
                            <img width={18} height={18} src="./img/favorite.svg" alt="Закладки" />
                        </Link>
                    </li>
                <li>
                    <Link to={process.env.PUBLIC_URL + '/orders'}>
                            <img width={18} height={18} src="./img/user.svg" alt="Пользователь" />
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header