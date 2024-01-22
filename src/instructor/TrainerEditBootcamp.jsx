/* eslint-disable react/no-unescaped-entities */
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import ToastMod from "../components/ToastMod";
import SidebarAdmin from "./components/SidebarAdmin";
import HeaderAdmin from "./components/HeaderAdmin";
import { useNavigate, useParams } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";
import Loader from "../components/Loader";
import { useState } from "react";
import EditBootcampForm from "./components/EditBootcampForm";

const TrainerEditBootcamps = () => {
  const { userData } = useAppContext();
  const {
    // handleBootcampChange,
    // formData,
    // handleVideoChange,
    // videoPreview,
    // handleImageChange,
    // imagePreview,
    allBootcamps,
    submitEditBootcamp,
    setValidationErr,
    validationErr,
    edittingBootcamp,
    bootcampSuccess,
    uploadingBootcampErr,
  } = useAdminContext();

  const navigate = useNavigate();

  //   console.log("userData", userData);

  const { title } = useParams();
  const currentBootcamp = allBootcamps?.filter(
    (item) => item?.title === title
  )[0];

  const [formData, setFormData] = useState({
    title: currentBootcamp?.title,
    description: currentBootcamp?.description,
    cover_video: "",
    cover_image: "",
    price: currentBootcamp?.price,
    learning_method: currentBootcamp?.program_type,
    age_range: currentBootcamp?.age_range,
  });

  // console.log("currentBootcamp", currentBootcamp);

  function handleBootcampChange(e) {
    const { value, id } = e.target;
    setValidationErr("");
    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const [imagePreview, setImagePreview] = useState();

  function handleImageChange(e) {
    const file = e.target.files[0];
    setValidationErr("");
    setFormData((prev) => ({ ...prev, cover_image: file }));

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  }

  const [videoPreview, setVideoPreview] = useState();

  function handleVideoChange(e) {
    const file = e.target.files[0];
    setValidationErr("");
    setFormData((prev) => ({ ...prev, cover_video: file }));

    if (file) {
      setVideoPreview(URL.createObjectURL(file));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      formData?.title &&
      formData?.description &&
      formData?.cover_video &&
      formData?.cover_image &&
      formData?.price
    ) {
      submitEditBootcamp(
        formData,
        userData?.access,
        currentBootcamp?.id,
        currentBootcamp?.title
      );
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
      {edittingBootcamp && <Loader />}
      <main className="w-full min-h-screen bg-[#1e293b]/10 md:pl-[270px] px-4 md:pr-[40px] lg:pl-[295px] lg:pr-[15px] py-[90px] text-[#15152b]">
        <div className="w-full min-h-[200px] p-3">
          <div className="w-full lg:w-[70%] min-h-[200px] rounded-lg mt-3 bg-white border border-gray-400/40 shadow-md p-4">
            <div className="w-full flex md:flex-row flex-col justify-between md:items-center">
              <h1 className="font-bold text-[#15152b]/70 md:text-[1.25rem]">
                Edit Bootcamp
              </h1>
            </div>

            <div className="w-full min-h-[300px] mt-5 border py-4 px-4">
              <EditBootcampForm
                validationErr={validationErr}
                formData={formData}
                handleBootcampChange={handleBootcampChange}
                handleVideoChange={handleVideoChange}
                videoPreview={videoPreview}
                handleImageChange={handleImageChange}
                imagePreview={imagePreview}
              />
            </div>
            {validationErr && (
              <p className="text-red-500 text-[.95rem] font-medium mt-3 text-end w-full">
                {validationErr}
              </p>
            )}
            {uploadingBootcampErr && (
              <p className="text-red-500 text-[.95rem] font-medium mt-3 w-full border border-red-500 p-2 rounded-md">
                {uploadingBootcampErr}
              </p>
            )}
            <div className="flex gap-3 items-center justify-end mt-3 md:mt-5">
              <button className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 text-gray-600 border-2 border-gray-400">
                Save as Draft
              </button>
              <button
                onClick={() => navigate("/bootcamp-management")}
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

export default TrainerEditBootcamps;
