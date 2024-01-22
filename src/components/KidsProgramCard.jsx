import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const KidsProgramCard = ({ item, index }) => {
  const navigate = useNavigate();
  return (
    <div
      key={index}
      className="w-full bg-white shadow-lg p-5 flex md:flex-row flex-col gap-5"
    >
      <div className="w-full md:w-[40%] relative">
        <img
          alt=""
          src={item?.image}
          className="w-full h-[250px] object-cover"
        />
        <div className="bg-[#FF004D] px-3 py-1 text-white absolute top-6 left-6 font-bold">
          {index === 0 ? "Coding" : "Animation"}
        </div>
      </div>

      <div className="w-full md:w-[60%] pr-12 pl-3 flex flex-col gap-3">
        <div className="flex gap-3 items-center text-gray-500">
          <img
            alt=""
            src="/images/circle-clock--clock-loading-measure-time-circle.png"
            className="w-5 h-5"
          />
          <p>{item?.duration}</p>
        </div>
        <p
          onClick={() =>
            navigate(`/course/${item?.title?.replace(/\//g, "_")}`)
          }
          className="text-[1.5rem] md:text-[2rem] font-bold hover:underline cursor-pointer"
        >
          {item?.title}
        </p>
        <p className="text-yellow-400 text-[2rem] font-medium">
          N{item?.price?.toLocaleString()}{" "}
          <span className="text-[1.25rem]">(N15,000 Monthly)</span>
        </p>
        <p className="text-[1.25rem]">{item?.description}</p>
        <div className="w-full flex flex-wrap gap-3 items-center">
          <p
            onClick={() =>
              navigate(`/course/${item?.title?.replace(/\//g, "_")}`)
            }
            className="font-medium flex gap-2 items-center hover:text-[#ffbb00] cursor-pointer ml-auto"
          >
            Details
            <img alt="" className="w-5 h-auto" src="/images/right.png" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default KidsProgramCard;
