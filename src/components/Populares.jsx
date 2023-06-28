import React, { useEffect, useState } from "react";
import Popular from "./Popular";
import { options } from "../services/options";

function Populares() {
  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );

        if (response.status === 200) {
          const data = await response.json();
          setPopulars(data.results);
        } else if (response.status === 401) {
          throw new Error("Pusiste la llave mal");
        } else if (response.status === 404) {
          throw new Error("Andas perdido? Esa pelicula no existe");
        } else {
          throw new Error("Tenemos un error!");
        }
      } catch (error) {
        throw new Error(error);
      }
    }

    fetchData();
  }, []);
  return (
    <section className="container top">
      <h2 className="gradient">Películas Populares</h2>
      <div className="gridP">
        {populars
          .map((popular) => {
            return <Popular key={popular.id} popular={popular} />;
          })
          .slice(0, 10)}
      </div>
    </section>
  );
}

export default Populares;
