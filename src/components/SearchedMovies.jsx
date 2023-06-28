function ListOfMovies({ movies }) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  const NO_POSTER = "/movietk/no_poster.jpg";
  return (
    <section className="container top">
      <h2 className="gradient">Resultado de la Busqueda</h2>
      <div className="gridR">
        {movies.map((movie) => {
          return (
            <li className="cardR" key={movie.id}>
              <img
                className="cardR__img"
                src={
                  movie.poster_path ? IMG_URL + movie.poster_path : NO_POSTER
                }
                alt={movie.title}
              />
              <div className="cardR__info">
                <p className="cardR__vote center">
                  {movie.vote_average.toFixed(1)}
                </p>
                <h3 className="cardR__title">{movie.title}</h3>
              </div>
            </li>
          );
        })}
      </div>
    </section>
  );
}

function NoMoviesResult() {
  return <p>No se encontraron resultados</p>;
}

export function SearchedMovies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResult />;
}
