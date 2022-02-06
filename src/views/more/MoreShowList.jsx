import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMatch } from "react-router-dom";
import H3 from "../../components/H3";
import InfiniteScroll from "react-infinite-scroll-component";
import MoreShowItem from "./MoreShowItem";
import useChallengeApi from "../../hooks/useChallengeApi";
import useCategory from "../../hooks/useCategory";

const MoreShowTemplate = () => {
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const {
    params: { name },
  } = useMatch("/moreshow/:name");

  const data = useChallengeApi(name, page);
  const category = useCategory(name);

  const handleScrollPage = () => {
    setPage((page) => page + 1);
    if (data.length === 0) setHasMore((hasMore) => !hasMore);
  };

  return (
    <MoreShowContainer>
      <ChallengeTitle>{category}</ChallengeTitle>
      <InfiniteScroll
        dataLength={data.length}
        next={handleScrollPage}
        hasMore={hasMore}
        height={812}
      >
        <ChallengeList>
          {data &&
            Object.values(data).map((item, index) => {
              return <MoreShowItem key={index} data={item} />;
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
