import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/Movies/movieSlice';

import user from '../../images/user.png';
import './Header.scss'; 

const Header = () => {
  const dispatch = useDispatch()
  const [term,setTerm] = useState ('')
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
  }
  return (
    <div className='header'>
       
        <div className='logo'>
           <Link to='/' style={{color:'white'}}>Filimo</Link>
           </div>

           <div className='search-bar'>
             <form onSubmit={submitHandler}>
               <input
                type='text'
                placeholder='Search Movies or Shows'
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                />
             </form>
           </div>


        <div className='user-image'>
            <img src={user} alt='user'/>
        </div>
        </div>
  )
}

export default Header