import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function header() {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to='/'><img className='header__icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/330px-IMDB_Logo_2016.svg.png' alt=''/></Link>
            <Link to='/movies/popular' style={{textDecoration:'none'}}><span>Populer</span></Link>
            <Link to='/movies/top_rated' style={{textDecoration:'none'}}><span>Top Rated</span></Link>
            <Link to='/movies/upcoming' style={{textDecoration:'none'}}><span>Upcoming</span></Link>
        </div>
    </div>
  )
}

export default header