"use client";
import React, { Fragment, useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "../redux/hook";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeCharacterFavorite } from "../redux/features/characterFavoriteSlice";

type Props = {};

const CharacterFavorite = (props: Props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const allFavorites = useAppSelector(
    (state) => state.characterFavoriteReducer.characterFavorite
  );

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white">
      <button
        id="dropdownNotificationButton"
        className="relative flex items-center space-x-1 text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white"
        type="button"
        onClick={handleDropdownToggle}
      >
        <StarIcon className="w-7 h-7" />
        {allFavorites.length > 0 && (
          <div className="absolute flex items-center justify-center w-6 h-6 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900 text-white">
            {allFavorites?.length}
          </div>
        )}
      </button>

      {isDropdownOpen && (
        <div
          id="dropdownNotification"
          className="z-20 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"
          style={{
            top: "calc(100% + 5px)",
            right: 2,
            width: "25rem",
          }}
        >
          <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
            My Favorites Characters
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {allFavorites.length === 0 && (
              <div className="flex px-4 py-5 items-center gap-6 justify-around">
                <div className="flex flex-col ml-3 w-48 ">
                  <span className="font-bold text-gray-700 dark:text-white">
                    No Favorites
                  </span>
                </div>
              </div>
            )}
            {allFavorites?.map((item: any) => (
              <div className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 items-center gap-6 justify-around">
                <Image
                  src={item.image}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <div className="flex flex-col ml-3 w-48 ">
                  <span className="font-bold text-gray-700 dark:text-white">
                    {item.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    {item.species}
                  </span>
                </div>
                <button
                  className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    if (allFavorites?.length === 1) {
                      setDropdownOpen(false);
                    }

                    dispatch(removeCharacterFavorite(item?.id));
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterFavorite;
