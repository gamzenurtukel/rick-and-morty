"use client";
import React, { Fragment, useEffect, useState, lazy } from "react";
import { usePathname } from "next/navigation";
import BaseUrl from "../services/BaseUrl";
import { useAppSelector } from "../redux/hook";

const CardItem = lazy(() => import("../components/CardItem"));
const TableList = lazy(() => import("../components/TableList"));

const page = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const searchValue = useAppSelector((state) => state.searchReducer.search);

  const pathname = usePathname();

  const getRequestData = async (params: string) => {
    try {
      const response = await BaseUrl.get(params);
      console.log("response", response.data);
      setData(response.data.results);
      setTotalPages(response.data.info?.pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRequestData(pathname);
  }, [pathname]);

  const handlePage = (page: number) => {
    setCurrentPage(page);
    if (searchValue) {
      getRequestData(`${pathname}?name=${searchValue}&page=${page}`);
    } else {
      getRequestData(`${pathname}?page=${page}`);
    }
  };

  useEffect(() => {
    if (searchValue == "") {
      getRequestData(pathname);
    } else if (searchValue) {
      getRequestData(`${pathname}?name=${searchValue}`);
    }
  }, [searchValue]);

  const pageRange = 5;

  return (
    <Fragment>
      {pathname == "/character" && (
        <div className="flex flex-wrap gap-5 justify-center items-center dark:bg-gray-900 bg-white pt-7">
          {data.length > 0 &&
            data?.map((item: any) => <CardItem item={item} />)}
        </div>
      )}
      {pathname == "/location" && <TableList data={data} />}
      {data.length > 0 && (
        <nav
          aria-label="Page navigation example"
          className=" flex items-center justify-end gap-5 p-5 pb-10 dark:bg-gray-900 bg-white"
        >
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <button
                className="flex items-center justify-center px-4 h-14 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => handlePage(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {Array.from(Array(totalPages).keys()).map((page) => {
              const startPage = Math.max(
                1,
                currentPage - Math.floor(pageRange / 2)
              );
              const endPage = Math.min(totalPages, startPage + pageRange - 1);

              if (page + 1 >= startPage && page + 1 <= endPage) {
                return (
                  <li key={page}>
                    <button
                      onClick={() => handlePage(page + 1)}
                      className={`flex items-center justify-center px-4 h-14 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ${
                        currentPage == page + 1
                          ? "text-blue-600 border border-gray-300 bg-gray-400 dark:border-gray-700 dark:bg-gray-500  dark:text-white"
                          : " hover:bg-gray-100 hover:text-gray-700  dark:hover:bg-gray-700 dark:hover:text-white"
                      }`}
                    >
                      {page + 1}
                    </button>
                  </li>
                );
              }

              return null;
            })}

            <li>
              <button
                className="flex items-center justify-center px-4 h-14 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => handlePage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </Fragment>
  );
};

export default page;
