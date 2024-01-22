import { useNavigate } from "react-router-dom";

const CohortSec1 = () => {
  const navigate = useNavigate();

  return (
    <section
      id="section1"
      className="w-full min-h-[80dvh] lg:max-h-[95vh] bg-gradient-to-r from-[#FEFFBB] to-[#D7FAFF] pt-[80px] sm:pt-[15%] lg:pt-[10%] flex flex-col"
    >
      <div className="w-full flex md:flex-row flex-col-reverse justify-between items-center gap-3 px-5 md:px-10 lg:px-[6%] mb-[100px]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full md:w-[50%] flex flex-col gap-3 text-black"
        >
          <p className="text-[#008392] font-bold text-[1.5rem]">
            Dive into excellence
          </p>
          <div className="font-bold text-[2em] lg:text-[3.75em]">
            <h1 className="leading-tight">
              Embark on a <br />
              transformative journey
            </h1>
          </div>
          <p className="text-[1.3rem]">
            Elevate your skills with{" "}
            <span className="text-[#008392] font-bold">
              FLIPTOTECH COHORT 1
            </span>
          </p>
          <ul className="flex flex-col gap-3 mt-5">
            <li className="flex gap-3 items-center">
              <img
                alt=""
                src="/images/icons8-check-48.png"
                className="w-5 h-auto"
              />
              <p>Intensive Learning and Skill Development</p>
            </li>
            <li className="flex gap-3 items-center">
              <img
                alt=""
                src="/images/icons8-check-48.png"
                className="w-5 h-auto"
              />
              <p>Certificate of Completion</p>
            </li>
            <li className="flex gap-3 items-center">
              <img
                alt=""
                src="/images/icons8-check-48.png"
                className="w-5 h-auto"
              />
              <p>100% Remote, Online Learning.</p>
            </li>
            <li className="flex gap-3 items-center">
              <img
                alt=""
                src="/images/icons8-check-48.png"
                className="w-5 h-auto"
              />
              <p>Internship opportunities after learning.</p>
            </li>
          </ul>
        </div>

        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="w-full sm:w-[70%] sm:mx-auto md:mx-0 md:w-[40%] lg:w-[35%] flex gap-6 font-rale text-white"
        >
          <img
            alt=""
            src="/images/medium-shot-man-with-laptop 1.png"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-3 justify-between md:items-center bg-[#0066FF] mt-5 md:mt-auto text-white px-5 md:px-10 lg:px-[6%] py-4">
        <div>
          <p>Duration</p>
          <p>3 Months, 15hrs/Week (Online Learning)</p>
        </div>
        <p>Application Opens: 20th of December 2023</p>
        <button
          onClick={() => navigate("/register-cohort")}
          className="w-fit px-5 py-2 flex items-center gap-2 bg-gradient-to-r from-[#ffbb00] to-[#faf000] hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] border border-[#000103] font-medium"
        >
          REGISTER EARLY
          <img alt="icon" className="w-7 h-7" src="/images/arrow-up-1.png" />
        </button>
      </div>
    </section>
  );
};

export default CohortSec1;
