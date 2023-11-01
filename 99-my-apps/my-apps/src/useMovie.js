import { useQuery } from "@tanstack/react-query";

import { getMovie } from "./api/apiMovies";

export function useMovie(id) {
  return useQuery({
    queryKey: ["movies", id],
    queryFn: async () => {
      const response = await getMovie(id);

      return response.data;
    },
  });
}
