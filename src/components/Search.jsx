import React from "react";

import searchIcon from "../search.svg";

function Search({ search, handleChange, handleSubmit }) {
  return (
    <form className="search" onSubmit={handleSubmit}>
      <img className="search__icon" src={searchIcon} alt="icono de buscar" />
      <input
        className="search__inp"
        value={search}
        onChange={handleChange}
        name="query"
        type="text"
        placeholder="Avenger, Star Wars, The Matrix ..."
      />
    </form>
  );
}

export default Search;
