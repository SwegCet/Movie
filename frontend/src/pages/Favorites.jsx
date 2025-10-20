import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/movieCard";

function Favorite() {
  const { favorites } = useMovieContext();
  const hasFavorites = Array.isArray(favorites) && favorites.length > 0;

  return hasFavorites ? (
    <div className="favorites">
      <h2>Your Favorite Movies</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="favorites-empty">
      <h2> No Favorite Movies</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
}
export default Favorite;
