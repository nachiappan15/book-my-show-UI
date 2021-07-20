import React from "react";
import Slider from "react-slick";
import EntertainmentCards from "../../../data/EntertainmentPosters";




const EntertainmnetCard = (props) => {
    return <>
        <div className="px-4">
            <img src={props.src} alt="" className="h-full w-full rounded-xl" />
        </div>
    </>
};

const EntertainmnetCarousel = () => {


    const settings = {
        Infinity: false,
        autoPlay: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ]
    };


    return <>

        <Slider {...settings}>
            {
                EntertainmentCards.map(card => {
                    return (
                        <EntertainmnetCard src={card} />);
                })
            }

        </Slider>

    </>
};
export default EntertainmnetCarousel;