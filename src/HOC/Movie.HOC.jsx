import React from 'react'
import { Route } from 'react-router-dom';
// Layout
import MovieLayout from '../layout/Movie.layout';

export const MovieHOC = ({component:Component ,...rest}) => {
    return (
        <>
            <Route {...rest} 
            component ={(props)=>{
                return(
                <MovieLayout>
                    <Component {...props}/>
                </MovieLayout>
                );
            }}/>

            
        </>
    )
};

export default MovieHOC;
