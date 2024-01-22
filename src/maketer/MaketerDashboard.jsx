/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import SidebarMaketer from "./components/SidebarMaketer";
import HeaderMaketer from "./components/HeaderMaketer";
import TableMaketer from "./components/TableMaketer";
import { useEffect } from "react";
import { useMaketerContext } from "../contexts/MaketerContext";
import { PulseLoader } from "react-spinners";

const MaketerDashboard = () => {
  const { userData } = useAppContext();
  const { inlineLoader, fetchMySchools, mySchools } = useMaketerContext();

  useEffect(() => {
    fetchMySchools(userData?.user_data?.uid);
  }, []);

  const approved = mySchools?.filter((itm) => itm?.status === "Validated");
  const declined = mySchools?.filter((itm) => itm?.status === "Declined");

  // console.log("userData", userData);

  return (
    <>
      {/* {loginSuccess && (
        <div className="w-[300px] z-[2]">
          <ToastMod message="Logged in successfully" />
        </div>
      )} */}

      <SidebarMaketer />
      <HeaderMaketer />
      <main className="w-full min-h-screen bg-[#450a0a]/10 md:pl-[270px] px-4 md:pr-[40px] lg:pl-[295px] lg:pr-[15px] py-[90px] text-[#450a0a]">
        <div className="w-full flex md:flex-row flex-col md:flex-wrap">
          {/* each card */}
          <div className="w-full md:min-w-[300px] md:w-1/3 p-3">
            <div className="w-full h-[120px] p-4 bg-[#450a0a] text-white border border-gray-400/50 rounded-xl flex relative justify-between">
              <div>
                <p className="font-bold text-[1.5rem] md:text-[2.25rem]">
                  {inlineLoader && <PulseLoader color="#FFBD13" size={15} />}
                  {!inlineLoader && mySchools?.length}
                </p>
                <p>Total Schools</p>
              </div>
              <div className="w-[60px] h-[60px] p-1 rounded-full bg-yellow-300/90 flex justify-center items-center">
                <img
                  alt="search icon"
                  src="/images/icons8-school-64.png"
                  className="w-8 h-8"
                />
              </div>
              <div className="w-[70%] h-2 rounded-full bg-yellow-300/80 absolute bottom-3 left-4"></div>
            </div>
          </div>

          <div className="w-full md:min-w-[300px] md:w-1/3 p-3">
            <div className="w-full h-[120px] p-4 bg-white border border-gray-400/50 rounded-xl flex justify-between relative">
              <div>
                <p className="font-bold text-[1.5rem] md:text-[2.25rem]">
                  {inlineLoader && <PulseLoader color="#FFBD13" size={15} />}
                  {!inlineLoader && approved?.length}
                </p>
                <p>Total Schools Approved</p>
              </div>
              <div className="w-[60px] h-[60px] p-1 rounded-full bg-green-400 flex justify-center items-center">
                <img
                  alt="search icon"
                  src="/images/icons8-approved-48.png"
                  className="w-8 h-8"
                />
              </div>
              <div className="w-[70%] h-2 rounded-full bg-green-400 absolute bottom-3 left-4"></div>
            </div>
          </div>

          <div className="w-full md:min-w-[300px] md:w-1/3 p-3">
            <div className="w-full h-[120px] p-4 bg-white border border-gray-400/50 rounded-xl flex justify-between relative">
              <div>
                <p className="font-bold text-[1.5rem] md:text-[2.25rem]">
                  {inlineLoader && <PulseLoader color="#FFBD13" size={15} />}
                  {!inlineLoader && declined?.length}
                </p>
                <p>Total Schools Declined</p>
              </div>
              <div className="w-[60px] h-[60px] p-1 rounded-full bg-red-400 flex justify-center items-center">
                <img
                  alt="search icon"
                  src="/images/icons8-cancel-64.png"
                  className="w-8 h-8"
                />
              </div>
              <div className="w-[70%] h-2 rounded-full bg-red-400 absolute bottom-3 left-4"></div>
            </div>
          </div>
        </div>

        {/* <div className="w-full px-4">
          <div className="w-full h-fit p-3 md:p-4 rounded-lg text-[1.15rem] font-bold md:text-[1.5rem] bg-white border border-blacl/10 flex gap-3 items-center">
            <p className="opacity-60">Referral Code:</p>
            <p>{userData?.user_data?.username}</p>
          </div>
        </div> */}

        {/* <div className="w-full px-4 mt-3">
          <div className="w-full h-fit p-3 md:p-4 rounded-lg text-[1.15rem] font-bold md:text-[1.5rem] bg-white border border-blacl/10 flex gap-3 items-center">
            <p className="opacity-60">Amount Earned:</p>
            <div className="flex items-center">
              <img
                alt=""
                className="w-6 h-6"
                src="/images/icons8-naira-24.png"
              />
              <p>{approved?.length * 1000}</p>
            </div>
          </div>
        </div> */}

        <div className="w-full min-h-[200px] px-4 mt-3">
          {!inlineLoader && mySchools?.length > 0 && (
            <div className="w-full h-fit py-3 flex flex-col gap-4 overflow-x-auto">
              <TableMaketer mySchools={mySchools} />
            </div>
          )}
          {inlineLoader && (
            <div className="w-full bg-white border rounded-lg  h-[100px] flex justify-center items-center mt-3">
              <PulseLoader color="#FFBD13" size={15} />
            </div>
          )}
          {!inlineLoader && mySchools?.length === 0 && (
            <div className="w-full border rounded-lg  h-[100px] flex justify-center items-center mt-3 text-black/50">
              Nothing yet..
            </div>
          )}
        </div>
        {/* </div> */}
      </main>
      {/* <Footer /> */}
      <ScrollToTop />
    </>
  );
};

export default MaketerDashboard;
