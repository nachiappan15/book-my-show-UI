import React, { useContext, useEffect, useState } from 'react'
// components
import MovieHero from '../MovieComponents/MovieHero.component';
import { GrPaypal } from "react-icons/gr"
import { FaCcVisa } from "react-icons/fa"
import ReusableCircleCarousel from '../ReusbleSliderCarousel/ReusableCircleCarousel.component';
import TempData from '../../data/TempData';
import ReusableCarousel from '../ReusbleSliderCarousel/ReusableCarousel.component';
import MoviePagePosterCarousel from '../../config/MoviePagePosterCarousel';
// movie context
import { MovieContext } from "../../context/Movie.context";
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const MoviesPage = () => {
    const { id } = useParams();
    const { movie } = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [crew, setcrew] = useState([]);
    // hook

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`movie/${id}/credits`);
            setCast(getCast.data.cast);
            setcrew(getCast.data.crew)
        };
        requestCast();
    }, [id]);

    // movies hook
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([])
    // SimilarMovies Movies
    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/similar`);
            setRecommendedMovies(getRecommendedMovies.data.results);
            console.log(getRecommendedMovies);
        }
        requestRecommendedMovies();
    }, [id]);
     // SimilarMovies Movies
     useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/recommendations`);
            setSimilarMovies(getSimilarMovies.data.results);
            console.log(getSimilarMovies);
        }
        requestSimilarMovies();
    }, [id])

    return (
        <>
            <MovieHero />
            <div className="container lg:ml-36  lg:w-3/5 px-4 w-full">
                <div className="hidden lg:block my-8 ">
                    <h1 className="text-2xl font-bold my-4 text-gray-700">
                        About the Movie
                    </h1>
                    <p className="tetx-lg my-4">{movie.overview}</p>
                </div>


                <div className="my-10">
                    <h1 className="text-lg lg:text-2xl font-bold my-4 text-gray-700 ">Applicable Offers</h1>
                    <div className="  lg:flex-row flex flex-col gap-4 ">
                        <div className="flex gap-3 bg-yellow-100 p-2 border-2 border-dashed border-yellow-500 rounded-md">
                            <FaCcVisa className="h-8 w-8" />
                            <div>
                                <h3 className="text-gray-700 text-base">VISA Stream offer</h3>
                                <p className="text-gray-600 lg:text-sm text-xs">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                            </div>
                        </div>

                        <div className="flex gap-3 bg-yellow-100 p-2 border-2 border-dashed border-yellow-500 rounded-md">
                            <GrPaypal className="h-8 w-8" />
                            <div>
                                <h3 className="text-gray-700 text-base">PayPal Stream offer</h3>
                                <p className="text-gray-600 lg:text-sm text-xs">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="my-10">
                    <h1 className="text-lg lg:text-2xl font-bold my-4 text-gray-700 ">Cast</h1>
                    <ReusableCircleCarousel details={cast} />
                </div>
                <div className="my-10">
                    <h1 className="text-lg lg:text-2xl font-bold my-4 text-gray-700 ">Crew</h1>
                    <ReusableCircleCarousel details={crew} />
                </div>


                <div className="my-10">
                    <ReusableCarousel images={similarMovies} title="You might also like" config={MoviePagePosterCarousel} />
                </div>

                <div className="my-10">
                    <ReusableCarousel images={recommendedMovies} title="BMX EXCLUSIVE" config={MoviePagePosterCarousel} />
                </div>





            </div>
        </>
    );
};

export default MoviesPage;
