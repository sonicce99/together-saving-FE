import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tags from "../../views/challenge/Tags";
import ChallengeSummary from "../../components/ChallengeSummary.jsx";
import DivisionLine from "../../components/DivisionLine.jsx";
import ChallengeDescription from "../../views/challenge/ChallengeDescription.jsx";
import ChallengeReview from "../../views/challenge/ChallengeReview.jsx";
import RefundAndCaution from "../../components/RefundAndCaution.jsx";
import ChallengeTemplate2 from "../../components/ChallengeTemplate2.jsx";
import Button from "../../components/Button.jsx";
import Thumbnail from "../../components/Thumbnail";
import Time from "../../components/Time";
import Header from "../../components/Header";
import { useMatch, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getChallengesummaryInfo } from "../../redux/reducers/challengeSummaryReducer.js";
import { axiosInstance } from "../../utils/TokenApi.jsx";

const Challenge = () => {
  const [popularChallengeData, setPopularChallengeData] = useState([]);

  const { data, loading, error } = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // 챌린지 id 가져오기
  const {
    params: { id },
  } = useMatch("/challenge/:id/");

  useEffect(() => {
    dispatch(getChallengesummaryInfo(id));
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        // 인기 챌린지 가져오기
        const popularChallenge = await axiosInstance.get(
          "/api/v1/auth/challenges?criteria=popularity&page=0"
        );
        setPopularChallengeData(popularChallenge.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (loading) return <h2>로딩중...</h2>;
  if (error) return <h2>에러 발생!</h2>;
  if (!data) return <h2>No data!</h2>;

  return (
    <>
      <Time />
      <Header detail />
      <Container>
        <Thumbnail thumbnail={data.data.thumbnail} />
        <Inner>
          <Tags
            challenge_id={data.data.challenge_id}
            is_wished={data.data.is_wished}
            tags={data.data.tags}
          />
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
            hostName={data.data.host_nickname} // host 프로필 사진 데이터가 API에 없음. 추가해야함.
            description={data.data.challenge_description}
          />
          <ChallengeReview
            challenge_id={data.data.challenge_id}
            reviews={data.data.challenge_reviews}
          />
          <RefundAndCaution />
          <RecommendContainer>
            <ChallengeTemplate2
              title="이런 챌린지도 있어요!"
              ChallengeArray={popularChallengeData}
            />
          </RecommendContainer>
        </Inner>
        <ButtonContainer>
          <Button
            onClick={() => {
              data.data.participated
                ? navigate(`/saving/${id}`)
                : navigate(`/challenge/${id}/payment`);
            }}
          >
            챌린지 함께하기
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  padding-top: 100px;
`;

const RecommendContainer = styled.div`
  margin-bottom: 120px;
`;

const Inner = styled.div`
  width: 343px;
  margin: ${({ theme }) => theme.margins.marginCenter};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8px 16px;
  box-shadow: 0px 4px 21px -1px rgba(0, 0, 0, 0.18);
  background-color: white;
  position: fixed;
  bottom: 0;
`;

export default Challenge;
