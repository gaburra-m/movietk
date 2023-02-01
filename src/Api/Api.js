const cargarPeliculas = async () => {
    try {
        const resp = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7130173604be6a6628d06ec376286c72&language=es-MX')
        console.log(resp)
        if (resp.status === 200) {
            const data = await resp.json()
            data.results.forEach()
        } else if (resp.status === 401) {
            console.log('Pusiste la llave mal');
        } else if (resp.status === 404) {
            console.log('Andas perdido? Esa pelicula no existe')
        }else {
            console.log('La cague y no se donde!');
        }
    } catch (error) {
        console.log(error);
    }
}
// cargarPeliculas()
export default cargarPeliculas 
