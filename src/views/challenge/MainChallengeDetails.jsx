import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Mockdata from "/public/modules/challenge.json";
import Tags from "./Tags";
import ChallengeSummary from "./ChallengeSummary.jsx";
import DivisionLine from "../../components/DivisionLine.jsx";
import ChallengeDescription from "./ChallengeDescription.jsx";
import ChallengeReview from "./ChallengeReview.jsx";
import RefundAndCaution from "./RefundAndCaution.jsx";
import PopularChallenge from "../../components/ChallengeTemplate2.jsx";
import Button from "../../components/Button.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getChallengesummaryInfo } from "../../redux/reducers/challengeSummaryReducer";

const MainChallengeDetails = () => {
  // const [data, setData] = useState([]);

  const { data, loading, error } = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    dispatch(getChallengesummaryInfo());
  }, [dispatch]);

  if (loading) return <h2>로딩중...</h2>;
  if (error) return <h2>Error occured!</h2>;
  if (!data) return <h2>No Data</h2>;

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         setLoading(true);
  //         const challengeData = await axios.post("api/v1/auth/challenges", {
  //           challenge_id : "challenge_id"
  //         }
  //         if(challengeData.status === 200) {
  //           setData([challengeData.data]);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     })();
  //   },[])
  //   // if(loading) {
  //   //   return <h2>로딩중...</h2>
  //   // }

  return (
    <Container>
      <Inner>
        <Tags tags={data.data.tags} />
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
        <PopularChallenge />
        <Button>챌린지 함께하기</Button>
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

export default MainChallengeDetails;
