import { useEffect, useState } from 'react'
import './RowPost.css'
import { API_AUTH, API_KEY, imageUrl } from '../../constants/Constant';
import axios from '../../constants/axios'
import YouTube from 'react-youtube';

function RowPost(props) {
const [movieList, SetMovieList] = useState([]);
const [vedioId, setVedioId] = useState('');

useEffect(()=>{
  axios.get(props.url)
  .then((res)=>{
    console.log(res.data);
    SetMovieList(res.data.results)
  })
  .catch((err)=>{
    console.log(err)
  })
}, [])

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const handleMovie = (id) => {
  console.log(id);
  const url = `/movie/${id}/videos?language=en-US`;
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_AUTH}` 
    }
  };

  axios.get(url, options)
    .then(response => {
      console.log(response.data);
      // Assuming you have a function setVedioId defined somewhere
     if(response.data.results.length !== 0){
      setVedioId(response.data.results[0]);
     }else{
      console.log('empty Array')
     }
    })
    .catch(error => {
      console.error('Error:', error);
    });
};



  return (
    <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">

          {
        movieList.map((obj, index)=> 
        <img key={index} onClick={()=> handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />)
          }
       
        </div>
       {
        vedioId &&  <YouTube opts={opts}  videoId={vedioId.key} />
       }
    </div>
  )
}

export default RowPost