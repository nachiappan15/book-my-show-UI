import React from 'react'
// components
// hero Carousel
import HeroCarousel from "../carousel/heroCarousel/HeroCarousel.component"

//Plays Posters
import PlaysPosters from '../PlaysComponents/PlaysPosters.components'
// filters
import Filters from '../PlaysComponents/Filters.components'
import FilterData from '../../data/FilterData'



const Playspage = () => {
    return (
        <>
            <HeroCarousel />
            <div className="container mx-auto px-4 lg:px-24">
                <div className="w-full my-4 lg:flex lg:flex-row-reverse gap-5" >
                    <div className=" lg:w-3/4 w-full">
                        <h2 className="text-2xl font-bold">Plays in Bengaluru</h2>
                        <PlaysPosters />
                    </div>
                    <div className="lg:w-1/4 hidden lg:block">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            {
                                FilterData.map(Detail=> {
                                    return(
                                        <Filters  title={Detail.title} tags = {Detail.tags}/>
                                    );
                                    
                                })
                            }
                        </div>
                        

                    </div>
                </div>
            </div>

        </>
    )
}

export default Playspage;
