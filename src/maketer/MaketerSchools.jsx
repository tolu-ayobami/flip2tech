/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import ScrollToTop from "../ScrollToTop";
import { useNavigate } from "react-router-dom";
import MaketerSchoolsTab from "./components/MaketerSchoolsTab";
import SidebarMaketer from "./components/SidebarMaketer";
import HeaderMaketer from "./components/HeaderMaketer";
import { useMaketerContext } from "../contexts/MaketerContext";
import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PulseLoader } from "react-spinners";
import Loader from "../components/Loader";
import Confetti from "react-confetti";

const TrainerSchools = () => {
  const {
    inlineLoader,
    fetchMySchools,
    fetchMyFcmb,
    // fcmbAccountStatus,
    fcmbData,
    handlefcmbChange,
    validationErr,
    openMod,
    setOpenMod,
    submittingAccountErr,
    submittingAccount,
    submitAccount,
    mySchools,
    submitted,
  } = useMaketerContext();
  const { userData } = useAppContext();

  useEffect(() => {
    fetchMySchools(userData?.user_data?.uid);
    fetchMyFcmb();
  }, []);

  const navigate = useNavigate();

  function openForm() {
    navigate("/create-school");
  }

  useEffect(() => {
    if (mySchools?.length === 20 && !submitted) {
      setOpenMod(true);
      localStorage.setItem("20schools", true);
    }
  }, [mySchools]);

  return (
    <>
      {submittingAccount && <Loader />}

      <SidebarMaketer />
      <HeaderMaketer />
      <main className="w-full min-h-screen bg-[#1e293b]/10 md:pl-[270px] px-4 md:pr-[40px] lg:pl-[295px] lg:pr-[15px] py-[90px] text-[#15152b]">
        <div className="w-full min-h-[200px] p-3">
          <div className="w-full min-h-[200px] rounded-lg mt-3 bg-white border border-gray-400/40 shadow-md p-4">
            <div className="w-full flex justify-between items-center">
              <h1 className="font-bold text-[#15152b]/70 md:text-[1.25rem]">
                My Schools
              </h1>
              {inlineLoader ? (
                <PulseLoader color="#FFBD13" size={15} />
              ) : (
                <button
                  onClick={() => openForm()}
                  className="flex items-center gap-2 text-blue-500 px-2 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:bg-blue-500/80 hover:text-white border-2 border-blue-500"
                >
                  {" "}
                  <img
                    alt=""
                    src="/images/icons8-add-30.png"
                    className="w-5 h-5 object-cover rounded-md"
                  />{" "}
                  Refer School
                </button>
              )}
            </div>

            <div className="w-full mt-5">
              <MaketerSchoolsTab />
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
      <ScrollToTop />

      {openMod && (
        <div className="w-full h-screen bg-black/70 fixed top-0 left-0 flex justify-center z-20 p-3 py-[100px] md:py-[200px] overflow-y-auto">
          {/* to display confetti if 20 schools milestone is achieved */}
          {openMod && (
            <Confetti
              numberOfPieces={300}
              width={window.innerWidth || 300}
              height={window.innerHeight || 200}
            />
          )}
          <div className="w-full md:w-[600px] h-fit bg-white rounded-lg p-3 md:p-6 flex flex-col gap-5 slide">
            <h2 className="uppercase text-center">
              You have successfully referred 20 approved schools! <br />
              Add Your FCMB Account Details.
            </h2>

            <form className="w-full flex flex-col gap-3">
              <div>
                <label
                  htmlFor="account_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Account Name
                </label>
                <input
                  type="text"
                  id="account_name"
                  className={`bg-gray-50 border ${
                    (validationErr && !fcmbData?.account_name) ||
                    fcmbData?.account_name?.length >= 200
                      ? "border-red-500"
                      : "border-gray-300"
                  } text-gray-900 text-[.75em] sm:text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-600 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 block w-full`}
                  placeholder="John Doe"
                  required
                  value={fcmbData.account_name}
                  onChange={handlefcmbChange}
                />
              </div>
              <div>
                <label
                  htmlFor="account_number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Account Number
                </label>
                <input
                  type="number"
                  id="account_number"
                  className={`bg-gray-50 border ${
                    (validationErr && !fcmbData?.account_number) ||
                    fcmbData?.account_number?.length >= 200
                      ? "border-red-500"
                      : "border-gray-300"
                  } text-gray-900 text-[.75em] sm:text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-600 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 block w-full`}
                  placeholder="12345678910"
                  required
                  value={fcmbData.account_number}
                  onChange={handlefcmbChange}
                />
              </div>
              {validationErr && (
                <p className="text-red-500 text-[.95rem] font-medium mt-3 text-end w-full">
                  {validationErr}
                </p>
              )}
              {submittingAccountErr && (
                <p className="text-red-500 text-[.95rem] font-medium mt-3 w-full border border-red-500 p-2 rounded-md">
                  {submittingAccountErr}
                </p>
              )}
            </form>

            <div className="flex gap-3 items-center justify-center mt-3 md:mt-5">
              <button
                onClick={() => setOpenMod(false)}
                className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 border-gray-400 bg-white border-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  submitAccount();
                }}
                className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 bg-yellow-300 text-black border-2 border-yellow-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrainerSchools;
