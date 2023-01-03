import React from "react";
import Card from "../components/Card";
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
                  favorites.map((item, index) => (
                      <Card 
                        key={index}
                        id={item.id}
                        title={item.title} 
                        price={item.price}
                        imageUrl={item.imageUrl}
                        favorited={true}
                        onFavorite={onAddToFavorite}
                      />
                  ))
                  
                }
              </div>
            </div>
    )
}

export default Favorites;