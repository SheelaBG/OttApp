import React, { useEffect, useState } from "react";
import Movieslist from './Movieslist';

const Relevant = ({genre}) => {

    let [movies,setmovies]=useState(null);

    useEffect(()=>{

        fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{setmovies(data)})
    },[])
    return ( 
        <div className="Relevant-Movies">
            {movies && <Movieslist 
            movies={movies.filter((m)=>{return m.genre.includes(genre)})}
            title="Relevant Movies"/>}
        </div>
       
     );
}
 
export default Relevant;