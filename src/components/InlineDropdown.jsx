/* eslint-disable react/prop-types */
import bootcampData from "../data/bootcamp.json";

import { Dropdown } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function InlineDropdown({ label, handleClick }) {
  const navigate = useNavigate();

  return (
    <Dropdown inline label={label} className="ml-[-10px]">
      {bootcampData?.map((item, index) => {
        return (
          <Dropdown.Item
            key={index}
            onClick={() => {
              navigate(`/bootcamp/${item?.title}`);
              handleClick();
            }}
            className="w-full pr-3 whitespace-nowrap border-x border-gray-300 truncate p-2 hover:text-yellow-300"
          >
            {item?.title}
          </Dropdown.Item>
        );
      })}
    </Dropdown>
  );
}
