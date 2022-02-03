import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useMatch } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import H3 from "../../components/H3";
import InfiniteScroll from "react-infinite-scroll-component";
import MoreShowItem from "./MoreShowItem";

const MoreShowTemplate = () => {
  const [challengeData, setChallengeData] = useState([]);
  const [challengeName, setChallengeName] = useState("");
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  // 챌린지 종류 가져오기
  const {
    params: { name },
  } = useMatch("/moreshow/:name");

  useEffect(() => {
    (async () => {
      try {
        switch (name) {
          case "participate":
            // 참여 중인 챌린지 가져오기
            const participatingData = await axios.get(
              "../../modules/participatingChallenge.json"
              // `http://183.99.247.17:8881/api/v1/users/challenges?page=${page}`
            );
            setChallengeData(participatingData.data.data.challenges);
            setChallengeName("참여중인 챌린지");
            break;

          case "popular":
            // 인기 챌린지 가져오기
            const popularData = await axios.get(
              `http://183.99.247.17:8881/api/v1/auth/challenges?criteria=popularity&page=${page}`
            );
            setChallengeData(popularData.data.data.challenges);
            setChallengeName("인기 챌린지");
            break;

          case "particular":
            // 나와 비슷한 사람들의 챌린지 가져오기
            const similarityData = await axios.get(
              "../../modules/similarity.json"
            );
            setChallengeData(similarityData.data.data.challenges);
            setChallengeName("20대가 좋아하는 챌린지");
            break;

          case "all":
            // 전체 챌린지 가져오기
            const wholeChallengeData = await axios.get(
              "../../modules/wholeChallenge.json"
            );
            setChallengeData(wholeChallengeData.data.data.challenges);
            setChallengeName("전체 챌린지");
            break;

          default:
            console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleScrollPage = () => {
    // let pages = page + 1;
    axios
      .get("../../modules/participatingChallenge.json")
      .then((res) =>
        setChallengeData([...challengeData, res.data.data.challenges])
      );
  };

  return (
    <MoreShowContainer>
      <ChallengeTitle>{challengeName}</ChallengeTitle>
      <InfiniteScroll
        dataLength={challengeData.length} // 반복되는 데이터 갯수 (백에서 7로 고정해서 받아올 것)
        next={handleScrollPage} // 데이터 더 불러오는 함수
        hasMore={true} // 추가 데이터 유무
        height={812}
      >
        <ChallengeList>
          {challengeData &&
            Object.values(challengeData).map((data, index) => {
              return <MoreShowItem key={index} data={data} />;
            })}
        </ChallengeList>
      </InfiniteScroll>
    </MoreShowContainer>
  );
};

const MoreShowContainer = styled.div`
  width: 343px;
  margin: ${({ theme }) => theme.margins.marginCenter};
`;

const ChallengeTitle = styled(H3)`
  color: ${({ theme }) => theme.colors.colorBlack};
  font-family: SF Pro Text;
  font-weight: 600;
  line-height: 21px;
  margin-bottom: 16px;
`;

const ChallengeList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px 15px;
`;

export default MoreShowTemplate;
