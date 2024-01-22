/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from "react-router-dom";

const VolunteerSec3 = () => {
  const navigate = useNavigate();

  return (
    <section
      id="section2"
      className="w-full min-h-[300px] bg-white px-5 lg:px-[6%] py-[60px] text-[#000103] relative z-[2]"
    >
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-[1.75em] md:text-[2.5em] text-center font-bold">
          Get Started
        </h2>
      </div>

      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-center w-full md:w-[80%] my-10 mx-auto"
      >
        Getting started is easy. Here's a step-by-step guide on how to become a
        volunteer and participate in our Volunteer Referral Program:
      </p>

      <div className="w-full flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 min-h-[300px]">
          <ol className="border-l-2 border-neutral-200">
            {/* <!--First item--> */}
            <li data-aos="fade-up" data-aos-duration="1000">
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[7px] mr-3 h-[12px] w-[12px] rounded-full bg-[#FFBD13]"></div>
                <h4 className="mb-1.5 text-xl font-semibold text-[#E3A700]">
                  Sign Up as a Volunteer
                </h4>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Register as a volunteer and get involved in the causes that
                  matter to you.
                </p>
              </div>
            </li>

            {/* <!--Second item--> */}
            <li data-aos="fade-up" data-aos-duration="1000">
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[7px] mr-3 h-[12px] w-[12px] rounded-full bg-[#FFBD13]"></div>
                <h4 className="mb-1.5 text-xl font-semibold text-[#E3A700]">
                  Refer Friends and Family{" "}
                </h4>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Spread the word about our volunteer opportunities among your
                  friends and family. Share your unique referral link.
                </p>
              </div>
            </li>

            {/* <!--Third item--> */}
            <li data-aos="fade-up" data-aos-duration="1000">
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[7px] mr-3 h-[12px] w-[12px] rounded-full bg-[#FFBD13]"></div>
                <h4 className="mb-1.5 text-xl font-semibold text-[#E3A700]">
                  Track Referrals
                </h4>
              </div>
              <div className="ml-4 mt-2 pb-5">
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Keep track of your referred individuals as they sign up and
                  get involved in volunteering.
                </p>
              </div>
            </li>

            {/* <!--fourth item--> */}
            <li data-aos="fade-up" data-aos-duration="1000">
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[7px] mr-3 h-[12px] w-[12px] rounded-full bg-[#FFBD13]"></div>
                <h4 className="mb-1.5 text-xl font-semibold text-[#E3A700]">
                  Earn Rewards
                </h4>
              </div>
              <div className="ml-4 mt-2 pb-5">
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  For each successful referral who actively participates as a
                  volunteer, you'll receive rewards as a token of our
                  appreciation.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          alt=""
          src="/images/volimage1.png"
          className="w-full md:w-1/2 h-auto"
        />
      </div>

      <div className="w-full mt-[80px]">
        <div className="w-full flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[#FEBB00] text-neutral-700 lg:flex-row">
          <div className="w-full flex flex-col justify-start p-5 md:px-8 md:py-7">
            <h5 className="mb-2 text-[2.5rem] font-bold">
              Join Our Volunteer Program
            </h5>
            <p className="mb-4 font-medium text-[1.15rem]">
              Sign up as a volunteer and start referring today. Together, we can
              create a brighter future and grow our community of dedicated
              volunteers.
            </p>
            <button
              onClick={() => navigate("/selectionpage")}
              className="w-fit mt-5 px-3 lg:px-12 py-2 lg:py-4 flex items-center gap-2 bg-black hover:opacity-80 uppercase md:text-[1.2rem] text-white border border-[#000103] font-medium"
            >
              REGISTER
              <img
                alt="icon"
                className="w-7 h-7"
                src="/images/arrow-up-white.png"
              />
            </button>
          </div>
          <img
            className="h-full w-full lg:w-[40%] rounded-t-lg object-cover md:!rounded-none md:!rounded-r-lg"
            src="/images/volimage2.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default VolunteerSec3;
