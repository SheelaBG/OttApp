import AddMovie from './Compnents/AddMovie';
import Home from './Compnents/Home';
import Moviedetails from './Compnents/Moviedetails';
import Navbar from './Compnents/Navbar';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Signup from './Compnents/Signup';
import Favorites from './Compnents/Favorites';
import Edit from './Compnents/Edit';
import Search from './Compnents/Search';
// import './App.css';

function App() {

  // console.log("component Rendering");
  return (
    
   <BrowserRouter>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/AddMovie' element={<AddMovie/>}/>
    <Route path='/Moviedetails/:id' element={<Moviedetails/>}/> 
    {/* in id data will be stored example which div we clicked  */}
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Search/:SearchWord' element={<Search/>}/>
    <Route path='/Favorites' element={<Favorites/>}/>
    <Route path='/Edit/:id' element={<Edit/>}/>

   </Routes>

   </BrowserRouter>
  );
}

export default App;
