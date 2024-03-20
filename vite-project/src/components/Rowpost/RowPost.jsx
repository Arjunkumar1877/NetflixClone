import { useEffect, useState } from 'react'
import './RowPost.css'
import { API_KEY, imageUrl } from '../../constants/Constant';
import axios from '../../constants/axios'


function RowPost({title}) {
const [movieList, SetMovieList] = useState([])
useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`)
  .then((res)=>{
    console.log(res.data);
    SetMovieList(res.data.results)
  })
  .catch((err)=>{
    console.log(err)
  })
}, [])

  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="posters">

          {
        movieList.map((obj, index)=> 
        <img key={index} className='poster' src={`${imageUrl + obj.backdrop_path}`} alt="poster" />)
          }
       
        </div>
    </div>
  )
}

export default RowPost