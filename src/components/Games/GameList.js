import GameItem from "./GameItem";
import gameListStyles from "./GameList.module.css";
//holds the list of all games fetched from the api
function GameList(property) {
  return (
    <ul className={gameListStyles.list}>
      {property.games.map((game) => (
        <GameItem
          key={game.id}
          id={game.id}
          background_image={game.image}
          title={game.title}
          metric={game.metric}
          date={game.date}
        />
      ))}
    </ul>
  );
}
export default GameList;
