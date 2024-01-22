// import { Carousel } from "flowbite-react";
import StoriesCard from "./StoriesCard";
import testimonials from "../data/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "../swiper-pagination.css";

export default function DefaultCarousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      {testimonials?.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <StoriesCard item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
