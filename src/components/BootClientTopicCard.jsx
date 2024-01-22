/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { useAdminContext } from "../contexts/AdminContext";
import { useAppContext } from "../contexts/AppContext";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

const BootClientTopicCard = ({
  item,
  toggleOpen,
  displayContent,
  currentBootcamp,
}) => {
  const { bootcampTopicContent, fetchingContent, fetchBootcampTopicContent } =
    useAdminContext();
  const { userData } = useAppContext();
  const { allTopics } = useAdminContext();

  useEffect(() => {
    if (displayContent?.id) {
      fetchBootcampTopicContent(
        userData?.access,
        currentBootcamp?.id,
        displayContent?.id
      );
    }
  }, [displayContent]);

  const currentTopic = allTopics?.filter(
    (topic) => topic?.topic_id === item?.id
  )[0];

  return (
    <>
      {/* {(uploadingBootcampContent || edittingTopic) && <Loader />} */}
      <div
        onClick={() => toggleOpen(item)}
        className="w-full p-3 bg-gray-100/50 shadow-md cursor-pointer flex justify-between hover:bg-yellow-300/20"
      >
        <p className="w-[250px] md:w-[500px]">
          {capitalizeFirstLetter(currentTopic?.topic_title)}
        </p>
      </div>
      {displayContent === item && (
        <div className="w-[95%] md:w-[90%] min-h-[100px] p-2 mx-auto mb-3 bg-gray-100/50 border-x border-b border-black/20 rounded-b-lg flex flex-col gap-2 items-center">
          {bootcampTopicContent?.length === 0 && !fetchingContent && (
            <p className="text-gray-500 mt-4">No content yet..</p>
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
                  className="w-full p-3 border-b border-black/10 flex flex-row gap-3"
                >
                  <img
                    alt=""
                    className="w-6 h-6"
                    src="/images/icons8-video-50.png"
                  />
                  <p className="w-full text-[.85rem] mr-auto">
                    {capitalizeFirstLetter(content?.title)}
                  </p>
                  <p className="">11:20</p>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default BootClientTopicCard;
