class TokenService {
  TOKEN_KEY = "token";
  FIRST_NAME = "CC-firstName";
  LAST_NAME = "CC-lastName";
  WEIGHT = "CC-weight";
  HEIGHT = "CC-height";
  BMI = "CC-BMI"
  CALORIE_GOAL = "CC-calorie-goal";
  CALORIE_STATUS = "CC-calorie-status"
  token = null;
  calorieGoal = 0;
  calorieStatus = 0;
  user = {};
  constructor() {
    this.init();
  }
  init() {
    this.find();
    this.findUser();
    this.findCalorieGoal();
    this.findCalorieStatus();
  }
  find() {
    this.token = localStorage.getItem(this.TOKEN_KEY);
  }
  create(token) {
    this.token = token;
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  storeUser(userInfo) {
    this.user = userInfo
    localStorage.setItem(this.FIRST_NAME, userInfo.firstName);
    localStorage.setItem(this.LAST_NAME, userInfo.lastName);
    localStorage.setItem(this.WEIGHT, userInfo.weight);
    localStorage.setItem(this.HEIGHT, userInfo.height);
    localStorage.setItem(this.BMI, userInfo.BMI);
    localStorage.setItem(this.CALORIE_GOAL, userInfo.calorieGoal);
  }
  storeCalorieGoal(calorieGoal) {
    this.calorieGoal = calorieGoal
    localStorage.setItem(this.CALORIE_GOAL, calorieGoal);
  }
  storeCalorieStatus(calorieStatus) {
    this.calorieStatus = calorieStatus
    localStorage.setItem(this.CALORIE_STATUS, calorieStatus);
  }
  findCalorieGoal() {
    this.calorieGoal = localStorage.getItem(this.CALORIE_GOAL);
  }
  findCalorieStatus() {
    this.calorieStatus = localStorage.getItem(this.CALORIE_STATUS);
  }
  findUser() {
    this.user.firstName = localStorage.getItem(this.FIRST_NAME);
    this.user.lastName = localStorage.getItem(this.LAST_NAME);
    this.user.weight = localStorage.getItem(this.WEIGHT);
    this.user.height = localStorage.getItem(this.HEIGHT);
    this.user.BMI = localStorage.getItem(this.BMI);
  //   TOKEN_KEY = "token";
  // FIRST_NAME = "firstName";
  // LAST_NAME = "lastName";
  // WEIGHT = "weight";
  // HEIGHT = "height";
  // BMI = "BMI"
  }
  remove() {
    this.token = null;
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.FIRST_NAME);
    localStorage.removeItem(this.LAST_NAME);
    localStorage.removeItem(this.WEIGHT);
    localStorage.removeItem(this.HEIGHT);
    localStorage.removeItem(this.BMI);
    localStorage.removeItem(this.CALORIE_GOAL);
    localStorage.removeItem(this.CALORIE_STATUS);
  }
}
export const tokenService = new TokenService();
