/* eslint-disable react/no-unescaped-entities */
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import Loader from "../components/Loader";
// import bootcampData from "../data/bootcamp.json";
import ScrollToTop from "../ScrollToTop";
// import BootcampCard from "../components/BootcampCard";
import ToastMod from "../components/ToastMod";
import SidebarAdmin from "./components/SidebarAdmin";
import HeaderAdmin from "./components/HeaderAdmin";
import CourseTab from "./components/CourseTab";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";
import { useState } from "react";
import Loader from "../components/Loader";
// import StaticCarousel from "../components/BootcampCard";

const TrainerCourse = () => {
  const { courseSuccess, loader } = useAdminContext();

  //   const user = userData?.user_data;
  const navigate = useNavigate();

  const [showOptions, setShowOptions] = useState(null);

  return (
    <>
      {courseSuccess && (
        <div className="w-[300px]">
          <ToastMod message="Course created successfully" />
        </div>
      )}

      <SidebarAdmin />
      <HeaderAdmin />
      {loader && <Loader />}
      <main
        onClick={(e) => {
          e.stopPropagation();
          setShowOptions(null);
        }}
        className="w-full min-h-screen bg-[#1e293b]/10 md:pl-[270px] px-2 md:px-4 md:pr-[40px] lg:pl-[295px] lg:pr-[15px] py-[80px] md:py-[90px] text-[#15152b]"
      >
        <div className="w-full min-h-[200px] p-3">
          <div className="w-full min-h-[200px] rounded-lg mt-3 bg-white border border-gray-400/40 shadow-md p-4">
            <div className="w-full flex justify-between items-center">
              <h1 className="font-medium text-[#15152b]/70 md:text-[1rem]">
                My Courses
              </h1>
              <button
                onClick={() => navigate("/course-create")}
                className="flex items-center gap-2 text-blue-500 px-2 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:bg-blue-500/80 hover:text-white border-2 border-blue-500"
              >
                {" "}
                <img
                  alt=""
                  src="/images/icons8-add-30.png"
                  className="w-5 h-5 object-cover rounded-md"
                />{" "}
                Create Course
              </button>
            </div>

            <div className="w-full mt-5">
              <CourseTab
                showOptions={showOptions}
                setShowOptions={setShowOptions}
              />
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
      <ScrollToTop />
    </>
  );
};

export default TrainerCourse;
