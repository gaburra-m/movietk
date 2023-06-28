import { options } from "./options"


export const searchMovies = async ({ search }) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
        const json = await response.json()

        return json.results
    } catch (error) {
        throw new Error('Error searching movies')
    }
}