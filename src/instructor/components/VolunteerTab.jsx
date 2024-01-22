/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { PulseLoader } from "react-spinners";
import { Tabs } from "flowbite-react";
// import coursesAdmin from "../../data/coursesAdmin.json";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { useMaketerContext } from "../../contexts/MaketerContext";
import { useEffect } from "react";
import VolunteerRow from "./VolunteerRow";

export default function VolunteerTab({ show, toggleShow, setshow }) {
  //   const { userData } = useAppContext();

  const {
    allVolunteers,
    allSchools,
    fetchallSchools,
    fetchingAllSch,
    changeStatus,
  } = useMaketerContext();

  useEffect(() => {
    fetchallSchools();
  }, []);

  function approveAction(id, data) {
    const confirmed = window.confirm("Approve school?");
    if (confirmed) {
      changeStatus(id, data);
    }
  }

  function declineAction(id, data) {
    const confirmed = window.confirm("Decline school?");
    if (confirmed) {
      changeStatus(id, data);
    }
  }

  return (
    <Tabs.Group
      aria-label="Tabs with icons"
      style="underline"
      theme={customTheme}
    >
      <Tabs.Item
        title={`Volunteers (${allVolunteers ? allVolunteers?.length : 0})`}
        className=""
        activeClassName="active-tab"
      >
        {allVolunteers?.length === 0 && (
          <div className="w-full h-[250px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
            No Volunteers yet..
          </div>
        )}

        {allVolunteers?.length > 0 && (
          <div className="w-full mt-2 flex md:flex-row flex-col gap-4 md:gap-6 md:flex-wrap overflow-x-auto md:overflow-x-hidden pb-20">
            {allVolunteers?.map((item, index) => {
              const mySchools = allSchools?.filter(
                (w) => w?.volunteers === item?.uid
              );

              const mySchoolsApproved = mySchools?.filter(
                (x) => x?.status === "Validated"
              );

              const mySchoolsDeclined = mySchools?.filter(
                (y) => y?.status === "Declined"
              );

              return (
                <VolunteerRow
                  key={index}
                  item={item}
                  toggleShow={toggleShow}
                  mySchools={mySchools}
                  mySchoolsApproved={mySchoolsApproved}
                  show={show}
                  mySchoolsDeclined={mySchoolsDeclined}
                  setshow={setshow}
                />
              );
            })}
          </div>
        )}
      </Tabs.Item>
      <Tabs.Item
        title={`Pending (${
          allSchools?.filter((q) => q?.status === "Pending")?.length
        })`}
      >
        {!fetchingAllSch && (allSchools?.length === 0 || !allSchools) && (
          <div className="w-full h-[250px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
            No courses yet..
          </div>
        )}
        {fetchingAllSch && (
          <div className="w-full h-[250px] border border-black/10 flex justify-center items-center rounded-lg text-black/50">
            <PulseLoader color="#FFBD13" size={15} />
          </div>
        )}
        {!fetchingAllSch && allSchools?.length > 0 && (
          <div className="w-full mt-2 flex md:flex-row flex-col gap-4 md:gap-6 md:flex-wrap overflow-x-auto md:overflow-x-hidden pb-20">
            {allSchools?.map((itm, idx) => {
              const volunteer = allVolunteers?.filter(
                (it) => it?.uid === itm?.volunteers
              )[0];
              return (
                <div
                  key={idx}
                  //   onClick={link}
                  className={`w-full min-w-[240px] max-w-[250px] h-[380px] bg-white shadow-md rounded-md border border-black/40 relative`}
                >
                  <img
                    alt=""
                    src={itm?.image1}
                    className="w-full h-[120px] object-cover border-black/20 cursor-pointer"
                  />
                  <div className="w-full h-[260px] px-3 py-2 flex flex-col">
                    <h2 className="w-full text-[.95remrem] text-black mb-1 font-medium">
                      {capitalizeFirstLetter(itm?.name)}
                    </h2>
                    <div className="text-[.85em] flex gap-2 items-center">
                      {itm?.address}
                    </div>
                    <div className="text-[.85em] flex gap-2 items-center">
                      Email:{" "}
                      <a
                        className="hover:underline cursor-pointer"
                        href={`mailto:${itm?.email}`}
                      >
                        {itm?.email}
                      </a>
                    </div>
                    <div className="text-[.85em] flex gap-2 items-center">
                      Tel:{" "}
                      <a
                        className="hover:underline cursor-pointer"
                        href={`tel:${itm?.reference_contact}`}
                      >
                        {itm?.reference_contact}
                      </a>
                    </div>
                    <div className="mt-1 mb-auto">
                      <div className="text-[.85em] font-medium mb-auto flex gap-1 items-center">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        Boys: {itm?.number_of_boys}
                      </div>
                      <div className="text-[.85em] font-medium mb-auto flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        Girls: {itm?.number_of_girls}
                      </div>
                    </div>
                    <div className="text-[.85em] flex gap-2 items-center">
                      Volunteer:{" "}
                      <span className="font-medium">
                        {volunteer?.first_name} {volunteer?.last_name}
                      </span>
                    </div>
                    <div className="w-full my-2 flex items-center justify-between gap-4 text-black cursor-pointer">
                      <p
                        className={`px-2 py-1 leading-tight rounded-lg text-[.85rem] absolute top-[80px] left-3 ${
                          itm?.status === "Pending"
                            ? "bg-gray-300"
                            : itm?.status === "Validated"
                            ? "bg-green-500 text-white"
                            : "bg-red-400"
                        }`}
                      >
                        {itm?.status}
                      </p>

                      {itm?.status === "Pending" && (
                        <div className="flex gap-2 text-[.85rem]">
                          <button
                            onClick={() =>
                              approveAction(itm?.volunteers, {
                                school: itm?.id,
                                status: "Validated",
                              })
                            }
                            className="px-2 py-1 bg-green-300 rounded-md leading-tight border border-black/30"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() =>
                              declineAction(itm?.volunteers, {
                                school: itm?.id,
                                status: "Declined",
                              })
                            }
                            className="px-2 py-1 bg-red-400 rounded-md leading-tight border border-black/30"
                          >
                            Decline
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Tabs.Item>
    </Tabs.Group>
  );
}

const customTheme = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    styles: {
      default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
      underline:
        "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
      pills:
        "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
      fullWidth:
        "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none",
    },
    tabitem: {
      base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:outline-none",
      styles: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          },
        },
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "text-yellow-300 dark:text-yellow-300 border-b-2 border-yellow-300",
            off: "text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
          },
          hover: {
            on: "border-gray-300",
            off: "border-gray-300",
          },
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-cyan-600 text-white",
            off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
          },
        },
        fullWidth: {
          base: "ml-0 first:ml-0 w-full rounded-none flex",
          active: {
            on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
            off: "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabpanel: "py-3",
};
