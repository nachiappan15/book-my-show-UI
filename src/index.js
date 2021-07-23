import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";


import './index.css';
import App from './App';


// context Provider
import  MovieProvider  from './context/Movie.context.jsx';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

