import React from "react";

interface Item {
  id: number;
  name: string;
  dimension: string;
  type: string;
  residents: string[];
}

interface Props {
  data: Item[];
}

const TableList: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-full bg-white  dark:bg-gray-900  flex pt-6 pl-10 pr-10">
      <div className="block rounded-lg border-neutral-100 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-800 w-full">
        <div className="border-b-2 border-neutral-100 px-6 py-5 text-xl font-medium leading-tight dark:border-gray-700 dark:text-neutral-50 flex justify-between text-gray-800">
          <span>Locations List</span>
        </div>
        <div className="p-6">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center text-sm font-light">
                    <thead className="border-b bg-gray-300 font-medium text-white dark:border-gray-800 dark:bg-gray-900">
                      <tr className="text-left">
                        <th scope="col" className=" px-6 py-4 ">
                          Name
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          Dimension
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          Type
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          Residents
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((item: any) => (
                        <tr className="border-b dark:border-gray-700 text-left ">
                          <td className="whitespace-nowrap  px-6 py-4 font-medium">
                            {item.name}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4 ">
                            {item.dimension}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {item.type}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {item.residents.length}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableList;
