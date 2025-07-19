import axios from "axios";

import type { Movie } from "../types/movie";
interface MovieSearchResponse {
  results: Movie[];
}
const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmNkNGNiOGM3MmY4ZjVkZjY4ZDk4MjVmNDg4NTQ3MyIsIm5iZiI6MTcyMjA4Mjk5Mi4yMjIwMDAxLCJzdWIiOiI2NmE0ZTZiMDUxZmRhYzVjODMwY2NiMjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Zq1um5PhtoD7U31owBPkJqFgW0uIUlE_pgXXkPbLdNA`,
    accept: "application/json",
  },
});
export const fetchMovies = async (data: string): Promise<Movie[]> => {
  const response = await tmdb.get<MovieSearchResponse>("/search/movie", {
    params: { query: data },
  });
  return response.data.results;
};
