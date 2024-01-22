/* eslint-disable react/no-unescaped-entities */
import ScrollToTop from "../ScrollToTop";
import ToastMod from "../components/ToastMod";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import CreateSchoolForm from "./components/CreateSchoolForm";
import SidebarMaketer from "./components/SidebarMaketer";
import HeaderMaketer from "./components/HeaderMaketer";
import { useMaketerContext } from "../contexts/MaketerContext";

const MaketerCreateSchool = () => {
  // const { userData } = useAppContext();

  const {
    handleSchoolChange,
    schoolData,
    imagePreview1,
    handleImageChange1,
    imagePreview2,
    handleImageChange2,
    setschoolData,
    uploadingschool,
    schoolSuccess,
    uploadingschoolErr,
    submitschool,
    setValidationErr,
    validationErr,
  } = useMaketerContext();

  const navigate = useNavigate();

  //   console.log("userData", userData);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      schoolData?.name &&
      schoolData?.address &&
      schoolData?.image1 &&
      schoolData?.image2 &&
      schoolData?.email &&
      schoolData?.lga &&
      schoolData?.reference_contact &&
      schoolData?.reference_contact2 &&
      schoolData?.number_of_girls &&
      schoolData?.number_of_boys
    ) {
      submitschool();
    } else {
      setValidationErr("All fields are required");
    }
  }

  return (
    <>
      {schoolSuccess && (
        <div className="w-[300px]">
          <ToastMod message="School added uccessfully" />
        </div>
      )}

      <SidebarMaketer />
      <HeaderMaketer />
      {uploadingschool && <Loader />}
      <main className="w-full min-h-screen bg-[#1e293b]/10 md:pl-[270px] px-4 md:pr-[40px] lg:pl-[295px] lg:pr-[15px] py-[90px] text-[#15152b]">
        <div className="w-full min-h-[200px] p-3">
          <div className="w-full lg:w-[70%] min-h-[200px] rounded-lg mt-3 bg-white border border-gray-400/40 shadow-md p-4">
            <div className="w-full flex md:flex-row flex-col justify-between md:items-center">
              <h1 className="font-bold text-[#15152b]/70 md:text-[1.25rem]">
                Create School
              </h1>
            </div>

            <div className="w-full min-h-[300px] mt-5 border py-4 px-4">
              <CreateSchoolForm
                validationErr={validationErr}
                schoolData={schoolData}
                handleSchoolChange={handleSchoolChange}
                imagePreview1={imagePreview1}
                handleImageChange1={handleImageChange1}
                imagePreview2={imagePreview2}
                handleImageChange2={handleImageChange2}
              />
            </div>
            {validationErr && (
              <p className="text-red-500 text-[.95rem] font-medium mt-3 text-end w-full">
                {validationErr}
              </p>
            )}
            {uploadingschoolErr && (
              <p className="text-red-500 text-[.95rem] font-medium mt-3 w-full border border-red-500 p-2 rounded-md">
                {uploadingschoolErr}
              </p>
            )}
            <div className="flex gap-3 items-center justify-end mt-3 md:mt-5">
              <button
                onClick={() => {
                  setschoolData({});
                  setValidationErr(false);
                  navigate("/school-management");
                }}
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

export default MaketerCreateSchool;
