import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_SITE_URL;

console.log('@@ ',process.env.SITE_URL);

const API = {
    getMovies: async () => await axios.get("/list_movies.json"),
}

export default API;