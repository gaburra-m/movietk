import React, {useState} from 'react'
import Reciente from './Reciente'

function Recientes() {

    const [latest, setLatest] = useState([])


    async function fetchDatas() {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=7130173604be6a6628d06ec376286c72&language=es-MX')
            if (response.status === 200) {
                const data = await response.json();
                setLatest(data.results)
            } else if (response.status === 401) {
                console.log('Pusiste la llave mal');
            } else if (response.status === 404) {
                console.log('Andas perdido? Esa pelicula no existe')
            }else {
                console.log('La cague y no se donde!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    fetchDatas()
    
    
return (
    <section className="container top">
    <h2 className="gradient">Películas Recientes</h2>
    <div className="gridR">
    {latest.map(latest => {
            return(
                <Reciente key={latest.id} latest={latest}/>
            )
        })}
    </div>
    </section>
)
}

export default Recientes