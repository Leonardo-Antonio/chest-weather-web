import axios from "axios";

export const weather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});
