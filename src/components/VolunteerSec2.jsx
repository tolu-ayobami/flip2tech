/* eslint-disable react/no-unescaped-entities */
const VolunteerSec2 = () => {
  return (
    <section
      id="section2"
      className="w-full min-h-[300px] bg-[#F6F8FF] px-5 lg:px-[6%] py-[60px] text-[#000103] relative z-[2]"
    >
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-[1.75em] md:text-[2.5em] text-center font-bold">
          Why volunteer with us
        </h2>
      </div>

      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-center w-full md:w-[80%] my-10 mx-auto"
      >
        We appreciate your commitment to making a positive impact, and we've
        designed our Volunteer Referral Program with you in mind. Here's why you
        should consider becoming a volunteer and referring others with us
      </p>

      <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full h-[200px] bg-white flex flex-col gap-3 items-center p-5"
        >
          <img alt="" src="/images/volvector1.png" className="w-10 h-10" />
          <p className="font-bold text-[1.25rem]">Double the Impact</p>
          <p className="text-center">
            {" "}
            By volunteering, you're already contributing to meaningful causes.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full h-[200px] bg-white flex flex-col gap-3 items-center p-5"
        >
          <img alt="" src="/images/volvector2.png" className="w-10 h-10" />
          <p className="font-bold text-[1.25rem]">Earn Rewards</p>
          <p className="text-center">
            {" "}
            Every successful referral will earn you rewards
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full h-[200px] bg-white flex flex-col gap-3 items-center p-5"
        >
          <img alt="" src="/images/volvector3.png" className="w-10 h-10" />
          <p className="font-bold text-[1.25rem]">Flexible Commitment</p>
          <p className="text-center">
            {" "}
            Referrals can be made at your convenience
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full h-[200px] bg-white flex flex-col gap-3 items-center p-5"
        >
          <img alt="" src="/images/volvector4.png" className="w-10 h-10" />
          <p className="font-bold text-[1.25rem]">Community and Connections</p>
          <p className="text-center">
            {" "}
            you can build a network of friends and allies who share your passion
            for giving back
          </p>
        </div>{" "}
      </div>
    </section>
  );
};

export default VolunteerSec2;
