import axios from "axios";

class Http {
  instance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://reqres.in/",
      timeout: 10000,
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
    });
  }
}

const http = new Http().instance;

export default http;
