import React from "react";
import LanguageCards from "../components/LanguageCards";
import { useSearch } from "../context/SearchContext";

const Home = () => {
  const { searchTerm } = useSearch();

  return (
    <div className="container mx-auto py-36 px-5">
      <LanguageCards searchTerm={searchTerm} />
    </div>
  );
};

export default Home;        
