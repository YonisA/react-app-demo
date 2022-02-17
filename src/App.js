/*Note: rout is a compoenet used to define diff paths in 
the url and what compenets will load for said paths
*/
import { Route, Routes } from "react-router-dom";
import AllGamesPage from "./pages/AllGames";
import FavGamesPage from "./pages/FavGmes";
import Layout from "./components/layout/Layout";
function App() {
  return (
    /* 
    path will take a string which will be the path of the url after the domain. 
    will be the landing or default page that you want to start with
    */
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllGamesPage />} />
        <Route path="/favorite-games" element={<FavGamesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
