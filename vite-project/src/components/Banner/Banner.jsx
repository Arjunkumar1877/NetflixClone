import { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../constants/axios';
import { API_KEY, imageUrl } from '../../constants/Constant';

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      console.log(res.data.results)
      let num = Math.ceil(Math.random()*5)
      console.log(num)
      setMovie(res.data.results[num])
    })
  }, [])

  return (
    <div style={{backgroundImage: `url(${movie && imageUrl + movie.backdrop_path})` }} className="banner">
        <div className="content">
       <h1 className="title"> {movie && movie.title}</h1>
       <div className="banner_buttons">
         <button className="button">Play</button>
         <button className="button">My list</button>
       </div>
       <h1 className="description">{movie && movie.overview}</h1>
        </div>

<div className="fade_bottom">
 
</div>

    </div>
  )
}

export default Banner