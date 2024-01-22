/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
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

const TrainerCreateBootcampTopic = () => {
  const { userData } = useAppContext();
  const {
    topicSuccess,
    allBootcamps,
    uploadingBootcampTopic,
    handleBootcampTopicChange,
    bootcamptopicData,
    validationErr,
    setbootcampTopicData,
    setValidationErr,
    submitBootcampTopic,
    uploadingBootcampTopicErr,
  } = useAdminContext();

  const navigate = useNavigate();

  const { title } = useParams();
  const currentBootcamp = allBootcamps?.filter(
    (item) => item?.title === title
  )[0];
  // console.log("currentBootcamp", currentBootcamp);

  useEffect(() => {
    if (currentBootcamp) {
      setbootcampTopicData((prev) => {
        return {
          ...prev,
          bootcamp: currentBootcamp?.id,
        };
      });
    }
  }, [currentBootcamp]);
  //   const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      bootcamptopicData?.title &&
      bootcamptopicData?.description &&
      bootcamptopicData?.bootcamp
    ) {
      submitBootcampTopic(userData?.access, title, currentBootcamp?.id);
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
      {uploadingBootcampTopic && <Loader />}
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
                <Link to="/bootcamp-management">My Bootcamps</Link>{" "}
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
                      validationErr && !bootcamptopicData?.title
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                    placeholder="Onboarding"
                    required
                    value={bootcamptopicData?.title}
                    onChange={handleBootcampTopicChange}
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
                      validationErr && !bootcamptopicData?.description
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                    placeholder="To begin your journey..."
                    required
                    value={bootcamptopicData?.description}
                    onChange={handleBootcampTopicChange}
                  />
                </div>
              </form>

              {validationErr && (
                <p className="text-red-500 text-[.95rem] font-medium mt-3 text-end w-full">
                  {validationErr}
                </p>
              )}
              {uploadingBootcampTopicErr && (
                <p className="text-red-500 text-[.95rem] font-medium mt-3 w-full border border-red-500 p-2 rounded-md">
                  {uploadingBootcampTopicErr}
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

export default TrainerCreateBootcampTopic;
