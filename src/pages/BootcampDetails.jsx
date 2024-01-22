/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
// ==========================================================================Import required dependencies and components
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import DefaultCarousel from "../components/DefaultCarousel";
import MobileCarousel from "../components/MobileCarousel";
import BootcampCard from "../components/BootcampCard";
// import CurriculumAccordion from "../components/CurriculumAccordion";
import CourseCard from "../components/CourseCard";
import { useAdminContext } from "../contexts/AdminContext";
import { useState } from "react";
import { useEffect } from "react";
// import BootcampTopicCard from "../instructor/components/BootcampTopicCard";
import { PulseLoader } from "react-spinners";
import BootClientTopicCard from "../components/BootClientTopicCard";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import AOS from "aos";
import "aos/dist/aos.css";

const BootcampDetails = () => {
  // ======================================================Initialize AOS library for animations
  useEffect(() => {
    AOS.init();
  }, []);
  // ======================================================================Get data and functions from context hooks
  const { loader, userData } = useAppContext();
  const {
    allBootcamps,
    payForBootcamp,
    payingForBootcamp,
    allCourses,
    bootcampDetails,
    fetchBootcampDetail,
    // bootcampTopicContent,
    inlineLoader,
    setbootcampTopicContent,
    // allTopics,
    fetchAllTopics,
  } = useAdminContext();

  // console.log("bootcampTopicContent", bootcampTopicContent);

  const { title } = useParams();
  //   console.log(title.replace(/-/g, " "));

  const currentBootcamp = allBootcamps?.filter(
    (item) => item?.title === title
  )[0];

  const related = allBootcamps?.filter((item) => item?.title !== title);

  // =======================================================State to handle enrollment modal visibility
  const [enrollMod, setEnrollMod] = useState(false);
  function toggleMod() {
    setEnrollMod((prev) => !prev);
  }

  useEffect(() => {
    if (currentBootcamp) {
      fetchBootcampDetail(userData?.access, currentBootcamp?.id);
    }
  }, [currentBootcamp]);

  const [displayContent, setDisplayContent] = useState(null);
  function toggleOpen(item) {
    if (displayContent?.id === item?.id) {
      // If the clicked item is already open, close it
      closeAll();
    } else {
      // Close all dropdowns first
      closeAll();
      setbootcampTopicContent([]);

      // After closing, open the clicked item after a delay of 300ms
      setTimeout(() => {
        setDisplayContent(item);
      }, 300);
    }
  }

  function closeAll() {
    setDisplayContent(null);
  }

  useEffect(() => {
    fetchAllTopics();
  }, []);

  // console.log("allTopics", allTopics);

  return (
    <>
      {/* ==============================================================================Render Header and loader if loading */}
      <Header />
      {loader && <Loader />}
      {payingForBootcamp && <Loader />}

      {/* ==============================================================================Section displaying bootcamp details */}
      <main className="w-full pt-[60px] text-black/80 font-poppins">
        <section className="w-full relative">
          <div className="w-full h-fit bg-gradient-to-r from-black to-[#141A30]/90 text-white px-0 md:px-20 lg:px-[250px] pb-[50px] md:pb-0 flex md:flex-row flex-col justify-between gap-3 md:gap-10">
            <div className="w-full md:w-1/2 h-fit flex flex-col gap-3">
              <div>
                <div className="w-full h-fit bg-black md:hidden flex gap-2 text-[.75rem] p-2 text-purple-300">
                  <Link to="/" className="cursor-pointer">
                    <span>Home</span>
                  </Link>
                  <span>/</span>
                  <p className="max-w-full whitespace-nowrap truncate">
                    Bootcamp: {currentBootcamp?.title}
                  </p>
                </div>
                <img
                  alt=""
                  src={currentBootcamp?.cover_image}
                  className="w-full h-[200px] sm:h-[300px] object-cover object-center md:hidden"
                />
              </div>
              <div className="px-3 md:px-0 md:mt-10">
                <p className="text-[.9rem] text-[#FFBD13]">
                  {currentBootcamp?.program_type}
                </p>
                <h1 className="w-full md:w-fit text-[1.85rem] text-white/90 font-bold font-petch">
                  {capitalizeFirstLetter(currentBootcamp?.title)}
                </h1>
                <p className="tracking-wider text-[.9em] mt-3">
                  {currentBootcamp?.description}
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  <button
                    onClick={() => {
                      toggleMod();
                    }}
                    className="px-8 py-3 mt-4 bg-[#FFBD13] uppercase text-[.72em] truncate md:text-[.85em] text-black border border-black whitespace-nowrap rounded-md font-medium hover:bg-[#FFBD13]/70"
                  >
                    Enroll Now
                  </button>
                  <button
                    // onClick={() => navigate("/")}
                    className="px-8 py-3 mt-4 bg-transparent uppercase text-[.72em] truncate md:text-[.85em] text-white border border-white whitespace-nowrap rounded-md font-medium hover:bg-[#FFBD13]/70"
                  >
                    Download Syllabus
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[400px] h-fit relative slanted hidden md:block">
              <img
                alt=""
                src={currentBootcamp?.cover_image}
                className="w-full h-full object-cover mt-4 md:mt-0"
              />
            </div>
          </div>
        </section>

        {/*========================================================================================== Section displaying related bootcamps */}
        {related?.length > 0 && (
          <section className="w-full px-3 md:px-20 lg:px-[250px] pb-6 pt-[50px] bg-yellow-50/20">
            <h1 className="w-full md:w-fit text-[1.5rem] md:text-[2rem] text-black/90 font-bold mb-8 font-petch">
              Related programs
            </h1>
            <div className="w-full mt-8 flex gap-4 md:gap-6 md:flex-wrap overflow-x-auto md:overflow-x-hidden pb-4">
              {related?.map((item, index) => {
                return <BootcampCard item={item} key={index} />;
              })}
              {related?.length === 0 && (
                <div className="w-full h-[100px] border rounded-lg flex justify-center items-center">
                  Not Available for your Age range
                </div>
              )}
            </div>
          </section>
        )}

        {/* ============================================================================================Section displaying program curriculum */}
        <section className="w-full px-3 md:px-20 lg:px-[250px] pb-12 md:pb-20 pt-[50px] md:pt-8 bg-yellow-50/20">
          <h1 className="w-full md:w-fit text-[1.5rem] md:text-[2rem] text-black/90 font-bold mb-8 font-petch">
            Program Curriculum
          </h1>
          <div className="w-full border-2 p-4 border-[#141A30]/20 rounded-xl bg-white">
            {/* <CurriculumAccordion bootcampDetails={bootcampDetails} /> */}
            {bootcampDetails?.length === 0 && !inlineLoader && (
              <div className="w-full h-[150px] border border-black/20 rounded-lg flex justify-center items-center text-black/50">
                <div className="text-center">
                  <p>No topics yet..</p>
                </div>
              </div>
            )}
            {inlineLoader && (
              <div className="w-full h-[150px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
                <PulseLoader color="#FFBD13" size={15} />
              </div>
            )}

            {bootcampDetails?.length > 0 && !inlineLoader && (
              <div className="w-full rounded-lg text-black/80 flex flex-col gap-2 items-center">
                {bootcampDetails?.map((item, index) => {
                  return (
                    <BootClientTopicCard
                      item={item}
                      key={index}
                      currentBootcamp={currentBootcamp}
                      toggleOpen={toggleOpen}
                      displayContent={displayContent}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ===============================================================================================Section displaying key features */}
        <section className="w-full px-3 md:px-20 lg:px-[250px] mb-10 py-[80px] bg-[#141A30] text-white flex justify-center">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-full md:w-fit text-[1.5rem] md:text-[2rem] font-bold mb-8 font-petch text-center mx-auto"
            >
              All Our Programs Include:
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="w-full md:min-h-[300px] bg-[#141A30]/80 rounded-bl-[100px] flex md:flex-row flex-col items-start gap-14"
            >
              <div className="w-[250px] flex flex-col items-center md:items-start gap-3 text-white text-center">
                <img
                  alt=""
                  src="/images/flip.png"
                  className="w-10 h-10 mx-auto"
                />
                <p className="font-bold text-center mx-auto">
                  Real-world projects
                </p>
                <p className="font-normal">
                  With real-world projects and immersive content built in
                  partnership with top-tier companies, you’ll master the tech
                  skills companies want.
                </p>
              </div>
              <div className="w-[250px] flex flex-col items-center md:items-start gap-3 text-white text-center">
                <img
                  alt=""
                  src="/images/flip.png"
                  className="w-10 h-10 mx-auto"
                />
                <p className="font-bold text-center mx-auto">
                  Real-time support
                </p>
                <p className="font-normal">
                  On demand help. Receive instant help with your learning
                  directly in the classroom. Stay on track and get unstuck.
                </p>
              </div>
              <div className="w-[250px] flex flex-col items-center md:items-start gap-3 text-white text-center">
                <img
                  alt=""
                  src="/images/flip.png"
                  className="w-10 h-10 mx-auto"
                />
                <p className="font-bold text-center mx-auto">Career services</p>
                <p className="font-normal">
                  You’ll have access to Github portfolio review and LinkedIn
                  profile optimization to help you advance your career and land
                  a high-paying role.
                </p>
              </div>
              <div className="w-[250px] flex flex-col items-center md:items-start gap-3 text-white text-center">
                <img
                  alt=""
                  src="/images/flip.png"
                  className="w-10 h-10 mx-auto"
                />
                <p className="font-bold text-center mx-auto">
                  Flexible learning program
                </p>
                <p className="font-normal">
                  Tailor a learning plan that fits your busy life. Learn at your
                  own pace and reach your personal goals on the schedule that
                  works best for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================================Section displaying related courses */}
        <section className="w-full py-10 px-3 md:px-20 lg:px-[250px]">
          <div className="pb-4">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-[1.85rem] font-bold flex md:flex-row flex-col gap-2 items-center justify-between mb-6 font-petch"
            >
              Check Out Our Courses
            </h2>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="w-full h-fit p-4 mt-5 flex gap-4 overflow-x-auto"
            >
              {allCourses?.map((item, index) => {
                return (
                  <CourseCard item={item} key={index} userData={userData} />
                );
              })}
            </div>
          </div>
        </section>

        {/* =======================================================================================Section displaying success stories */}
        <section className="w-full px-3 md:px-20 lg:px-[250px] mb-5 text-black flex justify-center">
          <div className="w-full">
            <h1 className="w-full text-[2rem] font-bold mb-3 text-center font-petch">
              Success Stories
            </h1>
            <p className="mt-3 text-center">
              What our students are saying about their learning experience .
            </p>
            <div className="w-full h-[500px] md:px-12 text-[1.15rem] tracking-wider hidden md:block mt-[-30px]">
              <DefaultCarousel />
            </div>
            <div className="w-full h-[450px] md:p-12 text-[1.15rem] tracking-wider md:hidden block">
              <MobileCarousel />
            </div>
          </div>
        </section>
      </main>

      {/* ==========================================================================================Modal for enrolling in the bootcamp */}
      {enrollMod && (
        <div className="w-full h-screen bg-black/70 fixed top-0 left-0 flex justify-center z-20 p-3 py-[100px] md:py-[200px] overflow-y-auto">
          <div className="w-full md:w-[600px] h-fit bg-white rounded-lg p-3 md:p-6 flex flex-col gap-5 slide">
            <h2 className="uppercase text-center">
              Enroll for bootcamp: {currentBootcamp?.title}?
            </h2>

            <div className="flex gap-3 items-center justify-center mt-3 md:mt-5">
              <button
                onClick={toggleMod}
                className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 border-gray-400 bg-white border-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  payForBootcamp(
                    {
                      email: userData?.user_data?.email,
                      bootcamp: currentBootcamp?.id,
                    },
                    userData?.access,
                    currentBootcamp?.id
                  );
                  toggleMod();
                }}
                className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 bg-yellow-300 text-black border-2 border-yellow-300"
              >
                Enroll
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to top button */}
      <ScrollToTop />
      {/* Footer component */}
      <Footer />
    </>
  );
};

export default BootcampDetails;
