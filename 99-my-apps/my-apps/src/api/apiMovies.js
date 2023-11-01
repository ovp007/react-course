import axios from "axios";

// const BASE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f0a43603";
const BASE_URL = "http://www.omdbapi.com/?apikey=f0a43603";

export function getMovies(query) {
  return axios.get(`${BASE_URL}&s=${query}`);
}

export function getMovie(id) {
  return axios.get(`${BASE_URL}&i=${id}`);
}
