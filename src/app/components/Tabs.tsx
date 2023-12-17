"use client";
import React, { useState } from "react";
import Link from "next/link";
import FilterStatus from "./FilterStatus";

interface Props {
  setSelectedStatus: (status: null) => void;
  selectedStatus: null;
}

const Tabs: React.FC<Props> = ({ setSelectedStatus, selectedStatus }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const tabs = [
    {
      id: "1",
      title: "Characters",
      url: "character",
    },
    {
      id: "2",
      title: "Locations",
      url: "location",
    },
  ];

  return (
    <div className="p-5 bg-transparent flex items-center justify-between">
      <div className="flex items-center gap-7">
        <div className="text-md font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, index) => (
              <li className="me-2" key={index}>
                <Link
                  href={`/${tab?.url}`}
                  className={`${
                    activeTab === tab.id &&
                    "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  } inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                  onClick={() => {
                    toggle(tab.id);
                  }}
                >
                  {tab?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[20rem]">
        <FilterStatus
          setSelectedStatus={setSelectedStatus}
          selectedStatus={selectedStatus}
        />
      </div>
    </div>
  );
};

export default Tabs;
