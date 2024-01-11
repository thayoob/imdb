import React from 'react'
import { useEffect,useState } from 'react'
import Card from '../card/card'
import './movieList.css'
import { useParams } from 'react-router-dom'

function movieList() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [movieList,setMovieList]=useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {type}=useParams()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
       getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getData()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [type])

     const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=5a8fc938d7969197d9baa55e81cf216b&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
     }
  return (
    <div className='movie__list'>
        <h2 className='list__title'>{(type?type:'POPULAR').toUpperCase()}</h2>
            <div className='list__cards'>
                {
            movieList.map(movie =>(
                    <Card movie={movie}/>
                ))
               }
            </div>
    </div>
  )
}

export default movieList