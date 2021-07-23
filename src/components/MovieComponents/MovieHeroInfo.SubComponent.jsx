import React,{useState} from 'react'

// components
import Payment from '../Modals/Payment.modal.component';


const MovieHeroInfo = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [price, setPrice] = useState(0)
    const genres = props.genres && props.genres.map(({name})=>name).join(", ");

    const rentMovies =() =>{
        setIsOpen(true);
        setPrice(149)
    }
    const buyMovies =() =>{
        setIsOpen(true);
        setPrice(599)
    }
    
    return (
        <>
        <Payment isOpen={isOpen} setIsOpen = {setIsOpen} price = {price}/>
            <div className="flex flex-col lg:gap-8 lg:ml-6 w-full ml-2 gap-3 py-4">
                <div className="flex  items-center gap-4">
                    <div className="w-24 h-4">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premier"
                            className="w-full h-full" />
                    </div>

                    <span className="bg-exnav px-1 text-xs text-white rounded-2xl">Streaming Now</span>
                </div>

                <h1 className="text-white font-bold text-4xl hidden lg:block">{props.original_title}</h1>

                <div className= "flex lg:flex-col lg:gap-8 flex-col-reverse gap-3">
                    <div className="flex flex-col gap-3">
                        <h4 className="text-gray-300 lg:text-base text-xs">{props.original_language} &bull; Languages: <span className="text-red-500">Audio(1),Subtitles(1)</span> </h4>
                        <h4 className="text-white lg:text-base text-xs">{((props.runtime)/60).toFixed(2)} hrs &bull; {genres} &bull; 16+ &bull; {props.release_date}</h4>
                    </div>

                    <div className="hidden justify-around w-full lg:flex">
                        <button onClick= {rentMovies} className="bg-signIn text-white rounded-xl lg:text-lg lg:w-56 lg:h-12" >
                            Rent &#x20B9;149
                        </button>
                        <button  onClick = {buyMovies} className="bg-signIn text-white rounded-xl lg:text-lg lg:w-56 lg:h-12 ">
                            Buy &#x20B9;689
                        </button>
                        
                    </div>
                    <div className="flex justify-around w-full lg:hidden">
                        <button onClick= {rentMovies} className="bg-signIn text-white rounded-xl h-8  md:h-10" style={{ width: "calc(40vw)" }} >
                            Rent &#x20B9;149
                        </button>
                        <button onClick = {buyMovies} className="bg-signIn text-white rounded-xl  h-8 md:h-10" style={{ width: "calc(40vw)" }}>
                            Buy &#x20B9;689
                        </button>
                        
                    </div>
                    
                    

                </div>
                <span className="text-xs lg:hidden text-white">
                   {props.overview}
                    </span>
            </div>


        </>
    )
}

export default MovieHeroInfo;
