import React from 'react'

const CastPoster = (props) => {
    return (
        <>
            <div className = "flex items-center flex-col">
                <div className = "md:w-32 md:h-32 h-16 w-16">
                    <img src={`https://image.tmdb.org/t/p/original/${props.profile_path}`} 
                    alt="crew men"
                    className="w-full h-full rounded-full" />
                </div>
                <h1 className = "text-md    font-medium  text-gray-900">{props.original_name}</h1>
                <h5 className = "text-sm  text-gray-500">as {props.character || props.job}</h5>
            </div>
        </>
    )
}

export default CastPoster;
