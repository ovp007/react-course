import React, { createContext, useContext, useState, useEffect } from "react";

const URL = "http://localhost:8000";
const CityContext = createContext();

const city = {
  cityName: "Lisbon",
  country: "Portugal",
  emoji: "🇵🇹",
  date: "2027-10-31T15:59:59.138Z",
};

export function CityContextProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState({});
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

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${URL}/cities/${id}`);
      const data = await res.json();
      console.log(data);
      setCurrentCity(data);
    } catch {
      alert("Problem with loading");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CityContext.Provider
      value={{ cities, setCities, isLoading, getCity, currentCity }}
    >
      {children}
    </CityContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CityContext);
  if (!context) throw new Error("Context is outside");
  return context;
}
