/* eslint-disable react/no-unescaped-entities */
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../ScrollToTop";
import CohortSec1 from "../components/CohortSec1";
import CohortSec2 from "../components/CohortSec2";
import CohortSec3 from "../components/CohortSec3";
import CohortSec4 from "../components/CohortSec4";
import CohortSec5 from "../components/CohortSec5";

const KidsPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeSection, setActiveSection] = useState("");

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const scrollPosition = section.offsetTop - 100; // Calculate 100px before the section start
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["section2", "section3", "section4", "section5"];

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header2 />
      <main className="font-rale">
        <CohortSec1 />
        <section className="w-full bg-white flex md:flex-row flex-col gap-12 md:gap-[80px] mt-10 md:mt-[100px] px-5 md:px-10 lg:px-[6%]">
          <ul className="sticky top-[80px] md:top-[100px] z-[3] md:mt-10 w-full h-fit md:min-w-[200px] md:w-[20%] flex flex-row md:flex-col gap-3 p-5 shadow-lg rounded-md text-black bg-[#e4e4e7] font-medium text-[.85rem] md:text-[1rem]">
            <li
              onClick={() => handleScrollTo("section2")}
              className={
                activeSection === "section2"
                  ? "text-[#FF004D] cursor-pointer"
                  : "hover:text-[#FF004D] cursor-pointer"
              }
            >
              Overview
            </li>
            <li
              onClick={() => handleScrollTo("section3")}
              className={
                activeSection === "section3"
                  ? "text-[#FF004D] cursor-pointer"
                  : "hover:text-[#FF004D] cursor-pointer"
              }
            >
              Our Programmes
            </li>
            <li
              onClick={() => handleScrollTo("section4")}
              className={
                activeSection === "section4"
                  ? "text-[#FF004D] cursor-pointer"
                  : "hover:text-[#FF004D] cursor-pointer"
              }
            >
              Our Values
            </li>
            <li
              onClick={() => handleScrollTo("section5")}
              className={
                activeSection === "section5"
                  ? "text-[#FF004D] cursor-pointer"
                  : "hover:text-[#FF004D] cursor-pointer"
              }
            >
              FAQ
            </li>
          </ul>

          <div className="w-full md:w-[80%]">
            <CohortSec2 />

            <CohortSec3 />

            <CohortSec4 />

            <CohortSec5 />
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
};

export default KidsPage;
