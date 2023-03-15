import React from 'react'
import './StatsList.css'

const StatsList = (props) => {
    const setSelection = props.setSelection
    const statsList = ['Most Runs','Most Hundreds','Most Fifties','Most Fours','Most Sixes','Most Wickets','Most Maidens']
    const myClickHandler = (event) => {
      setSelection(event.target.id.replace(' ','_'))
      const myLinks = document.querySelectorAll('#statsList .nav-item');
      myLinks.forEach((link) => {
        link.classList.remove('active');
      });
      event.target.classList.add('active');
    }
    return (
    <div id='statsList' className=' bg-success bg-opacity-10 border border-success rounded-3 shadow mb-3'>
        <ul className='navbar navbar-nav d-flex flex-row text-center text-success fw-bold'>
          {
            statsList.map((stat,statIndex) => 
                      <li key={statIndex} className='nav-item pt-1 pb-1' onClick={myClickHandler} id={stat}>{stat}</li>)
          }            
        </ul>

    </div>
  )
}

export default StatsList