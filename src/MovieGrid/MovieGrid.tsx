import css from "./MovieGrid.module.css";
import type { Movie } from "../types/movie";

interface MovieListProps {
  movies: Movie[];
}
export default function MovieGrid({ movies }: MovieListProps) {
  return (
    <ul className={css.grid}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <div className={css.card}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt={title}
              loading="lazy"
            />
            <h2 className={css.title}>{title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
