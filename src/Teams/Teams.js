import React,{useState,useContext} from 'react'
import './Teams.css'
import TeamsList from './TeamsList/TeamsList'
import Squad from './Squad/Squad'
import { ContextStore } from '../App'

const Teams = () => {
  const [teamName,setTeamName] = useState('DC');
  const teamLogos = useContext(ContextStore)
  return (
    <div className='container d-flex'>
        <TeamsList setTeamName={setTeamName} teamLogos={teamLogos}/>
        <Squad teamName={teamName}/>
    </div>
  )
}

export default Teams