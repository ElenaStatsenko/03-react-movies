import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import axios from "axios";
import  { useState } from "react";
import type { Movie } from "../types/movie";
import MovieGrid from "../MovieGrid/MovieGrid";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmNkNGNiOGM3MmY4ZjVkZjY4ZDk4MjVmNDg4NTQ3MyIsIm5iZiI6MTcyMjA4Mjk5Mi4yMjIwMDAxLCJzdWIiOiI2NmE0ZTZiMDUxZmRhYzVjODMwY2NiMjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Zq1um5PhtoD7U31owBPkJqFgW0uIUlE_pgXXkPbLdNA`,
    accept: "application/json",
  },
});
interface MovieSearchResponse {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
}


//     }
export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);

  const handlerSearchForm = async (data: string) => {
     try { if (data === "") {
      toast.error("Please enter your search query.");
      return;
    }
    console.log("Посик значения", data);
     setIsLoading(true);

    const response = await tmdb.get<MovieSearchResponse>("/search/movie", {
      params: { query: data },
    });
     setIsLoading(false);
    setMovies(response.data.results);} catch { setIsError(true)} finally {setIsLoading(false);}
  };

  return (
    <>
      <Toaster position="top-left" />
      <Loader isLoading={isLoading}/>
      <ErrorMessage isError={isError}/>
      <SearchBar onSubmit={handlerSearchForm} />
       {movies.length > 0 && <MovieGrid movies={movies}/> }
     
    </>
  );
}
