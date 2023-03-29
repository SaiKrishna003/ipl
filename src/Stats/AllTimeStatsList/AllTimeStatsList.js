import React from 'react'
import './AllTimeStatsList.css'

const AllTimeStatsList = (props) => {
    const setSelection = props.setSelection
    const statsList = ['Most Runs','Most Centuries','Most Fifties','Most Fours','Most Sixes','Longest Six']
    const myClickHandler = (event) => {
        setSelection(event.target.id.replaceAll(' ','_'))
        const myLinks = document.querySelectorAll('#alltimestatsList .nav-item');
        myLinks.forEach((link) => {
          link.classList.remove('active');
        });
        event.target.classList.add('active');
    }
  return (
    <div id='alltimestatsList' className=' bg-success bg-opacity-10 border border-success rounded-3 shadow mb-3'>
        <ul className='navbar navbar-nav d-flex flex-row text-center text-success fw-bold'>
          {
            statsList.map((stat,statIndex) => 
                      <li key={statIndex} className='nav-item pt-1 pb-1' onClick={myClickHandler} id={stat}>{stat}</li>)
          }            
        </ul>

    </div>
  )
}

export default AllTimeStatsList