import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteGame) => {},
  removeFavorite: (gameId) => {},
  itemIsFavorite: (gameId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteGame) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteGame);
    });
  }

  function removeFavoriteHandler(gameId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((game) => game.id !== gameId);
    });
  }

  function itemIsFavoriteHandler(gameId) {
    return userFavorites.some((game) => game.id === gameId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
