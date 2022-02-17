import { useContext } from "react";
import GameList from "../components/Games/GameList";
import FavoritesContext from "../Data/favorites-conext";
function FavGamesPage() {
  const favContext = useContext(FavoritesContext);
  let msg;
  if (favContext.totalFavorites === 0) {
    msg = <p>There are no Favorites</p>;
  } else {
    msg = <GameList games={favContext.favorites} />;
  }
  return (
    <section>
      <h1> Favorite Games</h1>
      {msg}
    </section>
  );
}
export default FavGamesPage;
