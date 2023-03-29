import React,{useState,useEffect} from 'react'
import axios from 'axios'

const StatsTable = (props) => {
  const teamLogos = props.teamLogos
  const [data,setData] = useState([])
  const [head,setHead] = useState([])
  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + '/stats/' + props.selection)
    .then(response => {
      setData(response.data);
      setHead(response.data[0] && Object.keys(response.data[0]))
    })
    .catch(error => {
      console.log(error);
    });
  },[props.selection])

  return (
    <div>
      <table className="table table-success table-striped-columns table-hover text-center shadow-lg border border-2 border-success" style={{overflow:'auto'}}>
        <thead>
          <tr>
            <th>Pos.</th>
            {
              head.map(name => <th key={name}>{name}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            data &&
            data.map((player,index) => {
              return <tr key={index}>
                  <td>{index+1}</td>
                { 
                  head.map((hKey) => {
                    return (hKey !== 'Team' ?
                    <td key={index+hKey}>{player[hKey]}</td> :
                    teamLogos.filter(logo => logo.Team === player[hKey]).map((logo,lIndex) => 
                      <td className='d-flex justify-content-start gap-2 align-items-center' key={lIndex+logo.Team}>
                        <img src={`data:${logo.logo.contentType};base64,${logo.logo.data}`} alt={logo.Team} height='50px'/>
                        <span>{logo.Team}</span>
                      </td>)
                    )
                  })
                }
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default StatsTable