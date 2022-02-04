import React from "react";
import styled from "styled-components";
import EventImg from "../images/EventImage.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

SwiperCore.use([Autoplay]);

const Event = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <Image src={EventImg} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={EventImg} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={EventImg} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={EventImg} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 307px;
  border: 2px solid black;
`;

const Image = styled.img`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 307px;
`;

export default Event;
