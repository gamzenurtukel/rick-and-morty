"use client";
import React, { useState } from "react";
import ThemeConfig from "./ThemeConfig";
import CharacterFavorite from "./CharacterFavorite";
import { addSearch } from "../redux/features/serachSlice";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-7 h-30 p-5 dark:bg-gray-800  bg-white  shadow-lg shadow-gray-300/50  dark:shadow-gray-600/50 ">
      <div className="bg-gray-600 rounded-lg p-3 text-2xl font-bold text-white ">
        Rick And Morty
      </div>

      <div className="flex flex-1 ">
        {pathname == "/character" && (
          <>
            <div className="flex-1  border dark:border-gray-700 dark:bg-gray-600 bg-white  p-3 rounded-l-lg">
              <input
                type="text"
                className="flex-1 bg-transparent outline-none "
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  rounded-r-lg hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={() => {
                dispatch(addSearch(searchValue));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      <ThemeConfig />
      {pathname == "/character" && <CharacterFavorite />}
    </div>
  );
};

export default Header;
