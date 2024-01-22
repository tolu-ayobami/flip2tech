import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GetStarted = () => {


  const handleClick = (userType) => {
  
    localStorage.setItem('user_type', JSON.stringify(userType));
   
  };

  return (
    <div>
      <div className="flex gap-[30px]">
        <button
          onClick={() => {
            handleClick("volunteer");
          }}
          className="text-white bg-black p-[20px]"
        >
          <Link to="/volunteerlogin">
            volunteer
          </Link>
        </button>

        <button
          onClick={() => {
            handleClick("student");
          }}
          className="text-white bg-black p-[20px]"
        >
          <Link to="/volunteerlogin" >
            student
          </Link>
        </button>

        <button
          onClick={() => {
            handleClick("instructor");
          }}
          className="text-white bg-black p-[20px]"
        >
          <Link to="/volunteerlogin">
            instructor
          </Link>
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
