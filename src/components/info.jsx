import React from "react";
import AppContext from "../context";

const Info = ({ title, image, discription }) => {
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className="cartEmpty">
            <img className="cartImg" width={120} src={image} alt="cart"/>
            <h2>{title}</h2>
            <p>{discription}</p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
                <img className="buttonImg" src={"/img/arrow.svg"} alt="arrow"/>
                Вернуться назад
            </button>
        </div> 
    )
}

export default Info;