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
import { useEffect, useState } from "react";
import BootcampTopicCard from "./components/BootcampTopicCard";
import { useAppContext } from "../contexts/AppContext";
// import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

const TrainerBootcampDetails = () => {
  const {
    courseSuccess,
    bootcampDetails,
    allBootcamps,
    loader,
    inlineLoader,
    // bootcampDetails,
    fetchBootcampDetail,
    setbootcampTopicContent,
    fetchAllTopics,
    allTopics,
  } = useAdminContext();
  //   console.log("bootcampDetails", bootcampDetails);
  const { userData } = useAppContext();

  const { title } = useParams();
  const currentBootcamp = allBootcamps?.filter(
    (item) => item?.title === title
  )[0];
  //   console.log("currentBootcamp", currentBootcamp);

  //   const user = userData?.user_data;
  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.access && currentBootcamp) {
      fetchBootcampDetail(userData?.access, currentBootcamp?.id);
      fetchAllTopics();
    }
  }, [userData?.access, currentBootcamp]);

  const [displayContent, setDisplayContent] = useState(null);
  function toggleOpen(item) {
    if (displayContent?.id === item?.id) {
      // If the clicked item is already open, close it
      closeAll();
    } else {
      // Close all dropdowns first
      closeAll();
      setbootcampTopicContent([]);

      // After closing, open the clicked item after a delay of 300ms
      setTimeout(() => {
        setDisplayContent(item);
      }, 300);
    }
  }

  function closeAll() {
    setDisplayContent(null);
  }

  console.log("bootcampDetails", bootcampDetails);

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
              <h1 className="font-medium text-yellow-800 md:text-[1rem]">
                <Link to="/bootcamp-management/">My Bootcamps</Link>{" "}
                <span className="text-black/30">{">"}</span> {title}
              </h1>
              <button
                onClick={() =>
                  navigate(
                    `/bootcamp-management/${currentBootcamp?.title}/edit`
                  )
                }
                className="flex items-center gap-2 text-blue-500 px-2 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:bg-blue-500/80 hover:text-white border-2 border-blue-500"
              >
                <div className="p-1 bg-blue-500 rounded-full">
                  <img
                    alt=""
                    src="/images/icons8-edit-64.png"
                    className="w-3 h-3 md:w-4 md:h-4 object-cover rounded-md"
                  />
                </div>
                Edit
              </button>
            </div>

            <div className="w-full min-h-[200px] mt-5">
              <div className="w-full flex flex-col md:flex-row flex-wrap gap-3">
                <img
                  alt=""
                  src={currentBootcamp?.cover_image}
                  className="w-full md:min-w-[400px] md:w-[20%] h-[200px] object-cover border-yellow-300 border-2 cursor-pointer rounded-md"
                />
                <div className="w-full md:w-[60%]">
                  <h1 className="font-medium text-[1.25rem] uppercase">
                    {currentBootcamp?.title}
                  </h1>
                  <p className="font-normal text-[1rem] my-3">
                    {currentBootcamp?.description}
                  </p>
                  <p className="text-[1rem] my-2 font-medium">
                    {currentBootcamp?.price}
                  </p>
                  <div className="text-[.95em] font-normal flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>{" "}
                    Program Type -{" "}
                    <span className="font-medium">
                      {currentBootcamp?.program_type}
                    </span>
                  </div>
                  <div className="text-[.95em] font-normal flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>{" "}
                    Enrolled Students -{" "}
                    <span className="font-medium">
                      {currentBootcamp?.num_enrolled}
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full mt-5">
                <h2 className="font-medium uppercase mb-4">Cover Video</h2>
                <video
                  controls
                  className="border-2 border-yellow-300 rounded-md w-full md:min-w-[400px] md:w-[20%] h-[200px] object-cover"
                >
                  <source src={currentBootcamp?.cover_video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="w-full mt-10">
                <h2 className="font-medium uppercase mb-4 text-center text-[1.25rem]">
                  Topics
                </h2>
                {bootcampDetails?.length === 0 && !inlineLoader && (
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

                {bootcampDetails?.length > 0 && !inlineLoader && (
                  <div className="w-full min-h-[150px] rounded-lg text-black/80 p-2 flex flex-col gap-2 items-center border border-black/20">
                    {bootcampDetails?.map((item, index) => {
                      return (
                        <BootcampTopicCard
                          item={item}
                          key={index}
                          currentBootcamp={currentBootcamp}
                          toggleOpen={toggleOpen}
                          displayContent={displayContent}
                          allTopics={allTopics}
                        />
                      );
                    })}
                  </div>
                )}
                <div className="w-full flex justify-center">
                  <button
                    onClick={() =>
                      navigate(
                        `/bootcamp-management/${currentBootcamp?.title}/create-topic`
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

export default TrainerBootcampDetails;
