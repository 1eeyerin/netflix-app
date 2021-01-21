import axios from "axios";

const API = {
    getMovies: () => axios.get("/list_movies.json"),
}

export default API;