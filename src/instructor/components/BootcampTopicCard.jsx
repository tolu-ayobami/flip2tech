/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import Loader from "../../components/Loader";
import { useAdminContext } from "../../contexts/AdminContext";
import { useAppContext } from "../../contexts/AppContext";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

const BootcampTopicCard = ({
  item,
  currentBootcamp,
  toggleOpen,
  displayContent,
  allTopics,
}) => {
  const {
    handleBootcampContentChange,
    bootcampContentData,
    validationErr,
    setAddBootcampContent,
    addBootcampContent,
    setValidationErr,
    submitBootcampContent,
    uploadingBootcampContent,
    bootcampTopicContent,
    fetchBootcampTopicContent,
    fetchingContent,
    setdeleteTopic,
    deleteTopic,
    deletingTopic,
    deleteBootcampTopic,
    seteditTopic,
    editTopic,
    editBootcampTopic,
    edittingTopic,
  } = useAdminContext();
  // console.log("item", item);
  const { userData } = useAppContext();

  function toggleAdd(topic) {
    setAddBootcampContent((prev) => (prev === null ? topic : null));
  }

  function toggleDelete(item) {
    setdeleteTopic((prev) => (prev === null ? item : null));
  }

  function toggleEdit(item) {
    seteditTopic((prev) => (prev === null ? item : null));
  }

  //   console.log("addBootcampContent", addBootcampContent);

  function handleSubmit(e) {
    e.preventDefault();
    if (bootcampContentData?.title && addBootcampContent?.id) {
      submitBootcampContent(
        userData?.access,
        currentBootcamp?.id,
        addBootcampContent?.id
      );
    } else {
      setValidationErr("All fields are required");
    }
  }

  useEffect(() => {
    if (displayContent?.id) {
      fetchBootcampTopicContent(
        userData?.access,
        currentBootcamp?.id,
        displayContent?.id
      );
    }
  }, [displayContent]);

  const [bootcamptopicData, setbootcampTopicData] = useState({
    title: "",
    description: "",
  });

  function handleBootcampTopicChange(e) {
    const { value, id } = e.target;
    setValidationErr("");
    setbootcampTopicData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  function handleEditTopic(e) {
    e.preventDefault();
    if (bootcamptopicData?.title && bootcamptopicData?.description) {
      editBootcampTopic(
        bootcamptopicData,
        userData?.access,
        currentBootcamp?.id,
        editTopic?.id
      );
    } else {
      setValidationErr("All fields are required");
    }
  }

  const currentTopic = allTopics?.filter(
    (topic) => topic?.topic_id === item?.id
  )[0];

  // console.log("myTopics", myTopics);

  return (
    <>
      {(uploadingBootcampContent || edittingTopic) && <Loader />}
      <div
        onClick={() => toggleOpen(item)}
        className="w-full p-3 bg-gray-100 shadow-md cursor-pointer flex justify-between hover:bg-yellow-300/20"
      >
        <p className="w-[250px] md:w-[500px]">
          {capitalizeFirstLetter(currentTopic?.topic_title)}
        </p>
        <div className="flex gap-2 items-center">
          <div
            onClick={(e) => {
              e.stopPropagation();
              toggleEdit(item);
            }}
            className="w-7 h-7 rounded-full bg-black/50 cursor-pointer flex justify-center items-center"
          >
            <img
              alt=""
              src="/images/icons8-edit-64.png"
              className="w-5 h-5 object-cover rounded-md"
            />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              toggleDelete(item);
            }}
            className="w-7 h-7 rounded-full bg-black/50 cursor-pointer flex justify-center items-center"
          >
            <img
              alt=""
              src="/images/deleteCat.png"
              className="w-4 h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      {displayContent === item && (
        <div className="w-[95%] md:w-[90%] min-h-[100px] p-2 mx-auto mb-3 bg-gray-100 border-x border-b border-black/20 rounded-b-lg flex flex-col gap-2 items-center">
          {bootcampTopicContent?.length === 0 && !fetchingContent && (
            <p className="text-gray-500">No content yet..</p>
          )}
          {fetchingContent && (
            <div className="w-full h-[100px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
              <PulseLoader color="#FFBD13" size={15} />
            </div>
          )}
          {bootcampTopicContent?.length > 0 &&
            bootcampTopicContent?.map((content, index) => {
              return (
                <div
                  key={index}
                  className="w-full p-3 bg-gray-500/10 rounded-lg flex md:flex-row flex-col gap-3"
                >
                  <div className="w-full">
                    <p className="mb-2 text-center w-full">{content?.title}</p>
                    {/* <p className="mb-2">{content?.notes}</p> */}
                  </div>
                </div>
              );
            })}
          <button
            onClick={() => {
              toggleAdd(item);
              //   console.log(item);
            }}
            className="flex items-center gap-2 text-blue-500 mt-3 px-2 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[.85rem] rounded-lg hover:bg-blue-500/80 hover:text-white border-2 border-blue-500"
          >
            <img
              alt=""
              src="/images/icons8-add-30.png"
              className="w-5 h-5 object-cover rounded-md"
            />{" "}
            Add Content
          </button>
        </div>
      )}

      {addBootcampContent && (
        <div className="w-full h-screen bg-black/80 fixed top-0 left-0 flex justify-center z-[3] p-3 py-[100px] md:py-[80px] overflow-y-auto">
          <form className="w-full md:w-[600px] h-fit bg-white rounded-lg p-3 md:p-6 flex flex-col gap-5 slide">
            <h2 className="uppercase">
              Add content to bootcamp topic -{" "}
              <span className="font-bold">{addBootcampContent?.title}</span>
            </h2>
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
                  validationErr && !bootcampContentData?.title
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                placeholder="Onboarding"
                required
                value={bootcampContentData.title}
                onChange={handleBootcampContentChange}
              />
            </div>

            <div className="flex gap-3 items-center justify-end mt-3 md:mt-5">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleAdd();
                }}
                className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 border-blue-500 bg-white border-2"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
                className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 bg-blue-500 text-white border-2 border-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {deleteTopic === item && (
        <div className="w-full h-screen bg-black/80 fixed top-0 left-0 flex justify-center z-[3] p-3 py-[100px] md:py-[80px] overflow-y-auto">
          <div className="w-full md:w-[600px] h-fit bg-white rounded-lg p-3 md:p-6 flex flex-col gap-5 slide">
            <h2 className="uppercase text-center">
              Delete Topic - {deleteTopic?.title}?
            </h2>
            {deletingTopic && (
              <div className="w-full h-[250px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
                <PulseLoader color="#FFBD13" size={15} />
              </div>
            )}

            {!deletingTopic && (
              <div className="flex gap-3 items-center justify-center mt-3 md:mt-5">
                <button
                  onClick={toggleDelete}
                  className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 border-gray-500 bg-white border-2"
                >
                  Cancel
                </button>
                <button
                  onClick={() =>
                    deleteBootcampTopic(
                      userData?.access,
                      currentBootcamp?.id,
                      deleteTopic?.id
                    )
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

      {editTopic === item && (
        <div className="w-full h-screen bg-black/80 fixed top-0 left-0 flex justify-center z-[3] p-3 py-[100px] md:py-[80px] overflow-y-auto">
          <form className="w-full md:w-[600px] h-fit bg-white rounded-lg p-3 md:p-6 flex flex-col gap-5 slide">
            <h2 className="uppercase">
              Edit bootcamp topic -{" "}
              <span className="font-bold">{editTopic?.title}</span>
            </h2>
            <form className="w-full flex flex-col gap-5">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Title
                </label>
                <input
                  type="text"
                  id="title"
                  className={`bg-gray-50 border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
                    validationErr && !bootcamptopicData?.title
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                  required
                  value={bootcamptopicData?.title}
                  onChange={handleBootcampTopicChange}
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Description
                </label>
                <textarea
                  type="text"
                  id="description"
                  className={`bg-gray-50 min-h-[100px] border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
                    validationErr && !bootcamptopicData?.description
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                  required
                  value={bootcamptopicData?.description}
                  onChange={handleBootcampTopicChange}
                />
              </div>
            </form>
            <div className="flex gap-3 items-center justify-end mt-3 md:mt-5">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleEdit();
                  setValidationErr("");
                }}
                className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 border-blue-500 bg-white border-2"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleEditTopic(e);
                }}
                className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 bg-blue-500 text-white border-2 border-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default BootcampTopicCard;
