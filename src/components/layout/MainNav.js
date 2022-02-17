import { Link } from "react-router-dom";

import mainNavStyles from "./MainNavStyles.module.css";
function MainNav() {
  return (
    <header className={mainNavStyles.header}>
      <div className={mainNavStyles.title}>Game Tracker</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Games</Link>
          </li>
          <li>
            <Link to="/favorite-games">Favorite Games</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNav;
