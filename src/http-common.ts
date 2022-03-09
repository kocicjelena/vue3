import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  // samapi5
  // baseURL: "https://gb0kfy0xke.execute-api.us-east-1.amazonaws.com/Prod/"
  // samapi4
  // baseURL: "https://j1dih6n1l1.execute-api.us-east-1.amazonaws.com/Prod/"
   // baseURL: "https://mws1vnvepd.execute-api.us-east-1.amazonaws.com/Prod/"
   // samapi7
    //baseURL: "https://92sbaeosp0.execute-api.us-east-1.amazonaws.com/Prod/"
	baseURL: "https://iglxd2wtbh.execute-api.us-east-1.amazonaws.com/Prod/",
   // ,
  // headers: {
  //   "Content-type": "application/json",
  // },
});

export default apiClient;
