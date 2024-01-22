/* eslint-disable react/prop-types */
import { Tooltip } from "flowbite-react";
import { Link } from "react-router-dom";

export default function UserTooltip({ user, logout }) {
  const content = (
    <div className="w-full flex flex-col items-center p-2">
      <div className="w-full border-b border-black/20 pb-5 flex gap-2 items-center">
        <div className="w-14 h-14 bg-black/90 rounded-full flex justify-center items-center text-white font-bold text-[1.25rem] cursor-pointer">
          {user?.first_name.split("")[0].toUpperCase()}
        </div>
        <div>
          <p className="text-[1.25rem] text-black">{user?.first_name}</p>
          <p className="text-[.85rem] text-black/70 mt-2">{user?.email}</p>
        </div>
      </div>

      <ul className="w-full flex flex-col p-2 border-b border-black/20 font-normal">
        <li className="py-2 cursor-pointer hover:text-yellow-300">Bootcamps</li>
        <Link to="/courses">
          <li className="py-2 cursor-pointer hover:text-yellow-300">Courses</li>
        </Link>
        {/* <li className="py-2 cursor-pointer hover:text-yellow-300">
          Notifications
        </li> */}
        {/* <li className="py-2 cursor-pointer hover:text-yellow-300">
          Become an Instructor
        </li> */}
      </ul>

      <ul className="w-full flex flex-col p-2 border-b border-black/20 font-normal">
        <li className="py-2 cursor-pointer hover:text-yellow-300">
          Account Settings
        </li>
        <li className="py-2 cursor-pointer hover:text-yellow-300">
          Edit Profile
        </li>
        {user?.is_instructor && (
          <Link to="/register-trainer" className="py-2">
            <li className="cursor-pointer hover:text-yellow-300">
              Add Instructor
            </li>
          </Link>
        )}
      </ul>

      <ul className="w-full flex flex-col p-2 font-normal">
        <li className="py-2 cursor-pointer hover:text-yellow-300">Help</li>
        <li
          onClick={logout}
          className="pt-2 cursor-pointer hover:text-yellow-300"
        >
          Log Out
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <Tooltip
        className="w-[300px] min-h-[100px]"
        style="light"
        content={content}
        placement="bottom"
        inline="true"
      >
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex justify-center items-center text-black font-bold text-[1.1rem] md:text-[1.25rem] cursor-pointer">
          {user?.first_name.split("")[0].toUpperCase()}
        </div>
      </Tooltip>
    </>
  );
}
