import React from 'react'
import Slider from 'react-slick';

import CastPoster from '../poster/CastPoster.component';


// settings
import settings from '../../config/RoundedCarousel.config';

export const ReusableCircleCarousel = (props) => {
   

    
    return (
        <>
            <Slider {...settings}>
            {props.details.map((detail)=>{
                return(
                    <CastPoster {...detail}/>
                );
            })}
            </Slider>
        </>
    )
};

export default ReusableCircleCarousel;
