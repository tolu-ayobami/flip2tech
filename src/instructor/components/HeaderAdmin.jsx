import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import ToastMod from "../../components/ToastMod";
import UserTooltip from "../../components/UserTooltip";

const HeaderAdmin = () => {
  const { userData, logout, logoutSuccess, currentPage } = useAppContext();

  const user = userData?.user_data;

  //   const [showTag, setShowTag] = useState(false);

  //   // Function to display the tag
  //   function displayTag() {
  //     setShowTag(true);
  //   }

  //   // Function to hide the tag
  //   function hideTag() {
  //     setShowTag(false);
  //   }

  const [drop, setDrop] = useState(false);

  // Function to toggle the dropdown menu
  function toggleDrop() {
    setDrop((prev) => !prev);
  }

  return (
    <>
      {logoutSuccess && (
        <div className="w-[300px] z-10 absolute right-5 top-0">
          <ToastMod message="Logged Out successfully" />
        </div>
      )}
      <div className="w-full h-[80px] md:pl-[250px] lg:pl-[310px] pr-[30px] text-[#1e293b] fixed top-0 left-0 bg-white hidden md:flex items-center justify-between z-[2] shadow-md">
        <h1 className="font-bold text-[1.25rem]">
          {currentPage === "/dashboard-trainer"
            ? "Hello Admin"
            : currentPage === "/volunteer-management"
            ? "Volunteer Management"
            : "Instructor Course Management"}
        </h1>
        <div className="hover:text-[#FFBD13] cursor-pointer ml-auto mr-3">
          <img
            // onClick={handleClick}
            alt=""
            src="/images/icons8-notification-64.png"
            className="w-7 h-7"
          />
        </div>
        <UserTooltip user={user} logout={logout} />
      </div>
      <div className="w-full block md:hidden fixed top-0 left-0 z-10">
        {/* Header */}
        <header className="w-full h-[70px] flex items-center bg-[#fefffe] shadow-md relative">
          {/* Menu Icon */}
          <img
            onClick={toggleDrop}
            alt="search icon"
            src="/images/icons8-menu-30.png"
            className="w-7 h-7 absolute top-[50%] left-3 translate-y-[-50%]"
          />

          {/* Logo */}
          <Link to="/" className=" mx-auto">
            <div className="flex gap-2 items-center bg-white w-fit rounded-lg ml-4 md:ml-8">
              <img
                alt=""
                src="/images/logo.png"
                className="w-[150px] h-auto md:w-[150px] md:h-auto"
              />
            </div>
          </Link>

          <div className="pr-3">
            <UserTooltip user={user} logout={logout} />
          </div>
        </header>

        {/* Dropdown Menu */}
        {drop && (
          <div className="bg-[#fefffe] w-full h-screen fixed left-0 top-0 border-r-2 border-[#eef0f7] py-4 text-[#15152b] md:flex flex-col gap-10 slide">
            {/* Close Icon */}
            <img
              onClick={toggleDrop}
              alt="search icon"
              src="/images/icons8-close-50.png"
              className="w-7 h-7 mb-10 ml-5"
            />

            {/* Sidebar Menu */}
            <ul className="w-full font-bold flex flex-col gap-5 ">
              {/* Search Menu Item */}
              <Link to="/dashboard-trainer">
                <li className="py-3 pl-12 rounded-lg relative flex gap-3 items-center hover:bg-yellow-300/10 cursor-pointer transition-all duration-300">
                  {/* Active Indicator */}
                  {currentPage === "/dashboard-trainer" && (
                    <div className="w-2 h-full bg-yellow-300 absolute left-0 top-0 rounded-full"></div>
                  )}
                  {/* Search Icon */}
                  <div className="w-7 h-7 p-1 rounded-md bg-yellow-300 flex justify-center items-center">
                    <img
                      alt="search icon"
                      src="/images/icons8-dashboard-32.png"
                      className="w-6 h-6"
                    />
                  </div>
                  <p>Dashboard</p>
                </li>
              </Link>

              {/* Watchlist Menu Item */}
              <Link to="/bootcamp-management">
                <li
                  // onMouseOver={displayTag}
                  // onMouseOut={hideTag}
                  className="py-3 pl-12 rounded-lg relative flex gap-3 items-center hover:bg-yellow-300/10 cursor-pointer transition-all duration-300"
                >
                  {/* Active Indicator */}
                  {currentPage === "/bootcamp-management" && (
                    <div className="w-2 h-full bg-yellow-300 absolute left-0 top-0 rounded-full"></div>
                  )}
                  {/* Watchlist Icon */}
                  <div className="w-7 h-7 p-1 rounded-md bg-yellow-300 flex justify-center items-center">
                    <img
                      alt="search icon"
                      src="/images/icons8-report-card-50.png"
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="">My Bootcamps</p>
                </li>
              </Link>

              {/* Watchlist Menu Item */}
              <Link to="/course-management">
                <li
                  // onMouseOver={displayTag}
                  // onMouseOut={hideTag}
                  className="py-3 pl-12 rounded-lg relative flex gap-3 items-center hover:bg-yellow-300/10 cursor-pointer transition-all duration-300"
                >
                  {/* Active Indicator */}
                  {currentPage === "/course-management" && (
                    <div className="w-2 h-full bg-yellow-300 absolute left-0 top-0 rounded-full"></div>
                  )}
                  {/* Watchlist Icon */}
                  <div className="w-7 h-7 p-1 rounded-md bg-yellow-300 flex justify-center items-center">
                    <img
                      alt="search icon"
                      src="/images/icons8-report-card-50.png"
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="">My Courses</p>
                </li>
              </Link>

              {/* Watchlist Menu Item */}
              <Link to="/volunteer-management">
                <li
                  // onMouseOver={displayTag}
                  // onMouseOut={hideTag}
                  className="py-3 pl-12 rounded-lg relative flex gap-3 items-center hover:bg-yellow-300/10 cursor-pointer transition-all duration-300"
                >
                  {/* Active Indicator */}
                  {currentPage === "/volunteer-management" && (
                    <div className="w-2 h-full bg-yellow-300 absolute left-0 top-0 rounded-full"></div>
                  )}
                  {/* Watchlist Icon */}
                  <div className="w-7 h-7 p-1 rounded-md bg-yellow-300 flex justify-center items-center">
                    <img
                      alt="search icon"
                      src="/images/icons8-report-card-50.png"
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="">Volunteers</p>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderAdmin;
