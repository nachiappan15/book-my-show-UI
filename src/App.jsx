import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import axios from 'axios';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// components
import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';
import HomePage from './components/pages/Home.page';
import MoviesPage from './components/pages/Movies.page';
import Playspage from './components/pages/Plays.page';


// axios settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DefaultHOC path = "/" exact component ={HomePage}  />
        <MovieHOC path = "/movies/:id" exact component ={MoviesPage}  />
        <DefaultHOC path = "/plays" exact component ={Playspage}  />
      </BrowserRouter>
    </div>

  );
}

export default App;