import React from 'react'
import './error.css'
import { NavLink } from 'react-router-dom'

function error() {
  return (
    <div >
        <div className='error__page'>
        <h1 className='error__text'>404 ERROR</h1>
        <NavLink  to={'/'} style={{textDecoration:'none'}}><button className='error__button'>Go to home</button></NavLink>
        </div>
    </div>
  )
}

export default error