import React from 'react'
import MovieCard from './movie-card.component'

const MovieContainer = ({ movies }) => {

    return (<div className="cards">
        {movies.map(movie => <MovieCard movie={movie} />)}
    </div>)
}


export default MovieContainer
