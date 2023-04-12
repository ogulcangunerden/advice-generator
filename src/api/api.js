import axios from "axios";
export const RandomAdviceApi = () => {
  return axios.get("https://api.adviceslip.com/advice");
};
