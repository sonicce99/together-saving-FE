import React from "react";
import styled from "styled-components";

const ChallengeSummary = ({
  challenge_name, //챌린지명
  start_date, //챌린지 시작일
  end_date, //챌린지 종료일
  challenge_frequency, // 저축 요일
  challenge_payment, //저축 금액
  challenge_entry_fee, // 참가비
  challenge_members, // 참여 인원
}) => {
  console.log(
    challenge_name,
    start_date,
    end_date,
    challenge_frequency,
    challenge_payment,
    challenge_entry_fee,
    challenge_members
  );
  return (
    <>
      <Challenge_name>{challenge_name}</Challenge_name>
      <Title>저축기간</Title>
    </>
  );
};

const Challenge_name = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.5px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.colorDarkGray1};
`;

const Title = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.colorDarkGray1};
`;

export default ChallengeSummary;
