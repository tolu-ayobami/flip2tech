import { Link, useNavigate } from "react-router-dom";

const VolunteerSec1 = () => {
  const navigate = useNavigate();
  return (
    <section
      id="section1"
      className="w-full min-h-[500px] lg:min-h-[500px] bg-[#000103] bg-hero1 bg-no-repeat bg-cover bg-[center_top_-100px] px-5 md:px-10 lg:px-[6%] py-[80px] lg:pt-[10%] lg:pb-[100px]"
    >
      <div className="w-full flex md:flex-row flex-col-reverse justify-between items-center gap-3">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full text-center flex flex-col gap-5 text-white"
        >
          <div className="font-bold text-[2em] lg:text-[3.75em]">
            <h1 className="leading-tight">
              Join Our{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ffbb00, #faf000)",
                }}
              >
                Volunteer Team
              </span>{" "}
              and
              <br /> Make a Difference{" "}
            </h1>
          </div>
          <p className="text-[1.25rem] md:text-[1.5rem]">
            We believe that volunteers are the heart and soul of any community,
            <br /> and we invite you to be a part of our dedicated team.
          </p>
          <div className="flex gap-2 mx-auto">
            <Link to="/public/document/volunteer doc.pdf" download="volunteer-PDF-document" target="_blank" rel="noreferrer">
            <button
              className="w-fit px-3 lg:px-12 py-2 lg:py-4 flex items-center gap-2 bg-gradient-to-r from-[#ffbb00] to-[#faf000] hover:opacity-80 uppercase md:text-[1.2rem] text-[#000103] border border-[#000103] font-medium"
            >
              LEARN MORE
              <img
                alt="icon"
                className="w-7 h-7"
                src="/images/arrow-up-1.png"
              />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSec1;
