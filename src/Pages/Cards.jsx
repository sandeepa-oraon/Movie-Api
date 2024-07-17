import { useEffect, useState } from "react";
import data from "../components/data";

let api = "https://www.omdbapi.com/?apikey=122534fb&t=";

const getRandomMovie = ()=>  {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}

// let randomMovie= getRandomMovie()
// let movieUrl= api+randomMovie
// console.log(movieUrl)

// fetch(movieUrl).then((data) => {
//     return data.json()
// }).then((data) => {
//    console.log(data);
// })






function Cards() {
    
    const [movie, setMovie] = useState(null) 

    useEffect(() => {
        const movieDetails = () => {
            let randomMovie= getRandomMovie()
            let movieUrl= api+randomMovie
            console.log(movieUrl)

            fetch(movieUrl).then((response) => {
                return response.json()
            }).then((data) => {
                setMovie(data)
                console.log(data);
            })
        }
        movieDetails()
    }, [])
      


    return(
        <>
            <div className="card">
                
                {movie ? (
                    <>
                        <img src= {movie.Poster} alt={movie.Title} />
                        <h2>{movie.Title}</h2>
                        <h5>{movie.imdbRating}</h5>
                    </>
                ): (
                    <h3>Loading....</h3>
                )
                }



            </div>
        </>
    )
}
export default Cards