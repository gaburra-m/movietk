import React from "react";
const generos = [
  {
    id: 28,
    name: "Acción",
  },
  {
    id: 12,
    name: "Aventura",
  },
  {
    id: 16,
    name: "Animación",
  },
  {
    id: 35,
    name: "Comedia",
  },
  {
    id: 80,
    name: "Crimen",
  },
  {
    id: 99,
    name: "Documental",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Familia",
  },
  {
    id: 14,
    name: "Fantasía",
  },
  {
    id: 36,
    name: "Historia",
  },
  {
    id: 27,
    name: "Terror",
  },
  {
    id: 10402,
    name: "Música",
  },
  {
    id: 9648,
    name: "Misterio",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Ciencia ficción",
  },
  {
    id: 10770,
    name: "Película de TV",
  },
  {
    id: 53,
    name: "Suspense",
  },
  {
    id: 10752,
    name: "Bélica",
  },
  {
    id: 37,
    name: "Western",
  },
];
function Popular({ popular }, index) {
  

  const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="card">
      <img
        className="card__img"
        src={IMG_URL + popular.poster_path}
        alt={popular.title}
      />
      <div className="card__info">
        <p className="card__vote center">{popular.vote_average}</p>
        <h3 className="card__title">{popular.title}</h3>
        <div>
          {generos.filter((genero) => genero.id === popular.genre_ids).map((filteredGenero) => (            
              <p>{filteredGenero.name}</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;
