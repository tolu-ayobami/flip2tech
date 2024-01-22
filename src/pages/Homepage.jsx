/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import DefaultCarousel from "../components/DefaultCarousel";
import VerticalTimeline from "../components/Timeline";
import BootcampTabs from "../components/BootcampTabs";
import MobileCarousel from "../components/MobileCarousel";
import ToastMod from "../components/ToastMod";
import AgeTooltip from "../components/AgeTooltip";
import { useAdminContext } from "../contexts/AdminContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { loader, loginSuccess, userData, allBootcampsRaw, allCoursesRaw } =
    useAppContext();
  const { allBootcamps, allCourses } = useAdminContext();

  const courses = allCourses?.slice(0, 10);
  const coursesRaw = allCoursesRaw?.slice(0, 10);

  const user = userData?.user_data;

  // console.log("user", user);

  const navigate = useNavigate();

  // ======================================================Initialize AOS library for animations
  useEffect(() => {
    AOS.init();
  }, []);

  const [trackVideoSound, setTrackVideoSound] = useState(false);

  function toggleVideoMute() {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
      setTrackVideoSound((prev) => !prev);
    }
    console.log(videoElement?.muted);
  }

  return (
    <>
      <Header />
      {loader && <Loader />}

      {/* =================================================Show a toast message if login was successful */}
      {loginSuccess && (
        <div className="w-[300px]">
          <ToastMod message="Logged in successfully" />
        </div>
      )}

      <main className="w-full pt-[60px] md:pt-[80px] text-black/80 font-poppins">
        {/* ===========================================================================Hero Section */}
        <section className="px-3 md:px-20 lg:px-[250px]">
          {/* Background image */}

          <div
            className={`w-full md:h-[500px] min-h-[300px] relative bg-gif bg-cover bg-no-repeat`}
          >
            <video
              autoPlay
              loop
              muted
              controls={false}
              playsInline // This enables auto-play on some mobile browsers
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              onEnded={(event) => {
                event.target.play();
              }}
            >
              <source src="/images/herovideo.mp4" type="video/mp4" />
            </video>

            <div className="w-full h-full absolute top-0 z-10 left-0 flex justify-center items-center bg-gradient-to-l from-yellow-500/30 to-black/50">
              <div
                onClick={toggleVideoMute}
                className="bg-white w-10 h-10 rounded-full cursor-pointer absolute top-3 left-3 flex justify-center items-center"
              >
                <img
                  alt=""
                  src={
                    !trackVideoSound
                      ? "/images/icons8-sound-off-50.png"
                      : "/images/icons8-sound-48.png"
                  }
                  className={`${!trackVideoSound ? "w-4 h-4" : "w-6 h-6"}`}
                />
              </div>
              {/* Conditional greeting based on user data */}
              {user ? (
                // <div className="w-[280px] md:w-[400px] mt-auto p-2 md:p-7 rounded-md text-white text-right md:text-start absolute bottom-[50%] right-3 md:bottom-10 md:right-10 bg-black/30 border-2 border-white">
                //   <h1 className="text-[1.25rem] md:text-[1.75rem] font-bold font-petch">
                //     Kickstart Your Tech Career
                //   </h1>
                //   <p className="text-[.85rem]">
                //     Acquire the knowledge you need to advance not only today but
                //     also in the future.
                //   </p>
                // </div>
                <div className="w-[280px] md:w-[400px] mt-auto p-2 md:p-7 rounded-md text-white text-right md:text-start absolute bottom-[45%] right-3 md:bottom-10 md:right-10 bg-black/30 border-2 border-white">
                  <h1 className="text-[1.15rem] md:text-[1.75rem] font-bold font-petch">
                    Get Started as a Volunteer
                  </h1>
                  <p className="text-[.8rem] md:text-[.95rem]">
                    Tech Internhip and Volunteers competition
                  </p>
                  <button
                    onClick={() => navigate("/dashboard-volunteer")}
                    className="px-3 py-1 md:px-5 md:py-2 bg-yellow-300 rounded-md text-black hover:bg-yellow-300/80 text-[.75rem] md:text-[1rem] mt-3 md:mt-4"
                  >
                    Get Started
                  </button>
                </div>
              ) : (
                <div className="w-[280px] md:w-[400px] mt-auto p-2 md:p-7 rounded-md text-white text-right md:text-start absolute bottom-[45%] right-3 md:bottom-10 md:right-10 bg-black/30 border-2 border-white">
                  <h1 className="text-[1.15rem] md:text-[1.75rem] font-bold font-petch">
                    Get Started as a Volunteer
                  </h1>
                  <p className="text-[.8rem] md:text-[.95rem]">
                    Tech Internhip and Volunteers competition
                  </p>
                  <button
                    onClick={() => navigate("/dashboard-volunteer")}
                    className="px-3 py-1 md:px-5 md:py-2 bg-yellow-300 rounded-md text-black hover:bg-yellow-300/80 text-[.75rem] md:text-[1rem] mt-3 md:mt-4"
                  >
                    Get Started
                  </button>
                </div>
              )}
              {/* <img alt="" src="/images/hero.png" className="w-full h-full" /> */}
              {/* Fliptotech decorative images */}
              <img
                alt=""
                src="/images/Flip To Tech!.png"
                className="w-[80px] md:w-[100px] h-auto absolute bottom-[70px] md:bottom-[150px] left-[80px] md:left-[150px]"
              />
              <img
                alt=""
                src="/images/Arrow.png"
                className="w-[80px] md:w-[100px] h-auto absolute bottom-[25px] md:bottom-[70px] left-[25px] md:left-[60px]"
              />
              <img
                alt=""
                src="/images/flip.png"
                className="w-[60px] h-auto absolute bottom-[-30px] left-[-30px] z-50"
              />
            </div>
          </div>
        </section>

        {/* =================================================================================Learning Paths Section */}
        <section className="w-full pb-8 px-3 md:px-20 lg:px-[250px] mt-20">
          <h1 className="text-[1.5rem] md:text-[2rem] font-bold font-petch">
            Experience Learning From A Different Perspective.
          </h1>

          <p className="mt-3 text-[1.15rem] tracking-wide">
            Exclusively designed with intent to ensure you not only learn to
            code,
            <br /> but also learn the culture of coding.
          </p>

          {/* Render BootcampTabs component with bootcamps */}
          <div className="w-full mt-5">
            <BootcampTabs
              allBootcamps={allBootcamps}
              allCourses={allCourses}
              allBootcampsRaw={allBootcampsRaw}
              user={user}
            />
          </div>
        </section>

        {/* ==============================================================================Why FlipToTech Section */}
        <section className="w-full pb-8 md:pb-[50px] px-3 md:px-20 lg:px-[250px] py-12">
          <div className="w-full h-fit rounded-2xl flex md:flex-row flex-col gap-10 md:gap-3 justify-center">
            <div className="w-full md:w-[600px] h-fit py-3 px-0 md:px-6">
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-[1.85rem] font-bold font-petch"
              >
                Why FlipToTech
              </h2>
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                alt=""
                src="/images/f14.jpeg"
                className="w-full md:hidden block md:w-[400px] h-[230px] my-3 md:h-[500px] object-cover object-right rounded-lg md:rounded-md border border-black/20 cursor-pointer"
              />
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="mt-3 text-[1.15rem] tracking-wider"
              >
                <span className="font-bold"> FlipToTech</span> is a leading
                Digital Technology Development platform dedicated to empowering
                individuals in acquiring cutting-edge tech skills. With our
                specialized expertise, we offer two distinct learning paths
                carefully crafted to meet the demands of the ever-evolving tech
                landscape.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="flex flex-col gap-3 my-4 text-[1.15rem] tracking-wider"
              >
                <div className="w-full flex gap-3 items-center">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13]"></div>
                  <p>Bootcamp (Virtual & Physical)</p>
                </div>
                <div className="w-full flex gap-3 items-center">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13]"></div>
                  <p>Independent learning</p>
                </div>
              </div>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="mt-3 text-[1.15rem] tracking-wider"
              >
                Our meticulously curated learning paths are specifically
                designed to provide exclusive and comprehensive instruction,
                enabling you to effortlessly acquire your desired tech skills.
                With a focus on clarity and relatability, our courses ensure a
                highly accessible and engaging learning experience.
              </p>
            </div>
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              alt=""
              src="/images/f14.jpeg"
              className="w-full hidden md:block md:w-[400px] h-[230px] md:h-[500px] object-cover object-right rounded-lg md:rounded-md border border-black/20 cursor-pointer"
            />
          </div>
        </section>

        {/* ==============================================================================Student Testimonials Section */}
        <section className="w-full bg-foot2 bg-bottom bg-cover">
          <div className="w-full h-full bg-black/50 pt-10 pb-8 px-3 md:px-20 lg:px-[250px]">
            <div className="w-full min-h-[500px] md:min-h-[600px] border-black/70 rounded-2xl flex gap-3 bg-lines bg-cover">
              <div className="w-full md:p-6 p-4 relative flex flex-col">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full text-[1.25rem] md:text-[1.85rem] font-bold text-center font-petch text-white"
                >
                  Learners like you have a lot to say!
                </h2>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  className="w-full h-full md:p-12 text-[1.15rem] tracking-wider hidden md:block"
                >
                  <DefaultCarousel />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  className="w-full h-full md:p-12 text-[1.15rem] tracking-wider md:hidden block"
                >
                  <MobileCarousel />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===============================================================================Brain Corner Section */}
        <section className="w-full py-20 px-3 md:px-20 lg:px-[250px]  bg-black/90 text-white">
          <div className="pb-4">
            <h2 className="text-[1.85rem] font-bold flex gap-2 items-center font-petch">
              Brain Corner
              <img alt="" src="/images/corner.png" className="w-12 h-12" />
            </h2>
            <p className="w-full md:w-[70%] text-[1.15rem] tracking-wide mt-5">
              We provide regular, complimentary tech content and accompanying
              tasks on a weekly basis, ensuring that you stay up-to-date with
              the latest developments in the field. Let us explore what awaits
              you this week in terms of valuable knowledge and engaging
              activities.
            </p>
          </div>
          <div className="w-full h-[500px] relative mt-8 flex justify-center items-center border-2 border-yellow-400 rounded-xl">
            {/* ============================================================Embedded CodePen iframe */}
            <iframe
              height="100%"
              width="100%"
              scrolling="no"
              title="FlipToTech"
              src="https://codepen.io/khalteck/embed/preview/jOQxPvB?default-tab=html%2Cresult&editable=true&theme-id=dark"
              frameBorder="no"
              loading="lazy"
              allowtransparency="true"
              allowFullScreen={true}
            >
              See the Pen{" "}
              <a href="https://codepen.io/khalteck/pen/jOQxPvB">FlipToTech</a>{" "}
              by Khalid (<a href="https://codepen.io/khalteck">@khalteck</a>) on{" "}
              <a href="https://codepen.io">CodePen</a>.
            </iframe>
            {/* <p className="text-white text-[1.75rem] font-bold">
              Codepen here..
            </p> */}
          </div>
        </section>

        {/* ==========================================================================What Makes Us Unique Section */}
        <section className="w-full py-10 px-3 md:px-20 lg:px-[250px] border-y border-black/20">
          <div className="w-full flex md:flex-row flex-col gap-10 md:gap-3 items-center">
            <div className="py-3 px-6">
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-[1.85rem] mb-7 font-bold font-petch"
              >
                What makes us unique?
              </h2>
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                alt=""
                src="/images/f7.jpeg"
                className="w-full md:hidden my-3 md:w-[40%] h-[300px] md:h-[500px] object-cover rounded-2xl border border-black/20 cursor-pointer ml-auto"
              />

              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <VerticalTimeline />
              </div>
            </div>
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="700"
              alt=""
              src="/images/f7.jpeg"
              className="w-full hidden md:block md:w-[40%] h-[300px] md:h-[500px] object-cover rounded-2xl border border-black/20 cursor-pointer ml-auto"
            />
          </div>
        </section>

        {/* ===============================================================================Students are Viewing Section */}
        <section className="w-full py-20 px-3 md:px-20 lg:px-[250px] bg-white">
          <div className="pb-4">
            <h2 className="text-[1.85rem] font-bold flex md:flex-row flex-col gap-2 items-center justify-between mb-10 font-petch">
              Students are viewing
              <button className="mt-4 bg-white uppercase text-[.85rem] md:text-[1rem] text-black border border-black rounded-md">
                <AgeTooltip age={" AGE 15-25"} />{" "}
              </button>
            </h2>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="w-full mt-8 flex gap-4 md:flex-wrap overflow-x-auto md:overflow-x-hidden pb-4"
            >
              {userData?.access &&
                courses?.map((item, index) => {
                  return (
                    <CourseCard item={item} key={index} userData={userData} />
                  );
                })}
              {courses?.length === 0 && userData?.access && (
                <div className="w-full h-[100px] flex justify-center items-center border">
                  Not Available yet..
                </div>
              )}
              {!userData?.access &&
                coursesRaw?.slice(0, 5)?.map((item, index) => {
                  return (
                    <CourseCard item={item} key={index} userData={userData} />
                  );
                })}
              {!userData?.access && coursesRaw?.length === 0 && (
                <div className="w-full h-[100px] flex justify-center items-center border">
                  Not Available yet..
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===============================================================================Our vision Section */}
        <section className="w-full min-h-[450px] relative bg-foot bg-bottom bg-cover">
          <div className="w-full min-h-[450px] px-3 md:px-20 lg:px-[250px] py-10 bg-black/60">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-[1.75rem] md:text-[3.5rem] text-white/90 font-petch mb-3"
            >
              OUR VISION
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="w-full md:w-[70%] text-white text-[1.1rem] md:text-[1.25rem] tracking-wide"
            >
              As a mission-driven organization, FlipToTech is dedicated to
              realizing its vision of a world where every individual can acquire
              technical skills and knowledge, regardless of financial
              constraints or geographical limitations. FlipToTech believes in
              removing barriers to education and empowering learners to unlock
              their potential in the field of technology.
            </p>
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="px-10 py-2 mt-8 bg-[#FFBD13] uppercase text-[1rem] text-black border border-black rounded-md"
            >
              Learn More
            </button>
          </div>
        </section>
      </main>

      {/* Scroll to Top component */}
      <ScrollToTop />
      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default Homepage;
