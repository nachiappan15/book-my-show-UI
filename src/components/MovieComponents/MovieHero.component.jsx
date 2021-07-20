import React from 'react'
import MovieHeroInfo from './MovieHeroInfo.SubComponent';
// component

const MovieHero = () => {
    return (
        <>
            <div className="">


                <div className="hidden relative lg:block w-full object-cover object-bottom" style={{ height: "calc(30rem)" }}>{/*desktop*/}

                    <div className="absolute h-full w-full z-10"
                        style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }} />

                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                        alt="" className="w-full h-full" />


                    <div className="absolute  z-20 left-24 top-9 flex items-center">
                        <div className="  h-96 w-64  ">
                            <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                                alt=""
                                className="w-full h-full rounded-xl" />
                        </div>
                        <div className=" " >
                            <MovieHeroInfo />
                        </div>
                    </div>
                </div>
                
                {/*mobile and tablet*/}
                <div>
                    <div className="     lg:hidden bg-black relative"  >
                        <div className="relative">
                            <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                                alt="" className="" />
                                <div className="w-full absolute bottom-0 h-20 bg-black opacity-40"/>
                        </div>
                        <div className="w-full px-2">
                            <MovieHeroInfo />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default MovieHero;
