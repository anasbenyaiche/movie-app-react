import React from 'react';
import Rating from './rating.component';

const MovieCard = ({ movie }) => {
    return (

        <div className="card">
            <div className="card-header">

            <Rating   count={movie.star}/>
            </div>
            <img style={{height:"300px",width:"224px"}} alt={movie.title} className="card-img-top" src={movie.img} />
            <div className="card-body">
                <h5 className="card-title">
                    {movie.name}
                </h5>
                <p className="card-text">
                    {movie.year} - {movie.duration}
                </p>
              
            </div>
        </div>


    );
};
export default MovieCard