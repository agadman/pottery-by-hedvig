import React from 'react';
import styled from 'styled-components';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import InspirationOne from 'assets/Inspiration/inspiration_1.jpeg';
import InspirationTwo from 'assets/Inspiration/inspiration_2.jpeg';
import InspirationThree from 'assets/Inspiration/inspiration_3.jpeg';
import 'swiper/swiper-bundle.css';

export const Slider = () => {
  return (
    <Test>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <img src={InspirationOne} alt="test" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InspirationTwo} alt="test" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InspirationThree} alt="test" />
        </SwiperSlide>
      </Swiper>
    </Test>
  );
}

const Test = styled.div`
    width: 100%;

    img {
        width: 100%;
    }
`