import { Carousel } from "flowbite-react";
import StoriesCard from "./StoriesCard";
import testimonials from "../data/testimonials.json";

export default function MobileCarousel() {
  return (
    <Carousel slideInterval={7000}>
      <div className="w-full h-fit p-3 md:p-14 flex gap-3 md:gap-10 items-center justify-center md:hidden ">
        <StoriesCard item={testimonials[0]} />
      </div>

      <div className="w-full h-fit p-3 md:p-14 flex gap-3 md:gap-10 items-center justify-center md:hidden ">
        <StoriesCard item={testimonials[1]} />
      </div>

      <div className="w-full h-fit p-3 md:p-14 flex gap-3 md:gap-10 items-center justify-center md:hidden ">
        <StoriesCard item={testimonials[2]} />
      </div>
      <div className="w-full h-fit p-3 md:p-14 flex gap-3 md:gap-10 items-center justify-center md:hidden ">
        <StoriesCard item={testimonials[3]} />
      </div>

      <div className="w-full h-fit p-3 md:p-14 flex gap-3 md:gap-10 items-center justify-center md:hidden ">
        <StoriesCard item={testimonials[4]} />
      </div>

      <div className="w-full h-fit p-3 md:p-14 flex gap-3 md:gap-10 items-center justify-center md:hidden ">
        <StoriesCard item={testimonials[5]} />
      </div>
      <div className="w-full h-fit p-3 md:p-14 flex gap-3 md:gap-10 items-center justify-center md:hidden ">
        <StoriesCard item={testimonials[6]} />
      </div>
    </Carousel>
  );
}
