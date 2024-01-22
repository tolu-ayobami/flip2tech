/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";

const KidsSection3 = () => {
  const navigate = useNavigate();
  return (
    <section
      id="section3"
      className="w-full min-h-[300px] bg-[#F5F5F5] px-5 lg:px-[6%] pt-[80px] text-[#000103] relative z-[1]"
    >
      <div className="w-full flex md:flex-row-reverse flex-col-reverse gap-8 md:gap-14 justify-center items-center">
        <div className="w-full md:w-[35%] flex flex-col gap-6">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="hidden md:block"
          >
            <h2 className="text-[2.5em] leading-tight font-bold">
              Why FlipToTech is the perfect choice
            </h2>
          </div>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Join a vibrant community of like-minded parents and students who are
            passionate about tech education. We're here to support you every
            step of the way.
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="w-full flex gap-3 flex-col"
          >
            <div className="w-full flex items-center gap-4">
              <img alt="icon" className="w-8 h-8" src="/images/kid-arrow.png" />
              <p className="font-bold">Child-Centric Approach</p>
            </div>

            <div className="w-full flex items-center gap-4">
              <img alt="icon" className="w-8 h-8" src="/images/kid-arrow.png" />
              <p className="font-bold">Hands-On Learning</p>
            </div>

            <div className="w-full flex items-center gap-4">
              <img alt="icon" className="w-8 h-8" src="/images/kid-arrow.png" />
              <p className="font-bold">STEM Skill Development</p>
            </div>

            <div className="w-full flex items-center gap-4">
              <img alt="icon" className="w-8 h-8" src="/images/kid-arrow.png" />
              <p className="font-bold">Experienced Educators</p>
            </div>
          </div>

          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Enroll Your Child in an Exciting Tech Journey Today!
          </p>
          {/* <button
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            // onClick={() => navigate("/all-programmes")}
            className="w-fit px-3 lg:px-12 py-2 lg:py-4 flex items-center gap-2 bg-gradient-to-r from-[#ffbb00] to-[#faf000] hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] font-medium"
          >
            VIEW ALL
            <img alt="icon" className="w-7 h-7" src="/images/arrow-up-1.png" />
          </button> */}
        </div>

        <>
          {" "}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="md:hidden block w-full"
          >
            <h2 className="text-[2.5em] leading-tight font-bold">
              Why FlipToTech is the perfect choice
            </h2>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="w-full sm:w-[70%] sm:mx-auto md:mx-0 md:w-[45%] grid grid-cols-2 gap-4"
          >
            <div className="">
              <img
                alt=""
                src="/images/kid1.png"
                className="w-full h-[250px] object-cover rounded-2xl"
              />
            </div>
            <div className="">
              <img
                alt=""
                src="/images/kid2.png"
                className="w-full h-[250px] object-cover rounded-2xl"
              />
            </div>
            <div className="">
              <img
                alt=""
                src="/images/kid3.png"
                className="w-full h-[250px] object-cover rounded-2xl"
              />
            </div>
            <div className="">
              <img
                alt=""
                src="/images/kid4.png"
                className="w-full h-[250px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default KidsSection3;
