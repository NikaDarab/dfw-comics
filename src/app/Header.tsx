"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import SearchBar from "@/SearchBar/SearchBar";
import { artists, Artist, Props } from "./artists/page";

const Header = () => {
  const [searchData, setSearchData] = useState([]);

  const handleSearch = (query: string) =>
    artists.filter((artist) => artist.name.includes(query));

  return (
    <section className="flex flex-row items-center justify-between h-[10vh] p-[1em] bg-green-800 w-full z-[999]">
      <div className="flex">
        <Image
          src="/../public/assets/images/logo.png"
          alt="Logo"
          width={80}
          height={40}
        />
        <div className="flex items-center text-black">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>
      <ul className="menu">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ul>
    </section>
  );
};

export default Header;
