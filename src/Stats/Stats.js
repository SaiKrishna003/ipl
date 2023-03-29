import React, { useState, useContext } from "react";
import StatsList from "./StatsList/StatsList";
import StatsTable from "./StatsTable/StatsTable";
import { ContextStore } from "../App";
import AllTimeStatsList from "./AllTimeStatsList/AllTimeStatsList";
import AllTimeStatsContainer from "./AllTimeStatsContainer/AllTimeStatsContainer";

const Stats = () => {
  let [toggle, setToggel] = useState(true);
  const [selection, setSelection] = useState("Most_Runs");
  const teamLogos = useContext(ContextStore);
  const onClickHandler = (event) => {
    document.getElementById("allStats").classList.remove("active");
    document.getElementById("currentStats").classList.remove("active");
    event.target.classList.add("active");
    event.target.id === "allStats" ? setToggel(true) : setToggel(false);
  };
  return (
    <div className="container">
      <div className="mb-3">
        <button
          className="btn btn-outline-primary me-3 fw-bold active"
          onClick={onClickHandler}
          id="allStats"
        >
          All Time Stats
        </button>
        <button
          className="btn btn-outline-primary fw-bold"
          onClick={onClickHandler}
          id="currentStats"
        >
          Current Stats
        </button>
      </div>
      {toggle ? (
        <div>
          <AllTimeStatsList setSelection={setSelection} />
          <AllTimeStatsContainer selection={selection} />
        </div>
      ) : (
        <div>
          <StatsList setSelection={setSelection} />
          <StatsTable teamLogos={teamLogos} selection={selection} />
        </div>
      )}
    </div>
  );
};

export default Stats;
