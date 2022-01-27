import React, { useEffect } from "react";
import styled from "styled-components";
import Tags from "../../views/challenge/Tags";
import ChallengeSummary from "../../components/ChallengeSummary.jsx";
import DivisionLine from "../../components/DivisionLine.jsx";
import ChallengeDescription from "../../views/challenge/ChallengeDescription.jsx";
import ChallengeReview from "../../views/challenge/ChallengeReview.jsx";
import RefundAndCaution from "../../components/RefundAndCaution.jsx";
import ChallengeTemplate2 from "../../components/ChallengeTemplate2.jsx";
import Button from "../../components/Button.jsx";
import Thumbnail from "../../components/Thimbnail";
import { useMatch, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getChallengesummaryInfo } from "../../redux/reducers/challengeSummaryReducer.js";

const Challenge = () => {
  const { data, loading, error } = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );
  const dispatch = useDispatch();

  let navigate = useNavigate();

  console.log(data);

  // 챌린지 id 가져오기
  let {
    params: { id },
  } = useMatch("/challenge/:id/");

  // 나중에 id 넣어서 post 요청 하기
  useEffect(() => {
    dispatch(getChallengesummaryInfo());
  }, [dispatch]);

  if (loading) return <h2>로딩중...</h2>;
  if (error) return <h2>에러 발생!</h2>;
  if (!data) return <h2>No data!</h2>;

  return (
    <Container>
      <Thumbnail thumbnail={data.data.thumbnail} />
      <Inner>
        <Tags is_wished={data.data.is_wished} tags={data.data.tags} />
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
        <ChallengeDescription
          host_nickname={data.data.host_nickname} // host 프로필 사진 데이터가 API에 없음. 추가해야함.
          challenge_description={data.data.challenge_description}
        />
        <ChallengeReview challenge_reviews={data.data.challenge_reviews} />
        <RefundAndCaution />
        <ChallengeTemplate2 />
        <Button
          onClick={() => {
            data.data.is_participated
              ? navigate("/saving")
              : navigate("/challenge/payment");
          }}
        >
          챌린지 함께하기
        </Button>
      </Inner>
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

export default Challenge;
