import React, { useState, useEffect } from "react";


// components
import HeroCarousel from "../carousel/heroCarousel/HeroCarousel.component"
import EntertainmnetCarousel from "../carousel/entertaminmentCarousel/EntertainmentCarousel.component";
import ReusableCarousel from "../ReusbleSliderCarousel/ReusableCarousel.component";

// temp data
import TempData from "../../data/TempData";
import axios from "axios";



const HomePage = () => {
    // hooks
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upComingMovies, setUpComingMovies] = useState([]);

    // popular Movies
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
            console.log(getPopularMovies);
        }
        requestPopularMovies();
    }, [])

      // topRatedMovies Movies
      useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
            console.log(getTopRatedMovies);
        }
        requestTopRatedMovies();
    }, [])


      // upComingMovies Movies
      useEffect(() => {
        const requestUpComingMovies = async () => {
            const getUpComingMovies = await axios.get("/movie/upcoming");
            setUpComingMovies(getUpComingMovies.data.results);
            console.log(getUpComingMovies);
        }
        requestUpComingMovies();
    }, [])
    




    return (
        <>
            <div>
                <HeroCarousel />
            </div>
            <div className="container mx-auto lg:px-24 my-14">
                <div className="my-5">
                    <h1 className="ml-5 mb-2 text-xl md:text-2xl md:font-semibold">
                        The Best Of Entertainment<span className="block text-sm md:hidden text-gray-500 pr-5">Step out or stay in ,interesting experience for every one</span>
                    </h1>
                    <EntertainmnetCarousel />
                </div>
            </div>

            <div className="bg-premier  lg:my-14 my-6">
                <div className="w-3/4 mx-auto pt-10 hidden md:block">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="" className="h-full w-full" />
                </div>
                <div className="container mx-auto mt-5 lg:px-24 px-4 lg:pb-12">
                    <ReusableCarousel images={popularMovies} title="Premieres" subtitle="Brand new releases every friday" isDark />
                </div>
            </div>

            <div className="container mx-auto  lg:my-14 my-6 lg:px-24 px-4 lg:pb-12">
                <ReusableCarousel images={topRatedMovies} title="Online Streaming Events" />
            </div>

            <div className="container mx-auto  lg:my-14 my-6 lg:px-24 px-4 lg:pb-12">
                <ReusableCarousel images={upComingMovies} title="OutDoor Events" />
            </div>

            <div className="container mx-auto  lg:my-14 my-6 lg:px-24 px-4 lg:pb-12">
                <ReusableCarousel images={upComingMovies} title="Laughter Therapy" />
            </div>


        </>
    );
};

export default HomePage;