import React from "react";
import { BiChevronLeft, BiChevronDown, BiSearch, BiMenu, BiShareAlt } from "react-icons/bi";



const NavSm = () => {
    return (
        <>
            <div className="flex items-center  justify-between my-1">
                <div className=" flex items-center text-white">
                <BiChevronLeft className= "h-7 w-7 mr-2"/>
                    <h3 className=" text-lg "> It All Starts Here!</h3>
                </div>
                <div className="w-8 h-8">
                    <BiShareAlt className="text-white w-full h-full" />
                </div>
            </div>
        </>
    );
};

const NavLg = () => {
    return <>
        <div className="container flex  px-40  items-center   py-1 justify-between">
            <div className="flex items-center w-1/2 gap-3 ">
                <div className="w-20 h-10">
                    <img src="https://logodix.com/logo/2011021.png"
                        alt="available"
                        className="w-full h-full" />
                </div>
                <div className="w-full   flex items-center bg-white rounded-md ">
                    <BiSearch className="h-full mx-2" />
                    <input type="search"
                        className="px-2 py-3 w-full h-9  bg-transparent border-none focus:outline-none"
                        placeholder="Search for Movies, Events, Plays, Sports and Activities "
                    />


                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-gray-300 text-sm  flex items-center hover:text-white cursor-pointer ">
                    Mumbai <BiChevronDown />
                </span>
                <button
                    className="text-white text-xs  bg-signIn py-1 px-3 rounded"
                >Sign In</button>
                <div className="w-8 h-8">
                    <BiMenu className="w-full h-full text-white cursor-pointer" />
                </div>
            </div>
        </div>

    </>
};

const ExtendedNav = () => {
    return <>
        <div className="w-full bg-exnav h-2 py-5 flex items-center justify-between">
            <div className="flex gap-4 pl-40">
                <p className="text-white text-sm cursor-pointer">Movies</p>
                <p className="text-white text-sm cursor-pointer">Stream</p>
                <p className="text-white text-sm cursor-pointer">Events</p>
                <p className="text-white text-sm cursor-pointer">Plays</p>
                <p className="text-white text-sm cursor-pointer">Sports</p>
                <p className="text-white text-sm cursor-pointer">Activities</p>
                <p className="text-white text-sm cursor-pointer">Buzz</p>
            </div>
            <div className="flex gap-4 pr-40">
                <p className="text-white text-sm cursor-pointer">ListYourShow</p>
                <p className="text-white text-sm cursor-pointer">Corporates</p>
                <p className="text-white text-sm cursor-pointer">Offers</p>
                <p className="text-white text-sm cursor-pointer">GiftCards</p>

            </div>

        </div>
    </>
}
const MovieNavbar = () => {
    return (
        <>
            <nav className="fixed z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 px-2.5 py-1.5 w-full">
                <div className="lg:hidden ">{/*Mobile screen*/}
                    <NavSm />
                </div>
                <div className="hidden lg:flex  ">{/*large screen*/}
                    <NavLg />
                </div>
            </nav>
            <nav className="hidden lg:flex">
                <ExtendedNav />

            </nav>
        </>
    );
};

export default MovieNavbar;
