import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import UserTooltip from "./UserTooltip";
import bootcampData from "../data/bootcamp.json";

const Header2 = () => {
  const { userData, logout, currentPage, isInstructor } = useAppContext();

  const user = userData?.user_data;

  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  const [scrollBackground, setScrollBackground] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 0;

      setScrollBackground(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showchools, setshowchools] = useState(false);
  function handleShowSchool() {
    setshowchools(!showchools);
  }

  const handleScrollToFooter = () => {
    // Find the target element by its ID
    const footerElement = document.getElementById("footer");

    // Scroll to the target element smoothly
    if (footerElement) {
      footerElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`w-full h-[60px] ${
        scrollBackground
          ? "bg-[#000103] text-white shadow-md md:h-[80px]"
          : !scrollBackground && !currentPage?.includes("/cohort")
          ? "bg-gradient-to-b from-[#000103] to-transparent text-white md:h-[100px]"
          : currentPage?.includes("/cohort")
          ? "text-black bg-transparent md:h-[100px]"
          : "bg-[#000103] text-white md:h-[80px]"
      } ${
        currentPage?.includes("/volunteerregistration") && "bg-black"
      } flex md:gap-20 lg:gap-[150px] justify-between px-5 lg:px-[6%] items-center transition-all duration-700 fixed top-0 left-0 z-[999]`}
    >
      <Link to="/">
        <img
          alt=""
          src={
            currentPage?.includes("/cohort") && !scrollBackground
              ? "/images/logo-black.png"
              : "/images/logo-white.png"
          }
          className="w-[130px] h-auto md:w-[200px] rounded-sm md:rounded-b-lg"
        />
      </Link>
      <div
        onClick={handleClick}
        className="flex flex-col gap-2 w-10 md:hidden cursor-pointer"
      >
        <div className={`w-full h-1 bg-[#FFBD13] rounded-lg`}></div>
        <div className={`w-full h-1 bg-[#FFBD13] rounded-lg`}></div>{" "}
      </div>
      <ul className="h-full gap-3 lg:gap-6 text-[.85rem] lg:text-[1rem] items-center hidden md:flex font-kalam uppercase">
        {/* <li
          //   onClick={() => navigate("/kids")}
          className={`cursor-pointer hover:text-[#FFBD13] transition-all duration-300 ${
            currentPage?.includes("/oppurtunities")
              ? "text-[#FFBD13] font-bold"
              : "border-transparent"
          }`}
        >
          Oppurtunities
        </li>
        <li
          //   onClick={() => navigate("/kids")}
          className={`cursor-pointer hover:text-[#FFBD13] transition-all duration-300 ${
            currentPage?.includes("/partners")
              ? "text-[#FFBD13] font-bold"
              : "border-transparent"
          }`}
        >
          Partners
        </li> */}

        {/* <li
          onClick={() => navigate("/dashboard-volunteer")}
          className={`cursor-pointer hover:text-[#FFBD13] transition-all duration-300 ${
            currentPage?.includes("/dashboard-volunteer")
              ? "text-[#FFBD13] font-bold"
              : "border-transparent"
          }`}
        >
          Volunteer
        </li> */}
        <li
          onClick={() => navigate("/all-programmes")}
          className={`cursor-pointer hover:text-[#FFBD13] transition-all duration-300 ${
            currentPage?.includes("/all-programmes")
              ? "text-[#FFBD13] font-bold"
              : "border-transparent"
          }`}
        >
          PHYSICAL CLASSES
        </li>
        <li
          onClick={() => navigate("/kids")}
          className={`cursor-pointer hover:text-[#FFBD13] transition-all duration-300 ${
            currentPage?.includes("/kids")
              ? "text-[#FFBD13] font-bold"
              : "border-transparent"
          }`}
        >
          Kids
        </li>
        <li
          onClick={() => navigate("/volunteer")}
          className={`cursor-pointer hover:text-[#FFBD13] transition-all duration-300 whitespace-nowrap ${
            currentPage?.includes("/volunteer")
              ? "text-[#FFBD13] font-bold"
              : "border-transparent"
          }`}
        >
          Volunteer
        </li>
        <li
          onClick={() => navigate("/cohort")}
          className={`cursor-pointer hover:text-[#FFBD13] transition-all duration-300 whitespace-nowrap ${
            currentPage?.includes("/cohort")
              ? "text-[#FFBD13] font-bold"
              : "border-transparent"
          }`}
        >
          Cohort
        </li>
        <li
          onClick={handleScrollToFooter}
          className={`cursor-pointer hover:text-[#FFBD13] transition-all duration-300`}
        >
          CONTACT
        </li>

        {/* {isInstructor && (
          <li
            onClick={() => navigate("/dashboard-trainer")}
            className={`cursor-pointer hover:text-[#FFBD13] transition-all duration-300 ${
              currentPage?.includes("/dashboard")
                ? "text-[#FFBD13] font-bold"
                : "border-transparent"
            }`}
          >
            Dashboard
          </li>
        )} */}
      </ul>
      {user ? (
        <div className="hidden md:flex items-center gap-4">
          <div className="hover:text-[#FFBD13] cursor-pointer">
            <img
              // onClick={handleClick}
              alt=""
              src="/images/icons8-search-64.png"
              className="w-7 h-7"
            />
          </div>
          <div className="hover:text-[#FFBD13] cursor-pointer">
            <img
              // onClick={handleClick}
              alt=""
              src="/images/icons8-notification-64.png"
              className="w-7 h-7"
            />
          </div>
          <UserTooltip user={user} logout={logout} />
        </div>
      ) : (
        <ul className="gap-3 items-center hidden md:flex">
          {/* <li className="">
            <button
              onClick={() => navigate("/login")}
              className="px-3 lg:px-8 py-2 lg:py-3 bg-gradient-to-r from-[#ffbb00] to-[#faf000] hover:opacity-80 uppercase text-[.85rem] text-[#000103] border border-[#000103] font-medium"
            >
              Login
            </button>
          </li> */}
          <li>
            <button
              onClick={() => navigate("/selectionpage")}
              className="px-3 lg:px-5 py-2 lg:py-3 bg-transparent uppercase whitespace-nowrap text-[.85rem] hover:text-[#000103] border border-[#FFBD13] font-medium hover:bg-gradient-to-r from-[#ffbb00] to-[#faf000]"
            >
              Get Started
            </button>
          </li>
        </ul>
      )}

      {/* mobile dropdown */}
      {openMenu && (
        <div className="w-full h-[100vh] z-[200] bg-black/80 fixed top-0 left-0 lg:hidden">
          {showchools && (
            <div className="w-[70%] h-screen bg-[#000103] pt-20 pb-10 pl-4 text-white gap-1 md:hidden flex flex-col overflow-y-auto">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleShowSchool();
                }}
                className="absolute top-0 left-0 bg-gray-300 p-4 w-[70%] text-[.85rem] flex gap-3 items-center text-black"
              >
                <img
                  alt=""
                  src="/images/icons8-expand-arrow-50.png"
                  className="w-3 h-3 rotate-90"
                />{" "}
                Menu
              </div>
              {bootcampData?.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      navigate(`/bootcamp/${item?.title}`);
                      handleClick();
                    }}
                    className="pr-3 whitespace-nowrap truncate p-1 hover:text-yellow-300 text-[.85rem]"
                  >
                    {item?.title}
                  </div>
                );
              })}
            </div>
          )}
          <div
            onClick={() => {
              handleClick();
            }}
            className="absolute top-4 right-3 cursor-pointer flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full"
          >
            <img
              className="w-[25px] h-[25px]"
              alt=""
              src="/images/icons8-close-50.png"
            />
          </div>
          <ul className="slide w-[70%] h-screen bg-[#000103] pt-20 pb-10 text-white gap-3 items-center md:hidden flex flex-col overflow-y-auto">
            {!showchools && (
              <Link
                onClick={() => {
                  handleClick();
                }}
                to="/"
              >
                <li className="absolute top-4 left-5">
                  <div className="flex gap-2 items-center">
                    <img
                      alt=""
                      src="/images/logo-white.png"
                      className="w-[150px] h-auto md:w-[200px] md:h-auto"
                    />
                  </div>
                </li>
              </Link>
            )}

            {!user && (
              <>
                {/* <Link to="/all-programmes" className="w-full">
                  <li className="w-full pt-2 px-5 border-t border-white/50 uppercase">
                    Get Started
                  </li>
                </Link> */}
                {/* <Link to="/login" className="w-full">
                  <li className="w-full pt-2 px-5 border-t border-white/50 uppercase">
                    Log In
                  </li>
                </Link>
                <Link to="/register" className="w-full">
                  <li className="w-full pb-2 px-5 border-b border-white/50 uppercase">
                    Sign Up
                  </li>
                </Link> */}
              </>
            )}
            <li
              onClick={() => {
                handleClick();
                navigate("/all-programmes");
              }}
              className="w-full py-2 px-5 uppercase"
            >
              Physical Classes
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/kids");
              }}
              className="w-full py-2 px-5 uppercase"
            >
              Kids
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/volunteer");
              }}
              className="w-full py-2 px-5 uppercase flex gap-2 items-center"
            >
              Volunteer{" "}
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/cohort");
              }}
              className="w-full py-2 px-5 uppercase flex gap-2 items-center"
            >
              Cohort{" "}
            </li>

            <li
              onClick={() => {
                handleClick();
                handleScrollToFooter();
              }}
              className="w-full px-5 py-2 uppercase"
            >
              Contact
            </li>

            {/* <li
              onClick={(e) => {
                e.stopPropagation();
                // handleShowSchool();
                navigate("/dashboard-volunteer");
              }}
              className="w-full py-2 px-5 uppercase flex gap-2 items-center"
            >
              Volunteer{" "}
            </li>
            <li
              onClick={() => {
                // handleClick();
                // navigate("/courses");
                handleShowSchool();
              }}
              className="w-full py-2 px-5 uppercase flex gap-2 items-center"
            >
              Courses
              <img
                alt=""
                src="/images/icons8-expand-arrow-50.png"
                className="w-4 h-4 bg-white"
              />{" "}
            </li>

            <li
              onClick={() => {
                handleClick();
                // navigate("/courses");
              }}
              className="w-full py-2 px-5 uppercase"
            >
              ABout us
            </li> */}

            {isInstructor && (
              <li
                onClick={() => {
                  handleClick();
                  navigate("/dashboard-trainer");
                }}
                className="w-full py-2 px-5 uppercase"
              >
                Dashboard
              </li>
            )}

            {user && (
              <li
                onClick={() => {
                  handleClick();
                  logout();
                }}
                className="w-full py-2 px-5 border-t border-black/20"
              >
                Log Out
              </li>
            )}
          </ul>
        </div>
      )}
      {/* {openMenu && (
        <div className="w-full h-[100vh] z-[200] bg-[#000103]/80 fixed top-0 left-0 lg:hidden">
          <div
            onClick={() => {
              handleClick();
            }}
            className="w-fit h-fit p-2  bg-[#ffbb00] rounded-full cursor-pointer mr-[25px] absolute top-4 right-0"
          >
            <img
              className="w-5 h-5  text-white"
              alt=""
              src="/images/icons8-close-50.png"
            />
          </div>
          <ul className="slide float-right w-full min-h-[150px] bg-[#000103] py-10 text-white gap-3 items-center md:hidden flex flex-col">
            <li
              onClick={() => {
                handleClick();
                // navigate("/");
              }}
              className="py-2 uppercase"
            >
              Opportunities
            </li>

            <li
              onClick={() => {
                handleClick();
                // navigate("/about");
              }}
              className="py-2 uppercase"
            >
              Partners
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/kids");
              }}
              className="py-2 uppercase"
            >
              Kids
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/dashboard-volunteer");
              }}
              className="py-2 uppercase"
            >
              Volunteer
            </li>
            <li
              onClick={() => {
                handleClick();
                navigate("/courses");
              }}
              className="py-2 uppercase"
            >
              Courses
            </li>
            <li
              onClick={() => {
                handleClick();
                // navigate("/contact");
              }}
              className="py-2 uppercase"
            >
              About us
            </li>
            {isInstructor && (
              <li
                onClick={() => {
                  handleClick();
                  navigate("/dashboard-trainer");
                }}
                className="py-2 uppercase"
              >
                Volunteer
              </li>
            )}

            {!user && (
              <>
                <Link to="/login" className="w-full">
                  <li className="w-full py-2 px-5 border-t border-black/20 text-purple-700">
                    Log In
                  </li>
                </Link>
                <Link to="/register" className="w-full">
                  <li className="w-full py-2 px-5 border-b border-black/20 text-purple-700">
                    Sign Up
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      )} */}
    </header>
  );
};

export default Header2;
