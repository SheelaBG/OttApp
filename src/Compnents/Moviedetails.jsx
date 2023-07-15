import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Relevant from "./Relevant";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const Moviedetails = () => {
  let { id } = useParams(); //it will accept<b> route paramater values thats id value..
  let navigate = useNavigate();
  let [movie, setmovie] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setmovie(null)
    setLoading(true)
    setTimeout(() => {
      fetch("http://localhost:4000/movies/"+id)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
           setLoading(false);
          setmovie(data);
        });
    }, 1000);
  }, [id]);

  let deleteMovie = () => {
    fetch("http://localhost:4000/movies/" + id, { method: "DELETE" })
      .then(() => { navigate("/") });
    }
 
  return (
    <div>
       {loading && 
        <BeatLoader 
        id="loader" 
        color="rgb(248, 185, 68)"
        size={30}
        />}
    
      <div id="moviedetails">
      {movie && (
        <div id="poster" >
          <div>
            <img src={movie.poster} alt="img" />
          </div>
          <div>
            <h1>{movie.moviename}</h1>
            <br></br>
            <p><b>Moviename : </b>{movie.moviename}</p>
            <p><b>Hero : </b>{movie.hero}</p>
            <p><b>Heroine : </b>{movie.heroine}</p>
            <p><b>Genre : </b>{movie.genre}</p>
            <p><b>Language : </b>{movie.languages}</p>
            <p><b>Release : </b>{movie.release}</p>
            <p><b>Rating : </b>{movie.rating}</p>
            <b>Trailer : </b><a href={movie.trailer} target="blank">{movie.trailer}</a>
            <p><b>Synopsis : </b>{movie.synopsis}</p>
          </div>
          <div>
            <iframe id="iframe" src={movie.trailer} alt="img not found"></iframe>
          </div>

        </div>
      )}
      {movie && <div id="delete"><button onClick={deleteMovie}>Delete</button></div>}
      {movie && <Link id="Update" to={`/Edit/${movie.id}`}><button >Update</button></Link>}

      {movie && <Relevant genre={movie.genre} />}

    </div>
    </div>
  );
};

export default Moviedetails;
