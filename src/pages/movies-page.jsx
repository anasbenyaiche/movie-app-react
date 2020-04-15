import React from 'react'
import movies from '../data/movies-data'
import MovieContainer from '../components/movie-card-container.component'
import NameForm from '../components/nameForm'
import RatingFilter from '../components/rating-fitler'
import Modal from '../components/Modal'
export default class MoviesPage extends React.Component {

    state = {
        movies,
        minRatingFilter: 0,
        movieName: ""
    }
    handleAdd = (name, url, star) => {
        this.setState({
          movies: [...this.state.movies, { name: name, img: url, star: star }]
        });
      };

    handleChangeRating = (currentRate) => {
        this.setState({
            minRatingFilter: currentRate
          });
    }
    handleChangeName = (input) => {
        this.setState({
            movieName: input
        })
    }
    render() {

        const filterMovies = this.state.movies.filter(movie => 
            movie.star >= this.state.minRatingFilter 
            && movie.name.toLocaleLowerCase().includes(this.state.movieName.toLocaleLowerCase()));
        return (
            <div>
                <div className="filter-container">
                <NameForm search={this.handleChangeName} />
                    <RatingFilter change={this.handleChangeRating} 
                        count={this.state.minRatingFilter}
                    />
                    
                </div>
                <Modal add={this.handleAdd} />
                <MovieContainer movies={filterMovies} />
            </div>

        )


    }
}