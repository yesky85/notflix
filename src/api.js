import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "6f4e46529695845bf36a1ce1369523a5",
    language: "en-US",
  },
});

export default api;
