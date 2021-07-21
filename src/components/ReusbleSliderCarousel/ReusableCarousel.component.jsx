import React from 'react'
import Slider from 'react-slick';



//components
    // Posters
    import MoviePoster from '../poster/MoviePoster.component';
    // config
    import settings from '../../config/PosterCarousel.config';


export const ReusableCarousel = (props) => {
    const sliderConfig = props.config ? props.config : settings

    return (
        <>
             <>
            
                <div className="mt-5  pb-3 ">
                    <h3 className={`lg:text-2xl text-xl ${props.isDark ? "text-white":"text-gray-700"}  font-bold`}>{props.title}</h3>
                    <p className={`lg:text-xl text-base ${props.isDark ? "text-white":"text-gray-700"} `}>{props.subtitle}</p>
                </div>
            
            <div className=" mx-auto   mt-1">
                <Slider {...sliderConfig}>
                    {props.images.map(image => {
                        return (<>
                            <MoviePoster{...image} isDark = {props.isDark} />
                        </>);
                    })}
                </Slider>
            </div>
        </>
        </>
    )
};

export default ReusableCarousel;
