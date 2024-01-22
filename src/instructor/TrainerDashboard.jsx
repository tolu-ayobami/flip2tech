/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import ToastMod from "../components/ToastMod";
import SidebarAdmin from "./components/SidebarAdmin";
import HeaderAdmin from "./components/HeaderAdmin";
import TableAdmin from "./components/TableAdmin";
import { useAdminContext } from "../contexts/AdminContext";
import { PulseLoader } from "react-spinners";
import { useEffect } from "react";
import students from "../data/student.json";

const TrainerDashboard = () => {
  const { loginSuccess } = useAppContext();
  const { allCourses, inlineLoader, allUsers, fetchAllUsers } =
    useAdminContext();

  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);

  const kids = allUsers?.filter((item) => item?.is_kid === true);

  return (
    <>
      {loginSuccess && (
        <div className="w-[300px] z-[2]">
          <ToastMod message="Logged in successfully" />
        </div>
      )}

      <SidebarAdmin />
      <HeaderAdmin />
      <main className="w-full min-h-screen bg-[#1e293b]/10 md:pl-[270px] px-2 md:px-4 md:pr-[40px] lg:pl-[295px] lg:pr-[15px] py-[80px] md:py-[90px] text-[#1e293b]">
        <div className="w-full flex md:flex-row flex-col md:flex-wrap">
          {/* each card */}
          <div className="w-full md:w-1/2 flex">
            <div className="w-full md:min-w-[300px] p-3">
              <div className="w-full h-[150px] p-4 bg-[#0066FF] text-white border border-gray-400/50 rounded-lg flex relative justify-between">
                <div className="flex justify-center items-center flex-col w-full">
                  <p>NO OF STUDENTS</p>
                  <p className="font-bold text-[1.5rem] md:text-[2.5rem]">
                    {/* {inlineLoader && <PulseLoader color="#FFBD13" size={15} />}
                  {!inlineLoader && allCourses?.length} */}
                    150
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:min-w-[300px] p-3">
              <div className="w-full h-[150px] p-4 bg-[#E3A700] text-white border border-gray-400/50 rounded-lg flex relative justify-between">
                <div className="flex justify-center items-center flex-col w-full">
                  <p>NO OF ASSIGNED COURSES</p>
                  <p className="font-bold text-[1.5rem] md:text-[2.5rem]">
                    {/* {inlineLoader && <PulseLoader color="#FFBD13" size={15} />}
                  {!inlineLoader && allCourses?.length} */}
                    10
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 gap-3 rounded-lg p-4">
            <div className="bg-white h-full p-4 rounded-lg">
              <h2 className="font-bold mb-4 text-[1.2rem]">Assessment</h2>
              <div className="flex gap-3">
                <div className="px-4 py-3 border border-[#E3A700]">
                  Add Assessment
                </div>
                <div className="px-4 py-3 border border-[#0066FF]">
                  No of Tasks:
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-full md:min-w-[300px] md:w-1/3 p-3">
            <div className="w-full h-[120px] p-4 bg-white border border-gray-400/50 rounded-xl flex justify-between relative">
              <div>
                <p className="font-bold text-[1.5rem] md:text-[2.25rem]">
                  {" "}
                  {inlineLoader && <PulseLoader color="#FFBD13" size={15} />}
                  {!inlineLoader && kids?.length}
                </p>
                <p>Total Kids Enrolled</p>
              </div>
              <div className="w-[60px] h-[60px] p-1 rounded-full bg-red-300 flex justify-center items-center">
                <img
                  alt="search icon"
                  src="/images/icons8-kids-30.png"
                  className="w-8 h-8"
                />
              </div>
              <div className="w-[70%] h-2 rounded-full bg-red-300 absolute bottom-3 left-4"></div>
            </div>
          </div> */}
        </div>

        <div className="w-full min-h-[200px] px-4">
          {/* {!inlineLoader && allUsers?.length > 0 && (
            <div className="w-full h-fit py-3 flex flex-col gap-4 overflow-x-auto">
              <TableAdmin allUsers={allUsers} />
            </div>
          )} */}
          <div className=" py-4 overflow-x-auto">
            <h2 className="font-bold text-[1.25rem]">My Students</h2>
            <div className="w-full h-fit py-3 flex flex-col gap-4 overflow-x-auto">
              <TableAdmin allUsers={students} />
            </div>
            {inlineLoader && (
              <div className="w-full bg-white border rounded-lg  h-[100px] flex justify-center items-center">
                <PulseLoader color="#FFBD13" size={15} />
              </div>
            )}
            {/* {!inlineLoader && allUsers?.length === 0 && (
            <div className="w-full border rounded-lg  h-[100px] flex justify-center items-center text-black/50">
              Nothing yet..
            </div>
          )} */}
          </div>
        </div>
      </main>
      {/* <Footer /> */}
      <ScrollToTop />
    </>
  );
};

export default TrainerDashboard;
