/* eslint-disable react/no-unescaped-entities */
const CohortSec5 = () => {
  return (
    <section id="section5" className="mt-10 pb-[100px]">
      <h1 className="text-[#0066FF] font-bold mb-5">WHO IS THIS COURSE FOR?</h1>
      <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col w-full gap-3 bg-[#D9D9D9]/30 rounded-lg p-5 items-center">
          <img alt="" src="/images/3stars.png" className="w-[100px] h-auto" />
          <p>
            If you have a passion for technology and a desire to deepen your
            understanding and skills, this course is tailored to meet your
            aspirations. Whether you're a beginner or have some technical
            background, our program is structured to accommodate various skill
            levels.
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 bg-[#D9D9D9]/30 rounded-lg p-5 items-center">
          <img alt="" src="/images/toggle.png" className="w-10 h-auto" />
          <p>
            Are you looking to transition into a tech career? Our course
            provides a comprehensive foundation for individuals seeking a career
            change. We offer the support and guidance needed to make a
            successful transition into the dynamic and rewarding field of
            technology.
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 bg-[#D9D9D9]/30 rounded-lg p-5 items-center">
          <img alt="" src="/images/grad.png" className="w-10 h-auto" />
          <p>
            Our program is well-suited for students and recent graduates who
            want to supplement their academic learning with practical,
            industry-relevant skills. Gain a competitive edge in the job market
            and kickstart your tech career with FlipToTech.
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 bg-[#D9D9D9]/30 rounded-lg p-5 items-center">
          <img alt="" src="/images/business.png" className="w-10 h-auto" />
          <p>
            For working professionals looking to stay ahead in the tech
            industry, our course offers an opportunity to enhance your skill
            set. Stay relevant and competitive in your field by acquiring the
            latest knowledge and tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CohortSec5;
