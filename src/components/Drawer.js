import React from "react";
import axios from "axios";

import Info from "./info";
import { useCart } from "../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems, totalPrice} = useCart();
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.post('https://639b1552d5141501974a8543.mockapi.io/orders', {items: cartItems,});
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`https://639b1552d5141501974a8543.mockapi.io/cart/${item.id}`);
                await delay(1000)
            }

        } catch (error) {
            alert('Ошибка при создании заказа')
        }
        setIsLoading(false);
    };

    return (
        <div className="overlay">
            <div className="drawer">
                <h2>
                Корзина
                <svg onClick={onClose} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
                <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                </svg>
                </h2>

                {
                    items.length > 0 ? (
                    <div className="itemsContainer">
                        <div className="items">
                            {items.map(obj => (
                                <div key={obj.id} className="cartItem">
                                    <div 
                                    style={{backgroundImage:`url(${obj.imageUrl})`}} 
                                    className="cartItemImg"></div>
                                    <div>
                                    <p>{obj.title}</p>
                                    <b>{obj.price} руб.</b>
                                    </div>
                                    <svg onClick={() => onRemove(obj.id)} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
                                    <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                                    </svg>
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                <span>Итого</span>
                                <div></div>
                                <b>{totalPrice} руб.</b>
                                </li>
                                <li>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>{totalPrice / 100 * 5} руб.</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                                Оформить заказ<img src="/img/arrow.svg" alt="arrow"/>
                            </button>
                        </div>
                    </div>
                    ) : ( 
                    <Info 
                        title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"} 
                        discription={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} 
                        image={isOrderComplete ? "img/complete-order.png" : "/img/empty-cart.png"} 
                    /> 
                )}
            </div>
        </div>
        
    );
}

export default Drawer