import React from "react";
import styled from "styled-components";
import Thumbnail from "../../components/Thimbnail";
import RefundAndCaution from "../../components/RefundAndCaution";
import ChallengeSummary from "../../components/ChallengeSummary";
import DivisionLine from "../../components/DivisionLine";
import SavingDay from "../../views/challenge/SavingDay";
import { useSelector } from "react-redux";
import PayBtn from "../../views/challenge/PayBtn";

const ChallengePayment = () => {
  const { data, loading, error } = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  if (loading) return <h2>로딩중...</h2>;
  if (error) return <h2>에러 발생!</h2>;
  if (!data) return <h2>No data!</h2>;

  return (
    <Container>
      <Thumbnail>챌린지 썸네일</Thumbnail>
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
      <Inner>
        <SavingDay challenge_frequency={data.data.challenge_frequency} />
        <RefundAndCaution />
      </Inner>
      <PayBtn challenge_entry_fee={data.data.challenge_entry_fee} />
    </Container>
  );
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  border: 2px solid black;
`;

const Inner = styled.div`
  width: 343px;
  margin: ${({ theme }) => theme.margins.marginCenter};
`;

export default ChallengePayment;
