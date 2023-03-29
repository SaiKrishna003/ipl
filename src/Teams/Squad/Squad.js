import React, { useState, useEffect } from "react";
import "./Squad.css";
import axios from "axios";
import Loader from "../../Loader/Loader";

const Squad = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/team/" + props.teamName)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [props.teamName]);

  return (
    <div id="squad" className="d-flex flex-wrap justify-content-center gap-2">
      {isLoading ? (
        <Loader />
      ) : (
        data.map((player) => {
          return (
            <div
              key={player.Player}
              className="border border-2 rounded-5 shadow border-success"
            >
              <img
                src={`data:${player.avatar.contentType};base64,${
                  player.avatar && player.avatar.data
                }`}
                alt={player.Player}
                width="200px"
                height="200px"
              />
              <h6 className="text-center p-3 bg-black text-info mb-0 fw-bold rounded-5">
                {player.Player}
              </h6>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Squad;
