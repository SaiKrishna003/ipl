import React,{useState,useEffect,createContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'
import Header from './Header/Header';
import Home from './Home/Home';
import Teams from './Teams/Teams';
import MatchSchedule from './MatchSchedule/MatchSchedule';
import PointsTable from './PointsTable/PointsTable';
import Stats from "./Stats/Stats";

export const ContextStore = createContext()

function App() {
  const [teamLogos,setTeamLogos] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8090/teamlogos')
      .then(response => {
        setTeamLogos(response.data);
      })
      .catch(error => {
        console.log(error);
    });
  }, []);
  return (
    <ContextStore.Provider value={teamLogos}>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/teams' element={<Teams/>}/>
        <Route path='/matches-schedule' element={<MatchSchedule/>}/>
        <Route path='/points-table' element={<PointsTable/>}/>
        <Route path="/stats" element={<Stats/>}/>
        <Route path='/*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </ContextStore.Provider>    
  );
}

export default App;
