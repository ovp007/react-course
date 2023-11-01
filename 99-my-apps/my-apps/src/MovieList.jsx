import React from "react";
import Movie from "./Movie";

function MovieList({ onSelection, data }) {
  if (data.errorMessage)
    return (
      <div className="summary">
        <h2>{data.errorMessage}</h2>
      </div>
    );

  return (
    <ul className="list">
      {data.movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelection={onSelection} />
      ))}
    </ul>
  );
}

export default MovieList;
