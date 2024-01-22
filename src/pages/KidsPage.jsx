/* eslint-disable react/no-unescaped-entities */
import Header2 from "../components/Header2";
import Section6 from "../components/Section6";
import Footer from "../components/Footer";
import Section7 from "../components/Section7";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import KidsSection1 from "../components/KidsSection1";
import ScrollToTop from "../ScrollToTop";
import KidsSection2 from "../components/KidsSection2";
import KidsSection3 from "../components/KidsSection3";

const KidsPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header2 />
      <main className="pt-[50px] lg:pt-[80px] bg-[#000103] font-rale">
        <KidsSection1 />

        <KidsSection2 />

        <KidsSection3 />

        <Section6 />

        <Section7 />
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
};

export default KidsPage;
