/* eslint-disable react/no-unescaped-entities */
// ======================================================================Import required dependencies and components
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
// import courseData from "../data/courses.json";
import { useState } from "react";
import CourseAccordion from "../components/CourseAccordion";
import { useAdminContext } from "../contexts/AdminContext";

const CourseDetails = () => {
  // ==============================================================Fetch necessary data from context using hooks
  const { loader } = useAppContext();
  const { allCourses } = useAdminContext();

  const { title } = useParams();
  //   console.log(title.replace(/-/g, " "));

  const currentCourse = allCourses?.filter(
    (item) => item?.title === title.replace(/-/g, " ")
  )[0];

  // const renderStars = () => {
  //   const stars = [];
  //   for (let i = 0; i < currentCourse?.rating; i++) {
  //     stars.push(
  //       <img key={i} alt="" src="/images/star.png" className="w-4 h-4" />
  //     );
  //   }
  //   return stars;
  // };

  const [showFullText, setShowFullText] = useState(false);

  // ================================================================Course description text that will be truncated
  const aboutText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborumTemporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

  const toggleTextTruncation = () => {
    setShowFullText(!showFullText);
  };

  // =========================================================Function to truncate the text and show a "Show more" link
  const truncateText = (maxLength) => {
    if (aboutText.length <= maxLength || showFullText) {
      return aboutText;
    }
    return aboutText.slice(0, maxLength) + "...";
  };

  console.log("currentCourse", currentCourse);

  return (
    <>
      <Header />
      {loader && <Loader />}

      <main className="w-full pt-[60px] text-black/80 font-poppins">
        {/* ============================================================================Course header section */}
        <section className="">
          <div className="w-full md:min-h-[300px] min-h-[300px] relative bg-gradient-to-r from-black to-purple-800 md:px-20 lg:px-[250px] pb-[50px] md:py-[50px] text-white flex md:flex-row flex-col gap-3">
            <div className="w-full md:w-[70%] md:in-w-[500px] flex flex-col md:gap-3">
              <div className="w-full h-fit bg-black md:hidden flex gap-2 text-[.75rem] p-2 text-purple-300">
                <Link to="/" className="cursor-pointer">
                  <span>Home</span>
                </Link>
                <span>/</span>
                <p className="w-[200px] truncate">
                  Courses: {currentCourse?.title}
                </p>
              </div>
              <img
                alt=""
                src={currentCourse?.course_thumbnail}
                className="w-full h-[220px] md:hidden block object-cover"
              />
              <div className="w-full px-3 md:px-0 flex flex-col gap-3 mt-5 md:mt-0">
                <h1 className="w-full md:w-fit text-[1.25rem] md:text-[1.75rem] text-white/90 font-bold font-petch">
                  {currentCourse?.title}
                </h1>
                <p className="text-[1rem] md:text-[1.1rem] whitespace-wrap">
                  {currentCourse?.description}
                </p>
                {/* <p>By {currentCourse?.instructor}</p> */}
                <div className="flex items-center gap-3">
                  <p className="text-yellow-300 font-medium">
                    {currentCourse?.max_students} maximum students
                  </p>
                  {/* <div className="flex gap-0"> {renderStars()}</div> */}
                  {/* <p>({currentCourse?.rating_count} ratings)</p> */}
                </div>
              </div>
              <div className="w-full px-3 md:px-0 flex flex-col gap-3 mt-5 md:hidden">
                <p className="font-bold text-[1.75rem]">#10,000</p>
                <button className="w-full py-2 bg-yellow-300 hover:bg-yellow-300/70 rounded-lg text-black">
                  Enroll Now
                </button>
                <p className="text-[.75rem]">30-Day Money-Back Guarantee</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-3 md:px-20 lg:px-[250px] mb-20 flex gap-3">
          <div className="w-full md:w-[70%] md:min-w-[500px] relative flex flex-col gap-10 mt-10 md:mt-20">
            {/* =========================================================================================mobile & small screen Sidebar/content section */}
            <div className="w-full flex flex-col gap-0 md:hidden">
              <div className="w-full flex gap-3 items-center">
                <img
                  alt=""
                  src="/images/icons8-students-30.png"
                  className="w-5 h-5 object-cover rounded-md"
                />
                <p className="mt-2 text-[.9rem] tracking-wider">
                  3324 Total Enrolled
                </p>
              </div>
              <div className="w-full flex gap-3 items-center">
                <img
                  alt=""
                  src="/images/icons8-timesheet-48.png"
                  className="w-5 h-5 object-cover rounded-md"
                />
                <p className="mt-2 text-[.9rem] tracking-wider">
                  50 hours Duration
                </p>
              </div>
              <div className="w-full flex gap-3 items-center">
                <img
                  alt=""
                  src="/images/icons8-date-64.png"
                  className="w-5 h-5 object-cover rounded-md"
                />
                <p className="mt-2 text-[.9rem] tracking-wider">
                  March 27, 2023 Last Updated
                </p>
              </div>
              <div className="w-full flex gap-3 items-center">
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
            {/* ========================================================================================Course content section */}

            <div className="w-full md:h-[400px] border border-gray-500/40 p-3 md:p-5">
              <h2 className="w-full font-bold text-[1.25rem] mb-1 font-petch">
                What You'll Learn
              </h2>
              <div className="w-full h-full flex flex-col flex-wrap gap-3">
                <div className="w-full md:w-[45%] flex gap-3 items-start">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    You will learn how to leverage the power of Python to solve
                    tasks.
                  </p>
                </div>
                <div className="w-full md:w-[45%] flex gap-3 items-start">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    You will be able to use Python for your own work problems or
                    personal projects.
                  </p>
                </div>
                <div className="w-full md:w-[45%] flex gap-3 items-start">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    Learn to use Python professionally, learning both Python 2
                    and Python 3!
                  </p>
                </div>
                <div className="w-full md:w-[45%] flex gap-3 items-start">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    Learn advanced Python features, like the collections module
                    and how to work with timestamps!
                  </p>
                </div>
                <div className="w-full md:w-[45%] flex gap-3 items-start">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    Understand complex topics, like decorators.
                  </p>
                </div>
                <div className="w-full md:w-[45%] flex gap-3 items-start">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    Get an understanding of how to create GUIs in the Jupyter
                    Notebook system!
                  </p>
                </div>
                <div className="w-full md:w-[45%] flex gap-3 items-start">
                  <div className="md:w-3 md:h-3 w-2 h-2 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                  <p className="mt-2 text-[.9rem] tracking-wider">
                    You will build games and programs that use Python libraries.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <h2 className="w-full font-bold text-[1.25rem] mb-1 font-petch">
                About Course
              </h2>
              <div className="mt-5 text-[.9rem] tracking-wider relative">
                {truncateText(400)}
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

            <div className="w-full">
              <h2 className="w-full font-bold text-[1.25rem] mb-1 font-petch">
                Course Content
              </h2>
              <div className="mt-6">
                <p className="text-[.95rem] mb-2">
                  4 sections ~ 1h 5m total length
                </p>
                <CourseAccordion />
              </div>
            </div>

            <div className="w-full border border-gray-500/40 p-3 md:p-5">
              <h2 className="w-full font-bold text-[1.25rem] mb-1 font-petch">
                Featured Review
              </h2>

              <div className="flex gap-3 my-4">
                <img
                  alt=""
                  // src="/images/icons8-user-64.png"
                  src="https://img-c.udemycdn.com/user/200_H/101610246_6b5d_3.jpg"
                  className="w-[60px] h-[60px] rounded-full"
                />
                <div>
                  <p className="font-bold">John Doe</p>
                  <p>9 courses</p>
                  <p>1 review</p>
                </div>
              </div>

              <div className="flex gap-4 items-center mb-3">
                <div className="flex gap-2">
                  <img alt="" src="/images/star.png" className="w-4 h-4" />
                  <img alt="" src="/images/star.png" className="w-4 h-4" />
                  <img alt="" src="/images/star.png" className="w-4 h-4" />
                  <img alt="" src="/images/star.png" className="w-4 h-4" />
                </div>
                <p className="text-black/50">2 years ago</p>
              </div>

              <p className="text-[.9rem] tracking-wider">
                Everything on this course is a goldmine except for the GUI since
                it's specific for Jupyter Notebooks and it's missing the video
                for GUI Events. Still it was a nice introduction to GUI. Don't
                let that disappoint you though. THIS IS A MUST HAVE COURSE. I
                have already recommended it to few people and always will. Do
                yourself a favor and do this course if you want to learn Python
                3. Thank you so much for this course, Jose-sensei!!
              </p>

              <p className="text-[.9rem] tracking-wider mt-5">
                Was this helpful?
              </p>
            </div>
          </div>

          {/* =========================================================================================Desktop Sidebar section */}
          <div className="w-full md:w-[30%] md:min-w-[200px] h-fit bg-white shadow-lg sticky top-[180px] p-3 md:px-4 pt-4 pb-6 rounded-lg hidden md:flex flex-col gap-3 translate-y-[-100px]">
            <img
              alt=""
              src={currentCourse?.course_thumbnail}
              className="w-full h-[250px] object-cover rounded-md"
            />
            <div className="w-full flex flex-col gap-0">
              <div className="w-full flex gap-3 items-center">
                <img
                  alt=""
                  src="/images/icons8-students-30.png"
                  className="w-5 h-5 object-cover rounded-md"
                />
                <p className="mt-2 text-[.9rem] tracking-wider">
                  3324 Total Enrolled
                </p>
              </div>
              <div className="w-full flex gap-3 items-center">
                <img
                  alt=""
                  src="/images/icons8-timesheet-48.png"
                  className="w-5 h-5 object-cover rounded-md"
                />
                <p className="mt-2 text-[.9rem] tracking-wider">
                  50 hours Duration
                </p>
              </div>
              <div className="w-full flex gap-3 items-center">
                <img
                  alt=""
                  src="/images/icons8-date-64.png"
                  className="w-5 h-5 object-cover rounded-md"
                />
                <p className="mt-2 text-[.9rem] tracking-wider">
                  March 27, 2023 Last Updated
                </p>
              </div>
              <div className="w-full flex gap-3 items-center">
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
            <p className="font-bold text-[1.75rem]">#10,000</p>
            <p className="text-[.85rem]">30-Day Money-Back Guarantee</p>
            <button className="w-full py-2 bg-yellow-300 hover:bg-yellow-300/70 rounded-lg">
              Enroll Now
            </button>
            <h2 className="w-full font-bold text-[1.25rem] mt-5 font-petch">
              Requirements
            </h2>
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
                  A computer running on the latest operating system
                </p>
              </div>
              <div className="w-full flex gap-3 items-start">
                <div className="w-3 h-3 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                <p className="mt-2 text-[.9rem] tracking-wider">
                  A text editor (visual studio code is more recommended)
                </p>
              </div>
              <div className="w-full flex gap-3 items-start">
                <div className="w-3 h-3 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                <p className="mt-2 text-[.9rem] tracking-wider">
                  The python software which is available for free on
                  www.python.org
                </p>
              </div>
              <div className="w-full flex gap-3 items-start">
                <div className="w-3 h-3 p-1 rounded-full bg-[#FFBD13] mt-3"></div>
                <p className="mt-2 text-[.9rem] tracking-wider">
                  Writing Materials
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
};

export default CourseDetails;
