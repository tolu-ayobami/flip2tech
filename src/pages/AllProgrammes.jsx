/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import programData from "../data/program.json";
import Header2 from "../components/Header2";
import CourseSection1 from "../components/CourseSection1";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import ProgramCard from "../components/ProgramCard";

const AllProgrammes = () => {
  // ==============================================================Fetch necessary data from context using hooks
  const { loader } = useAppContext();

  const [programDataPag, setprogramDataPag] = useState([]);
  useEffect(() => {
    setprogramDataPag(programData);
  }, [programData]);

  const [pageNumber, setPageNumber] = useState(0);

  const rowPerPage = 6;
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
    <>
      <Header2 />
      {loader && <Loader />}

      <main className="w-full text-black/80 font-poppins">
        {/* ============================================================================Course header section */}
        <CourseSection1 title={"Our Programmes"} />

        <section className="px-5 lg:px-[6%] mb-10 md:my-20 flex gap-3">
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex md:flex-row flex-col gap-3 flex-wrap justify-between items-center">
              <h2 className="text-[2.5em] font-[400] hidden md:block">
                Our Programmes
              </h2>
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
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
};

export default AllProgrammes;
