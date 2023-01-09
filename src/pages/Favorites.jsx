import React from "react";
import Card from "../components/Card";
import Info from "../components/info";
import AppContext from "../context";

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);
  return (
        <div>
              <div className="search-wrapper">
                <h1>Мои закладки</h1>
              </div>
              <div className="sneakers">
                {
                  Array.from(favorites).length > 0 ? (favorites.map((item, index) => (
                    <Card 
                      key={index}
                      id={item.id}
                      title={item.title} 
                      price={item.price}
                      imageUrl={item.imageUrl}
                      favorited={true}
                      onFavorite={onAddToFavorite}
                    />
                ))) : (
                <Info 
                  title={"Закладок нет :("} 
                  discription={`Вы ничего не добавляли в закладки`} 
                  image={"./img/no-favorites.png"}
                  width={70}
                />)
                }
              </div>
            </div>
    )
}

export default Favorites;