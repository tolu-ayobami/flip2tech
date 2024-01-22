/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import ScrollToTop from "../ScrollToTop";
import ToastMod from "../components/ToastMod";
import SidebarAdmin from "./components/SidebarAdmin";
import HeaderAdmin from "./components/HeaderAdmin";
import { useAdminContext } from "../contexts/AdminContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { PulseLoader } from "react-spinners";
import { useEffect } from "react";
import TopicCard from "./components/TopicCard";
import { useAppContext } from "../contexts/AppContext";
// import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

const TrainerCourseDetails = () => {
  const {
    courseSuccess,
    courseDetails,
    allCourses,
    loader,
    inlineLoader,
    fetchCourseDetails,
    fetchtopicContent,
  } = useAdminContext();
  // console.log("courseDetails", courseDetails);
  const { userData } = useAppContext();

  const { title } = useParams();
  const currentCourse = allCourses?.filter((item) => item?.title === title)[0];
  //   console.log("currentCourse", currentCourse);

  //   const user = userData?.user_data;
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourseDetails(currentCourse?.id, title);
  }, [currentCourse]);

  useEffect(() => {
    fetchtopicContent(userData?.access);
  }, []);

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
          //   setShowOptions(null);
        }}
        className="w-full min-h-screen bg-[#1e293b]/10 md:pl-[270px] px-4 md:pr-[40px] lg:pl-[295px] lg:pr-[15px] py-[90px] text-[#15152b]"
      >
        <div className="w-full min-h-[200px] p-3">
          <div className="w-full min-h-[200px] rounded-lg mt-3 bg-white border border-gray-400/40 shadow-md p-4">
            <div className="w-full flex justify-between items-center">
              <h1 className="font-medium text-[#15152b]/70 md:text-[1rem]">
                <Link to="/course-management">My Courses</Link>{" "}
                <span className="text-black/30">{">"}</span> {title}
              </h1>
            </div>

            <div className="w-full min-h-[200px] mt-5">
              <div className="w-full flex flex-col md:flex-row flex-wrap gap-3">
                <img
                  alt=""
                  src={currentCourse?.course_thumbnail}
                  className="w-full md:min-w-[400px] md:w-[20%] h-[200px] object-cover border-yellow-300 border-2 cursor-pointer rounded-md"
                />
                <div className="w-full md:w-[60%]">
                  <h1 className="font-medium text-[1.25rem] uppercase">
                    {currentCourse?.title}
                  </h1>
                  <p className="font-normal text-[1rem] my-3">
                    {currentCourse?.description}
                  </p>
                  <div className="text-[.95em] font-normal flex gap-2 items-start">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>{" "}
                    Category -{" "}
                    <span className="font-medium">
                      {currentCourse?.category}
                    </span>
                  </div>
                  <div className="text-[.95em] font-normal flex gap-2 items-start">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>{" "}
                    Course Type -{" "}
                    <span className="font-medium">
                      {currentCourse?.course_type}
                    </span>
                  </div>
                  <div className="text-[.95em] font-normal flex gap-2 items-start">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>{" "}
                    Difficulty -{" "}
                    <span className="font-medium">
                      {currentCourse?.difficulty}
                    </span>
                  </div>
                  <div className="text-[.95em] font-normal flex gap-2 items-start">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>{" "}
                    Maximum Number of Students -{" "}
                    <span className="font-medium">
                      {currentCourse?.max_students}
                    </span>
                  </div>
                  <div className="text-[.95em] font-normal flex gap-2 items-start">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>{" "}
                    Requirements -{" "}
                    <span className="font-medium">
                      "{currentCourse?.requirements}"
                    </span>
                  </div>
                  <div className="text-[.95em] font-normal flex gap-2 items-start">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>Q
                    and A -{" "}
                    <span className="font-medium">
                      {currentCourse?.q_and_a ? "True" : "False"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full mt-5">
                <h2 className="font-medium uppercase mb-4">
                  Introductory Video
                </h2>
                <video
                  controls
                  className="border-2 border-yellow-300 rounded-md w-full md:min-w-[400px] md:w-[20%] h-[200px] object-cover"
                >
                  <source src={currentCourse?.intro_video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="w-full mt-10">
                <h2 className="font-medium uppercase mb-4 text-center text-[1.25rem]">
                  Topics
                </h2>
                {courseDetails?.message ===
                  "No topics found for this course." && (
                  <div className="w-full h-[150px] border border-black/20 rounded-lg flex justify-center items-center text-black/50">
                    <div className="text-center">
                      <p>No topics yet..</p>
                    </div>
                  </div>
                )}
                {inlineLoader && (
                  <div className="w-full h-[150px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
                    <PulseLoader color="#FFBD13" size={15} />
                  </div>
                )}

                {courseDetails?.length > 0 && !inlineLoader && (
                  <div className="w-full min-h-[150px] rounded-lg text-black/80 p-2 flex flex-col gap-2 items-center border border-black/20">
                    {courseDetails?.map((item, index) => {
                      return (
                        <TopicCard
                          item={item}
                          key={index}
                          currentCourse={currentCourse}
                        />
                      );
                    })}
                  </div>
                )}
                <div className="w-full flex">
                  <button
                    onClick={() =>
                      navigate(
                        `/course-management/${currentCourse?.title}/create-topic`
                      )
                    }
                    className="flex items-center gap-2 text-blue-500 mt-3 px-2 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[.85rem] rounded-lg hover:bg-blue-500/80 hover:text-white border-2 border-blue-500"
                  >
                    <img
                      alt=""
                      src="/images/icons8-add-30.png"
                      className="w-5 h-5 object-cover rounded-md"
                    />{" "}
                    Add Topic
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
      <ScrollToTop />
    </>
  );
};

export default TrainerCourseDetails;
