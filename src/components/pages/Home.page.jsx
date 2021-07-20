import React from "react";


// components
import HeroCarousel from "../carousel/heroCarousel/HeroCarousel.component"
import EntertainmnetCarousel from "../carousel/entertaminmentCarousel/EntertainmentCarousel.component";
import ReusableCarousel from "../ReusbleSliderCarousel/ReusableCarousel.component";

// temp data
import TempData from "../../data/TempData";



const HomePage = () => {
    return (
        <>
        <div>
        <HeroCarousel/>
        </div>
            <div className="container mx-auto lg:px-24 my-14">
                <div className="my-5">
                    <h1 className="ml-5 mb-2 text-xl md:text-2xl md:font-semibold">
                        The Best Of Entertainment<span className="block text-sm md:hidden text-gray-500 pr-5">Step out or stay in ,interesting experience for every one</span>
                    </h1>
                    <EntertainmnetCarousel />
                </div>
            </div>

            <div className="bg-premier  my-14">
                <div className="w-3/4 mx-auto pt-10 hidden md:block">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="" className="h-full w-full" />
                </div>
                <div className="container mx-auto ">
                    <ReusableCarousel images={TempData} title="Premieres" subtitle="Brand new releases every friday" isDark />
                </div>
            </div>

            <div className="container mx-auto  my-14">
                <ReusableCarousel images={TempData} title="Online Streaming Events" />
            </div>

            <div className="container mx-auto  my-14">
                <ReusableCarousel images={TempData} title="OutDoor Events" />
            </div>

            <div className="container mx-auto  my-14">
                <ReusableCarousel images={TempData} title="Laughter Therapy" />
            </div>


        </>
    );
};

export default HomePage;