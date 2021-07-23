import React ,{useContext}from 'react'
import MovieHeroInfo from './MovieHeroInfo.SubComponent';
// component
import { MovieContext } from "../../context/Movie.context";

const MovieHero = () => {
    const {movie} = useContext(MovieContext);
    return (
        <>
            <div className="">

                {/* desktop */}
                <div className="hidden relative lg:block w-full object-cover object-bottom" style={{ height: "calc(30rem)" }}>{/*desktop*/}

                    <div className="absolute h-full w-full z-10"
                        style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }} />

                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt="" className="w-full h-full" />


                    <div className="absolute  z-20 left-24 top-9 flex items-center">
                        <div className="  h-96 w-64  ">
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt=""
                                className="w-full h-full rounded-xl" />
                        </div>
                        <div className=" " >
                            <MovieHeroInfo {...movie}/>
                        </div>
                    </div>
                </div>
                
                {/*mobile and tablet*/}
                <div>
                    <div className="     lg:hidden bg-black relative"  >
                        <div className="relative">
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt="" className="" />
                                <div className="w-full absolute bottom-0 h-20 bg-black opacity-40"/>
                        </div>
                        <div className="w-full px-2">
                            <MovieHeroInfo  {...movie}/>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default MovieHero;
