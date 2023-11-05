import { useState, useEffect } from "react";

const URL = "http://localhost:8000";

export function useCities() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Problem with loading");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return { cities, setCities, isLoading };
}
