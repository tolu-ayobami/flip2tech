/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { Tabs } from "flowbite-react";
import { Link } from "react-router-dom";
import BootcampCard from "../components/BootcampCard";
import { useAppContext } from "../contexts/AppContext";
import CourseCard from "./CourseCard";

export default function BootcampTabs({
  allBootcamps,
  allCourses,
  allBootcampsRaw,
  user,
}) {
  const { userData } = useAppContext();

  const bootcamps = user?.is_instructor ? allBootcampsRaw : allBootcamps;

  return (
    <Tabs.Group
      aria-label="Tabs with icons"
      style="underline"
      theme={customTheme}
    >
      <Tabs.Item title="Bootcamp" className="" activeClassName="active-tab">
        {bootcamps?.length > 0 && (
          <div className="w-full mt-8 flex gap-4 md:gap-6 md:flex-wrap overflow-x-auto md:overflow-x-hidden py-8">
            {bootcamps?.map((item, index) => {
              return <BootcampCard item={item} key={index} />;
            })}
          </div>
        )}
        {bootcamps?.length === 0 && userData?.access && (
          <div className="w-full h-[250px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
            No bootcamps for your age range yet..
          </div>
        )}

        {!userData?.access && (
          <div className="w-full mt-8 flex gap-4 md:gap-6 md:flex-wrap overflow-x-auto md:overflow-x-hidden py-8">
            {allBootcampsRaw?.slice(0, 5)?.map((item, index) => {
              return <BootcampCard item={item} key={index} />;
            })}
          </div>
        )}
        {allBootcampsRaw?.length === 0 && !userData?.access && (
          <div className="w-full h-[250px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
            Nothing yet..
          </div>
        )}
      </Tabs.Item>
      <Tabs.Item title="Independent learning">
        {allCourses?.length > 0 && userData?.access && (
          <>
            <div className="w-full mt-8 flex gap-4 md:flex-wrap overflow-x-auto md:overflow-x-hidden py-8">
              {allCourses?.length >= 4
                ? allCourses?.slice(0, 5)?.map((item, index) => {
                    return <CourseCard item={item} key={index} />;
                  })
                : allCourses?.map((item, index) => {
                    return <CourseCard item={item} key={index} />;
                  })}
            </div>
            <button className="px-5 py-2 bg-yellow-300 rounded-md text-black hover:bg-yellow-300/80 mt-4">
              View Courses
            </button>
          </>
        )}

        {!userData?.access && (
          <div className="w-full h-[250px] border border-black/10 bg-black/50 flex justify-center items-center rounded-lg text-black/50">
            <Link to="/login">
              {" "}
              <button className="px-6 py-2 bg-yellow-300 text-white">
                Login
              </button>
            </Link>
          </div>
        )}
        {allCourses?.length === 0 && userData?.access && (
          <div className="w-full h-[250px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
            Nothing yet..
          </div>
        )}
      </Tabs.Item>
    </Tabs.Group>
  );
}

const customTheme = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    styles: {
      default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
      underline:
        "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
      pills:
        "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
      fullWidth:
        "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none",
    },
    tabitem: {
      base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:outline-none",
      styles: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          },
        },
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "text-yellow-300 dark:text-yellow-300 border-b-2 border-yellow-300",
            off: "text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
          },
          hover: {
            on: "border-gray-300",
            off: "border-gray-300",
          },
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-cyan-600 text-white",
            off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
          },
        },
        fullWidth: {
          base: "ml-0 first:ml-0 w-full rounded-none flex",
          active: {
            on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
            off: "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabpanel: "py-3",
};
