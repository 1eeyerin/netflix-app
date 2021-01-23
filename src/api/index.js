import axios from "axios";

const API = {
    getMovies: async () => await axios.get("/list_movies.json"),
}

export default API;