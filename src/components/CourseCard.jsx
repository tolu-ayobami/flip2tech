import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

/* eslint-disable react/prop-types */
const CourseCard = ({ item, userData }) => {
  const { setCurrentCourse } = useAppContext();

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < item.rating; i++) {
      stars.push(
        <img key={i} alt="" src="/images/star.png" className="w-3 h-3" />
      );
    }
    return stars;
  };

  const navigate = useNavigate();

  function linkToCourse() {
    navigate(`/course/${item?.title.replace(/ /g, "-")}`);
    setCurrentCourse(item);
  }

  return (
    <div className="w-full min-w-[240px] max-w-[250px] h-[290px] bg-black/90 rounded-md text-white/80 transition-all duration-300 hover:opacity-50">
      <img
        alt=""
        src={userData?.access ? item?.course_thumbnail : item?.thumbnail}
        onClick={linkToCourse}
        className="w-full h-[120px] object-cover border-black/20 cursor-pointer rounded-t-md"
      />
      <div className="px-4 py-5 rounded-b-md">
        <p
          onClick={linkToCourse}
          className="font-medium mb-2 text-[1rem] md:text-[1.1rem] cursor-pointer"
        >
          {item?.title}
        </p>
        <div className="text-[.75em] font-medium mb-auto flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>{" "}
          {item?.category}
        </div>
        <div className="text-[.75em] font-medium mb-auto flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-white/80"></div>{" "}
          {item?.max_students} max students
        </div>
        <div className="flex gap-3 items-center mb-3 text-[.85rem]">
          <p className="whitespace-nowrap truncate">{item?.instructor}</p>
          <p>{item?.rating}</p>
          <div className="flex gap-2 mt-[-6px]">{renderStars()}</div>
        </div>
        <p className="font-bold text-[1.2rem] font-petch">
          {item?.price ? item?.price : item?.course_type}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
