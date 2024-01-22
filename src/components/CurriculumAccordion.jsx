/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
"use client";
import { Accordion } from "flowbite-react";
import { useState } from "react";
import { useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { useAdminContext } from "../contexts/AdminContext";
import { useAppContext } from "../contexts/AppContext";

export default function CurriculumAccordion({
  bootcampDetails,
  currentBootcamp,
}) {
  const { inlineLoader, userData } = useAppContext();
  const { fetchBootcampTopicContent, bootcampTopicContent, fetchingContent } =
    useAdminContext();

  const [currentTopic, setCurrentTopic] = useState({});

  useEffect(() => {
    if (currentTopic) {
      fetchBootcampTopicContent(
        userData?.access,
        currentBootcamp?.id,
        currentTopic?.id
      );
    }
  }, [currentTopic]);

  const [displayContent, setDisplayContent] = useState(null);
  function toggleOpen(item) {
    setDisplayContent((prev) => (prev === null ? item : null));
  }

  console.log("displayContent", displayContent);
  return (
    <Accordion collapseAll theme={customTheme}>
      {bootcampDetails?.map((item, index) => {
        return (
          <Accordion.Panel
            key={index}
            onClick={() => {
              setCurrentTopic(item);
            }}
          >
            <Accordion.Title
              onClick={() => {
                setCurrentTopic(item);
                toggleOpen(item);
                console.log("topic clicked");
              }}
            >
              <p className="font-bold">{item?.title}</p>
            </Accordion.Title>
            <Accordion.Content>
              {inlineLoader && (
                <div className="w-full flex items-center justify-center">
                  <PulseLoader color="#FFBD13" size={15} />
                </div>
              )}

              {/* {!inlineLoader && bootcampTopicContent?.length > 0 && (
                <ul className=" text-gray-500 dark:text-gray-400">
                  <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
                    <p>Sub topic 1</p>
                  </li>
                  <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
                    <p>Sub topic 2</p>
                  </li>
                </ul>
              )} */}
              {displayContent === item && (
                <div className="w-[95%] md:w-[90%] min-h-[100px] p-2 mx-auto mb-3 bg-gray-100 border-x border-b border-black/20 rounded-b-lg flex flex-col gap-2 items-center">
                  {bootcampTopicContent?.length === 0 && !fetchingContent && (
                    <p className="text-gray-500">No content yet..</p>
                  )}
                  {fetchingContent && (
                    <div className="w-full h-[100px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
                      <PulseLoader color="#FFBD13" size={15} />
                    </div>
                  )}
                  {bootcampTopicContent?.length > 0 &&
                    bootcampTopicContent?.map((content, index) => {
                      return (
                        <div
                          key={index}
                          className="w-full p-3 bg-gray-500/10 rounded-lg flex md:flex-row flex-col gap-3"
                        >
                          <div className="w-full">
                            <p className="mb-2 text-center w-full">
                              {content?.title}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </Accordion.Content>
          </Accordion.Panel>
        );
      })}
    </Accordion>
  );
}

const customTheme = {
  root: {
    base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
    flush: {
      off: "rounded-lg border",
      on: "border-b",
    },
  },
  content: {
    base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg",
  },
  title: {
    arrow: {
      base: "h-6 w-6 shrink-0",
      open: {
        off: "",
        on: "rotate-180",
      },
    },
    base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
    flush: {
      off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
      on: "bg-transparent dark:bg-transparent",
    },
    heading: "",
    open: {
      off: "",
      on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white",
    },
  },
};
