/* eslint-disable react/no-unescaped-entities */
// ======================================================================Import required dependencies and components
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
// import courseData from "../data/courses.json";
import { useState } from "react";
import programData from "../data/program.json";
import Header2 from "../components/Header2";
import CourseSection1 from "../components/CourseSection1";

const CourseDetails2 = () => {
  // ==============================================================Fetch necessary data from context using hooks
  const { loader } = useAppContext();

  const { title } = useParams();
  //   console.log(title.replace(/-/g, " "));

  const currentCourse = programData?.filter(
    (item) => item?.title.replace(/\//g, "_") === title
  )[0];

  const [showFullText, setShowFullText] = useState(false);

  // ================================================================Course description text that will be truncated
  //   const aboutText =
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborumTemporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

  const toggleTextTruncation = () => {
    setShowFullText(!showFullText);
  };

  // =========================================================Function to truncate the text and show a "Show more" link
  const truncateText = (maxLength) => {
    if (currentCourse?.about.length <= maxLength || showFullText) {
      return currentCourse?.about;
    }
    return currentCourse?.about.slice(0, maxLength) + "...";
  };

  const navigate = useNavigate();

  // const handleDownloadPDF = (path) => {
  //   if (path) {
  //     // Replace 'your-pdf-file.pdf' with the path to your PDF file
  //     const pdfUrl = path;

  //     // Create an anchor element
  //     const a = document.createElement("a");
  //     a.href = pdfUrl;
  //     a.download = path.split("/")[path.split("/").length - 1]; // Set the desired file name

  //     // Trigger a click event on the anchor element
  //     a.click();
  //   }
  // };

  const [showForm, setShowForm] = useState(null);
  function toggleShow(item) {
    setShowForm((prev) => (prev ? null : item));
  }

  return (
    <>
      <Header2 />
      {loader && <Loader />}

      <main className="w-full text-black/80 font-poppins">
        {/* ============================================================================Course header section */}
        <CourseSection1 title={currentCourse?.title} />

        <section className="px-5 lg:px-[6%] mb-10 md:my-20 flex gap-3">
          <div className="w-full md:w-[70%] md:min-w-[500px] relative flex flex-col gap-10 mt-10 md:mt-0">
            {/* =========================================================================================mobile & small screen Sidebar/content section */}
            <div>
              <div className="bg-[#ffbb00]/30 p-[8%] flex flex-col justify-center items-center gap-5 md:hidden">
                <p className="font-bold text-[2rem]">
                  {currentCourse?.price?.map(
                    (x, ind, arr) =>
                      `N${x?.toLocaleString()}${
                        ind !== arr?.length - 1 ? " / " : ""
                      }`
                  )}{" "}
                  {currentCourse?.title?.includes("Children") && (
                    <span className="text-[.95rem]">(N15,000 Monthly)</span>
                  )}
                </p>
                <button
                  onClick={() =>
                    navigate(
                      `/course/${currentCourse?.title.replace(
                        /\//g,
                        "_"
                      )}/enroll`
                    )
                  }
                  className="w-full py-3 bg-yellow-300 hover:bg-yellow-300/70 font-bold"
                >
                  Enroll Now
                </button>
              </div>
              <div className="w-full flex flex-col px-[8%] border-x border-b border-black/20 md:hidden">
                <div className="w-full py-3 flex gap-3 items-center border-b border-bkack/30">
                  <img
                    alt=""
                    src="/images/icons8-students-30.png"
                    className="w-5 h-5 object-cover rounded-md"
                  />
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    Beginner/Intermediate
                  </p>
                </div>
                <div className="w-full py-3 flex gap-3 items-center border-b border-bkack/30">
                  <img
                    alt=""
                    src="/images/icons8-timesheet-48.png"
                    className="w-5 h-5 object-cover rounded-md"
                  />
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    {currentCourse?.duration?.map(
                      (x, ind, arr) =>
                        `N${x?.toLocaleString()}${
                          ind !== arr?.length - 1 ? " / " : ""
                        }`
                    )}{" "}
                    {currentCourse?.title?.includes("Children") && (
                      <span className="text-[.85rem]">(N15,000 Monthly)</span>
                    )}
                  </p>
                </div>

                <div className="w-full py-3 flex gap-3 items-center">
                  <img
                    alt=""
                    src="/images/icons8-certificate-24.png"
                    className="w-5 h-5 object-cover rounded-md"
                  />
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    Certificate of completion
                  </p>
                </div>
              </div>
            </div>
            {/* =========================================================================Course content section */}

            <div className="w-full md:h-[400px] border border-gray-500/40 p-3 md:px-5">
              <h2 className="w-full font-bold text-[1.25rem] mb-1 font-petch">
                What You'll Learn
              </h2>
              <div className="w-full h-full flex flex-col flex-wrap gap-3">
                {currentCourse?.learn?.map((x, ind) => {
                  return (
                    <div
                      key={ind}
                      className="w-full md:w-[45%] flex gap-3 items-start"
                    >
                      <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                      <p className="mt-2 text-[.9rem] tracking-wider">{x}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full">
              <h2 className="w-full font-bold text-[1.25rem] mb-1 font-petch">
                About Course
              </h2>
              <div className="mt-5 text-[.9rem] tracking-wider relative">
                {truncateText(300)}
                {!showFullText && (
                  <div className="w-full h-[45px] absolute bottom-[-10px] bg-gradient-to-t from-white to-white/50"></div>
                )}
              </div>
              <p
                onClick={toggleTextTruncation}
                className="font-bold text-yellow-300 hover:underline cursor-pointer mt-4"
              >
                {showFullText ? "Show less" : "Show more"}
              </p>
            </div>

            <p
              onClick={() => toggleShow(currentCourse)}
              className="font-medium flex gap-2 items-center hover:text-[#ffbb00] cursor-pointer"
            >
              View Syllabus
              <img alt="" className="w-5 h-auto" src="/images/right.png" />
            </p>

            <div className="mt-5 border border-black/20 px-[8%] py-[6%] md:hidden">
              <h2 className="w-full font-bold text-[1.25rem]">Requirements</h2>
              <div className="w-full flex flex-col flex-wrap gap-3">
                <div className="w-full flex gap-3 items-start">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    Access to a computer with an internet connection.
                  </p>
                </div>
                <div className="w-full flex gap-3 items-start">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    A computer with at least 4GB RAM
                  </p>
                </div>
                <div className="w-full flex gap-3 items-start">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    Writing Materials
                  </p>
                </div>

                <h2 className="w-full font-bold text-[1.25rem] mt-5">
                  Audience
                </h2>
                <div className="w-full flex flex-col flex-wrap gap-3">
                  <div className="w-full flex gap-3 items-start">
                    <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                    <p className="mt-2 text-[.9rem] tracking-wider">Newbies</p>
                  </div>
                  <div className="w-full flex gap-3 items-start">
                    <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                    <p className="mt-2 text-[.9rem] tracking-wider">
                      All levels
                    </p>
                  </div>
                  <div className="w-full flex gap-3 items-start">
                    <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                    <p className="mt-2 text-[.9rem] tracking-wider">
                      Goal getters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================================Desktop Sidebar section */}
          <div className="w-full md:w-[30%] md:min-w-[200px] h-fit bg-white pb-6 rounded-lg hidden md:flex flex-col">
            <div className="bg-[#ffbb00]/30 p-[8%] flex flex-col justify-center items-center gap-5">
              <p className="font-bold text-[2rem]">
                {" "}
                {currentCourse?.price?.map(
                  (x, ind, arr) =>
                    `N${x?.toLocaleString()}${
                      ind !== arr?.length - 1 ? " / " : ""
                    }`
                )}{" "}
                {currentCourse?.title?.includes("Children") && (
                  <span className="text-[1rem]">(N15,000 Monthly)</span>
                )}
              </p>
              <button
                onClick={() =>
                  navigate(
                    `/course/${currentCourse?.title.replace(/\//g, "_")}/enroll`
                  )
                }
                className="w-full py-3 bg-yellow-300 hover:bg-yellow-300/70 font-bold"
              >
                Enroll Now
              </button>
            </div>

            <div className="w-full flex flex-col px-[8%] border-x border-b border-black/20">
              <div className="w-full py-3 flex gap-3 items-center border-b border-bkack/30">
                <img
                  alt=""
                  src="/images/icons8-students-30.png"
                  className="w-5 h-5 object-cover rounded-md"
                />
                <p className="mt-2 text-[.9rem] tracking-wider">
                  Beginner / Intermediate
                </p>
              </div>
              <div className="w-full py-3 flex gap-3 items-center border-b border-bkack/30">
                <img
                  alt=""
                  src="/images/icons8-timesheet-48.png"
                  className="w-5 h-5 object-cover rounded-md"
                />
                <p className="mt-2 text-[.9rem] tracking-wider">
                  {currentCourse?.duration?.map(
                    (x, ind, arr) =>
                      `${x}${ind !== arr?.length - 1 ? " / " : ""}`
                  )}
                </p>
              </div>

              <div className="w-full py-3 flex gap-3 items-center">
                <img
                  alt=""
                  src="/images/icons8-certificate-24.png"
                  className="w-5 h-5 object-cover rounded-md"
                />
                <p className="mt-2 text-[.9rem] tracking-wider">
                  Certificate of completion
                </p>
              </div>
            </div>

            <div className="mt-5 border border-black/20 px-[8%] py-[6%]">
              <h2 className="w-full font-bold text-[1.25rem]">Requirements</h2>
              <div className="w-full flex flex-col flex-wrap gap-3">
                <div className="w-full flex gap-3 items-start">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    Access to a computer with an internet connection.
                  </p>
                </div>
                <div className="w-full flex gap-3 items-start">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    A computer with at least 4GB RAM
                  </p>
                </div>
                <div className="w-full flex gap-3 items-start">
                  <div className="w-3 h-3 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    Writing Materials
                  </p>
                </div>

                <h2 className="w-full font-bold text-[1.25rem] mt-5">
                  Audience
                </h2>
                <div className="w-full flex flex-col flex-wrap gap-3">
                  <div className="w-full flex gap-3 items-start">
                    <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                    <p className="mt-2 text-[.9rem] tracking-wider">Newbies</p>
                  </div>
                  <div className="w-full flex gap-3 items-start">
                    <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                    <p className="mt-2 text-[.9rem] tracking-wider">
                      All levels
                    </p>
                  </div>
                  <div className="w-full flex gap-3 items-start">
                    <div className="w-3 h-3 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                    <p className="mt-2 text-[.9rem] tracking-wider">
                      Goal getters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showForm && (
        <div className="w-full h-full fixed top-0 left-0 bg-black/90 flex justify-center py-[150px] px-4 z-[999]">
          <form className="w-full md:w-[500px] h-fit p-4 pb-10 bg-white rounded-xl flex flex-col gap-3 items-center relative scale">
            <button
              onClick={toggleShow}
              className="bg-yellow-300 px-3 py-1 rounded-lg ml-auto mb-3 text-[.75rem] font-medium"
            >
              Close
            </button>
            <h1 className="font-bold text-[1.25rem] text-center">
              View syllabus program: {showForm?.title}
            </h1>
            <p>
              Dear user, you can download the syllabus here:{" "}
              <a
                className="underline cursor-pointer"
                href={showForm?.pdf}
                target="_blank"
                rel="noreferrer"
              >
                Download here
              </a>
            </p>
          </form>
        </div>
      )}

      <ScrollToTop />
      <Footer />
    </>
  );
};

export default CourseDetails2;
