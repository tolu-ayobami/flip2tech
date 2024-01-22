/* eslint-disable react/no-unescaped-entities */
import Header2 from "../components/Header2";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Footer from "../components/Footer";
import Section7 from "../components/Section7";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../ScrollToTop";

const Homepage2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header2 />
      <main className="pt-[50px] lg:pt-[80px] bg-[#000103] font-rale">
        <Section1 />

        <Section2 />

        <Section3 />

        <Section4 />

        <Section5 />

        <Section6 />

        <Section7 />
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Homepage2;
