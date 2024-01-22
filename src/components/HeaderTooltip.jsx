/* eslint-disable react/prop-types */
import { Tooltip } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";
import { useAppContext } from "../contexts/AppContext";
import bootcampData from "../data/bootcamp.json";

export default function Placement({ title }) {
  const { allBootcamps } = useAdminContext();
  const { userData } = useAppContext();

  const navigate = useNavigate();

  const user = userData?.user_data;

  const content = (
    <ul className="w-full flex flex-col items-center p-2">
      <li className="p-2 hover:text-yellow-300">Option 1</li>
      <li className="p-2 hover:text-yellow-300">Option 2</li>
      <li className="p-2 hover:text-yellow-300">Option 3</li>
    </ul>
  );

  const schoolsContent = (
    <div className="w-full flex px-4 pb-5 gap-5">
      <ul className="w-fit h-fit flex-wrap flex flex-col py-4">
        <li className="font-bold p-2">All Programs</li>
        {user &&
          allBootcamps?.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => navigate(`/bootcamp/${item?.title}`)}
                className="w-[150px] md:w-[250px] whitespace-nowrap border-r border-gray-300 truncate p-2 hover:text-yellow-300"
              >
                {item?.title}
              </li>
            );
          })}
        {!user &&
          bootcampData?.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => navigate(`/bootcamp/${item?.title}`)}
                className="w-[150px] md:w-[250px] whitespace-nowrap border-r border-gray-300 truncate p-2 hover:text-yellow-300"
              >
                {item?.title}
              </li>
            );
          })}
      </ul>
      <div className="w-full hidden md:flex flex-col gap-5">
        <ul className="w-full font-normal flex flex-col py-6 gap-2">
          <li className="font-bold">Top Programs</li>
          {user &&
            allBootcamps?.slice(0, 3)?.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => navigate(`/bootcamp/${item?.title}`)}
                  className="w-[150px] md:w-[250px] whitespace-nowrap truncate hover:text-yellow-300"
                >
                  {item?.title}
                </li>
              );
            })}
          {!user && (
            <>
              <li className="hover:text-yellow-300">Frontend Engineering</li>
              <li className="hover:text-yellow-300">Digital Marketing</li>
              <li className="hover:text-yellow-300">Backend Engineering</li>
            </>
          )}
        </ul>
        <div>
          <h1 className="font-bold mb-4">Why learn at FlipToTech?</h1>
          <p>
            We offer learning programs that are designed by industry knowledge
            experts and co-created with leading companies
          </p>
          <p className="text-blue-500 font-bold underline mt-4">
            Read testimonials
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Tooltip
        className={`${
          title === "Schools" ? "md:w-[700px] w-[200px]" : "w-[200px]"
        } min-h-[100px]`}
        style="light"
        content={title === "Schools" ? schoolsContent : content}
        placement="bottom"
        inline="true"
      >
        {title}
      </Tooltip>
    </>
  );
}
