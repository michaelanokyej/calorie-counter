import React, { Component } from "react";
import styles from "./LandingPage.module.css";
import cx from "classnames";
import { v4 as uuidv4 } from "uuid";

class LandingPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    heightInFt: 0,
    heightInInc: 0,
    weight: 0,
    calorieGoal: 0,
  };
  render() {
    return (
      <div className={styles.container}>
        <h1>Calorie Counter</h1>
        <blockquote>
          <p>
            Welcome to Calorie Counter. Calories are very important when trying
            to lose weight because once your body's energy needs are met, extra
            calories are stored for future use — some in your muscles as
            glycogen, but most as fat. Thus, eating more calories than you burn
            will cause you to gain weight, whereas eating fewer than you need
            will cause weight loss.
          </p>
          <p>Register to track your calorie intake and more!</p>
        </blockquote>
        <div>
          <form>
            <div className={cx(styles.inputDiv)}>
              <input
                type="text"
                placeholder="firstName"
                className={styles.nameInput}
                onChange={(e) => this.setState({ firstName: e.target.value })}
              />
              <input
                type="text"
                placeholder="lastName"
                className={styles.nameInput}
                onChange={(e) => this.setState({ lastName: e.target.value })}
              />
            </div>
            <div className={styles.inputDiv}>
              <input
                type="number"
                placeholder="5"
                maxLength="2"
                className={styles.hw}
                onChange={(e) => this.setState({ heightInFt: e.target.value })}
              />
              <span className={styles.inputSpan}>ft(')</span>
              <input
                type="number"
                placeholder="5"
                maxLength="2"
                className={styles.hw}
                onChange={(e) => this.setState({ heightInInc: e.target.value })}
              />
              <span className={styles.inputSpan}>in(")</span>

              <input
                type="number"
                placeholder="150"
                maxLength="5"
                className={styles.hw}
                onChange={(e) => this.setState({ weight: e.target.value })}
              />
              <span className={styles.inputSpan}>lbs</span>
            </div>
            <div className={styles.inputDiv}>
              <input
                type="number"
                placeholder="2000"
                maxLength="8"
                className={styles.calorie}
                onChange={(e) => this.setState({ calorieGoal: e.target.value })}
              />
              <span className={styles.inputSpan}>Calorie Goal</span>
            </div>
            <button
              type="submit"
              className={styles.registerButton}
              onClick={(e) => {
                e.preventDefault();
                const feetToInches = this.state.heightInFt * 12;
                const userHeight =
                  feetToInches + Number(this.state.heightInInc);
                const BMIconv = this.state.weight / (userHeight * userHeight);
                const BMI = BMIconv * 703;
                const tokenId = uuidv4();

                const userInfo = {
                  id: tokenId,
                  firstName: this.state.firstName,
                  lastName: this.state.lastName,
                  height: userHeight,
                  weight: Number(this.state.weight),
                  BMI: Number(BMI.toFixed(2)),
                  calorieGoal: Number(this.state.calorieGoal),
                };
                if (this.state.firstName.length < 1) {
                  alert(`First name cannot be empty`);
                } else if (this.state.lastName.length < 1) {
                  alert(`Last name cannot be empty`);
                } else if (
                  this.state.heightInFt === 0 ||
                  this.state.heightInFt == null
                ) {
                  alert(`Height cannot be empty`);
                } else if (
                  this.state.weight === 0 ||
                  this.state.weight == null
                ) {
                  alert(`Weight cannot be empty`);
                } else if (
                  this.state.calorieGoal === 0 ||
                  this.state.calorieGoal == null
                ) {
                  alert(`Calorie goal cannot be empty`);
                } else {
                  this.props.handleUserRegistration(userInfo);
                }
              }}
            >
              Register!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LandingPage;
