
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    let[SearchWord,setSearchWord]=useState("");
    let [moviename,setmoviename]=useState([]);
    let [menu,setmenu]=useState(false);


    useEffect(()=>{

        fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{
           let movies=data.map((m)=>{return {moviename:m.moviename,id:m.id}})
           let filteredName=movies.filter((name)=>{ return name.moviename.toLowerCase().includes(SearchWord.toLowerCase())})
           setmoviename(filteredName);
        })
    },[SearchWord])
    
    return ( 
        <nav>
            <div >
                <Link to="/" id="link">Movies</Link>
            </div>
            
            <div id="search-bar">
                <input type="search" placeholder="Search for movies" value={SearchWord}
                onChange={(e)=>{setSearchWord( e.target.value ); }}
                />
                <Link to={`/Search/${SearchWord}`}>
                    <button>search</button>
                </Link>
            </div>
        
            <div id="navright">
            <div id="add-movie">
            <Link to= "/AddMovie"  >Add Movie</Link>
            </div>
            <div id="Signup">
                <Link to="/Signup">Signup</Link>
            </div>
            <div id="fav">
            <Link to="/Favorites"><i class='bx bx-heart'></i></Link>
            </div>
            </div>

            <div className="hamberger">
               <span onClick={()=>{setmenu(!menu) }}>
                { menu==false ?<i class='bx bx-menu'></i>:
                <i class='bx bx-menu-alt-right' ></i>}
               </span>
              {menu && <div id="navright">
            <div id="add-movie">
            <Link to= "/AddMovie"  >Add Movie</Link>
            </div>
            <div id="Signup">
                <Link to="/Signup">Signup</Link>
            </div>
            <div id="fav">
            <Link to="/Favorites"><i class='bx bx-heart'></i></Link>
            </div>
            </div>}
                
            </div>
            
            {SearchWord!="" && <div className="suggestion-div">
            <ul>
                {moviename.map((m)=>{
                    return (
                        <Link to={`/Moviedetails/${m.id}`}>
                            <li onClick={()=>{setSearchWord("")}}>{m.moviename}</li>
                        </Link>
                    )
                }) }
            </ul>
            </div>}

           
        </nav>
     );
}

 
export default Navbar;