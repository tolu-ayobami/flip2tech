/* eslint-disable react/no-unescaped-entities */
import ScrollToTop from "../ScrollToTop";
import ToastMod from "../components/ToastMod";
import SidebarAdmin from "./components/SidebarAdmin";
import HeaderAdmin from "./components/HeaderAdmin";
import AdminBootcampTab from "./components/AdminBootcampTab";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";
import { useState } from "react";

const TrainerBootcamps = () => {
  const { bootcampSuccess } = useAdminContext();
  // const { inlineLoader } = useAdminContext();

  const navigate = useNavigate();

  const [showOptions, setShowOptions] = useState(null);

  return (
    <>
      {bootcampSuccess && (
        <div className="w-[300px]">
          <ToastMod message="Bootcamp created successfully" />
        </div>
      )}

      <SidebarAdmin />
      <HeaderAdmin />
      <main className="w-full min-h-screen bg-[#1e293b]/10 md:pl-[270px] px-2 md:px-4 md:pr-[40px] lg:pl-[295px] lg:pr-[15px] py-[80px] md:py-[90px] text-[#15152b]">
        <div className="w-full min-h-[200px] p-3">
          <div className="w-full min-h-[200px] rounded-lg mt-3 bg-white border border-gray-400/40 shadow-md p-4">
            <div className="w-full flex justify-between items-center">
              <h1 className="font-bold text-[#15152b]/70 md:text-[1.25rem]">
                My Bootcamps
              </h1>
              <button
                onClick={() => navigate("/bootcamp-create")}
                className="flex items-center gap-2 text-blue-500 px-2 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:bg-blue-500/80 hover:text-white border-2 border-blue-500"
              >
                {" "}
                <img
                  alt=""
                  src="/images/icons8-add-30.png"
                  className="w-5 h-5 object-cover rounded-md"
                />{" "}
                Create Bootcamp
              </button>
            </div>

            <div className="w-full mt-5">
              <AdminBootcampTab
                setShowOptions={setShowOptions}
                showOptions={showOptions}
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

export default TrainerBootcamps;
