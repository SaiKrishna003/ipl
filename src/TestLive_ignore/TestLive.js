import React,{useState,useContext,useEffect} from 'react'
import { ContextStore } from '../App'
import './Home.css'
import axios from 'axios'
// 605d0237-dc00-4092-ac8d-9621798a8ef6
const Home = () => {
  const teamLogos = useContext(ContextStore)
  //const [liveData,setLiveData] = useState([])
  // useEffect(() => {
   
  //   const interval = setInterval(() => {
  //     axios.get('https://api.cricapi.com/v1/currentMatches?apikey=28b1d5e4-7ffe-42c3-9099-870e55557c24&offset=0')
  //       .then(response => {
  //         if(response && response.data && response.data.data)
  //           setLiveData(response.data.data.filter(item => item.id === '605d0237-dc00-4092-ac8d-9621798a8ef6'))
  //         else
  //           setLiveData([])
  //       }).catch(err => console.log(err)) 
  //   }, 60000); // fetch data every minute

  //   return () => clearInterval(interval);
  // },[])
  // console.log('liveData',liveData)
  const [team1Data,setTeam1Data] = useState([])
  const [team2Data,setTeam2Data] = useState([])
  const [data,setData] = useState([])
  let team1Name = 'GT',team2Name = 'CSK'
  
  useEffect(() => {
    axios.get('http://localhost:8090/'+team1Name)
    .then(response => {
      setTeam1Data(response.data)
      setData(response.data)
    }).catch(err => console.log(err))
  },[team1Name])
  useEffect(() => {
    axios.get('http://localhost:8090/'+team2Name)
    .then(response => {
      setTeam2Data(response.data)
    }).catch(err => console.log(err))
  },[team2Name])
  
  return (
    <div className='container'>
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
                {/* { liveData &&
                 liveData[0] && 
                 liveData[0].teamInfo.filter(sc => sc.name.toLowerCase().indexOf(liveData[0].teams[0].toLowerCase()) !== -1)
                                    .map((sc,scIndex) => 
                                      <img src={sc.img} alt={sc.name} height='100px' key={scIndex}/>
                                    )
                } */}
                {/* <h3>{liveData && liveData[0] && liveData[0].teams[0]}</h3> */}
              </div>
              <h5 className='fw-bold text-success pt-2 text-center'>
                {/* {liveData && liveData[0] && liveData[0].score
                                    .filter(sc => sc.inning.toLowerCase().indexOf(liveData[0].teams[0].toLowerCase()) !== -1)
                                    .map((sc,index) => {return(<span key={index}>{sc.r}/{sc.w} ({sc.o})</span>)})
                } */}
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
                {/* {liveData &&
                 liveData[0] && 
                 liveData[0].teamInfo.filter(sc => sc.name.toLowerCase().indexOf(liveData[0].teams[1].toLowerCase()) !== -1)
                                    .map((sc,scIndex) => 
                                      <img src={sc.img} alt={sc.name} height='100px' key={scIndex}/>
                                    )
                } */}
                {/* <h3>{liveData && liveData[0] && liveData[0].teams[1]}</h3> */}
              </div>
              <h5 className='fw-bold text-success pt-2 text-center'>
                {/* {liveData && liveData[0] && liveData[0].score
                                    .filter(sc => sc.inning.toLowerCase().indexOf(liveData[0].teams[1].toLowerCase()) !== -1)
                                    .map((sc,index) => {return(<span key={index}>{sc.r}/{sc.w} ({sc.w})</span>)})
                } */}
                --/-- (--)
              </h5>
            </div>
        </div>
      </div>
      <div className='mt-2'>
        <ul className='d-flex bg-primary bg-opacity-50 fw-bold shadow mb-1 list-unstyled p-1 text-center border rounded-3'>
          <li onClick={(event) => setData(team1Data)} className='w-50 border-end border-3'>{team1Name}</li>
          <li onClick={(event) => setData(team2Data)} className='w-50'>{team2Name}</li>
        </ul>
        <table className='table table-primary border border-2 border-primary table-striped-columns table-hover text-center'>
          <thead>
            <tr>
              <th className='w-50'>Player</th>
              <th>Score</th>
              <th>Balls</th>
              <th>4S</th>
              <th>6S</th>
              <th>S/R</th>
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