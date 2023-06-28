function Popular({ popular }) {
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
      </div>
    </div>
  );
}

export default Popular;
