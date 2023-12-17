"use client";
import React from "react";
import Image from "next/image";

interface Props {
  item: {
    id: number;
    name: string;
    species: string;
    image: string;
  };
}

const CardItem: React.FC<Props> = ({ item }) => {
  return (
    <div
      key={item.id}
      className=" bg-white border border-gray-200 rounded-lg shadow
          dark:bg-gray-800 dark:border-gray-700 w-50"
    >
      {/* <a href="#">
        <img className="rounded-t-lg" src={item.image} alt="" />
      </a> */}
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
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {item.species}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          {/* <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg> */}
        </a>
      </div>
    </div>
  );
};

export default CardItem;
