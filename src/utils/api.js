import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

// const TMDB_TOKEN = import.meta.env.APP_TMBD_TOKEN;
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjllZWZlZWNlNjJmN2Y5Mjc3YmE5OTkyZjAzNTIxYiIsInN1YiI6IjY1YjcxOTZiMzEyMzQ1MDE2MmRhZGE4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wzaoYtF2jhZ-nqRHVhCO58LmGUcSRrYR-1odFbnrBnk";

const headers = {
    Authorization:  "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url,params) => {
    try {
        console.log(headers);
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log("ERROR IN DATA FETCHING", error);
        return error;
    }
}