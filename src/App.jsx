import { useCallback } from "react";
import { Header, Populares, Recientes, Footer } from "./components";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";
import { SearchedMovies } from "./components/SearchedMovies";
import "./App.css";

function App() {
  const { search, updateSearch, error, isSearch, setIsSearch } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ search });
  };

  const handleChange = (e) => {
    setIsSearch(true);
    const newSearch = e.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch); // asi se genera la busqueda mientras escribimos
  };
  return (
    <>
      <Header
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <main>
        {isSearch ? (
          loading ? (
            <p>Cargando...</p>
          ) : (
            <SearchedMovies movies={movies} />
          )
        ) : (
          <>
            <Populares />
            <Recientes />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
