import React from 'react'

const MovieHeroInfo = () => {
    return (
        <>
            <div className="flex flex-col lg:gap-8 lg:ml-6 w-full ml-2 gap-3 py-4">
                <div className="flex  items-center gap-4">
                    <div className="w-24 h-4">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premier"
                            className="w-full h-full" />
                    </div>

                    <span className="bg-exnav px-1 text-xs text-white rounded-2xl">Streaming Now</span>
                </div>

                <h1 className="text-white font-bold text-4xl hidden lg:block">Zack Snyder`s Justice League</h1>

                <div className= "flex flex-col lg:gap-8 flex-col-reverse gap-3">
                    <div className="flex flex-col gap-3">
                        <h4 className="text-gray-300 lg:text-base text-xs">English &bull; Languages: <span className="text-red-500">Audio(1),Subtitles(1)</span> </h4>
                        <h4 className="text-white lg:text-base text-xs">4h 1m &bull; Action,Adventure,Fantasy &bull; 16+ &bull; 18 Mar ,  2021</h4>
                    </div>

                    <div className="hidden justify-around w-full lg:flex">
                        <button className="bg-signIn text-white rounded-xl lg:text-lg lg:w-56 lg:h-10" >
                            Rent &#x20B9;149
                        </button>
                        <button className="bg-signIn text-white rounded-xl lg:text-lg lg:w-56 lg:h-10 ">
                            Buy &#x20B9;689
                        </button>
                        
                    </div>
                    <div className="flex justify-around w-full lg:hidden">
                        <button className="bg-signIn text-white rounded-xl h-8  md:h-10" style={{ width: "calc(40vw)" }} >
                            Rent &#x20B9;149
                        </button>
                        <button className="bg-signIn text-white rounded-xl  h-8 md:h-10" style={{ width: "calc(40vw)" }}>
                            Buy &#x20B9;689
                        </button>
                        
                    </div>
                    
                    

                </div>
                <span className="text-xs lg:hidden text-white">
                    Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.
                    </span>
            </div>


        </>
    )
}

export default MovieHeroInfo;
