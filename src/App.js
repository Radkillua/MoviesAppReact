import logo from './logo.svg';
import './App.css';
// import Movies from './Pages/Movies';
import axios from 'axios'
import NavBar from './components/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieDetails from './Pages/MovieDetails';
import SelectMovie from './Pages/SelectMovie';
import Login from './Pages/Login';
import RegisterForm from './Pages/SignUp';
import FavMovie from './Pages/FavMovie'
import LanguageContext from './context/language';
import Home from './Pages/Home';
import { useState } from 'react';




function App() {
  const [contextLang, setContextLang] = useState("en")
  return (
    <Router>
      <div className="App">
        <LanguageContext.Provider value={{ contextLang, setContextLang }}>
          <NavBar />
          <Route path="/Home" exact component={Home} />
          <Route exact path="/" component={SelectMovie}>   <SelectMovie /> </Route>
          <Route exact path="/Movies" component={SelectMovie}>  <SelectMovie /> </Route>
          <Route exact path="/MovieDetail/:id" component={MovieDetails} >  <MovieDetails /> </Route>
          <Route exact path="/Login" component={Login} >  <Login /> </Route>
          <Route exact path="/signUp" component={RegisterForm} >  <RegisterForm /> </Route>
          <Route exact path="/favorites" component={FavMovie} />
        </LanguageContext.Provider>

      </div>
    </Router>
  );
}

export default App;
