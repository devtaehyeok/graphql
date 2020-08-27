import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json";


export const getMovies = (limit, rating) => {
  let req_url = API_URL;
  if(limit>0){
    req_url += `limit=${limit}`;
  }
  if(rating>0){
    req_url += `minimum_rating=${rating}`;
  }
  return fetch(`${API_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
};