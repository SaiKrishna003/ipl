import React from "react";
import "./TeamsList.css";

const TeamsList = (props) => {
  const setTeamName = props.setTeamName;
  const teamLogos = props.teamLogos;
  const myClickHandler = (event) => {
    setTeamName(event.target.id);
    const myLinks = document.querySelectorAll(
      "#teamsList .navbar-nav .nav-item"
    );
    myLinks.forEach((link) => {
      link.classList.remove("active");
    });
    event.target.classList.add("active");
  };

  return (
    <div id="teamsList">
      <div className="navbar">
        <ul className="navbar-nav">
          {teamLogos &&
            teamLogos.map((logo) => (
              <li
                className="nav-item d-flex p-2 align-items-center gap-3"
                key={logo.Team}
                id={logo.Team}
                onClick={myClickHandler}
              >
                <img
                  src={`data:${logo.logo.contentType};base64,${logo.logo.data}`}
                  alt={logo.Team}
                  height="50px"
                />
                <span>{logo.Team}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamsList;
