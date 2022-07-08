import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux/es/exports";
import '../App.css';
import { useContext } from "react";
import LanguageContext from "../context/language";



function NavBar(){



const lang=useSelector( (state)=>state.lang.currentLanguage)
const {contextLang}=useContext(LanguageContext)
  
  


        return(
            <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MoviesApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favorites">Favourites</Link>
        </li>               
      </ul>
      
    
      <div className="nav-link">
        context Lang={contextLang}

      </div>
      <Link to={`/Login`} className="btn btn-light m-1 " > Login</Link>
      <Link to={`/signUp`} className="btn btn-light " > Sign Up</Link>



      
    </div>
  </div>
</nav>

</>



        
        )
    }
    
    
    export default NavBar;
    
    