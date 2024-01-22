import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../contexts/AppContext";

/* eslint-disable react/no-unescaped-entities */
const VolunteerPaymentSuccess = () => {
  // const { isAuthenticated } = useAppContext();

  const navigate = useNavigate();

  const [openMode, setOpenMod] = useState(false);

  //   function link() {
  //     navigate("/kids");
  //   }
  return (
    <>
      <section className="w-full min-h-screen bg-register bg-no-repeat bg-cover">
        <section className="w-full min-h-screen bg-white/80 px-[2%] py-[100px] sm:px-[10.4%] relative flex justify-center items-center">
          <div
            className={`w-[96%] md:w-full mx-auto h-[600px] bg-white shadow-lg flex md:flex-row flex-col-reverse justify-between items-center rounded-lg transition-all duration-300 border-2 border-yellow-300/20`}
          >
            {/* texts */}
            <div className="w-full px-4 py-10 md:py-12 md:w-1/2 md:px-[3%] lg:px-[8%]">
              {/* <button
                onClick={() => navigate("/")}
                className="px-5 py-1 bg-white rounded-md text-black hover:bg-yellow-300/80 border-2 border-yellow-300 absolute top-3 left-3 text-[.75rem]"
              >
                Back to home
              </button> */}
              <h1 className="text-[1.75rem] font-bold text-black">
                Congratulations! You have registered as a volunteer.
              </h1>
              <p className="text-[1.2rem] tracking-wide mt-3">
                We're delighted to have you on board as a volunteer, empowering
                your journey within a safe and stimulating environment.
                <br />
                <br /> We will get back to you!
              </p>
              <button
                onClick={() => navigate("/")}
                className="w-full py-5 px-3 bg-yellow-300 mt-3 rounded-md hover:bg-yellow-300/80"
              >
                Back to Home
              </button>
            </div>
            {/* image */}
            <div className="w-full md:w-1/2 h-[400px] md:h-full bg-courses bg-cover bg-no-repeat bg-right block rounded-r-lg p-5 relative">
              <div className="w-full h-full p-3 md:p-6 rounded-lg bg-yellow-300/20 absolute top-0 left-0 text-white flex justify-start items-end">
                <p className="text-[1em] md:text-[1.75rem] font-bold border-4 border-white rounded-lg p-2 md:p-5 bg-black/30">
                  "Unlock your potential as a volunteer, with our platform."
                </p>
              </div>
            </div>
            {/* <div className="h-full rounded-r-xl hidden lg:block">
    <img
      src="/images/registerbg.jpg"
      className="h-full opacity-70 rounded-r-xl object-fit"
    />
  </div> */}
          </div>
        </section>
      </section>

      {openMode && (
        <div className="w-full h-screen bg-black/80 fixed top-0 left-0 flex justify-center z-[3] p-3 py-[100px] md:py-[80px] overflow-y-auto">
          <div className="w-full md:w-[600px] h-fit bg-white rounded-lg p-3 md:p-6 flex flex-col gap-5 slide">
            <h2 className="uppercase text-center">
              You will be signed out. Proceed?
            </h2>

            <div className="flex gap-3 items-center justify-center mt-3 md:mt-5">
              <button
                onClick={() => setOpenMod(false)}
                className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 border-gray-500 bg-white border-2"
              >
                Cancel
              </button>
              <button
                //   onClick={() => }
                className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 bg-yellow-300 text-white border-2 border-yellow-300"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VolunteerPaymentSuccess;
