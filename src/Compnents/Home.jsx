import { useEffect ,useState } from "react";
import Movieslist from "./Movieslist";
import BeatLoader from "react-spinners/BeatLoader";

const Home = () => {

    let [movies , setMovies] = useState(null);
    let [error , setError] = useState(null);

    let [loading, setLoading] = useState(true);


    useEffect(() => {
        if( localStorage.getItem("fav")==null )
        {
            localStorage.setItem("fav" , "[]")
        }

        setTimeout(() => {
            fetch("http://localhost:4000/movies")
                .then((res) => { return res.json() })
                .then((data) => {
                    console.log(data);
                    setMovies(data);
                    setLoading(false);
                    })
                .catch((err)=>{
                    setError("404 Network issue !!! please try again later");
                    setLoading(false);
                })
            } , 1000)
        } , [])

    return ( 
        <div className="home"> 
       
        {loading && 
        <BeatLoader 
        id="loader" 
        color="rgb(248, 185, 68)"
        size={30}
        />}
    

        {error && <h1> {error} </h1>}

        {movies && <Movieslist movies={movies} title="All Movies"/> }
        {movies && <Movieslist movies={movies.filter((m)=>{return m.rating >=8.5 })} title="TopRated Movies"/> }
        {movies && <Movieslist movies={movies.filter((m)=>{return m.moviename.includes("k")})} title="search for k" />}
        {movies && <Movieslist movies={movies.filter((m)=>{return m.genre.includes("action")})} title="Action Drama"/> }
        </div>
     );
}
export default Home;