import { useNavigate } from "react-router-dom";
// import emailjs from "@emailjs/browser";
import { useState } from "react";

/* eslint-disable react/prop-types */
const ProgramCard = ({ item }) => {
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(null);
  function toggleShow(item) {
    setShowForm((prev) => (prev ? null : item));
  }

  return (
    <>
      <div className="w-full border border-[#ffbb00] rounded-lg p-5 flex flex-col gap-5">
        <h3
          onClick={() =>
            navigate(`/course/${item?.title?.replace(/\//g, "_")}`)
          }
          className="w-fit cursor-pointer font-bold text-[1.5rem] hover:underline"
        >
          {item?.title}
        </h3>
        <p
          onClick={() => navigate(`/course/${item?.title}`)}
          className="hover:underline cursor-pointer"
        >
          {item?.description}
        </p>
        <div className="flex flex-col gap-3 mt-auto">
          <div className="flex flex-col gap-3 md:flex-row justify-between md:items-center mt-3">
            <p
              onClick={() => toggleShow(item)}
              className="font-medium flex gap-2 items-center hover:text-[#ffbb00] cursor-pointer"
            >
              View Syllabus
              <img alt="" className="w-5 h-auto" src="/images/right.png" />
            </p>
            <div className="w-fit px-3 py-2 bg-black text-white flex font-medium gap-2 items-center text-[.85rem]">
              On-Site Learning
              <img alt="" className="w-5 h-auto" src="/images/corner.png" />
            </div>
          </div>
          <button
            onClick={() =>
              navigate(`/course/${item?.title.replace(/\//g, "_")}/enroll`)
            }
            className="w-fit h-fit px-5 py-2 rounded-md bg-[#ffbb00] hover:opacity-70 ml-auto md:ml-0"
          >
            Register
          </button>
        </div>
      </div>
      {showForm && (
        <div className="w-full h-full fixed top-0 left-0 bg-black/90 flex justify-center py-[150px] px-4 z-[999]">
          <form className="w-full md:w-[500px] h-fit p-4 pb-10 bg-white rounded-xl flex flex-col gap-3 items-center relative scale">
            <button
              onClick={toggleShow}
              className="bg-yellow-300 px-3 py-1 rounded-lg ml-auto mb-3 text-[.75rem] font-medium"
            >
              Close
            </button>
            <h1 className="font-bold text-[1.25rem] text-center">
              View syllabus program: {showForm?.title}
            </h1>
            <p>
              Dear user, you can download the syllabus here:{" "}
              <a
                className="underline cursor-pointer"
                href={showForm?.pdf}
                target="_blank"
                rel="noreferrer"
              >
                Download here
              </a>
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default ProgramCard;
