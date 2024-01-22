/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import kidsProgram from "../data/kidsProgram.json";
import KidsProgramCard from "./KidsProgramCard";

const KidsSection2 = () => {
  const navigate = useNavigate();

  const displayPrograms = kidsProgram?.map((item, index) => {
    return <KidsProgramCard item={item} key={index} index={index} />;
  });

  return (
    <section
      id="section2"
      className="w-full min-h-[300px] bg-[#fefffe] px-5 lg:px-[6%] py-[60px] text-[#000103] relative z-[2]"
    >
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-[1.75em] md:text-[2.5em] text-center font-bold">
          Empowering Young Minds
          <br /> Through Tech
        </h2>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        className="w-full flex sm:flex-row flex-col gap-10 mt-10"
      >
        <div className="w-full p-4 rounded-sm flex flex-col gap-3 items-center">
          <div className="p-3 bg-[#0066FF] rounded-full">
            <img
              alt="icon"
              className="w-7 h-7"
              src="/images/startup--shop-rocket-launch-startup.png"
            />
          </div>
          <p className="font-bold">Cutting-Edge Curriculum</p>
          <p className="text-center">
            We keep our finger on the pulse of technology to ensure our courses
            are relevant, up-to-date, and aligned with industry trends.
          </p>
        </div>

        <div className="w-full p-4 rounded-sm flex flex-col gap-3 items-center">
          <div className="p-3 bg-[#FF004D] rounded-full">
            <img
              alt="icon"
              className="w-7 h-7"
              src="/images/brain--medical-health-brain.png"
            />
          </div>
          <p className="font-bold">Hands-On Learning</p>
          <p className="text-center">
            We believe in learning by doing. Our courses are designed to be
            interactive and fun, allowing kids to build, code, experiment, and
            discover.
          </p>
        </div>

        <div className="w-full p-4 rounded-sm flex flex-col gap-3 items-center">
          <div className="p-3 bg-[#ffbb00] rounded-full">
            <img
              alt="icon"
              className="w-7 h-7"
              src="/images/flash-2--flash-power-connect-charge-electricity-lightning.png"
            />
          </div>
          <p className="font-bold">Creativity and Exploration</p>
          <p className="text-center">
            While we teach tech skills, we also encourage creativity and
            exploration, sparking the innovative spirit in every child.
          </p>
        </div>
      </div>

      <div className="w-full md:w-[85%] md:mx-auto mt-[80px] flex flex-col gap-10">
        <div className="w-full flex md:flex-row flex-col gap-3 flex-wrap justify-between items-center">
          <h2 className="w-full text-[2em] md:text-[2.5em] text-center font-bold">
            Our Popular Courses
          </h2>
        </div>
        <div className="w-full flex flex-col gap-8">{displayPrograms}</div>
      </div>
      {/* 
      <div className="w-full flex justify-center mt-14">
        <button
          //   data-aos="fade-up"
          //   data-aos-duration="1000"
          //   data-aos-delay="300"
          // onClick={() => navigate("/all-programmes")}
          className="w-fit px-3 lg:px-12 py-2 lg:py-4 flex items-center gap-2 bg-gradient-to-r from-[#ffbb00] to-[#faf000] hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] font-medium"
        >
          View all
          <img alt="" className="w-5 h-auto" src="/images/right.png" />{" "}
        </button>
      </div> */}
    </section>
  );
};

export default KidsSection2;
