import { useState } from "react";
import { Artist, artists } from "../app/artists/page";
import Image from "next/image";

interface SearchBarProps {
  onSearch: (query: string) => Artist[];
}

import React from "react";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Artist[]>([]);

  const handleSearch = () => {
    const foundResults = onSearch(query);
    setResults(foundResults);
    console.log(results);
  };

  return (
    <div className="relative">
      <form onSubmit={(e) => e.preventDefault()} role="search" id="search-bar">
        <input
          type="search"
          placeholder="Search..."
          autoFocus
          required
          onClick={handleSearch}
        />
        <div>
          {results.length > 0 && (
            <ul
              id="search-results"
              className="w-full left-0 right-0  bg-white rounded-lg shadow-md z-[999]"
              style={{
                position: "absolute",
                backgroundColor: "white",
                height: "200px",
                overflowY: "scroll",
                padding: "10px",
              }}
            >
              {results?.map((result) => (
                <div key={result.id} className="flex">
                  <Image
                    src={result?.headShot}
                    alt={result.name}
                    width={40}
                    height={40}
                  />
                  <li>{result?.name}</li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
