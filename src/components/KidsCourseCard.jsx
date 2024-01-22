// import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../contexts/AppContext";

import { useState } from "react";
import { useAdminContext } from "../contexts/AdminContext";

/* eslint-disable react/prop-types */
const KidsCourseCard = ({ item, handleOpenSub }) => {
  const { allBootcamps } = useAdminContext();
  console.log("allBootcamps", allBootcamps);

  // const navigate = useNavigate();

  const [openMode, setOpenMod] = useState(false);

  function linkToCourse() {
    // navigate(`/course/${item?.title.replace(/ /g, "-")}`);
    // setCurrentCourse(item);
    setOpenMod(true);
  }

  return (
    <>
      <div className="w-full min-w-[240px] max-w-[250px] h-[290px] p-3 border border-yellow-300 bg-white shadow-lg rounded-xl text-black transition-all duration-300 hover:scale-[1.1]">
        <img
          alt=""
          src={item?.cover_image}
          onClick={linkToCourse}
          className="w-full h-[120px] object-cover border-black/20 cursor-pointer rounded-t-md"
        />
        <div className="h-[100px] py-5 rounded-b-md flex flex-col justify-between">
          <p
            onClick={linkToCourse}
            className="font-medium mb-2 text-[1rem] md:text-[1.1rem] cursor-pointer"
          >
            {item?.title}
          </p>
          <div className="text-[.75em] font-medium mb-auto flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>{" "}
            {item?.program_type}
          </div>
          {/* <div className="text-[.75em] font-medium mb-auto flex gap-2 items-center">
     <div className="w-2 h-2 rounded-full bg-purple-500"></div>{" "}
     {item?.max_students} max students
   </div> */}
          <div className="flex gap-3 items-center mb-3 text-[.85rem]">
            <p className="whitespace-nowrap truncate">{item?.instructor}</p>
            <p>{item?.rating}</p>
          </div>
          <p className="font-bold text-[1.2rem] font-petch mt-auto">
            {item?.price ? item?.price : item?.course_type}
          </p>
        </div>
      </div>
      {openMode && (
        <div className="w-full h-screen bg-black/80 fixed top-0 left-0 flex justify-center z-[999] p-3 py-[200px] md:py-[180px] overflow-y-auto">
          <div className="w-[300px] md:w-[500px] h-fit p-3 md:p-7 rounded-md text-black/90 bg-white slide">
            <h1 className="text-[1.35rem] md:text-[1.75rem] font-bold font-petch">
              Get Started at Affordable Rate
            </h1>
            <p className="text-[.85rem]  mt-2 tracking-wide">
              Subscribe at only{" "}
              <span className="font-bold">1000 Naira per month</span> to our
              bootcamps/school and embark on a journey of continuous learning
              and growth.
            </p>

            <button
              onClick={handleOpenSub}
              className="px-5 py-2 leading-tight bg-yellow-300 rounded-md text-black text-[.85rem] hover:bg-yellow-300/80 mt-4 border border-yellow-300"
            >
              Enroll Now
            </button>
            <button
              onClick={() => setOpenMod(false)}
              className="px-5 py-2 leading-tight bg-white rounded-md text-black text-[.85rem] hover:bg-yellow-300/80 mt-4 ml-3 border border-black/30"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default KidsCourseCard;
