import { useState, useEffect, useRef } from "react";
export function useSearch() {
    const [search, updateSearch] = useState("");

    const [isSearch, setIsSearch] = useState(false);
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true) // para verificar si no se a usado el input y no aparezca la validacion de input vacio.

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === ""
            return
        }
        if (search === "") {
            setError("");
            setIsSearch(false)
            return;
        }

        if (search.match(/^\d+$/)) {
            setError("No se puede buscar una pelicula con un numero");
            return;
        }

        if (search.length < 3) {
            setError("La busqueda debe tener al memos 3 caracteres");
            return;
        }

        setError(null);
    }, [search]);

    return { search, updateSearch, error, isSearch, setIsSearch };
}