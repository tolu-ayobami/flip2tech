/* eslint-disable react/prop-types */
import { Carousel } from "flowbite-react";

export default function KidsCarousel({ handleOpenSub }) {
  return (
    <Carousel className="" theme={customTheme} slideInterval={5000}>
      {/* Slide 1 */}
      <div className="w-full h-full gap-3 md:gap-10 items-center justify-center md:flex">
        <div className="w-[300px] md:w-[500px] mt-auto p-3 md:p-7 rounded-md text-black/90 bg-white">
          <h1 className="text-[1.35rem] md:text-[1.75rem] font-bold font-petch">
            Best Kids Academic Online Learning PLatform
          </h1>
          <p className="text-[.85rem] mt-2 tracking-wide">
            Acquire the knowledge you need to advance not only today but also in
            the future. Our courses offer a wealth of insights.
          </p>
          <button
            onClick={handleOpenSub}
            className="px-5 py-2 leading-tight bg-yellow-300 rounded-md text-black text-[.85rem] hover:bg-yellow-300/80 mt-4"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="w-full h-full gap-3 md:gap-10 items-center justify-center md:flex">
        <div className="w-[300px] md:w-[500px] mt-auto p-3 md:p-7 rounded-md text-black/90 bg-white">
          <h1 className="text-[1.35rem] md:text-[1.75rem] font-bold font-petch">
            Get Started at Affordable Rate
          </h1>
          <p className="text-[.85rem]  mt-2 tracking-wide">
            Subscribe at only{" "}
            <span className="font-bold">1000 Naira per month</span> to our
            bootcamps/school and embark on a journey of continuous learning and
            growth.
          </p>
          <button
            onClick={handleOpenSub}
            className="px-5 py-2 leading-tight bg-yellow-300 rounded-md text-black text-[.85rem] hover:bg-yellow-300/80 mt-4"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </Carousel>
  );
}

const customTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none hidden",
    rightControl:
      "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none hidden",
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 hidden",
      on: "bg-white dark:bg-gray-800 hidden",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: "w-full flex-shrink-0 transform cursor-grab snap-center",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};
