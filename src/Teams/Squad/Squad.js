import React,{useState,useEffect} from 'react'
import './Squad.css'
import axios from 'axios'

const Squad = (props) => {
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + '/team/' + props.teamName)
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [props.teamName]);

  return (
    <div id='squad' className='d-flex flex-wrap justify-content-center gap-2'>
    { data.map(player => {
      return (
        <div key={player.Player} className='border border-2 rounded-5 shadow border-success'>
          <img src={`data:${player.avatar.contentType};base64,${player.avatar && player.avatar.data}`} alt={player.Player} width='200px' height='200px'/>
          <h6 className='text-center p-3 bg-black text-info mb-0 fw-bold rounded-5'>{player.Player}</h6>
        </div>
      )
    })}
    </div>
  )
}

export default Squad