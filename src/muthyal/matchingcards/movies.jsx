import React, { useState, useEffect } from "react";
import "./movies.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
        extractGenres(data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const extractGenres = (movies) => {
    const genreSet = new Set();
    movies.forEach((movie) => {
      if (Array.isArray(movie.genres)) {
        movie.genres.forEach((genre) => genreSet.add(genre));
      }
    });
    setGenres(Array.from(genreSet));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      let filtered = movies.filter((movie) =>
        movie.name.toLowerCase().includes(titleFilter.toLowerCase())
      );

      if (genreFilter.length > 0) {
        filtered = filtered.filter((movie) =>
          genreFilter.every((g) => movie.genres && movie.genres.includes(g))
        );
      }

      setFilteredMovies(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [titleFilter, genreFilter, movies]);

  return (
    <div className="container">
      <h2 className="title">Movie List</h2>
      <input
        type="text"
        placeholder="Filter by title..."
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        className="input"
      />
      <select
        multiple
        className="select"
        onChange={(e) =>
          setGenreFilter(Array.from(e.target.selectedOptions, (opt) => opt.value))
        }
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <table className="movie-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Genres</th>
            <th>Thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <tr key={movie.id} className="fade-in-row">
                <td>{movie.name}</td>
                <td>{movie.premiered ? movie.premiered.split("-")[0] : "N/A"}</td>
                <td>{Array.isArray(movie.genres) ? movie.genres.join(", ") : "N/A"}</td>
                <td>
                  {movie.image && movie.image.medium ? (
                    <img src={movie.image.medium} alt={movie.name} className="thumbnail" />
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-movies">No movies found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;

