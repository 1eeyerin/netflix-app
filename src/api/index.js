import axios from "axios";

const API = {
    getUsers: () => axios.get("https://jsonplaceholder.typicode.com/users")
}

export default API;