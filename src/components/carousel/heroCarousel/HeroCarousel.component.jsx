import React from "react";
import Slider from "react-slick";

// components

import { NextArrow ,PrevArrow } from "./Arrow.component";

const HeroCarousel = () => {
    const settings = {
        arrows : true,
        
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: "25%",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        nextArrow :<NextArrow/>,
        prevArrow :<PrevArrow/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows : false,
                    slidesToShow: 1,
                    slidesToScroll:1,
                    centerMode: false,
                    centerPadding: "0%",
                    infinite: true,
                }
            }
            // {
            //     breakpoint: 768,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll:1,
            //         centerMode: false,
            //         centerPadding: "0%",
            //         infinite: true,
            //     }
            // },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll:1,
            //         centerMode: true,
            //         centerPadding: "0",
            //         infinite: true,
            //     }
            // }
        ]
    }

    const images =
        ["https://in.bmscdn.com/promotions/cms/creatives/1625135512787_bas_1280x500.jpg",
            "https://in.bmscdn.com/promotions/cms/creatives/1626504090321_misbehaviour_1280x500_17jul_ios.jpg",
            "https://in.bmscdn.com/promotions/cms/creatives/1625077257492_dearishqafestivalofkisseykahaniyaanpoetry_webshowcase_1280x500.jpg",
            "https://in.bmscdn.com/promotions/cms/creatives/1626372139417_bsm_1280x500_chickflick_2.jpg",
            "https://in.bmscdn.com/promotions/cms/creatives/1626086157424_diyartcraftliveworkshopforsunfeastyippee_webshowcase_1280x500_revised.jpg"
        ];
        
    return <>

    <Slider {...settings}>
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

