import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./MatchSchedule.css";
import { ContextStore } from "../App";
import Loader from "../Loader/Loader";

const MatchSchedule = () => {
  const [data, setData] = useState([]);
  const teamLogos = useContext(ContextStore);
  const teamNamesMap = {
    "Delhi Capitals": "DC",
    "Lucknow Super Giants": "LSG",
    "Kolkata Knight Riders": "KKR",
    "Gujarat Titans": "GT",
    "Chennai Super Kings": "CSK",
    "Mumbai Indians": "MI",
    "Punjab Kings": "PBKS",
    "Royal Challengers Bangalore": "RCB",
    "Rajasthan Royals": "RR",
    "Sunrisers Hyderabad": "SRH",
  };

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/matches-schedule")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        data &&
        data.map((match, index) => {
          return (
            <div
              key={index}
              className="d-flex border border-4 border-success rounded-4 mb-3 p-3 shadow bg-success bg-opacity-10"
              id="matchSchedule"
            >
              <div
                className="d-flex gap-2 justify-content-evenly align-items-center w-75 border-end border-success"
                id="match"
              >
                <div className="d-flex align-items-center gap-1">
                  {teamLogos &&
                    teamLogos
                      .filter(
                        (logo) =>
                          logo.Team === teamNamesMap[`${match["Home Team"]}`]
                      )
                      .map((logo, myIndex) => (
                        <img
                          src={`data:${logo.logo.contentType};base64,${logo.logo.data}`}
                          alt={logo.Team}
                          height="100px"
                          key={myIndex}
                        />
                      ))}
                  <h3>{match["Home Team"]}</h3>
                </div>
                <h5 className="fw-bold text-success fst-italic">VS</h5>
                <div className="d-flex align-items-center gap-1">
                  {teamLogos &&
                    teamLogos
                      .filter(
                        (logo) =>
                          logo.Team === teamNamesMap[`${match["Away Team"]}`]
                      )
                      .map((logo, myIndex) => (
                        <img
                          src={`data:${logo.logo.contentType};base64,${logo.logo.data}`}
                          alt={logo.Team}
                          height="100px"
                          key={myIndex}
                        />
                      ))}
                  <h3>{match["Away Team"]}</h3>
                </div>
              </div>
              <div
                className="w-25 text-center fw-bold text-primary"
                id="matchDetails"
              >
                <p>{match["Match Date"]}</p>
                <p>{match["Match Time"]}</p>
                <p className="text-success">{match["Match Venue"]}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MatchSchedule;
