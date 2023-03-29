import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import Loader from "../../Loader/Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AllTimeStatsContainer = (props) => {
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL + "/stats/all-time/" + props.selection
      )
      .then((response) => {
        setXValues(response.data.map((player) => player.Player));
        switch (props.selection) {
          case "Most_Runs":
            setYValues(response.data.map((player) => player.Runs));
            break;
          case "Most_Centuries":
            setYValues(response.data.map((player) => player["100s"]));
            break;
          case "Most_Fifties":
            setYValues(response.data.map((player) => player["The 50s"]));
            break;
          case "Most_Fours":
            setYValues(response.data.map((player) => player["4s"]));
            break;
          case "Most_Sixes":
            setYValues(response.data.map((player) => player["6s"]));
            break;
          case "Longest_Six":
            console.log("check");
            setYValues(
              response.data.map((player) => player["Distance (in meters)"])
            );
            break;
          default:
            break;
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [props.selection]);

  const ChartData = {
    labels: xValues,
    datasets: [
      {
        label: props.selection,
        data: yValues,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
  };

  return (
    <div>
      {isLoading ? <Loader /> : <Bar data={ChartData} options={options} />}
    </div>
  );
};

export default AllTimeStatsContainer;
