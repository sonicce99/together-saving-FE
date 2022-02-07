import React, { useState } from "react";
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
        {[1, 2, 3, 4].map((slide, index, origin) => {
          return (
            <SwiperSlide key={index}>
              <Image src={EventImg} />
              <NumberingTag>{`${slide} / ${origin.length}`}</NumberingTag>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 307px;
  position: relative;
`;

const Image = styled.img`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 307px;
  cursor: pointer;
`;

const NumberingTag = styled.div`
  width: 38px;
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.4);
  color: ${({ theme }) => theme.colors.colorWhite};
  text-align: center;
  border-radius: 20px;
  position: absolute;
  bottom: 14px;
  right: 16px;
`;

export default Event;
