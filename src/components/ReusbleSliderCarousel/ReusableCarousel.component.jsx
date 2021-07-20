import React from 'react'
import Slider from 'react-slick';



//components
    // Posters
    import Poster from '../poster/Poster.component';
    // config
    import settings from '../../config/PosterCarousel.config';


export const ReusableCarousel = (props) => {
    return (
        <>
             <>
            <div className="mt-5">
                <div className=" lg:px-24  pb-3 px-4">
                    <h3 className={`text-2xl ${props.isDark ? "text-white":"text-gray-700"}  font-bold`}>{props.title}</h3>
                    <p className={`text-xl ${props.isDark ? "text-white":"text-gray-700"} `}>{props.subtitle}</p>
                </div>
            </div>
            <div className=" mx-auto lg:px-24 pb-12 mt-1">
                <Slider {...settings}>
                    {props.images.map(image => {
                        return (<>
                            <Poster{...image} isDark = {props.isDark} />
                        </>);
                    })}
                </Slider>
            </div>
        </>
        </>
    )
};

export default ReusableCarousel;
