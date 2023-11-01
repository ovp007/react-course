import { useState } from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import Search from "./Search";
import SearchSummary from "./SearchSummary";
import Main from "./Main";
import Box from "./Box";
import MovieList from "./MovieList";
import WatchedMoviesList from "./WatchedMoviesList";
import Summray from "./Summray";
import { useMovies } from "./useMovies";
import MovieDetails from "./MovieDetails";
import Loader from "./Loader";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function App() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [query, setQuery] = useState("rambo");
  const [selectedId, setSelectedId] = useState("");

  const { data, isLoading } = useMovies(query);

  const onSelection = (id) => {
    setSelectedId((selectedId) => (selectedId !== id ? id : ""));
  };

  const onCloseMovie = () => {
    setSelectedId("");
  };

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <SearchSummary totalResults={data?.movies ? data.totalResults : 0} />
      </NavBar>
      <Main>
        <Box>
          {isLoading ? (
            <Loader />
          ) : (
            <MovieList data={data} onSelection={onSelection} />
          )}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails selectedId={selectedId} onCloseMovie={onCloseMovie} />
          ) : (
            <>
              <Summray watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
