/* eslint-disable react/no-unescaped-entities */
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import ToastMod from "../components/ToastMod";
import SidebarAdmin from "./components/SidebarAdmin";
import HeaderAdmin from "./components/HeaderAdmin";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";
import Loader from "../components/Loader";
import CreateCourseForm from "./components/CreateCourseForm";

const TrainerCreateCourse = () => {
  const { userData } = useAppContext();
  const {
    handleCourseChange,
    courseformData,
    handleCourseVideoChange,
    coursevideoPreview,
    handleCourseImageChange,
    courseimagePreview,
    submitCourse,
    setValidationErr,
    validationErr,
    bootcampSuccess,
    req,
    setReq,
    addRequirement,
    requirements,
    removeReq,
    uploadingCourse,
    uploadingCourseErr,
  } = useAdminContext();

  const navigate = useNavigate();

  //   console.log("userData", userData);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      courseformData?.title &&
      courseformData?.description &&
      courseformData?.requirements &&
      courseformData?.max_students &&
      courseformData?.difficulty &&
      courseformData?.q_and_a &&
      courseformData?.category &&
      courseformData?.course_type &&
      courseformData?.intro_video &&
      courseformData?.course_thumbnail
    ) {
      submitCourse(courseformData, userData?.access);
    } else {
      setValidationErr("All fields are required");
    }
  }

  return (
    <>
      {bootcampSuccess && (
        <div className="w-[300px]">
          <ToastMod message="Bootcamp created uccessfully" />
        </div>
      )}

      <SidebarAdmin />
      <HeaderAdmin />
      {uploadingCourse && <Loader />}
      <main className="w-full min-h-screen bg-[#1e293b]/10 md:pl-[270px] px-4 md:pr-[40px] lg:pl-[295px] lg:pr-[15px] py-[90px] text-[#15152b]">
        <div className="w-full min-h-[200px] p-3">
          <div className="w-full lg:w-[70%] min-h-[200px] rounded-lg mt-3 bg-white border border-gray-400/40 shadow-md p-4">
            <div className="w-full flex md:flex-row flex-col justify-between md:items-center">
              <h1 className="font-bold text-[#15152b]/70 md:text-[1.25rem]">
                Create Course
              </h1>
            </div>

            <div className="w-full min-h-[300px] mt-5 border py-4 px-4">
              <CreateCourseForm
                validationErr={validationErr}
                courseformData={courseformData}
                handleCourseChange={handleCourseChange}
                req={req}
                setReq={setReq}
                addRequirement={addRequirement}
                requirements={requirements}
                removeReq={removeReq}
                handleCourseVideoChange={handleCourseVideoChange}
                coursevideoPreview={coursevideoPreview}
                handleCourseImageChange={handleCourseImageChange}
                courseimagePreview={courseimagePreview}
              />
            </div>
            {validationErr && (
              <p className="text-red-500 text-[.95rem] font-medium mt-3 text-end w-full">
                {validationErr}
              </p>
            )}
            {uploadingCourseErr && (
              <p className="text-red-500 text-[.95rem] font-medium mt-3 w-full border border-red-500 p-2 rounded-md">
                {uploadingCourseErr}
              </p>
            )}
            <div className="flex gap-3 items-center justify-end mt-3 md:mt-8">
              <button className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 text-gray-600 border-2 border-gray-400">
                Save as Draft
              </button>
              <button
                onClick={() => navigate("/course-management")}
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
      </main>
      {/* <Footer /> */}
      <ScrollToTop />
    </>
  );
};

export default TrainerCreateCourse;
