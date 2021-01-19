import axios from "axios";

const API = {
    getMovies: () => axios.get("https://yts.mx/api/v2/list_movies.json?limit=50")
}

export default API;