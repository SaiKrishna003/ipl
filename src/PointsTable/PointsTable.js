import React, { useContext } from "react";
import { ContextStore } from "../App";
import "./PointsTable.css";

const PointsTable = () => {
  const teamLogos = useContext(ContextStore);
  return (
    <div className="container overflow-auto" id="pointsTable">
      <h2 className="fw-bold text-primary p-2">POINTS TABLE</h2>
      <table
        className="table table-success table-striped-columns table-hover text-center shadow-lg border border-2 border-success"
        style={{ overflow: "auto" }}
      >
        <thead>
          <tr>
            <th>No.</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>Net RR</th>
            <th>Last Five</th>
          </tr>
        </thead>
        <tbody>
          {teamLogos &&
            teamLogos.map((logo, index) => {
              return (
                <tr key={logo.Team}>
                  <td>{index + 1}</td>
                  <td
                    className="d-flex justify-content-start align-items-center gap-4"
                    id="teamName"
                  >
                    <img
                      src={`data:${logo.logo.contentType};base64,${logo.logo.data}`}
                      alt={logo.Team}
                      height="30px"
                    />
                    <span className="fw-bold">{logo.Team}</span>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PointsTable;
