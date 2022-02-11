import React from "react";
import styled from "styled-components";
import Thumbnail from "../../components/Thumbnail";
import RefundAndCaution from "../../components/RefundAndCaution";
import ChallengeSummary from "../../components/ChallengeSummary";
import DivisionLine from "../../components/DivisionLine";
import SavingDay from "../../views/challenge/SavingDay";
import Time from "../../components/Time";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import PayBtn from "../../views/challenge/PayBtn";
import { useMatch } from "react-router-dom";
import ChallengeSkeleton from "../../components/skeleton/ChallengeSkeleton";

const ChallengePayment = () => {
  // 챌린지 id 가져오기
  let {
    params: { id },
  } = useMatch("/challenge/:id/payment");

  const { data, loading, error } = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  if (loading) return <ChallengeSkeleton />;
  if (error) return <h2>에러 발생!</h2>;
  if (!data) return <h2>No data!</h2>;

  return (
    <>
      {/* <Time /> */}
      <Header detail />
      <Container>
        <Thumbnail thumbnail={data.data.thumbnail} mode={data.data.mode} />
        <Inner>
          <ChallengeSummary
            challenge_name={data.data.challenge_name}
            start_date={data.data.start_date}
            end_date={data.data.end_date}
            challenge_frequency={data.data.challenge_frequency}
            challenge_payment={data.data.challenge_payment}
            challenge_entry_fee={data.data.challenge_entry_fee}
            challenge_members={data.data.challenge_members}
          />
        </Inner>
        <DivisionLine />
        <Inner warning>
          <SavingDay challenge_frequency={data.data.challenge_frequency} />
          <RefundAndCaution payment />
        </Inner>
        <PayBtn challenge_entry_fee={data.data.challenge_entry_fee} id={id} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  padding-top: 100px;
`;

const Inner = styled.div`
  width: 343px;
  margin: ${({ theme }) => theme.margins.marginCenter};

  ${(props) => props.warning && `margin-bottom: 165px;`}
`;

export default ChallengePayment;
