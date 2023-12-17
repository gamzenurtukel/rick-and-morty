"use client";
import BaseUrl from "@/app/services/BaseUrl";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import LoadingSpinner from "@/app/components/LoadingSpinner";

interface PageProps {
  params: {
    id: number;
  };
  data: {
    id: number;
    name: string;
    species: string;
    image: string;
    gender: string;
    status: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [data, setData] = useState<PageProps["data"] | undefined>(undefined);

  const characterDetail = async (id: number) => {
    try {
      const response = await BaseUrl.get(`/character/${id}`);
      console.log("response", response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    characterDetail(params.id);
  }, [params.id]);

  return (
    <Fragment>
      {data ? (
        <div>
          <div className="mx-10 dark:bg-gray-900 bg-white pt-7">
            <div
              key={data?.id}
              className=" bg-white border border-gray-200 rounded-lg shadow
                    dark:bg-gray-800 dark:border-gray-700 w-50"
            >
              <div className="flex flex-row">
                <div className="flex-1">
                  <Image
                    src={data?.image || ""}
                    alt=""
                    width={700}
                    height={700}
                    className="rounded-t-lg w-full"
                  />
                </div>
                <div className="p-5 flex-1 ">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {data?.name}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data?.species}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data?.gender}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data?.status}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </Fragment>
  );
};

export default Page;
