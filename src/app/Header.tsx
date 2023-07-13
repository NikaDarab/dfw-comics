"use client";

import Image from "next/image";
import SearchBar from "@/SearchBar/SearchBar";
import { artists } from "./artists/page";
import Link from "next/link";

const Header = () => {
  const handleSearch = (query: string) =>
    artists.filter((artist) => artist.name.includes(query));

  return (
    <section className="flex flex-row items-center justify-between h-[10vh] p-[1em] bg-green-800 w-full z-[999]">
      <div className="flex">
        <Link href="/">
          <Image
            src="/../public/assets/images/logo.png"
            alt="Logo"
            width={80}
            height={40}
          />
        </Link>
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
