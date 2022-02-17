import { useContext } from "react";
import FavoritesContext from "../../Data/favorites-conext";
import Card from "../UI/Card";
import gameItemStyles from "./GameItem.module.css";
function GameItem(property) {
  const favContext = useContext(FavoritesContext);
  const itemIsFavorite = favContext.itemIsFavorite(property.id);
  //this is for indevidual game items structor
  //its going to display the data returned from the api for indidual game it
  function favoriteHandler() {
    if (itemIsFavorite) {
      favContext.removeFavorite(property.id);
    } else {
      favContext.addFavorite({
        id: property.id,
        image: property.background_image,
        title: property.title,
        metric: property.metric,
        date: property.date,
      });
    }
  }

  return (
    <li className={gameItemStyles.item}>
      <Card>
        <div>
          <img
            className={gameItemStyles.image}
            src={property.background_image}
            alt={property.title}
          />
        </div>

        <div className={gameItemStyles.content}>
          <h3>{property.title}</h3>
          <p>Average Rating: {property.metric}</p>
          <p>Relase Date: {property.date}</p>
        </div>
        <div className={gameItemStyles.actions}>
          <button onClick={favoriteHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default GameItem;
