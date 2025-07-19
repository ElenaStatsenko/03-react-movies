import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { fetchMovies } from "../services/movieService.ts";
import { useState } from "react";
import type { Movie } from "../types/movie";
import MovieGrid from "../MovieGrid/MovieGrid";

//     }
export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handlerSearchForm = async (data: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setMovies([]);

      const moviesRequestResult = await fetchMovies(data);
      setMovies(moviesRequestResult);

      if (moviesRequestResult.length === 0) {
        toast("No movies found for your request.");
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handlerSearchForm} />
      {movies.length > 0 && <MovieGrid movies={movies} />}
      <Toaster position="top-left" />
      <Loader isLoading={isLoading} />
      <ErrorMessage isError={isError} />
    </>
  );
}
