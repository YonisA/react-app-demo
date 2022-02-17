import React from "react";
import paginationStyles from "./Pagination.module.css";
const Pagination = ({ gamesPerPage, totalGames, paginate }) => {
  const pageNumbers = [];
  //gives us the number of pages for our paginations
  //get all the games and devide it by the games per page which is what we set in all games.js
  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  //use the .map function to get the indevidual pages
  //make it so that the pages are clickable so we can change between them
  return (
    <div>
      <ul className={paginationStyles.ul}>
        {pageNumbers.map((number) => (
          <li className={paginationStyles.li} key={number}>
            <a onClick={() => paginate(number)} href="#!">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
