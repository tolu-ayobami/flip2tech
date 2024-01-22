const KidsSection1 = () => {
  const scrollToSection = () => {
    const section2 = document.getElementById("section2");
    if (section2) {
      section2.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="section1"
      className="w-full min-h-fit lg:min-h-[95vh] bg-[#000103] bg-hero1 bg-no-repeat bg-cover bg-[center_top_-100px] px-5 md:px-10 lg:px-[6%] py-[80px] lg:pt-[10%] lg:pb-[100px]"
    >
      <div className="w-full flex md:flex-row flex-col-reverse justify-between items-center gap-3">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full md:w-[45%] flex flex-col gap-5 text-white"
        >
          <div className="font-bold text-[2em] lg:text-[3.75em]">
            <h1 className="leading-tight">
              Welcome to{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ffbb00, #faf000)",
                }}
              >
                Kids
              </span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ffbb00, #faf000)",
                }}
              >
                Coding
              </span>{" "}
              Adventures!
            </h1>
          </div>
          <p className="text-[1.25rem] md:text-[1.5rem]">
            Our Kids Coding Course is the perfect place for young
            <br /> minds to explore the exciting world of computer programming.
          </p>
          <div className="flex gap-2">
            <button
              onClick={scrollToSection}
              className="w-fit px-3 lg:px-12 py-2 lg:py-4 flex items-center gap-2 bg-gradient-to-r from-[#ffbb00] to-[#faf000] hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] border border-[#000103] font-medium"
            >
              GET STARTED
              <img
                alt="icon"
                className="w-7 h-7"
                src="/images/arrow-up-1.png"
              />
            </button>
          </div>
        </div>

        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="w-full sm:w-[70%] sm:mx-auto md:mx-0 md:w-[40%] lg:w-[35%] h-[400px] md:h-[500px] lg:h-[600px] grid grid-cols-2 grid-rows-3 gap-6 font-rale text-white"
        >
          <div className="row-span-2">
            <img
              alt=""
              src="/images/grid-part1.png"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="w-full h-full bg-[#F00048] rounded-2xl flex justify-center items-center">
            <div className="flex flex-col items-center gap-1">
              <h3 className="text-[2rem] md:text-[2.75rem] font-bold">30k+</h3>
              <p className="">Happy Students</p>
            </div>
          </div>
          <div className="row-span-2">
            <img
              alt=""
              src="/images/grid-part3.png"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="w-full h-full bg-[#0066FF] rounded-2xl flex justify-center items-center">
            <div className="w-full px-[15%] flex flex-col gap-1">
              <h3 className="text-[2rem] md:text-[2.75rem] font-bold w-full flex justify-between items-center">
                5.0 <img alt="" src="/images/star.png" className="w-7 h-7" />
              </h3>
              <p className="">Highly Rated Courses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsSection1;
