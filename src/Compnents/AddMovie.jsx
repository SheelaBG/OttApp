import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {

    let navigate = useNavigate()
    let moviename = useRef();//DECLARE useref 
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let genre = useRef();
    let yor = useRef();
    let rating = useRef();
    let poster = useRef();
    let trailer = useRef();
    let synopsis = useRef();


    let handleAddMovie = (e)=>{
        e.preventDefault() // we use this to prevent default reloading otherwise we cant able to take input value
                           //  bcoz after refresh or loading value in input tag will be null 

         let newMovie = {
            moviename: moviename.current.value,//access useref
            hero: hero.current.value,
            heroine: heroine.current.value,
            director: director.current.value,
            languages:[],
            genre: genre.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: yor.current.value,
            rating: rating.current.value,
            synopsis : synopsis.current.value,
        
           };

         console.log(newMovie);

         let options = document.getElementsByName("language");
        for(let i = 0; i < options.length; i++) 
        {
            if(options[i].checked==true)
            {
                newMovie.languages.push( options[i].value )
            }  
        }

        fetch("http://localhost:4000/movies" , 
        //inserting data into database we follow these steps 
        {
            method : "POST" ,//what
            headers : {"Content-Type" : "application/json"},//datatype --to tell what kind of data
            body : JSON.stringify(newMovie) //data here we convert object to  json data
        } 
        )
        .then(()=>{
            alert("New movie added to database");
            navigate("/");
          //  window.location.reload(); //it will reload the page after submission
          
        })

    }

    return ( 
        <div className="Addmovie">
           
            <form onSubmit={handleAddMovie} id="Addmovie-form">
                <h1 align="center">ADD MOVIE</h1>
                {/* assign useref */}
                <input type="text" placeholder="Movie name" ref={moviename} required/>
                <input type="text" placeholder="hero name" ref={hero} required/>
                <input type="text" placeholder="heroine name" ref={heroine} required/>
                <input type="text" placeholder="director" ref={director} required/>
                <fieldset>
                    <legend>Select languages</legend>
                <input type="checkbox" name="language" value="kannada" id="K"/><label htmlFor="k">Kannada</label>
                <input type="checkbox" name="language" value="Tamil"  id="Ta" /><label  htmlFor="Ta">Tamil</label>
                <input type="checkbox" name="language" value="Telagu"  id="Te"/><label  htmlFor="Te">Telagu</label>
                <input type="checkbox" name="language" value="Malayalam"  id="M" /><label  htmlFor="M">Malayalam</label>
                <input type="checkbox" name="language" value="Hindi"  id="H" /><label  htmlFor="H">Hindi</label>
                </fieldset>
                <input type="text" placeholder="Genre" ref={genre} required/>
                <input type="url" placeholder="poster link" ref={poster} required/>
                <input type="url" placeholder="trailer link" ref={trailer} required/>
                <input type="number" min="1950" max="2024" placeholder="relese" ref={yor} required/>
                <input type="number" step="0.1" min="1" max="10" placeholder="rating" ref={rating} required/>
                <textarea cols="70" rows="6" ref={synopsis}></textarea>

                <input type="submit" value="Add" id="button" />
            </form>
        </div>
     );
}
 
export default AddMovie;