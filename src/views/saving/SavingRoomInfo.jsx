import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SavingRoomInfo = ({ summaryData }) => {
  // 챌린지 아이디 업데이트 필요 (저축 시 식별자 역할)
  const {
    challenge_id,
    challenge_name,
    challenge_frequency,
    end_date,
    start_date,
  } = summaryData;

  const [period, setPeriod] = useState({ startDay: "", endDay: "" });
  const [timeRemain, setTimeRemain] = useState("");
  const [depositInfo, setDepositInfo] = useState({
    days: [],
    times: "",
    week: "",
  });

  const { startDay, endDay } = period;
  const { days, times, week } = depositInfo;

  useEffect(() => {
    const startDay = start_date.slice(2, 10).replaceAll("-", ".");
    const endDay = end_date.slice(5, 10).replaceAll("-", ".");
    setPeriod({
      ...period,
      startDay,
      endDay,
    });
  }, [setPeriod]);

  useEffect(() => {
    const today = new Date();
    const endDay = new Date(end_date);
    const remainTime = endDay.getTime() - today.getTime();
    const remainDay = Math.ceil(remainTime / (1000 * 60 * 60 * 24));
    setTimeRemain(remainDay);
  }, [setTimeRemain]);

  useEffect(() => {
    const days = challenge_frequency.map((item) => item.day).join(",");
    const times = challenge_frequency.length;

    const startWeek = new Date(start_date);
    const endWeek = new Date(end_date);
    const remainTime = endWeek.getTime() - startWeek.getTime();
    const remainWeek = Math.ceil(remainTime / (1000 * 60 * 60 * 30 * 5));

    setDepositInfo({
      ...depositInfo,
      days,
      times,
      week: remainWeek,
    });
  }, [setDepositInfo]);

  return (
    <InfoContainer>
      <InfoThumbnail />
      <InfoTextContainer>
        <Link to="/challenge/:id">
          <Title>{challenge_name}</Title>
        </Link>
        <Text>{`${startDay} - ${endDay} ${timeRemain}일 뒤 종료`}</Text>
        <Text>{`${days} - 주${times}일 / ${depositInfo.week}주차`}</Text>
      </InfoTextContainer>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  height: 97px;
  padding: 14px 16px;
  display: flex;
`;

const InfoThumbnail = styled.div`
  width: 92px;
  height: 70px;
  border-radius: 5px;
  margin-right: 16px;
  background-color: wheat;
`;

const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.colordarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontMideum};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.colorLightGray1};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
`;

export default SavingRoomInfo;
