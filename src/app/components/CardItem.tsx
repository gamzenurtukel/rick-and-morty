"use client";
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addCharacterFavorite } from "../redux/features/characterFavoriteSlice";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "../redux/hook";

interface Props {
  item: {
    id: number;
    name: string;
    species: string;
    image: string;
    status: string;
  };
}

const CardItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = (data: any) => {
    dispatch(addCharacterFavorite(data));
  };

  const allFavorites = useAppSelector(
    (state) => state.characterFavoriteReducer.characterFavorite
  );

  return (
    <div
      key={item?.id}
      className=" bg-white border border-gray-200 rounded-lg shadow
          dark:bg-gray-800 dark:border-gray-700 w-50"
    >
      <div>
        <Image
          src={item.image}
          alt=""
          width={400}
          height={400}
          className="rounded-t-lg"
        />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>
        <span
          className={`${
            item.status === "Alive"
              ? " bg-green-600"
              : item.status === "Dead"
              ? " bg-red-500 "
              : " bg-gray-500 "
          } inline-flex items-center rounded-full px-2 py-1 text-xs font-medium text-white mb-1`}
        >
          {item.status}
        </span>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {item.species}
        </p>

        <div className="flex items-center justify-between">
          {allFavorites?.find((favorite) => favorite?.id == item.id) ? (
            <div></div>
          ) : (
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                handleAddFavorite(item);
              }}
            >
              Add Favorite
            </button>
          )}

          <Link href={`/character/${item.id}`}>
            <button className="inline-flex items-center  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
              Go To Detail
              <ArrowRightCircleIcon className="h-6 w-6 ml-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
