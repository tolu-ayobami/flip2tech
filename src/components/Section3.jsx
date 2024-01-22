import { useNavigate } from "react-router-dom";

const Section3 = () => {
  const navigate = useNavigate();
  return (
    <section
      id="section3"
      className="w-full min-h-[300px] bg-[#F5F5F5] px-5 lg:px-[6%] py-[80px] text-[#000103] relative z-[1]"
    >
      <div className="w-full md:w-[80%] mx-auto flex md:flex-row flex-col-reverse gap-8 md:gap-14 justify-center items-center">
        <div className="w-full md:w-[35%] flex flex-col gap-6">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="hidden md:block"
          >
            <h2 className="text-[2.5em] font-[400] leading-tight">
              Learning Is <br />
              Communal
            </h2>
            <div className="bg-[#ffbb00] w-14 h-2"></div>
          </div>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Learners are working together, sharing knowledge, and collaborating
            to enhance their understanding. You are not alone with your learning
            journey.
          </p>
          <button
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            onClick={() => navigate("/all-programmes")}
            className="w-fit px-3 lg:px-12 py-2 lg:py-4 flex items-center gap-2 bg-gradient-to-r from-[#ffbb00] to-[#faf000] hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] font-medium"
          >
            GET STARTED
            <img alt="icon" className="w-7 h-7" src="/images/arrow-up-1.png" />
          </button>
        </div>

        <>
          {" "}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="md:hidden block w-full"
          >
            <h2 className="text-[2.5em] font-[400] leading-tight">
              Learning Is <br />
              Communal
            </h2>
            <div className="bg-[#ffbb00] w-14 h-2"></div>
          </div>
          <div className="w-full sm:w-[70%] sm:mx-auto md:mx-0 md:w-[45%] relative">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              alt="hero"
              src="/images/COMMUNAL.png"
              className="w-full h-auto"
            />
          </div>
        </>
      </div>

      {/* decor */}
      <img
        alt="icon"
        src="/images/decor3.png"
        className="w-[50px] md:w-[100px] h-auto absolute bottom-[-40px] md:bottom-[-100px] left-0"
      />
    </section>
  );
};

export default Section3;
