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
    token: tokenService.token,
    firstName: tokenService.user.firstName,
    lastName: tokenService.user.lastName,
    height: Number(tokenService.user.height),
    weight: Number(tokenService.user.weight),
    BMI: Number(tokenService.user.BMI),
    calorieGoal: Number(tokenService.calorieGoal),
    calorieStatus: Number(tokenService.calorieStatus),
  };

  componentDidMount = () =>{
    const token = tokenService.find();
    this.setState({token})
  }

  handleUserRegistration = (userInfo) => {
    tokenService.storeUser(userInfo);
    tokenService.storeCalorieGoal(userInfo.calorieGoal)
    tokenService.create(userInfo.id)
    this.setState({
      token: userInfo.id,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      height: userInfo.height,
      weight: userInfo.weight,
      BMI: userInfo.BMI,
      calorieGoal: userInfo.calorieGoal
    });
  };

  handleTrashButton = () => {
    tokenService.remove();
    this.setState({
      token: null,
      firstName: "",
      lastName: "",
      height: 0,
      weight: 0,
      BMI: 0,
      calorieGoal: 0,
      calorieStatus: 0,
    });
  };

  handleCalorieStatus = (status) => {
    this.setState({calorieStatus: status});
    tokenService.storeCalorieStatus(status);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.mainApp}>
          {tokenService.token ? 
            <Chart handleCalorieStatus={this.handleCalorieStatus} />
           : 
            <LandingPage handleUserRegistration={this.handleUserRegistration} />
          }
        </div>
        <NavBar handleTrashButton={this.handleTrashButton} />
      </div>
    );
  }
}

export default App;
