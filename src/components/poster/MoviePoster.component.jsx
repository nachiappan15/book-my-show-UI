import React from 'react'
import { Link } from 'react-router-dom';



export const MoviePoster = (props) => {
    return (<>
   <Link to= {`/movies/${props.id}`}>
    <div className = "flex flex-col  px-2 md:px-4 mt-2">
            <div className= "h-40 md:h-80">
                <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} alt={props.title} className ="w-full h-full rounded-md"/>
            </div>
            <div className ="text-center flex flex-col gap-2 mt-3 md:text-left">
            <h3 className = {`md:text-xl font-bold ${props.isDark ? "text-white":"text-gray-700"}`}>
                {props.original_title}</h3>
            <p className = {`md:text-lg  ${props.isDark ? "text-white":"text-gray-700"}`}>{props.original_language}</p>
        </div>
        </div>
        </Link>
       
        </>
    );
}
export default MoviePoster;