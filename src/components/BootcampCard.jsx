import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const BootcampCard = ({ item }) => {
  const navigate = useNavigate();

  function link() {
    navigate(`/bootcamp/${item?.title}`);
  }

  return (
    <div
      onClick={link}
      className={`w-full min-w-[240px] max-w-[250px] h-[300px] hover:opacity-70 transition-all duration-300 bg-white shadow-md rounded-md cursor-pointer border border-black/40`}
    >
      <img
        alt=""
        src={item?.cover_image}
        className="w-full h-[120px] object-cover border-black/20 cursor-pointer"
      />
      <div className="w-full h-[180px] p-4 flex flex-col">
        <h2 className="w-full text-[1rem] text-black mb-2 font-medium">
          {item?.title}
        </h2>
        <div className="text-[.75em] font-medium mb-auto flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>{" "}
          {item?.program_type}
        </div>
        <div className="w-full mt-4 flex items-center gap-4 text-black cursor-pointer hover:font-bold">
          <p className="px-2 py-1 bg-gray-300/50 leading-tight rounded-lg text-[.85rem]">
            View Syllabus
          </p>
        </div>
      </div>
    </div>
  );
};

export default BootcampCard;
