import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'


import MovieListing from '../MovieListing/MovieListing'
import MovieApi from '../../common/apis/MovieApi'
import {ApiKey} from '../../common/apis/MovieApiKey'
import { addMovies } from '../../features/Movies/movieSlice'


const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';

  useEffect(() => {
      
    const fetchMovie = async () => {
      const response = await MovieApi.get(
        `?apikey=${ApiKey}&s=${movieText}&type=movie`)

        .catch((err) => {
         console.log('Err:', err);
        });
       dispatch(addMovies(response.data))
    };
    fetchMovie()
  },)

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing/>
    </div>
  )
}

export default Home