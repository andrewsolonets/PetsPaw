import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "./slider.css";
import "swiper/css/pagination";

const Carousel = (props) => {
  if (props.images) {
    return (
      <Swiper
        modules={[Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
          type: "bullets",
          bulletClass: "swiper-pagination-bullet",
        }}
      >
        {props.images.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <img src={el.url} alt="asdasd"></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
};

export default Carousel;
