import React from 'react'

function Reciente({latest}) {
    const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="cardR">
      <img
        className="cardR__img"
        src={IMG_URL + latest.poster_path}
        alt={latest.title}
      />
      <div className="cardR__info">
        <p className="cardR__vote center">{latest.vote_average}</p>
        <h3 className="cardR__title">{latest.title}</h3>
      </div>
    </div>
  )
}

export default Reciente