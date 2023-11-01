import React from "react";
import { useMovie } from "./useMovie";
import Loader from "./Loader";
import StarRating from "./Rating/StarRating";

function MovieDetails({ selectedId, onCloseMovie }) {
  const { data, isLoading } = useMovie(selectedId);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={data?.Poster} alt={`Poster of ${data?.Title} movie`} />
            <div className="details-overview">
              <h2>{data?.Title}</h2>
              <p>
                {data?.Released} &bull; {data?.Runtime}
              </p>
              <p>{data?.Genre}</p>
              <p>
                <span>⭐️</span>
                {data?.imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating maxRating={10} size={24} color={"yellow"} />
              <button className="btn-add">Add</button>
            </div>
            <p>
              <em>{data.Plot}</em>
            </p>
            <p>Starring {data.Actors}</p>
            <p>Directed by {data.Director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
