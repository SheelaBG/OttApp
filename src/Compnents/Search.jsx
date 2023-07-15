import { useParams } from "react-router-dom";
import Movieslist from "./Movieslist";
import { useState,useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Search = () => {
   let {SearchWord}= useParams();
   let [movies, setmovies] = useState(null);
   let[error,seterror]=useState(null);
   let [loading, setLoading] = useState(true);
   
   useEffect(() => {
  
    setmovies(null);
    setLoading(true);
    
    setTimeout(()=>{
      fetch("http://localhost:4000/movies")
        .then((res) => { return res.json()})
        .then((data) => {
          let d = data.filter((m)=>{
            return (m.moviename.toLowerCase().startsWith(SearchWord.toLowerCase())) ||
                   (m.genre.toLowerCase()===SearchWord.toLowerCase()) || 
                   (m.languages.includes(SearchWord))
        })
          setmovies(d);
         setLoading(false);
        })
        .catch((err)=>{
           seterror("404 Network issue...!!! please try agian later")
           setLoading(false)

        })
        
    },2000)
      
  }, [SearchWord]);
  console.log(movies);

    return ( 
        <div  className="search-count">
        {loading  && 
        <BeatLoader 
        id="loader" 
        color="rgb(248, 185, 68)"
        size={30}
        />}
        { movies & <Movieslist movies={movies}  title={"Search result"} />}
        { loading!=true && <h1> No data for your search !!!</h1>}
        </div>
     );
}
 
export default Search;