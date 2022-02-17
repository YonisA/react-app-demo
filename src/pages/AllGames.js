import GameList from "../components/Games/GameList";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import searchBarStyle from "../components/search/Search.module.css";
import Pagination from "../components/Pagination";

function AllGamesPage() {
  // using axios to make requests to the api im pulling a list of 40 games
  // by putting my api key in a env file and ignoring it when uploading to github via gitignore
  // it will safely hide my api key
  const [games, setGames] = useState();
  const [searchGame, setSearchGame] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(10);

  useEffect(() => {
    const loadGames = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=1&page_size=40`
      );
      setGames(response.data);
    };

    loadGames();
  }, []);

  //PAGINATION LOGIC\\

  //grab the last item of the page by taking the current page you are on and multiply by the number of posts per page
  const indexOfLastGame = currentPage * gamesPerPage;
  //to get the first item, grab the last item which we have done on the line above and subtract it by the number of posts per page
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  //finally,create a const so we can swap between pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //if there are data returned from the api i create an empty array of objects and pupulate
  //it with the data being returned. using the .map to access each and every
  //data that i need and populating said data in my array.
  if (games) {
    const currentGames = games.results.slice(indexOfFirstGame, indexOfLastGame);
    console.log(currentGames);
    return (
      <section>
        <Pagination
          gamesPerPage={gamesPerPage}
          //grabs all the games retrived from the api
          totalGames={games.results.length}
          //set up the paginate to our const
          paginate={paginate}
        />
        <div className={searchBarStyle.container}>
          <input
            className={searchBarStyle.searchBar}
            type="text"
            placeholder="Search a Game on Page"
            onChange={(e) => setSearchGame(e.target.value)}
          ></input>
        </div>

        {
          //Note: ITS FINALLY WORKING
          currentGames
            .filter((value) => {
              if (searchGame === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchGame.toLowerCase())
              ) {
                return value;
              }
            })
            .map((element) => {
              const data = [
                {
                  id: element.id,
                  title: element.name,
                  image: element.background_image,
                  metric: element.rating,
                  date: element.released,
                },
              ];

              //display the data
              return <GameList key={element.id} games={data} />;
            })
        }
      </section>
    );
  }
  return (
    <section>
      <h1>WAIT...</h1>
    </section>
  );
}
export default AllGamesPage;
