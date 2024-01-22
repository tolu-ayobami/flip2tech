/* eslint-disable react/no-unescaped-entities */
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../ScrollToTop";
import VolunteerSec1 from "../components/VolunteerSec1";
import VolunteerSec2 from "../components/VolunteerSec2";
import VolunteerSec3 from "../components/VolunteerSec3";

const VolunteerPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header2 />

      <main className="pt-[50px] lg:pt-[80px] bg-[#000103] font-rale">
        <VolunteerSec1 />

        <VolunteerSec2 />

        <VolunteerSec3 />
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
};

export default VolunteerPage;
