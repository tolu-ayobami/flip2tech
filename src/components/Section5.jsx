import { useNavigate } from "react-router-dom";

const Section5 = () => {
  const navigate = useNavigate();
  return (
    <section
      id="section5"
      className="w-full h-fit bg-[#000103] bg-hero1 bg-no-repeat bg-cover bg-center px-5 md:px-10 lg:px-[6%] py-[80px] text-white"
    >
      <div>
        <h2 className="text-[2em] md:text-[2.5em] font-bold text-center">
          Our Metrics
        </h2>
        <div className="bg-[#ffbb00] w-14 h-2 mx-auto"></div>
      </div>

      <div className="w-full h-fit md:w-[500px] mx-auto mt-10 md:mt-7 flex justify-center text-white">
        <div className="px-6 md:px-14 py-2 md:py-4 h-fit text-center">
          <p className="font-bold text-[1.5em] md:text-[2.5em]">4,000+</p>
          <p className="text-white/40 font-medium text-[.85rem] md:text-[1rem]">
            LEARNERS
          </p>
        </div>
        <div className="px-6 md:px-14 py-2 md:py-4 h-fit text-center border-x-2 border-[#ffbb00]">
          <p className="font-bold text-[1.5em] md:text-[2.5em]">14+</p>
          <p className="text-white/40 font-medium text-[.85rem] md:text-[1rem]">
            PHYSICAL
            <br />
            LOCATION
          </p>
        </div>
        <div className="px-6 md:px-14 py-2 md:py-4 h-fit text-center">
          <p className="font-bold text-[1.5em] md:text-[2.5em]">6+</p>
          <p className="text-white/40 font-medium text-[.85rem] md:text-[1rem]">
            COURSES
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-10">
        <button
          onClick={() => navigate("/all-programmes")}
          className="w-fit px-3 lg:px-12 py-2 lg:py-4 md:ml-10 flex items-center gap-2 bg-gradient-to-r from-[#ffbb00] to-[#faf000] hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] font-medium"
        >
          GET STARTED
          <img alt="icon" className="w-7 h-7" src="/images/arrow-up-1.png" />
        </button>
      </div>
    </section>
  );
};

export default Section5;
