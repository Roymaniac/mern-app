import axios from "axios";

// Backend user route
const API_URL = "/api/users/";

// Register users
const register = async (userData) => {
  // fetch user data
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    // store value on local storage
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  // return the data
  return response.data;
};

// Log User In
const login = async (userData) => {
  // fetch use data
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    // store value on local localStorage
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  // return data
  return response.data;
};

// Log user out
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
