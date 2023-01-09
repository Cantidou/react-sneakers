import React from "react";
import AppContext from "../context";
import { Link } from 'react-router-dom';

const Info = ({ title, image, discription, width }) => {
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className="cartEmpty">
            <img className="cartImg" width={width} src={image} alt="cart"/>
            <h2>{title}</h2>
            <p>{discription}</p>
            <Link to={process.env.PUBLIC_URL + '/'}>
                <button onClick={() => setCartOpened(false)} className="greenButton">
                    <img className="buttonImg" src="./img/arrow.svg" alt="arrow"/>
                    Вернуться назад
                </button>
            </Link>
        </div> 
    )
}

export default Info;