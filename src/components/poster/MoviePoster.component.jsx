import React from 'react'

export const MoviePoster = (props) => {
    return (<>
        <div className = "flex flex-col  px-2 md:px-4">
            <div className= "h-40 md:h-80">
                <img src={props.src} alt={props.title} className ="w-full h-full rounded-md"/>
            </div>
            <div className ="text-center flex flex-col gap-2 mt-3 md:text-left">
            <h3 className = {`md:text-xl font-bold ${props.isDark ? "text-white":"text-gray-700"}`}>
                {props.title}</h3>
            <p className = {`md:text-lg  ${props.isDark ? "text-white":"text-gray-700"}`}>{props.subtitle}</p>
        </div>
        </div>
        </>
    );
}
export default MoviePoster;