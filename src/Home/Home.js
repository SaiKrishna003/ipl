import React,{useState,useContext,useEffect} from 'react'
import { ContextStore } from '../App'
import './Home.css'
import axios from 'axios'

const Home = () => {
  const teamLogos = useContext(ContextStore)

  const [team1Data,setTeam1Data] = useState([])
  const [team2Data,setTeam2Data] = useState([])
  const [data,setData] = useState([])
  let team1Name = 'DC',team2Name = 'CSK'
  
  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + '/team/' + team1Name)
    .then(response => {
      setTeam1Data(response.data)
      setData(response.data)
    }).catch(err => console.log(err))
  },[team1Name])
  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + '/team/' + team2Name)
    .then(response => {
      setTeam2Data(response.data)
    }).catch(err => console.log(err))
  },[team2Name])
  
  const listOnClickHandler = (myData,event) => {
    setData(myData)
    const lists = document.querySelectorAll('#scoreCard li')
    lists.forEach(list => {
      list.classList.remove('active')
    })
    event.target.classList.add('active')
  }
  return (
    <div className='container' id="scoreContainer">
      <div className='bg-success bg-opacity-10 p-3 shadow border border-success rounded-5'>
        <h6 className='text-danger fw-bold ps-1 m-0'>Live ...</h6>
        <h3 className='text-center text-success fw-bold border-bottom border-success pb-1'>Score</h3>
        <div className='d-flex justify-content-center align-items-center gap-2 border-success overflow-auto' id='score'>
            <div className='w-50'>
              <div className='d-flex justify-content-center align-items-center gap-1'>
                { teamLogos &&
                  teamLogos.filter(logo => logo.Team === 'GT').map((logo,myIndex) => 
                    <img src={`data:${logo.logo.contentType};base64,${logo.logo.data}`} alt={logo.Team} height='100px' key={myIndex}/>)
                }
                <h3>{team1Name}</h3>
              </div>
              <h5 className='fw-bold text-success pt-2 text-center'>
                --/-- (--)
              </h5>
            </div>
            <div className="vertical-line"></div>
            <div className='w-50'>
              <div className='d-flex justify-content-center align-items-center gap-1'>
                { teamLogos &&
                  teamLogos.filter(logo => logo.Team === 'CSK').map((logo,myIndex) => 
                    <img src={`data:${logo.logo.contentType};base64,${logo.logo.data}`} alt={logo.Team} height='100px' key={myIndex}/>)
                }
                <h3>{team2Name}</h3>
              </div>
              <h5 className='fw-bold text-success pt-2 text-center'>
                --/-- (--)
              </h5>
            </div>
        </div>
      </div>
      <div className='mt-2' id='scoreCard'>
        <ul className='d-flex bg-primary bg-opacity-50 fw-bold shadow mb-1 list-unstyled p-1 text-center border rounded-3'>
          <li onClick={(event) => listOnClickHandler(team1Data,event)} className='w-50 border-end border-3 active'>{team1Name}</li>
          <li onClick={(event) => listOnClickHandler(team2Data,event)} className='w-50'>{team2Name}</li>
        </ul>
        <table className='table table-primary border border-2 border-primary table-striped-columns table-hover text-center'>
          <thead>
            <tr>
              <th className='w-50'>Player</th>
              <th>Score</th>
              <th>4S</th>
              <th>6S</th>
              <th>S/R</th>
              <th>Bal</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map((player,index) => 
                <tr key={index + player.Player}>
                  <td>{player.Player}</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Home