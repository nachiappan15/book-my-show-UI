import React from 'react'

const CastPoster = (props) => {
    return (
        <>
            <div className = "flex items-center flex-col">
                <div className = "md:w-32 md:h-32 h-16 w-16">
                    <img src={props.image} 
                    alt="crew men"
                    className="w-full h-full rounded-full" />
                </div>
                <h1 className = "text-md    font-medium  text-gray-900">{props.name}</h1>
                <h5 className = "text-sm  text-gray-500">as {props.role}</h5>
            </div>
        </>
    )
}

export default CastPoster;
