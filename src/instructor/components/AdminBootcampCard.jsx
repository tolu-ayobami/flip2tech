import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { useAdminContext } from "../../contexts/AdminContext";
import { useAppContext } from "../../contexts/AppContext";

/* eslint-disable react/prop-types */
const AdminBootcampCard = ({ item, index, setShowOptions, showOptions }) => {
  const [showButtons, setShowButtons] = useState(null);
  const { userData } = useAppContext();
  const { deleteBootcamp, deletingBootcamp, setShowDelete, showDelete } =
    useAdminContext();

  function handleHover() {
    setShowButtons(index);
  }

  function handleMouseOut() {
    setShowButtons(null);
  }
  //   function link() {
  //     navigate(`/bootcamp/${item?.title}`);
  //   }

  function openDelete() {
    setShowDelete(item);
  }
  function closeDelete() {
    setShowDelete(null);
  }

  function toggleOptions(course) {
    setShowOptions(null);
    setShowOptions(showOptions ? null : course);
  }
  // console.log("item", item);
  const navigate = useNavigate();

  return (
    <>
      <div
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
        className={`w-full min-w-[240px] max-w-[250px] h-[320px] transition-all duration-300 bg-white shadow-md rounded-md cursor-pointer border border-black/40 relative`}
      >
        <img
          alt=""
          src={item?.cover_image}
          onClick={() => navigate(`/bootcamp-management/${item?.title}`)}
          className="w-full h-[120px] object-cover cursor-pointer"
        />
        <div className="w-full h-[200px] p-4 flex flex-col">
          <h2 className="w-full text-[1.25rem] text-black mb-2 font-medium">
            {item?.title}
          </h2>
          <div className="text-[.75em] font-medium mb-auto flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>{" "}
            {item?.program_type}
          </div>
          <div className="border-t border-black/20 pt-3 flex w-full justify-between items-center">
            <p className="font-bold text-[1.2rem] font-petch">{item?.price}</p>
            {showButtons === index && (
              <div className="flex gap-2 items-center">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleOptions(item);
                  }}
                  className="w-7 h-7 rounded-full bg-black cursor-pointer flex justify-center items-center"
                >
                  {/* <img
                    alt=""
                    src="/images/icons8-edit-64.png"
                    className="w-5 h-5 object-cover rounded-md"
                  /> */}
                  <p className="text-[1rem] font-bold text-white mb-2">. . .</p>
                </div>
                <div
                  onClick={() => openDelete(item)}
                  className="w-7 h-7 rounded-full bg-black cursor-pointer flex justify-center items-center"
                >
                  <img
                    alt=""
                    src="/images/deleteCat.png"
                    className="w-4 h-auto object-cover rounded-md"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {showOptions === item && (
          <ul className="bg-white border border-black/20 w-[200px] p-2 rounded-md shadow-md flex flex-col text-black/80 text-[.85rem] absolute bottom-[-80px] z-[2]">
            {/* <li
              onClick={(e) => {
                e.stopPropagation();
                // fetchCourseDetails(item?.id, item?.title);
              }}
              className="border-b py-2 hover:bg-yellow-300/50 cursor-pointer px-2"
            >
              View Details
            </li> */}
            <li
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/bootcamp-management/${item?.title}/edit`);
              }}
              className="border-b py-2 hover:bg-yellow-300/50 cursor-pointer px-2"
            >
              Edit BootCamp
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/bootcamp-management/${item?.title}/create-topic`);
              }}
              className="py-2 hover:bg-yellow-300/50 cursor-pointer px-2"
            >
              Add Topic
            </li>
          </ul>
        )}
      </div>
      {showDelete === item && (
        <div className="w-full h-screen bg-black/70 fixed top-0 left-0 flex justify-center z-[3] p-3 py-[100px] md:py-[80px] overflow-y-auto">
          <div className="w-full md:w-[600px] h-fit bg-white rounded-lg p-3 md:p-6 flex flex-col gap-5 slide">
            <h2 className="uppercase text-center">
              Delete bootcamp - {showDelete?.title}?
            </h2>
            {deletingBootcamp && (
              <div className="w-full h-[250px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
                <PulseLoader color="#FFBD13" size={15} />
              </div>
            )}

            {!deletingBootcamp && (
              <div className="flex gap-3 items-center justify-center mt-3 md:mt-5">
                <button
                  onClick={closeDelete}
                  className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 border-gray-500 bg-white border-2"
                >
                  Cancel
                </button>
                <button
                  onClick={() =>
                    deleteBootcamp(userData?.access, showDelete?.id)
                  }
                  className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 bg-red-500 text-white border-2 border-red-500"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminBootcampCard;
