import { useQuery } from "@tanstack/react-query";

import { getMovies } from "./api/apiMovies";

// const BASE_URL = "http://www.omdbapi.com/apikey=f0a43603";

export function useMovies(query) {
  return useQuery({
    queryKey: ["movies", query],
    queryFn: async () => {
      const response = await getMovies(query);
      if (response.data.Response === "True")
        return {
          movies: response.data.Search,

          totalResults: response.data.totalResults,
        };
      if (response.data.Response === "False")
        return { movies: [], errorMessage: response.data.Error };

      return response.data;
    },
  });
  // console.log(`x: ${x}`);
  // return x;
}
