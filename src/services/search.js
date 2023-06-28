const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTMwMTczNjA0YmU2YTY2MjhkMDZlYzM3NjI4NmM3MiIsInN1YiI6IjYzM2I1YzkyMTU3OTRhMDA3ZTcxNTNhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ODYEMMiJUn-nAe55GcHgNYbmuthAKjNcE62ARGnkWKc'
    }
};

export const searchMovies = async ({ search }) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=es-MX&page=1`, options)
        const json = await response.json()

        return json.results
    } catch (error) {
        throw new Error('Error searching movies')
    }
}