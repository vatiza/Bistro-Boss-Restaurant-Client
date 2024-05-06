import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../../../assets/home/slide1.jpg";
import img2 from "../../../../assets/home/slide2.jpg";
import img3 from "../../../../assets/home/slide3.jpg";
import img4 from "../../../../assets/home/slide4.jpg";
import img5 from "../../../../assets/home/slide5.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"---From 11:00am to 10:00pm---"}
        subHeading={"ORDER ONLINE"}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="text-white text-4xl font-bold text-center uppercase -mt-32">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h3 className="text-white text-4xl font-bold text-center uppercase -mt-32">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="text-white text-4xl font-bold text-center uppercase -mt-32">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="text-white text-4xl font-bold text-center uppercase -mt-32">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h3 className="text-white text-4xl font-bold text-center uppercase -mt-32">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
