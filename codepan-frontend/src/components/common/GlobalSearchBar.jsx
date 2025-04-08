import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchData } from "../../data/searchData";

const GlobalSearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredResults = searchData.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path) => {
    setQuery("");
    navigate(path);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search topics..."
        className="w-full px-3 py-1.5 text-sm rounded-md shadow-sm border focus:outline-none focus:ring-2 transition-all
          bg-white text-black border-gray-300 placeholder-gray-500 focus:ring-blue-400
          dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-cyan-500"
      />

      {query && (
        <ul className="absolute w-full mt-1 max-h-56 overflow-y-auto rounded-md z-50 text-sm shadow-lg
          bg-white text-black border border-gray-300
          dark:bg-gray-800 dark:text-white dark:border-gray-600">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, i) => (
              <li
                key={i}
                onClick={() => handleSelect(item.path)}
                tabIndex={0}
                role="button"
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              >
                {item.label}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-400 dark:text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default GlobalSearchBar;
