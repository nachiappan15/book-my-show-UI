import React from "react";
import Slider from "react-slick";


// config
import HeroCarouselSettings from "../../../config/HeroCarousel.config";
import images from "../../../data/TempHeroCarouselData";



const HeroCarousel = () => {
  
            


   
        
    return <>

    <Slider {...HeroCarouselSettings}>
    {images.map( (image) => {
        return(
        <div className = "h-60 w-full lg:h-96 lg:py-2">
            <img src={image} alt="" className= "focus:outline-none w-full h-full lg:px-1 lg:rounded-md"/>
        </div>);
    })}


    </Slider>
    </>;
};

export default HeroCarousel;

