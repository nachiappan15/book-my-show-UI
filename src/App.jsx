import React from 'react';
import { BrowserRouter} from 'react-router-dom';


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// components
import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';
import HomePage from './components/pages/Home.page';
import MoviesPage from './components/pages/Movies.page';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DefaultHOC path = "/" exact component ={HomePage}  />
        <MovieHOC path = "/movies/:id" exact component ={MoviesPage}  />
      </BrowserRouter>
    </div>

  );
}

export default App;