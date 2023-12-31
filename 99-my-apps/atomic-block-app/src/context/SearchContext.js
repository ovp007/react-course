import React, { createContext, useState } from "react";

const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContextProvider, SearchContext };
