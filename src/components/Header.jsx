import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderTooltip from "./HeaderTooltip";
import { useAppContext } from "../contexts/AppContext";
import UserTooltip from "./UserTooltip";
import ToastMod from "./ToastMod";
import bootcampData from "../data/bootcamp.json";

const Header = () => {
  const { userData, logout, logoutSuccess, isInstructor, currentPage } =
    useAppContext();

  const user = userData?.user_data;

  // console.log("userData", userData);

  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  const [dropDown, setdropDown] = useState("");
  function handleHover(title) {
    setdropDown(title);
  }
  function handleMouseOut() {
    setdropDown("");
  }

  const [showchools, setshowchools] = useState(false);
  function handleShowSchool() {
    setshowchools(!showchools);
  }

  return (
    <>
      <header className="w-full h-[60px] md:h-[80px] bg-[#f9f8f9] flex md:gap-5 md:justify-start justify-between px-3 md:px-20 items-center fixed top-0 left-0 shadow-md z-[99] font-poppins">
        {logoutSuccess && (
          <div className="w-[300px] z-10 absolute right-5 top-0">
            <ToastMod message="Logged Out successfully" />
          </div>
        )}
        <div className="flex gap-2 items-center mr-auto md:hidden">
          <img
            onClick={handleClick}
            alt=""
            src="/images/icons8-menu-30.png"
            className="w-7 h-7 block "
          />
          {/* <div className="hover:text-[#FFBD13] cursor-pointer mr-3 md:hidden">
            <img
              // onClick={handleClick}
              alt=""
              src="/images/icons8-search-64.png"
              className="w-7 h-7"
            />
          </div> */}
        </div>
        <Link to="/" className="mr-auto">
          <div className="flex gap-2 items-center">
            <img
              alt=""
              src="/images/logo.png"
              className="w-[150px] h-auto md:w-[200px] md:h-auto"
            />
          </div>
        </Link>

        {user && (
          <div className="ml-auto md:hidden">
            <UserTooltip user={user} logout={logout} />
          </div>
        )}

        <ul className="hidden md:flex gap-4 text-[1.1rem] md:mr-auto h-full">
          <li
            // onMouseOut={handleMouseOut}
            // onMouseOver={() => handleHover("Kids")}
            onClick={() => navigate("/")}
            className={`hover:text-[#FFBD13] cursor-pointer px-2 flex gap-2 items-center border-b-4 ${
              currentPage === "/"
                ? "border-yellow-300  bg-gradient-to-b from-white to-yellow-300/20"
                : "border-white"
            }`}
          >
            Home
          </li>
          <li
            onMouseOut={handleMouseOut}
            onMouseOver={() => handleHover("Kids")}
            onClick={() => navigate("/kids")}
            className={`hover:text-[#FFBD13] cursor-pointer px-2 flex gap-2 items-center border-b-4 ${
              currentPage?.includes("/kids")
                ? "border-yellow-300  bg-gradient-to-b from-white to-yellow-300/20"
                : "border-white"
            }`}
          >
            Kids
          </li>
          <li
            onMouseOut={handleMouseOut}
            onMouseOver={() => handleHover("Volunteer")}
            onClick={() => navigate("/volunteerregistration")}
            className={`hover:text-[#FFBD13] cursor-pointer px-2 flex gap-2 items-center border-b-4 ${
              currentPage?.includes("/volunteerregistration")
                ? "border-yellow-300  bg-gradient-to-b from-white to-yellow-300/20"
                : "border-white"
            }`}
          >
            Volunteer
          </li>
          {/* <li
            onMouseOut={handleMouseOut}
            onMouseOver={() => handleHover("Schools")}
            className={`hover:text-[#FFBD13] cursor-pointer px-2 flex gap-2 items-center border-b-4 ${
              currentPage?.includes("/bootcamp")
                ? "border-yellow-300  bg-gradient-to-b from-white to-yellow-300/20"
                : "border-white"
            }`}
          >
            <HeaderTooltip title="Schools" />
            <img
              alt=""
              src={
                dropDown === "Schools"
                  ? "/images/icons8-collapse-arrow-50.png"
                  : "/images/icons8-expand-arrow-50.png"
              }
              className="w-3 h-3"
            /> 
          </li> */}
          <li
            onMouseOut={handleMouseOut}
            onMouseOver={() => handleHover("Courses")}
            onClick={() => navigate("/courses")}
            className={`hover:text-[#FFBD13] cursor-pointer px-2 flex gap-2 items-center border-b-4 ${
              currentPage?.includes("/courses")
                ? "border-yellow-300  bg-gradient-to-b from-white to-yellow-300/20"
                : "border-white"
            }`}
          >
            Courses
          </li>

          {/* <li
            onMouseOut={handleMouseOut}
            onMouseOver={() => handleHover("Products")}
            className={`hover:text-[#FFBD13] cursor-pointer px-2 flex gap-2 items-center border-b-4 ${
              currentPage?.includes("/product")
                ? "border-yellow-300  bg-gradient-to-b from-white to-yellow-300/20"
                : "border-white"
            }`}
          >
            Products
          </li> */}
          {isInstructor && (
            <li
              // onMouseOut={handleMouseOut}
              // onMouseOver={() => handleHover("Products")}
              onClick={() => navigate("/dashboard-trainer")}
              className={`hover:text-[#FFBD13] cursor-pointer px-2 flex gap-2 items-center border-b-4 ${
                currentPage?.includes("/dashboard")
                  ? "border-yellow-300  bg-gradient-to-b from-white to-yellow-300/20"
                  : "border-white"
              }`}
            >
              Dashboard
            </li>
          )}
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
            <li className="">
              <button
                onClick={() => navigate("/login")}
                className="px-5 py-2 bg-white uppercase text-[.85rem] text-black border border-black rounded-md font-medium hover:bg-[#FFBD13]/70"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/register")}
                className="px-5 py-2 bg-[#FFBD13] uppercase text-[.85rem] text-white border border-[#FFBD13] font-medium hover:bg-[#FFBD13]/70 rounded-md"
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
              <div className="w-[70%] h-screen bg-white pt-20 pb-10 pl-4 text-black gap-1 md:hidden flex flex-col overflow-y-auto">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShowSchool();
                  }}
                  className="absolute top-0 left-0 bg-gray-300 p-4 w-[70%] text-[.85rem] flex gap-3 items-center"
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
            <ul className="slide w-[70%] h-screen bg-white pt-20 pb-10 text-black gap-3 items-center md:hidden flex flex-col overflow-y-auto">
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
                        src="/images/logo.png"
                        className="w-[150px] h-auto md:w-[200px] md:h-auto ml-[-10px]"
                      />
                    </div>
                  </li>
                </Link>
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
              <li
                onClick={() => {
                  handleClick();
                  navigate("/");
                }}
                className="w-full py-2 px-5"
              >
                Home
                {/* <InlineDropdown handleClick={handleClick} label="Kids" /> */}
              </li>

              <li
                onClick={() => {
                  handleClick();
                  navigate("/kids");
                }}
                className="w-full py-2 px-5"
              >
                Kids
                {/* <InlineDropdown handleClick={handleClick} label="Kids" /> */}
              </li>

              <li
                onClick={(e) => {
                  e.stopPropagation();
                  // handleShowSchool();
                  navigate("/dashboard-volunteer");
                }}
                className="w-full py-2 px-5 flex gap-2 items-center"
              >
                Volunteer{" "}
                {/* <img
                  alt=""
                  src="/images/icons8-expand-arrow-50.png"
                  className="w-3 h-3"
                />{" "} */}
                {/* <InlineDropdown handleClick={handleClick} label="Schools" /> */}
              </li>
              <li
                onClick={() => {
                  handleClick();
                  navigate("/courses");
                }}
                className="w-full py-2 px-5"
              >
                Courses
                {/* <InlineDropdown handleClick={handleClick} label="Courses" /> */}
              </li>

              {/* <li
                // onClick={() => {
                //   handleClick();
                // }}
                className="w-full py-2 px-5"
              >
                Products
                {/* <InlineDropdown handleClick={handleClick} label="Products" />
              </li> */}
              {isInstructor && (
                <li
                  onClick={() => {
                    handleClick();
                    navigate("/dashboard-trainer");
                  }}
                  className="w-full py-2 px-5"
                >
                  Dashboard
                  {/* <InlineDropdown handleClick={handleClick} label="Products" /> */}
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
      </header>
    </>
  );
};

export default Header;
