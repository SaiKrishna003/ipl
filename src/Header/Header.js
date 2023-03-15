import {Link,Outlet} from 'react-router-dom'
import './Header.css'
import IPL_Logo from '../Assets/Logos/IPL_Logo.png'


const Header = () => {
  const clickHandler = (event) => {
    const myLinks = document.querySelectorAll('#header a,#IPL_Logo');
    myLinks.forEach((link) => {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
  };
  const toggleClickHandler = (event) => {
    const myLinks = event.target
    myLinks.classList.contains('active') ? myLinks.classList.remove('active') :  myLinks.classList.add('active')
  }
  return (
    <div id='header'>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={IPL_Logo} alt="IPL Logo" id='IPL_Logo' onClick={clickHandler} className='active'/>
          </Link>
          <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
            <span className="carousel-control-next-icon" onClick={toggleClickHandler}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <Link className="nav-link" to="/teams" onClick={clickHandler}>TEAMS</Link>
              <Link className="nav-link" to="/matches-schedule" onClick={clickHandler}>SCHEDULE</Link>
              <Link className="nav-link" to="/points-table" onClick={clickHandler}>POINTS TABLE</Link>
              <Link className="nav-link" to="/stats" onClick={clickHandler}>STATISTICS</Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet/>    
    </div>
  )
}

export default Header