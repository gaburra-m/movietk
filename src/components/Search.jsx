import React from "react";

import search from "../search.svg";

function Search() {
  return (
    <div className="search">
      <img className="search__icon" src={search} alt="icono de buscar" />
      <input className="search__inp" type="text" placeholder="Buscar..." />
    </div>
  );
}

export default Search;
