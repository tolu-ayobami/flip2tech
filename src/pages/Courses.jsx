/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAdminContext } from "../contexts/AdminContext";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses = () => {
  const { loader, userData } = useAppContext();
  const { allCourses } = useAdminContext();

  // ======================================================Initialize AOS library for animations
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      {loader && <Loader />}
      <main className="w-full pt-[60px] md:pt-[80px] text-black/80 font-poppins">
        <section className="px-3 md:px-20 lg:px-[250px]">
          {/* Background image */}
          <div
            className={`w-full md:h-[500px] min-h-[300px] relative bg-courses bg-cover bg-no-repeat bg-center`}
          >
            <div className="w-full h-full p-3 md:p-0 absolute top-0 left-0 flex justify-center items-center bg-gradient-to-r from-yellow-500/50 to-black/50">
              <div className="text-white absolute top-3 left-3 md:top-8 md:left-10 md:pb-2 border-b-4 border-white">
                <h1 className="text-[1.75rem] md:text-[2.75rem] font-bold font-petch">
                  Courses
                </h1>
              </div>
              {/* Conditional greeting based on user data */}
              <div className="w-full md:w-[400px] mt-auto p-3 md:p-7 rounded-md text-black/90 md:absolute bottom-3 left-3 md:bottom-10 md:left-10 bg-white">
                <h1 className="text-[1.35rem] md:text-[1.75rem] font-bold font-petch">
                  Keep Moving Up.
                </h1>
                <p className="text-[.85rem]">
                  Acquire the knowledge you need to advance not only today but
                  also in the future. Our courses offer a wealth of insights.
                </p>
              </div>

              <img
                alt=""
                src="/images/sammy-lettering-learn-at-home.png"
                className="w-[80px] md:w-[200px] h-auto absolute bottom-10 right-10 hidden md:block swing"
              />
            </div>
          </div>
        </section>

        <section className="px-3 md:px-20 lg:px-[250px] min-h-[200px] py-[100px]">
          <h1 className="text-[1.5rem] md:text-[2rem] font-bold font-petch">
            What To Learn
          </h1>
          <p className="mt-3 text-[1.15rem] tracking-wide font-medium">
            Explore our wide array of courses to find the perfect fit for your
            learning journey.
          </p>

          {allCourses?.length > 0 && userData?.access && (
            <>
              <div className="w-full mt-8 flex gap-4 md:flex-wrap overflow-x-auto md:overflow-x-hidden pb-4">
                {allCourses?.map((item, index) => {
                  return (
                    <CourseCard item={item} key={index} userData={userData} />
                  );
                })}
              </div>
            </>
          )}
          {allCourses?.length === 0 && userData?.access && (
            <div className="w-full h-[250px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
              Nothing yet..
            </div>
          )}
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

export default Courses;
