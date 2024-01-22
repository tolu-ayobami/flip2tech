/* eslint-disable react/prop-types */

const CourseSection1 = ({ title }) => {
  return (
    <section
      id="section1"
      className="w-full min-h-[250px] md:min-h-[400px] bg-[#000103] bg-hero1 bg-no-repeat bg-cover px-5 md:px-10 lg:px-[6%] py-[80px] lg:pt-[10%] lg:pb-[100px]"
    >
      <h1 className="text-white text-[2rem] md:text-[3rem] font-bold text-center md:mt-10">
        {title}
      </h1>
    </section>
  );
};

export default CourseSection1;
