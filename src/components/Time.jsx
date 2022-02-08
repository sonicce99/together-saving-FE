import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PhoneState from "../images/PhoneState.png";

const Time = () => {
  const [currentHour, setCurrentHour] = useState("");
  const [currentMinute, setCurrentMinute] = useState("");

  // 시 계산
  const handleHour = (date) => {
    setCurrentHour(String(date.getHours()).padStart(2, 0));
  };

  // 분 계산
  const handleMinute = (date) =>
    setCurrentMinute(String(date.getMinutes()).padStart(2, 0));

  useEffect(() => {
    // 1초마다 시간 측정
    const time = setInterval(() => {
      const date = new Date();
      handleHour(date);
      handleMinute(date);
    }, 1000);

    return () => clearInterval(time);
  }, []);

  return (
    <Container>
      <Inner>
        <CurrentTime>{`${currentHour} : ${currentMinute}`}</CurrentTime>
        <Image src={PhoneState} />
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 44px;
  padding: 12px 20px;
  position: fixed;
  z-index: 9999;
`;

const Inner = styled.div`
  margin: ${({ theme }) => theme.margins.marginCenter};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CurrentTime = styled.div`
  width: 54px;
  height: 21px;
`;

const Image = styled.img`
  width: 67px;
  height: 12px;
`;

export default Time;
