import { useEffect, useState } from "react";

const URL = "http://localhost:8000";

export function useCity(id) {
  const [city, setCity] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCities() {
        try {
          setIsLoading(true);
          const res = await fetch(`${URL}/cities/${id}`);
          const data = await res.json();
          setCity(data);
        } catch {
          alert("Problem with loading");
        } finally {
          setIsLoading(false);
        }
      }
      fetchCities();
    },
    [id]
  );

  return { city, isLoading };
}
