import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: ""
    })

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWFkM2IwOTliZTZiMTA0Mjc5NjYyNjI0ZWJmNDA2MCIsIm5iZiI6MTcyNDA3MTUxMC4yMzI1MTUsInN1YiI6IjY2YzMzZDMxMDAwYjg5N2E2NWRhMTU4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nFoxdC3LdWRHezSsiKOO2TtAWSpYsN2UuaVVJGUSzEY'
        }
      };
      
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results[0]))
        .catch(err => console.error(err));
    }, [])


  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
        <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
        <div className="player-info">
            <p>
                Date: {apiData.published_at.slice(0, 10)}
            </p>
            <p>
                Name: {apiData.name}
            </p>
            <p>
                Type: {apiData.type}
            </p>
        </div>
    </div>
  )
}

export default Player