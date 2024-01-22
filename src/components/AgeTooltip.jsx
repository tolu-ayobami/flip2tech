/* eslint-disable react/prop-types */
import { Tooltip } from "flowbite-react";

export default function Placement({ age }) {
  const content = (
    <ul className="w-full flex flex-col items-center p-2">
      <li className="p-2 hover:text-yellow-300">9-14</li>
      <li className="p-2 hover:text-yellow-300">15-25</li>
      <li className="p-2 hover:text-yellow-300">25-35</li>
    </ul>
  );

  return (
    <>
      <Tooltip
        className={`w-[200px] min-h-[100px]`}
        style="light"
        content={content}
        placement="bottom"
        inline="true"
      >
        <p className="px-5 md:px-10 py-2 bg-white uppercase text-[.85rem] md:text-[1rem] text-black border rounded-lg">
          {age}
        </p>
      </Tooltip>
    </>
  );
}
