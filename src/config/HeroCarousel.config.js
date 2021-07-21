

import { NextArrow ,PrevArrow } from "../components/carousel/heroCarousel/Arrow.component";
const HeroCarouselSettings ={
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

export default HeroCarouselSettings;
