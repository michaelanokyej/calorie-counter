import React from "react";
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";

const Chart = () => {
  // const chartBackground = 
  // const barChart = (
  //   confirmed ? (<Bar 
  //   data={{
  //     labels: ['Calories'],
  //     datasets: [{
  //       label: 'Calories',
  //       backgroundColor: [
  //         'rgba(0, 0, 255, 0.5)',
  //         'rgba(0, 255, 0, 0.5)',
  //         'rgba(255, 0, 0, 0.5)'
  //       ],
  //       data: [confirmed.value, recovered.value, deaths.value]
  //     }]
  //   }}
  //   options={{
  //     legend: {display: false},
  //     title: {display: true, text: `Current state in ${country}`}
  //   }}
  //   />) : null
  // )

  return (
    <div className={styles.container}>
      <h1>Chart</h1>
    </div>
  );
};

export default Chart;
