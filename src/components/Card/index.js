import React from 'react';
import ContentLoader from "react-content-loader"

import AppContext from '../../context';

import styles from './Card.module.scss';

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false, loading = false }) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({id, title, imageUrl, price});
    }

    const onClickFavorite = () => {
        onFavorite({id, title, imageUrl, price});
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader 
                speed={2}
                width={150}
                height={187}
                viewBox="0 0 150 187"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
                <rect x="0" y="107" rx="3" ry="3" width="150" height="15" /> 
                <rect x="0" y="126" rx="3" ry="3" width="93" height="15" /> 
                <rect x="0" y="163" rx="8" ry="8" width="80" height="24" /> 
                <rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
              </ContentLoader> : <><img className={styles.favorite} onClick={onClickFavorite} src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}/>
                <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
                <h5>{title}</h5>
                <div className="cardBottom">
                <div>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="add"></img>
                </div>
                </>
            }
        </div>
    );
}

export default Card;