import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../../contexts/AdminContext";
// import { useAppContext } from "../../contexts/AppContext";

/* eslint-disable react/prop-types */
const CourseAdminCard = ({ item, index, setShowOptions, showOptions }) => {
  const { fetchCourseDetails } = useAdminContext();
  // const { userData } = useAppContext();

  const [showButtons, setShowButtons] = useState(null);

  function handleHover() {
    setShowButtons(index);
  }

  function handleMouseOut() {
    setShowButtons(null);
  }

  function toggleOptions(course) {
    setShowOptions(null);
    setShowOptions(showOptions ? null : course);
  }

  const navigate = useNavigate();

  return (
    <div
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
      className="w-full md:w-[250px] flex flex-col bg-white rounded-md text-[#1e293b] border-[#1e293b]/30 border shadow-sm transition-all duration-300 relative"
    >
      <img
        alt=""
        src={item?.course_thumbnail}
        onClick={(e) => {
          e.stopPropagation();
          fetchCourseDetails(item?.id, item?.title);
        }}
        className="w-full h-[120px] object-cover border-black/20 cursor-pointer rounded-t-md"
      />
      <div className="px-4 pt-5 pb-3 h-full rounded-b-md flex flex-col justify-between gap-2">
        <p
          //   onClick={linkToCourse}
          className="font-bold text-[1rem] md:text-[1.1rem] cursor-pointer"
        >
          {item?.title}
        </p>
        <div className="flex flex-col gap-2 mb-auto text-[.85rem]">
          <div className="text-[.75rem] font-medium mb-auto flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <p className="whitespace-nowrap truncate">{item?.difficulty}</p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="flex gap-2 items-start">
              {/* <img
                alt=""
                src="/images/icons8-timesheet-48.png"
                className="w-5 h-5 object-cover rounded-md"
              /> */}
              <p className="text-[.75rem]">Category: </p>
              <p className="text-[.75rem] font-bold">{item?.category}</p>
            </div>

            <div className="flex gap-2 items-center">
              {/* <img
                alt=""
                src="/images/icons8-user-64.png"
                className="w-5 h-5 object-cover rounded-md"
              /> */}
              <p className="text-[.75rem]">Max students: </p>
              <p className="text-[.9rem] font-bold">{item?.max_students}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-black/20 pt-3 flex w-full justify-between items-center mt-auto">
          <p className="font-bold text-[1.2rem] font-petch">
            {item?.course_type}
          </p>
          {showButtons === index && (
            <div className="flex gap-2 items-center">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  toggleOptions(item);
                }}
                className="w-7 h-7 rounded-full bg-black cursor-pointer flex justify-center items-center"
              >
                {/* <img
                  alt=""
                  src="/images/icons8-edit-64.png"
                  className="w-5 h-5 object-cover rounded-md"
                /> */}
                <p className="text-[1rem] font-bold text-white mb-2">. . .</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-black cursor-pointer flex justify-center items-center">
                <img
                  alt=""
                  src="/images/deleteCat.png"
                  className="w-4 h-auto object-cover rounded-md"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {showOptions === item && showButtons === index && (
        <ul className="bg-white border border-black/20 w-[200px] p-2 rounded-md shadow-md flex flex-col text-black/80 text-[.85rem] absolute bottom-[-80px] z-[2]">
          <li
            onClick={(e) => {
              e.stopPropagation();
              fetchCourseDetails(item?.id, item?.title);
            }}
            className="border-b py-2 hover:bg-yellow-300/50 cursor-pointer px-2"
          >
            View Course Details
          </li>
          <li
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/course-management/${item?.title}/create-topic`);
            }}
            className="py-2 hover:bg-yellow-300/50 cursor-pointer px-2"
          >
            Add Topic
          </li>
        </ul>
      )}
    </div>
  );
};

export default CourseAdminCard;
