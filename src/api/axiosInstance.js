import axios from "axios";

class Http {
  instance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://reqres.in/",
      timeout: 10000,
      
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    });
  }
}

const http = new Http().instance;

export default http;
