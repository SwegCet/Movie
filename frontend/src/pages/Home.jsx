import MovieCard from "../components/movieCard";

function Home() {
  const movies = [
    { id: 1, title: "Inception", release_date: 2010 },
    { id: 2, title: "Interstellar", release_date: 2014 },
    { id: 3, title: "Dunkirk", release_date: 2017 },
  ];
  const handleSearch = () => {};
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
