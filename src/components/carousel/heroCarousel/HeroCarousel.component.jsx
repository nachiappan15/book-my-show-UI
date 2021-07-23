
// https://image.tmdb.org/t/p/original
//  base url for images


import React, { useState, useEffect } from "react";
import Slider from "react-slick";


// config
import HeroCarouselSettings from "../../../config/HeroCarousel.config";

// axios
import axios from "axios";

const HeroCarousel = () => {
    // hooks
    const [images, setImages] = useState([]);

    useEffect(() => {
        const nowPlayingMovies = async()=>{
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results)
        }
        
        nowPlayingMovies();
    }, [])



    return <>

        <Slider {...HeroCarouselSettings}>
            {images.map((image) => {
                return (
                    <>
                    <div  className="h-60 w-full lg:h-96 lg:py-2">
                        <img  src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`} alt="" className="focus:outline-none w-full h-full lg:px-1 lg:rounded-md" />
                    </div>
                    </>);
            })}


        </Slider>
    </>;
};

export default HeroCarousel;

