import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movieslist = ({ movies,title }) => {

  let[favId , setFavId] = useState(null);
  let[altered,setaltered]=useState(0);

    useEffect(()=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        setFavId(fav.map((m)=>{return m.id}))
      
    } , [altered]) //its used to render component when we click on heartbutton . we cannot add favid here bcoz it renders again aagain
    //to avoid that we take separte useState we set value for every click of button that time its should render 
    
    // console.log(favId);

  let Addtofav = (movie)=>{
    let fav = JSON.parse(localStorage.getItem("fav"));
    fav.push(movie);
    fav = JSON.stringify(fav);
    localStorage.setItem("fav" , fav);
    setaltered(altered+1);
  }

  let remove=(id)=>{
    let fav = JSON.parse(localStorage.getItem("fav"));
    fav=fav.filter((m)=>{return m.id!=id})
    fav = JSON.stringify(fav);
    localStorage.setItem("fav" , fav);
    setaltered(altered+1);
  }

  return (
    <div className="movie-list">
      <h1 id="title">{title}</h1>
      {movies && (
        <div className="movies">
          {movies.map((movie) => {
            return (
               <div className="movie">
               {favId && favId.includes(movie.id) ? 

              <button id="fillheart" onClick={()=>{remove(movie.id)}}><i class='bx bxs-heart'></i></button>:

              <button  id="emptyheart" onClick={()=>{ Addtofav(movie) }}><i class='bx bx-heart' ></i></button> }

               <Link to={`/Moviedetails/${movie.id}`} >

                <img src={movie.poster} />
                <h2>{movie.moviename}</h2>
                <h5>{movie.genre}</h5>

               </Link>
              </div> 
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Movieslist;
