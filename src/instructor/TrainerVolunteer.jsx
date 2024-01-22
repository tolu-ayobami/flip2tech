/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import ScrollToTop from "../ScrollToTop";
import ToastMod from "../components/ToastMod";
import SidebarAdmin from "./components/SidebarAdmin";
import HeaderAdmin from "./components/HeaderAdmin";
import { useAdminContext } from "../contexts/AdminContext";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useMaketerContext } from "../contexts/MaketerContext";
import VolunteerTab from "./components/VolunteerTab";

const TrainerVolunteer = () => {
  const { courseSuccess, loader } = useAdminContext();
  const {
    fetchAllVolunteers,
    allVolunteers,
    // inlineLoader,
    fetchMySchools,
    // mySchools,
  } = useMaketerContext();

  const [show, setshow] = useState(null);

  useEffect(() => {
    if (show) {
      fetchMySchools(show?.uid);
    }
    fetchAllVolunteers();
  }, [show]);

  //   const user = userData?.user_data;

  function toggleShow(vol) {
    setshow(vol);
  }

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
        }}
        className="w-full min-h-screen bg-[#1e293b]/10 md:pl-[270px] px-2 md:px-4 md:pr-[40px] lg:pl-[295px] lg:pr-[15px] py-[80px] md:py-[90px] text-[#15152b]"
      >
        <div className="w-full min-h-[200px] p-3">
          <div className="w-full min-h-[200px] rounded-lg mt-3 bg-white border border-gray-400/40 shadow-md p-4">
            <div className="w-full flex justify-between items-center">
              <h1 className="font-medium text-[#15152b]/70 md:text-[1rem]">
                Volunteers
              </h1>
            </div>

            <div className="w-full mt-8 flex md:flex-row flex-col gap-4 md:gap-6 md:flex-wrap overflow-x-auto md:overflow-x-hidden pb-20">
              {/* {allVolunteers?.length === 0 && !inlineLoader && (
                <p className="text-gray-500 mt-4">No content yet..</p>
              )}
              {inlineLoader && (
                <div className="w-full h-[100px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
                  <PulseLoader color="#FFBD13" size={15} />
                </div>
              )} */}

              {allVolunteers?.length > 0 && (
                <VolunteerTab
                  toggleShow={toggleShow}
                  show={show}
                  setshow={setshow}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
      <ScrollToTop />
    </>
  );
};

export default TrainerVolunteer;
