import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useMatch } from "react-router-dom";
import H3 from "../../components/H3";
import InfiniteScroll from "react-infinite-scroll-component";
import MoreShowItem from "./MoreShowItem";
import { connectChallengeApi } from "../../utils/callApi";
import { showMoreTitle } from "../../utils/regex";

const MoreShowTemplate = () => {
  const [challengeData, setChallengeData] = useState([]);
  const [challengeName, setChallengeName] = useState("");
  const [page, setPage] = useState(0);

  const {
    params: { name },
  } = useMatch("/moreshow/:name");

  useEffect(async () => {
    const { challenges } = await connectChallengeApi(name, page);
    const title = showMoreTitle(name);
    setChallengeData(challenges);
    setChallengeName(title);
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
