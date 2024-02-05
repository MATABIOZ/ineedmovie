import axios from "axios";
export const axiosTmdbApiInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_TMDB_BEARER_API_KEY,
    },
});
