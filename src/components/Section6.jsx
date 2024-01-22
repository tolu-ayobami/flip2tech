import team from "../data/team.json";

const Section6 = () => {
  return (
    <section
      id="section6"
      className="w-full min-h-[300px] bg-[#F5F5F5] px-5 lg:px-[6%] py-[60px] text-[#000103] relative z-[2]"
    >
      <div className="w-full">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <h2 className="text-[2em] md:text-[2.5em] font-[400] text-center">
            Our Experienced Team
          </h2>
          <div className="bg-[#ffbb00] w-14 h-2 mx-auto"></div>
        </div>

        <div className="w-full flex flex-col sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-12 justify-center items-center mt-14">
          {team?.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="w-full bg-white p-3 md:p-4 flex flex-col gap-3 text-center"
              >
                <img
                  alt="team"
                  className="w-full h-[320px] object-cover object-top"
                  src={item?.image}
                />
                <p className="font-bold text-[1.25rem]">{item?.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section6;
