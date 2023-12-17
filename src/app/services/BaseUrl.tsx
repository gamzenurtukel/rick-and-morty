import axios from "axios";

const BaseUrl = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export default BaseUrl;
