import React, { useEffect, useState } from "react";
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
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const {
    params: { name },
  } = useMatch("/moreshow/:name");

  // useEffect 안에 async 사용은 X 이유도 같이 찾아보자
  useEffect(async () => {
    const { data } = await connectChallengeApi(name, page);
    const title = showMoreTitle(name);
    setChallengeData(data);
    setChallengeName(title);
  }, []);

  const handleScrollPage = async () => {
    const nextPage = page + 1;
    const { data } = await connectChallengeApi(name, nextPage);

    setChallengeData([...challengeData, ...data]);
    setPage(nextPage);
  };

  return (
    <MoreShowContainer>
      <ChallengeTitle>{challengeName}</ChallengeTitle>
      <InfiniteScroll
        dataLength={challengeData.length}
        next={handleScrollPage}
        hasMore={hasMore}
        height={812}
      >
        <ChallengeList>
          {Object.values(challengeData).map((data, index) => {
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
  margin-bottom: 80px;
`;

export default MoreShowTemplate;
