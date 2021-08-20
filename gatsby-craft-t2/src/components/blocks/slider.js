import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Virtual,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Virtual, Pagination, A11y]);

const Slider = () => {
  const { images } = useStaticQuery(query);
  return (
    <Swiper
      className="lg:px-10 "
      navigation
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 10 },
        840: { slidesPerView: 3, spaceBetween: 20 },
        1040: { slidesPerView: 4, spaceBetween: 20 },
        1400: { slidesPerView: 5, spaceBetween: 20 },
      }}
      // pagination={{ clickable: true }}
      centeredSlides
      centeredSlidesBounds
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.assets.map((img, i) => (
        <SwiperSlide>
          <div className="rounded-md overflow-hidden h-64 w-64 mx-auto">
            <img
              // className="h-full w-auto max-w-none min-w-full"
              // className="max-w-none"
              alt={img.title}
              src={`http://web.test/assets/images/${img.filename}`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const query = graphql`
  query {
    images: craftAPI {
      assets {
        id
        title
        filename
      }
    }
  }
`;

export default Slider;
