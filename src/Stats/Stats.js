import React,{useState,useContext} from 'react'
import StatsList from './StatsList/StatsList'
import StatsTable from './StatsTable/StatsTable'
import { ContextStore } from '../App'

const Stats = () => {
    const [selection,setSelection] = useState('Most_Runs');
    const teamLogos = useContext(ContextStore)
  return (
    <div className='container'>
        <StatsList setSelection={setSelection}/>
        <StatsTable teamLogos={teamLogos} selection={selection}/>
    </div>
  )
}

export default Stats