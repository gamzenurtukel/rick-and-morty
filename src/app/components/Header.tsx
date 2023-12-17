import React from "react";
import ThemeConfig from "./ThemeConfig";
import CharacterFavorite from "./CharacterFavorite";
// import { SearchIcon } from "@heroicons/react/outline";

const Header: React.FC = () => {
  return (
    <div className="flex items-center gap-7 h-30 p-5 dark:bg-gray-800  bg-white  shadow-lg shadow-gray-500/50 ">
      <div className="bg-gray-600 rounded-lg p-3 text-2xl font-bold text-white ">
        Rick And Morty
      </div>
      <div className="flex flex-1 items-center gap-2 border dark:bg-gray-600 bg-white  p-3 rounded-lg">
        <input
          type="text"
          className="flex-1 bg-transparent outline-none "
          placeholder="Search"
        />
        {/* <SearchIcon className="w-6 h-6 text-purple-600 mr-1" /> */}
      </div>
      <ThemeConfig />
      <CharacterFavorite />
    </div>
  );
};

export default Header;
