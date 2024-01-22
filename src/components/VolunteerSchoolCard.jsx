// import { useNavigate } from "react-router-dom";

import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

/* eslint-disable react/prop-types */
const VolunteerSchoolCard = ({ item }) => {
  //   const navigate = useNavigate();

  //   function link() {
  //     navigate(`/bootcamp/${item?.title}`);
  //   }

  return (
    <div
      //   onClick={link}
      className={`w-full min-w-[240px] max-w-[250px] h-[300px] hover:opacity-70 transition-all duration-300 bg-white shadow-md rounded-md cursor-pointer border border-black/40`}
    >
      <img
        alt=""
        src={item?.image1}
        className="w-full h-[120px] object-cover border-black/20 cursor-pointer"
      />
      <div className="w-full h-[180px] p-4 flex flex-col">
        <h2 className="w-full text-[1rem] text-black mb-2 font-medium">
          {capitalizeFirstLetter(item?.name)}
        </h2>
        <div className="text-[.85em] font-medium mb-auto flex gap-2 items-center">
          {item?.address}
        </div>
        <div className="text-[.85em] font-medium mb-auto flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          Boys: {item?.boys}
        </div>
        <div className="text-[.85em] font-medium mb-auto flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          Girls: {item?.girls}
        </div>
        <div className="w-full mt-4 flex items-center gap-4 text-black cursor-pointer hover:font-bold">
          <p
            className={`px-2 py-1 leading-tight rounded-lg text-[.85rem] ${
              item?.status === "Pending"
                ? "bg-gray-300/50"
                : item?.status === "Validated"
                ? "bg-green-400/50"
                : "bg-red-400/50"
            }`}
          >
            {item?.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerSchoolCard;
