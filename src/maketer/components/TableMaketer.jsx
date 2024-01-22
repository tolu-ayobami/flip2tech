/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Table } from "flowbite-react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
// import studentData from "../../data/student.json";

export default function TableMaketer({ mySchools }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedUsers = mySchools?.slice(startIndex, endIndex);

  return (
    <>
      <Table hoverable className="">
        <Table.Head className="">
          <Table.HeadCell>School Name</Table.HeadCell>
          <Table.HeadCell className="whitespace-nowrap">Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {displayedUsers?.map((item, index) => {
            return (
              <Table.Row
                key={index}
                className="bg-white dark:border-[#10b981]/30 border-black/10 dark:bg-gray-800"
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
                  <div
                    className={`py-1 px-3 rounded-lg leading-tight w-fit text-[.75rem] ${
                      item?.status === "Pending"
                        ? "bg-gray-200"
                        : item?.status === "Validated"
                        ? "bg-green-300/70"
                        : "bg-red-400"
                    }`}
                  >
                    {item?.status}
                  </div>
                </Table.Cell>
                {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="w-[40%] h-3 rounded-full bg-yellow-300/50"></div>
                </Table.Cell> */}
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
        pageCount={Math.ceil(mySchools.length / itemsPerPage)}
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
