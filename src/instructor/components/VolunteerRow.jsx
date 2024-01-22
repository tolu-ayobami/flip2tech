/* eslint-disable react/prop-types */
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

const VolunteerRow = ({
  item,
  toggleShow,
  mySchools,
  mySchoolsApproved,
  show,
  mySchoolsDeclined,
  setshow,
}) => {
  return (
    <div>
      <li
        onClick={() => toggleShow(item)}
        className="py-3 sm:py-4 bg-[#f8fafc] rounded-lg border border-gray-300 w-full md:w-[400px] p-3 cursor-pointer hover:bg-yellow-50"
      >
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 border-2 border-gray-400 rounded-full">
            <img
              alt=""
              src="/images/student.jpeg"
              className="w-7 h-6 rounded-full"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              {capitalizeFirstLetter(item?.first_name)}{" "}
              {capitalizeFirstLetter(item?.last_name)}
            </p>
            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              {item?.email}
            </p>
          </div>
          {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $320
          </div> */}
        </div>
      </li>
      {/* <div
        onClick={() => toggleShow(item)}
        className="w-[280px] bg-yellow-200/10 hover:bg-yellow-300/30 border-2 border-yellow-300 rounded-md p-3 flex flex-col gap-3 cursor-pointer"
      >
        <div className="w-full flex gap-4">
          <img
            alt="search icon"
            src="/images/icons8-volunteer-30.png"
            className="w-8 h-8"
          />
          <p className="text-[1.25rem] font-medium">
            {capitalizeFirstLetter(item?.first_name)}{" "}
            {capitalizeFirstLetter(item?.last_name)}
          </p>
        </div>

        <div className="w-full border-t border-yellow-400 text-[.85rem] pt-2 text-black/60">
          Email: {item?.email}
        </div>
      </div> */}

      {show?.uid === item?.uid && (
        <div className="w-full h-screen bg-black/70 fixed top-0 left-0 flex justify-center z-20 p-3 py-[100px] md:py-[200px] overflow-y-auto">
          <div className="w-full md:w-[600px] h-fit bg-white rounded-lg p-3 md:p-6 flex flex-col gap-5 slide relative">
            <h2 className="uppercase text-center border-b border-black">
              {capitalizeFirstLetter(item?.first_name)}{" "}
              {capitalizeFirstLetter(item?.last_name)}
            </h2>

            <div className="w-full p-2 border-black/20 border rounded-md">
              {/* <div className="flex gap-2 items-center">
                <p>Amount Earned:</p>
                <p className="font-bold">
                  {mySchoolsApproved?.length * 1000} Naira
                </p>
              </div> */}
              <div className="flex gap-2 items-center">
                <p>Schools Referred:</p>
                <p className="font-bold">{mySchools?.length}</p>
              </div>
              <div className="flex gap-2 items-center">
                <p>Schools Approved:</p>
                <p className="font-bold">{mySchoolsApproved?.length}</p>
              </div>
              <div className="flex gap-2 items-center">
                <p>Shools Declined:</p>
                <p className="font-bold">{mySchoolsDeclined?.length}</p>
              </div>
            </div>

            <div className="w-full mx-h-[500px] overflow-y-auto">
              <p className="mb-3">Schools referred:</p>
              {mySchools?.length === 0 && (
                <div className="w-full h-[100px] border border-black/20 rounded-lg p-2 flex justify-center items-center">
                  No schools yet..
                </div>
              )}
              {mySchools?.length > 0 && (
                <ul className="w-full flex flex-col gap-2">
                  {mySchools?.map((sch, isx) => {
                    return (
                      <li
                        key={isx}
                        className="w-full p-2 bg-yellow-300/20 border border-black/20 rounded-md flex justify-between"
                      >
                        <p>{sch?.name}</p>
                        <div
                          className={`py-1 px-3 rounded-lg leading-tight w-fit text-[.75rem] ${
                            sch?.status === "Pending"
                              ? "bg-gray-300"
                              : sch?.status === "Validated"
                              ? "bg-green-500 text-white"
                              : "bg-red-400"
                          }`}
                        >
                          {sch?.status}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <button
              onClick={() => setshow(null)}
              className="flex items-center gap-2 px-3 py-1 text-[.85rem] rounded-lg hover:opacity-60 border-red-400 bg-red-200 border-2 absolute top-2 right-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerRow;
