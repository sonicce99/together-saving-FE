import React, { useState } from "react";
import styled from "styled-components";
import EventImg from "../images/EventImage.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
// import "swiper/css/pagination";

SwiperCore.use([Autoplay]);

const Event = () => {
  const EventNum = 4;
  const EventList = [...new Array(EventNum)].map((t, i) => i + 1);

  return (
    <Container>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        // modules={[Pagination]}
        // pagination={{
        //   type: "fraction",
        // }}
      >
        {EventList.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Image src={EventImg} />
              <NumberingTag>{`${slide} / ${EventNum}`}</NumberingTag>
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
