/* eslint-disable react-hooks/exhaustive-deps */
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
import { useAdminContext } from "../contexts/AdminContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
// import StaticCarousel from "../components/BootcampCard";

const TrainerCreateTopic = () => {
  const { userData } = useAppContext();
  const {
    topicSuccess,
    allCourses,
    uploadingTopic,
    handleTopicChange,
    topicData,
    validationErr,
    setTopicData,
    setValidationErr,
    submitTopic,
    uploadingTopicErr,
  } = useAdminContext();
  //   console.log("topicData", topicData);

  const navigate = useNavigate();

  const { title } = useParams();
  const currentCourse = allCourses?.filter((item) => item?.title === title)[0];
  //   console.log("currentCourse", currentCourse);

  useEffect(() => {
    if (currentCourse) {
      setTopicData((prev) => {
        return {
          ...prev,
          course: currentCourse?.id,
        };
      });
    }
  }, []);
  //   const navigate = useNavigate();

  function handleKeyDown(event) {
    const allowedKeys = [
      "ArrowLeft",
      "ArrowRight",
      "Backspace",
      "Delete",
      "Tab",
    ];
    const allowedCharacters = /[0-9:]/;

    if (
      !allowedKeys.includes(event.key) &&
      !allowedCharacters.test(event.key)
    ) {
      event.preventDefault();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      topicData?.title &&
      topicData?.description &&
      topicData?.course &&
      topicData?.time_frame
    ) {
      submitTopic(userData?.access, title, currentCourse?.id);
    } else {
      setValidationErr("All fields are required");
    }
  }

  return (
    <>
      {topicSuccess && (
        <div className="w-[300px]">
          <ToastMod message="Topic created successfully" />
        </div>
      )}

      <SidebarAdmin />
      <HeaderAdmin />
      {uploadingTopic && <Loader />}
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
                <span className="text-black/30">{">"}</span> {title}{" "}
                <span className="text-black/30">{">"}</span> Create Topic
              </h1>
            </div>

            <div className="w-full min-h-[200px] mt-5">
              <form className="w-full flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
                      validationErr && !topicData?.title
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                    placeholder="Onboarding"
                    required
                    value={topicData.title}
                    onChange={handleTopicChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    id="description"
                    className={`bg-gray-50 min-h-[100px] border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
                      validationErr && !topicData?.description
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                    placeholder="To begin your journey..."
                    required
                    value={topicData.description}
                    onChange={handleTopicChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="time_frame"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Time frame
                  </label>
                  <input
                    type="text"
                    id="time_frame"
                    className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
                      validationErr && !topicData?.time_frame
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                    placeholder="01:30:00"
                    required
                    value={topicData.time_frame}
                    onChange={handleTopicChange}
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </form>

              {validationErr && (
                <p className="text-red-500 text-[.95rem] font-medium mt-3 text-end w-full">
                  {validationErr}
                </p>
              )}
              {uploadingTopicErr && (
                <p className="text-red-500 text-[.95rem] font-medium mt-3 w-full border border-red-500 p-2 rounded-md">
                  {uploadingTopicErr}
                </p>
              )}

              <div className="flex gap-3 items-center justify-end mt-3 md:mt-5">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 border-blue-500 bg-white border-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 bg-blue-500 text-white border-2 border-blue-500"
                >
                  Submit
                </button>
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

export default TrainerCreateTopic;
