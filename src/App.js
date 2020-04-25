import React, { Component } from "react";
import styles from "./App.module.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome,  faUtensils, faEraser} from '@fortawesome/free-solid-svg-icons'
import NavBar from "./components/NavBar/NavBar";
import Chart from "./components/Chart/Chart";
import LandingPage from "./components/LandingPage/LandingPage";
import { tokenService } from "./services/TokenService";

class App extends Component {
  state = {
    token: "",
    firstName: tokenService.user.firstName,
    lastName: "",
    height: 0,
    weight: 0,
    BMI: 0,
    calorieGoal: 0,
    calorieStatus: 0,
  };

  handleUserRegistration = (userInfo) => {
    tokenService.storeUser(userInfo);
    this.setState({
      token: userInfo.id,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      height: userInfo.height,
      weight: userInfo.weight,
      BMI: userInfo.BMI,
    });
  };

  handleTrashButton = () => {
    tokenService.remove();
    this.setState({
      token: "",
      firstName: "",
      lastName: "",
      height: 0,
      weight: 0,
      BMI: 0,
      calorieGoal: 0,
      calorieStatus: 0,
    });
  };

  render() {
    console.log("state in app: ", this.state);
    console.log("userInfo in token: ", tokenService.user);
    return (
      <div className={styles.container}>
        <div className={styles.mainApp}>
          {tokenService.user.firstName ? 
            <Chart />
           : 
            <LandingPage handleUserRegistration={this.handleUserRegistration} />
          }
          {/* <LandingPage handleUserRegistration={ this.handleUserRegistration }/> */}
          {/* <Chart /> */}
        </div>
        <NavBar handleTrashButton={this.handleTrashButton} />
      </div>
    );
  }
}

export default App;
