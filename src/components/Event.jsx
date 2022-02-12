import React from "react";
import styled from "styled-components";
import EventImage1 from "../images/EventImage1.png";
import EventImage2 from "../images/EventImage2.png";
import EventImage3 from "../images/EventImage3.png";
import EventImage4 from "../images/EventImage4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";

SwiperCore.use([Autoplay]);

const Event = () => {
  const EventNum = 4;
  const EventList = [...new Array(EventNum)].map((t, i) => i + 1);

  return (
    <Container>
      <Swiper slidesPerView={1} autoplay={{ delay: 3000 }} loop={true}>
        {EventList.map((slide, index) => {
          const image =
            index === 0
              ? EventImage1
              : index === 1
              ? EventImage2
              : index === 2
              ? EventImage3
              : EventImage4;
          return (
            <SwiperSlide key={index}>
              <Image src={image} alt="EventImage" />
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
