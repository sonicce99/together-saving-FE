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
  return (
    <>
      <Challenge_name>{challenge_name}</Challenge_name>
      <Div>
        <Title>저축 기간</Title>
        <BoldTitle>{`${start_date} - ${end_date}`}</BoldTitle>
      </Div>
      <Div>
        <Title>저축 요일</Title>
        {challenge_frequency &&
          challenge_frequency.map((day, index) => {
            return <BoldTitle key={index}>{day.day}</BoldTitle>;
          })}
      </Div>
      <Div>
        <Title>저축 금액</Title>
        <BoldTitle>
          {challenge_payment &&
            challenge_payment
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"}
        </BoldTitle>
      </Div>
      <Div>
        <Div2>
          <Title2>참가비</Title2>
          <BoldTitle>
            {challenge_entry_fee &&
              challenge_entry_fee
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"}
          </BoldTitle>
        </Div2>
        <Border></Border>
        <Div2>
          <Title2>참여 인원</Title2>
          <BoldTitle>
            {challenge_members &&
              challenge_members
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "명"}
          </BoldTitle>
        </Div2>
      </Div>
    </>
  );
};

const Challenge_name = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.5px;
  margin: 25px 0;
  color: ${({ theme }) => theme.colors.colorDarkGray1};
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Div2 = styled.div`
  margin-bottom: 5px;
`;

const Border = styled.div`
  border: 1px solid #dadada;
  width: 1px;
  height: 40px;
  margin: 5px 20px 0 20px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  margin-right: 7px;
  margin-bottom: 7px;
  color: ${({ theme }) => theme.colors.colorDarkGray1};

  &::before {
    content: "• ";
    margin-right: 5px;
    color: #c4c4c4;
  }
`;

const Title2 = styled(Title)`
  margin-top: 15px;
  &::before {
    content: "";
  }
`;

const BoldTitle = styled(Title)`
  font-family: SF Pro;
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  line-height: 14px;
  margin-top: 3px;
  color: ${({ theme }) => theme.colors.colorDarkGray1};

  &::before {
    content: "";
  }
`;

export default ChallengeSummary;