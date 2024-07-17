import data from "../components/data";

let api = "https://www.omdbapi.com/?apikey=122534fb&t=";

const getRandomMovie = ()=>  {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}

let movie= getRandomMovie()
let movieUrl= api+movie
console.log(movieUrl)

fetch(movieUrl).then((data) => {
    return data.json()
}).then((data) => {
   console.log(data);
})






function Cards() {
    
    function movieHandler() {
        fetch(api).then((data) => {
             return data.json()
        }).then((data) => {
            console.log(data);
        })
    }

    
      


    return(
        <>
            <div className="card">
                <button placeholder="click"  onClick={movieHandler}></button>
            </div>
        </>
    )
}
export default Cards