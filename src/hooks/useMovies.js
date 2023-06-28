import { useState, useRef, useCallback } from "react";
import { searchMovies } from "../services/search";

export function useMovies({ search }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    const getMovies = useCallback(async ({ search }) => {
        if (search === previousSearch.current) return

        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }, [])

    return { movies, getMovies, loading }
}