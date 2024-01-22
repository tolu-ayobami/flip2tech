// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full min-h-[500px] bg-black px-5 sm:px-12 lg:px-[6%] pt-20 pb-10 font-poppins"
    >
      <div className="w-full flex gap-8 md:gap-3 justify-between flex-wrap md:flex-row flex-col text-white">
        <div className="md:w-[25%] w-full">
          <img
            alt=""
            src="/images/logo-white.png"
            className="w-[150px] h-auto md:w-[200px] md:h-auto mb-6"
          />
          <p>
            We are the leading TECH EDUCATION company with students from all
            over Nigeria aimed to deliver the best digital workforce training in
            Africa.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-20 font-light">
          <ul className="flex flex-col gap-3">
            <li className="font-medium text-[1.1rem]">Top Courses</li>
            <li className="cursor-pointer hover:text-yellow-300">
              Web Development Bootcamp
            </li>
            <li className="cursor-pointer hover:text-yellow-300">
              Data Analytics Bootcamp
            </li>
            <li className="cursor-pointer hover:text-yellow-300">
              Cyber Security Bootcamp
            </li>
            <li className="cursor-pointer hover:text-yellow-300">
              Product Design Bootcamp
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-20 font-light">
          <ul className="flex flex-col gap-3">
            <li className="font-medium text-[1.1rem]">Schools</li>
            <li className="cursor-pointer hover:text-yellow-300">
              Software School
            </li>
            <li className="cursor-pointer hover:text-yellow-300">
              Business School
            </li>
            <li className="cursor-pointer hover:text-yellow-300">
              Design School
            </li>
            <li className="cursor-pointer hover:text-yellow-300">
              Data School
            </li>
            <li className="cursor-pointer hover:text-yellow-300">
              Product School
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-20 font-light">
          <ul className="flex flex-col gap-3">
            <li className="font-medium text-[1.1rem]">Company</li>
            <li className="cursor-pointer hover:text-yellow-300">About Us</li>
            <li className="cursor-pointer hover:text-yellow-300">Partners</li>
            <li className="cursor-pointer hover:text-yellow-300">Careers</li>
            <li className="cursor-pointer hover:text-yellow-300">Alumni</li>
            <Link to="/volunteerregistration">
              <li className="cursor-pointer hover:text-yellow-300">
                Become a Volunteer
              </li>
            </Link>
            <li className="cursor-pointer hover:text-yellow-300">Policy</li>
          </ul>
        </div>

        <ul className="flex flex-col gap-3">
          <li className="font-medium text-[1.1rem]">Contact</li>
          <a href="mailto:hello@fliptotech.ng">
            <li className="flex gap-2 items-center cursor-pointer hover:text-yellow-300">
              <img alt="" src="/images/mail.png" className="w-7 h-7" />
              hello@fliptotech.ng
            </li>
          </a>
          <a href="tel:+2347017935247">
            <li className="flex gap-2 items-center cursor-pointer hover:text-yellow-300">
              <img alt="" src="/images/phone.png" className="w-7 h-7" />
              +2347017935247
            </li>
          </a>
          <a href="tel:+2349126076718">
            <li className="flex gap-2 items-center cursor-pointer hover:text-yellow-300">
              <img alt="" src="/images/phone.png" className="w-7 h-7" />
              +2349126076718
            </li>
          </a>
        </ul>
      </div>

      <p className="mt-28 text-white/70 w-full text-center">
        2023 FlipToTech. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
