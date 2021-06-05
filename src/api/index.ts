import axios from "axios";

const visitsInstance = axios.create({
  baseURL: "https://etiennethompson.azurewebsites.net/",
  timeout: 1000,
});

export default visitsInstance;
