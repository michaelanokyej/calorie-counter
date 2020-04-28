import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { tokenService } from "../../services/TokenService";

import styles from "./Chart.module.css";

class Chart extends Component {
  state = {
    calorieGoal: 0,
    calorieStatus: 0,
    calorieStatusInput: 0,
    firstName: tokenService.user.firstName,
    BMI: tokenService.user.BMI,
  };

  componentDidMount() {
    const calorieGoal = Number(tokenService.calorieGoal);
    const calorieStatus = tokenService.calorieStatus;
    this.setState({
      calorieGoal,
      calorieStatus,
    });
  }
  render() {
    const chartBG =
      this.state.calorieGoal > this.state.calorieStatus
        ? "rgba(0, 255, 0, 0.5)"
        : "rgba(255, 0, 0, 0.5)";

    const handleCalorieStatus = this.props.handleCalorieStatus;

    const barChart =
      tokenService.calorieStatus !== 0 ? (
        <Bar
        height={350}
          data={{
            labels: ["Calories"],
            datasets: [
              {
                label: "Calories",
                backgroundColor: chartBG,
                data: [this.state.calorieStatus],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Calories consumed Today` },
          }}
        />
      ) : null;

    return (
      <div className={styles.container}>
        <div>
          <div className={styles.userInfo}>
          <h1>{`Hello ${this.state.firstName}`}</h1>
          <h4>{`Your BMI is ${this.state.BMI}`}</h4>
          </div>
          
          <div className={styles.calorieInputDiv}>
            <input
              type="number"
              placeholder="Calorie Status"
              onChange={(e) => {
                this.setState({ calorieStatusInput: e.target.value });
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                const updatedCalories =
                  Number(this.state.calorieStatus) +
                  Number(this.state.calorieStatusInput);
                handleCalorieStatus(updatedCalories);
                this.setState({ calorieStatus: updatedCalories });
              }}
            >
              update
            </button>
          </div>
        </div>
        {barChart}
      </div>
    );
  }
}

export default Chart;
