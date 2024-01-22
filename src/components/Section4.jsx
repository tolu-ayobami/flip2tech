/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";

const Section4 = () => {
  const navigate = useNavigate();
  return (
    <section
      id="section4"
      className="w-full min-h-[300px] bg-[#fefffe] px-5 lg:px-[6%] py-[80px] text-[#000103] relative z-[0]"
    >
      <div className="w-full md:w-[80%] mx-auto flex md:flex-row flex-col gap-8 md:gap-14 justify-center items-center">
        <>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="w-full sm:w-[70%] sm:mx-auto md:mx-0 md:w-[45%] relative"
          >
            <img
              alt="hero"
              src="/images/PROFITABLE.png"
              className="w-full h-auto"
            />
            <img
              alt="icon"
              src="/images/star2.png"
              className="w-[150px] h-auto absolute bottom-[20px] left-[-12%]"
            />
            <img
              alt="icon"
              src="/images/star2.png"
              className="w-[50px] h-auto absolute bottom-[-3.5%] right-[15%]"
            />
          </div>
        </>
        <div className="w-full md:w-[35%] flex flex-col gap-6">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className=""
          >
            <h2 className="text-[2.5em] font-[400] leading-tight">
              Learn the
              <br /> profitable way
            </h2>
            <div className="bg-[#ffbb00] w-14 h-2 mt-1"></div>
          </div>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Whether you're exploring a career path, embracing a new challenge,
            or acquiring new skills for your career, we will help you to achieve
            the desired results.
          </p>
          <button
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            onClick={() => navigate("/selectionpage")}
            className="w-fit px-3 lg:px-12 py-2 lg:py-4 flex items-center gap-2 bg-gradient-to-r from-[#ffbb00] to-[#faf000] hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] font-medium"
          >
            GET STARTED
            <img alt="icon" className="w-7 h-7" src="/images/arrow-up-1.png" />
          </button>
        </div>


      </div>


      <div className="w-[70%] m-auto max-md:flex-col max-md:w-[100%]  mt-[80px] flex gap-[10px] align-center">

<div className=" w-[50%]  max-md:w-[100%] pt-[30px] px-[30px] h-[auto] pb-[30px] flex flex-col  bg-amber-200 ">
<h1 className="font-bold text-[30px] ">Join Our Volunteer Program</h1>
<p>Sign up as a volunteer and start referring today. Together, we can create a brighter future and grow our community of dedicated volunteers.</p>

<div className="flex align-center justify-between bg-black p-[10px] mt-[20px] w-[70%] pr-[30px] gap-[10px] text-white">
<Link to="/volunteerregistration" ><span  className="">VOLUNTEER REGISTER</span></Link>
<span className="my-[auto] "><img src="/vdashboardimages/rpw.png"  className="w-[70%]" ></img></span>
</div>

</div>

<div className="w-[50%] max-md:w-[100%]  pt-[30px] px-[30px] h-[auto]">
<span ><img src="/vdashboardimages/shake.png "></img></span>
</div>

</div>
    </section>
  );
};

export default Section4;
