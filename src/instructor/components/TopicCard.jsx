/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import Loader from "../../components/Loader";
import { useAdminContext } from "../../contexts/AdminContext";
import { useAppContext } from "../../contexts/AppContext";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

const TopicCard = ({ item, currentCourse }) => {
  const {
    handleContentChange,
    contentData,
    setcontentData,
    validationErr,
    setAddContent,
    addContent,
    handleContentVideoChange,
    contentvideoPreview,
    setValidationErr,
    submitContent,
    uploadingContent,
    topicContent,
    setdeleteCourseTopic,
    seteditCourseTopic,
    editCourseTopic,
    deleteCourseTopic,
    deletingCourseTopic,
    submitDeleteCourseTopic,
    submitEditCourseTopic,
    edittingCourseTopic,
    allTopics,
  } = useAdminContext();
  const { userData } = useAppContext();

  const [displayContent, setDisplayContent] = useState(null);
  function toggleOpen(item) {
    setDisplayContent((prev) => (prev === null ? item : null));
  }

  function toggleAdd(topic) {
    setAddContent((prev) => (prev === null ? topic : null));
  }

  function toggleDelete(item) {
    setdeleteCourseTopic((prev) => (prev === null ? item : null));
  }

  function toggleEdit(item) {
    seteditCourseTopic((prev) => (prev === null ? item : null));
  }

  // console.log("addContent", addContent);

  useEffect(() => {
    if (addContent) {
      setcontentData((prev) => {
        return {
          ...prev,
          topic: addContent?.id,
        };
      });
    }
  }, [addContent]);

  function handleSubmit(e) {
    e.preventDefault();
    if (contentData?.title && contentData?.video && contentData?.notes) {
      submitContent(userData?.access);
    } else {
      setValidationErr("All fields are required");
    }
  }

  const contents = topicContent?.filter((each) => each?.topic === item?.id);
  // console.log("contents", contents);

  const [coursetopicData, setcourseTopicData] = useState({
    title: "",
    description: "",
  });

  function handleBootcampTopicChange(e) {
    const { value, id } = e.target;
    setValidationErr("");
    setcourseTopicData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  function handleEditTopic(e) {
    e.preventDefault();
    if (coursetopicData?.title && coursetopicData?.description) {
      submitEditCourseTopic(
        coursetopicData,
        userData?.access,
        currentCourse?.id,
        editCourseTopic?.id
      );
    } else {
      setValidationErr("All fields are required");
    }
  }

  const currentTopic = allTopics?.filter(
    (topic) => topic?.topic_id === item?.id
  )[0];

  return (
    <>
      {uploadingContent && <Loader />}
      <div
        onClick={() => toggleOpen(item)}
        className="w-full p-3 bg-gray-100 shadow-md cursor-pointer flex hover:bg-yellow-300/20"
      >
        <p className="text-gray-500 mr-5">{item?.time_frame}</p>
        <p className="w-[250px] md:w-[500px]">
          {capitalizeFirstLetter(currentTopic?.topic_title)}
        </p>
        <div className="flex gap-2 items-center ml-auto">
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
          {contents?.length === 0 && (
            <p className="text-gray-500">No content yet..</p>
          )}
          {contents?.length > 0 &&
            contents?.map((content, index) => {
              return (
                <div
                  key={index}
                  className="w-full p-3 bg-gray-500/10 rounded-lg flex md:flex-row flex-col gap-3"
                >
                  <video
                    controls
                    preload="none"
                    className="rounded-md w-full sm:w-[200px]"
                  >
                    <source src={content?.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div>
                    <p className="mb-2">{content?.title}</p>
                    <p className="mb-2">{content?.notes}</p>
                  </div>
                </div>
              );
            })}
          <button
            onClick={() => toggleAdd(item)}
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

      {addContent && (
        <div className="w-full h-screen bg-black/70 fixed top-0 left-0 flex justify-center z-[3] p-3 py-[100px] md:py-[80px] overflow-y-auto">
          <form className="w-full md:w-[600px] h-fit bg-white rounded-lg p-3 md:p-6 flex flex-col gap-5">
            <h2 className="uppercase">
              Add content to topic -{" "}
              <span className="font-bold">{addContent?.title}</span>
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
                  validationErr && !contentData?.title
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                placeholder="Onboarding"
                required
                value={contentData.title}
                onChange={handleContentChange}
              />
            </div>

            <div>
              <label
                htmlFor="video"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Video
              </label>
              <input
                type="file"
                id="video"
                accept="video/mp4"
                className={`bg-gray-50 border text-gray-900 text-[.75em] pl-4 sm:text-sm rounded-lg ${
                  validationErr && !contentData?.video
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:ring-yellow-300 focus:border-yellow-300 block w-full placeholder:text-gray-400 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                onChange={handleContentVideoChange}
              />
              {contentvideoPreview && (
                <video
                  src={contentvideoPreview}
                  controls
                  className="mt-4 md:w-[300px] w-full"
                />
              )}
            </div>
            <div>
              <label
                htmlFor="notes"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Notes
              </label>
              <textarea
                type="text"
                id="notes"
                className={`bg-gray-50 min-h-[100px] border text-gray-900 text-[.75em] sm:text-sm rounded-lg ${
                  validationErr && !contentData?.notes
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                placeholder="To begin your journey..."
                required
                value={contentData.notes}
                onChange={handleContentChange}
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

      {deleteCourseTopic === item && (
        <div className="w-full h-screen bg-black/80 fixed top-0 left-0 flex justify-center z-[3] p-3 py-[100px] md:py-[80px] overflow-y-auto">
          <div className="w-full md:w-[600px] h-fit bg-white rounded-lg p-3 md:p-6 flex flex-col gap-5 slide">
            <h2 className="uppercase text-center">
              Delete Topic - {deleteCourseTopic?.title}?
            </h2>
            {deletingCourseTopic && (
              <div className="w-full h-[250px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
                <PulseLoader color="#FFBD13" size={15} />
              </div>
            )}

            {!deletingCourseTopic && (
              <div className="flex gap-3 items-center justify-center mt-3 md:mt-5">
                <button
                  onClick={toggleDelete}
                  className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 text-[.75rem] md:text-[1rem] rounded-lg hover:opacity-60 border-gray-500 bg-white border-2"
                >
                  Cancel
                </button>
                <button
                  onClick={() =>
                    submitDeleteCourseTopic(
                      userData?.access,
                      currentCourse?.id,
                      deleteCourseTopic?.id
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

      {editCourseTopic === item && (
        <div className="w-full h-screen bg-black/80 fixed top-0 left-0 flex justify-center z-[3] p-3 py-[100px] md:py-[80px] overflow-y-auto">
          <form className="w-full md:w-[600px] h-fit bg-white rounded-lg p-3 md:p-6 flex flex-col gap-5 slide">
            <h2 className="uppercase">
              Edit bootcamp topic -{" "}
              <span className="font-bold">{editCourseTopic?.title}</span>
            </h2>

            {edittingCourseTopic && (
              <div className="w-full h-[250px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
                <PulseLoader color="#FFBD13" size={15} />
              </div>
            )}
            {!edittingCourseTopic && (
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
                      validationErr && !coursetopicData?.title
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                    required
                    value={coursetopicData?.title}
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
                      validationErr && !coursetopicData?.description
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300`}
                    required
                    value={coursetopicData?.description}
                    onChange={handleBootcampTopicChange}
                  />
                </div>
              </form>
            )}
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

export default TopicCard;
