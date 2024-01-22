import DefaultCarousel from "./DefaultCarousel";



const Section7 = () => {
  return (
    <section
      id="section7"
      className="w-full min-h-[300px] bg-[#fefffe] px-5 lg:px-[6%] py-[80px] text-[#000103] relative z-[2]"
    >
      <div>
        <h2 className="text-[2em] md:text-[2.5em] font-[400] text-center">
          Success Stories
        </h2>
        <div className="bg-[#ffbb00] w-14 h-2 mx-auto"></div>
      </div>

      <div className="w-full md:w-[80%] mx-auto mt-14">
        <DefaultCarousel />
      </div>
    </section>
  );
};

export default Section7;
