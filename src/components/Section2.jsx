/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import programData from "../data/program.json";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProgramCard from "./ProgramCard";

const Section2 = () => {
  const navigate = useNavigate();

  const [programDataPag, setprogramDataPag] = useState([]);
  useEffect(() => {
    setprogramDataPag(programData);
  }, [programData]);

  const [pageNumber, setPageNumber] = useState(0);

  const rowPerPage = 4;
  const pagesVisited = pageNumber * rowPerPage;

  const displayPrograms = programDataPag
    ?.slice(pagesVisited, pagesVisited + rowPerPage)
    ?.map((item, index) => {
      return <ProgramCard key={index} item={item} />;
    });

  const pageCount = Math.ceil(programDataPag?.length / rowPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section
      id="section2"
      className="w-full min-h-[300px] bg-[#fefffe] px-5 lg:px-[6%] py-[60px] text-[#000103] relative z-[2]"
    >
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-[2em] md:text-[2.5em] font-[400] text-center">
          Why Choose Us?
        </h2>
        <div className="bg-[#ffbb00] w-14 h-2 mx-auto"></div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        className="w-full flex sm:flex-row flex-col gap-4 mt-10"
      >
        <div className="w-full p-4 rounded-sm flex flex-col gap-3 items-center border-b-[10px] border-b-[#ffbb00] border-x border-x-gray-200 border-t border-t-gray-200 shadow-md">
          <div className="p-3 bg-[#ffbb00] rounded-full">
            <img alt="icon" className="w-7 h-7" src="/images/star-badge.png" />
          </div>
          <p className="font-medium">LEARN FROM THE BEST</p>
          <p className="text-center">
            Our instructors are carefully selected to give you the best learning
            outcome. They are the best on the subject matter and poised to give
            you the learning you deserve.
          </p>
        </div>

        <div className="w-full p-4 rounded-sm flex flex-col gap-3 items-center border-b-[10px] border-b-[#ffbb00] border-x border-x-gray-200 border-t border-t-gray-200 shadow-md">
          <div className="p-3 bg-[#ffbb00] rounded-full">
            <img
              alt="icon"
              className="w-7 h-7"
              src="/images/arrow-reload-horizontal-2.png"
            />
          </div>
          <p className="font-medium">LIFETIME ACCESS</p>
          <p className="text-center">
            There's no expiration date on your quest for knowledge. Whether you
            want to explore new subjects, refresh your skills, or delve deeper
            into your passions
          </p>
        </div>

        <div className="w-full p-4 rounded-sm flex flex-col gap-3 items-center border-b-[10px] border-b-[#ffbb00] border-x border-x-gray-200 border-t border-t-gray-200 shadow-md">
          <div className="p-3 bg-[#ffbb00] rounded-full">
            <img
              alt="icon"
              className="w-7 h-7"
              src="/images/arrow-reload-horizontal-2.png"
            />
          </div>
          <p className="font-medium">LEARN ANYWHERE</p>
          <p className="text-center">
            Why go to a lecture hall when you can learn from home, by the beach,
            at the recording studio or at your shop?
          </p>
        </div>
      </div>

      <div className="w-full mt-[80px] flex flex-col gap-10">
        <div className="w-full flex md:flex-row flex-col gap-3 flex-wrap justify-between items-center">
          <h2 className="text-[2.5em] font-[400]">Our Programmes</h2>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
        <div className="w-full flex flex-col gap-8 md:grid grid-cols-2">
          {displayPrograms}
        </div>
      </div>

      <div className="w-full flex justify-center mt-14">
        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          onClick={() => navigate("/selectionpage")}
          className="w-fit px-3 lg:px-12 py-2 lg:py-4 flex items-center gap-2 bg-gradient-to-r from-[#ffbb00] to-[#faf000] hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] font-medium"
        >
          View all Programmes
          {/* <img alt="icon" className="w-7 h-7" src="/images/arrow-up-1.png" /> */}
        </button>
      </div>

      {/* bg decor */}
      <img
        alt="icon"
        src="/images/decor1.png"
        className="w-[50px] md:w-[100px] h-auto absolute top-1 md:top-4 left-0"
      />
      <img
        alt="icon"
        src="/images/decor2.png"
        className="w-[50px] md:w-[100px] h-auto absolute bottom-[-40px] md:bottom-[-100px] right-0"
      />
    </section>
  );
};

export default Section2;
