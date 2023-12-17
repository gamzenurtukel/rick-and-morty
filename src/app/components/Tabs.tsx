"use client";
import React, { useState } from "react";
import Link from "next/link";

const Tabs: React.FC = () => {
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
    <div className="p-5 bg-white  dark:bg-gray-600 flex items-center justify-center gap-7">
      <div className="flex items-center gap-7">
        {tabs.map((tab) => (
          <Link href={`/${tab?.url}`}>
            <div
              key={tab?.id}
              onClick={() => {
                toggle(tab.id);
              }}
              className={`${
                activeTab === tab.id
                  ? "bg-gray-700 text-white"
                  : "bg-white dark:text-gray-700 "
              } cursor-pointer rounded-lg p-3 text-xl font-bold `}
            >
              {tab?.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
