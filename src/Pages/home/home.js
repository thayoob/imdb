/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import MovieList from '../../Components/movieList/movieList'
import './home.css'
import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

function home() {
    const [popularmovies, setPopularMovies] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=5a8fc938d7969197d9baa55e81cf216b&language=en-US')
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])
    return (
        <div>
            <div className='poster'>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularmovies.map(movie => (
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={`./movie/${movie.id}`}>
                                <div className='posterImage'>
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt='' />
                                </div>
                                <div className='posterImage__overlay'>
                                    <div className='posterImage__title'>{movie ? movie.original_title :''}</div>
                                    <div className='posterImage__runtime'>
                                        {movie ? movie.release_date : ''}
                                        <span className='posterImage__rating'>
                                            {movie ? movie.vote_average : ''}
                                            <i className='fas fa-star' />{' '}
                                        </span>
                                    </div>
                                    <div className='posterImage__description'>{movie ? movie.overview : ''}</div>
                                </div>
                            </Link>
                        ))
                    }

                </Carousel>
                <MovieList/>
            </div>
        </div>
    )
}

export default home