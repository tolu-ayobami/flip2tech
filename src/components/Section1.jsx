import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigate = useNavigate();

  return (
    <section
      id="section1"
      className="w-full min-h-fit lg:min-h-[95vh] bg-[#000103] bg-hero1 bg-no-repeat bg-cover bg-[center_top_-100px] px-5 md:px-10 lg:px-[6%] py-[80px] lg:pt-[10%] lg:pb-[100px]"
    >
      <div className="w-full flex md:flex-row flex-col-reverse justify-between gap-3">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full md:w-[45%] flex flex-col gap-5 text-white"
        >
          <div className="w-fit px-3 py-2 bg-[#2f2e2f] uppercase font-medium flex gap-2 items-center">
            YOU’RE HERE
            <div className="bg-[#ffbb00] w-[10px] md:h-[80%] h-[20px]"></div>
          </div>
          <div className="font-bold text-[2em] lg:text-[3.75em]">
            <h1 className="leading-tight">
              Tech Skills.
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ffbb00, #faf000)",
                }}
              >
                Endless
              </span>{" "}
              Possibilities
              <span className="text-[#ffbb00]">.</span>
            </h1>
          </div>
          <p className="text-[1.25rem] md:text-[1.5rem]">
            Elevate Your Future: Unlocking Infinite Opportunities
            <br /> Through Tech Excellence!
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/selectionpage")}
              className="w-fit px-3 lg:px-12 py-2 lg:py-4 flex items-center gap-2 bg-gradient-to-r from-[#ffbb00] to-[#faf000] hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] border border-[#000103] font-medium"
            >
              GET STARTED
              <img
                alt="icon"
                className="w-7 h-7"
                src="/images/arrow-up-1.png"
              />
            </button>
            {/* {!user && (
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 lg:py-3 md:hidden bg-transparemt hover:bg-[#ffbb00]/80 uppercase text-[.85rem] text-white border border-[#ffbb00] font-medium"
              >
                Login
              </button>
            )} */}
          </div>
        </div>
        <img
          data-aos="zoom-out"
          data-aos-duration="1000"
          alt="hero"
          src="/images/hero-section1.png"
          className="w-full sm:w-[70%] sm:mx-auto md:mx-0 md:w-[45%] h-auto"
        />
      </div>

      <div className="w-full h-fit md:w-[500px] mx-auto mt-10 md:mt-7 flex justify-center text-white">
        <div className="px-6 md:px-14 py-2 md:py-4 h-fit text-center">
          <p className="font-bold text-[1.5em] md:text-[2.5em]">4,000+</p>
          <p className="text-white/40 font-medium text-[.85rem] md:text-[1rem] font-rale">
            LEARNERS
          </p>
        </div>
        <div className="px-6 md:px-14 py-2 md:py-4 h-fit text-center border-x-2 border-[#ffbb00]">
          <p className="font-bold text-[1.5em] md:text-[2.5em]">14+</p>
          <p className="text-white/40 font-medium text-[.85rem] md:text-[1rem] font-rale">
            PHYSICAL
            <br />
            LOCATION
          </p>
        </div>
        <div className="px-6 md:px-14 py-2 md:py-4 h-fit text-center">
          <p className="font-bold text-[1.5em] md:text-[2.5em]">6+</p>
          <p className="text-white/40 font-medium text-[.85rem] md:text-[1rem] font-rale">
            COURSES
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
