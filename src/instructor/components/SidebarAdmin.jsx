// import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

const SidebarAdmin = () => {
  const { currentPage } = useAppContext();

  //   const [showTag, setShowTag] = useState(false);

  //   function displayTag() {
  //     setShowTag(true);
  //   }

  //   function hideTag() {
  //     setShowTag(false);
  //   }

  return (
    <div className="bg-[#0F1222] hidden md:w-[220px] lg:w-[280px] h-screen fixed left-0 top-0 py-4 text-white md:flex flex-col gap-10 z-[3]">
      {/* ShowFlix Logo */}
      {/* <Link to="/"> */}
      <Link to="/">
        <div className="flex gap-2 items-center ml-4 md:ml-8">
          <img
            alt=""
            src="/images/logo-white.png"
            className="w-[100px] h-auto md:w-[150px] md:h-auto"
          />
        </div>
      </Link>
      {/* </Link> */}

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
                src="/images/icons8-course-64.png"
                className="w-6 h-6"
              />
            </div>
            <p className="">My Courses</p>
          </li>
        </Link>

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
                src="/images/icons8-volunteer-30.png"
                className="w-6 h-6"
              />
            </div>
            <p className="">Volunteers</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
