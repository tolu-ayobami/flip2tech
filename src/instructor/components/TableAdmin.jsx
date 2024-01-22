/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Table } from "flowbite-react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import studentData from "../../data/student.json";

export default function TableAdmin({ allUsers }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedUsers = allUsers.slice(startIndex, endIndex);

  return (
    <>
      <Table hoverable className="">
        <Table.Head className="">
          <Table.HeadCell>Full Name</Table.HeadCell>
          <Table.HeadCell className="whitespace-nowrap">Course</Table.HeadCell>
          <Table.HeadCell className="whitespace-nowrap">Grading</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {displayedUsers?.map((item, index) => {
            return (
              <Table.Row
                key={index}
                //   onClick={() => handleRowClick(item)}
                className="bg-white dark:border-[#10b981]/30 border-black/10 dark:bg-gray-800 cursor-pointer"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-2 items-center">
                    <img
                      alt=""
                      src="/images/student.jpeg"
                      className="w-8 h-6 rounded-full"
                    />
                    <p>{item?.name}</p>
                  </div>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item?.course}
                  {/* <div className="py-1 px-3 bg-purple-300/70 rounded-lg leading-tight w-fit text-[.75rem]">
                    {item?.is_kid ? "Kid" : "Student"}
                  </div> */}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {/* <div className="w-[40%] h-3 rounded-full bg-yellow-300/50"></div> */}
                  {item?.grade}/100
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      {/* Pagination */}
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(allUsers.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </>
  );
}
