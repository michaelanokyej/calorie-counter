class TokenService {
  TOKEN_KEY = "token";
  FIRST_NAME = "CC-firstName";
  LAST_NAME = "CC-lastName";
  WEIGHT = "CC-weight";
  HEIGHT = "CC-height";
  BMI = "CC-BMI"
  token = null;
  user = {};
  constructor() {
    this.init();
  }
  init() {
    this.find();
    this.findUser();
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
  }
  findUser() {
    this.userName = localStorage.getItem(this.FIRST_NAME);
  //   TOKEN_KEY = "token";
  // FIRST_NAME = "firstName";
  // LAST_NAME = "lastName";
  // WEIGHT = "weight";
  // HEIGHT = "height";
  // BMI = "BMI"
  }
  remove() {
    this.token = null;
    this.userName = null;
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.FIRST_NAME);
    localStorage.removeItem(this.LAST_NAME);
    localStorage.removeItem(this.WEIGHT);
    localStorage.removeItem(this.HEIGHT);
    localStorage.removeItem(this.BMI);
  }
}
export const tokenService = new TokenService();
