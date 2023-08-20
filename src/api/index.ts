import axios from "axios";

const visitsInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
  timeout: 10000,
});

export default visitsInstance;
