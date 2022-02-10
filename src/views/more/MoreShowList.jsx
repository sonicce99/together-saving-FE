import React, { useState } from "react";
import styled from "styled-components";
import { useMatch } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import MoreShowItem from "./MoreShowItem";
import useChallengeApi from "../../hooks/useChallengeApi";
import useCategory from "../../hooks/useCategory";

const MoreShowTemplate = () => {
  const [page, setPage] = useState(0);

  const {
    params: { name },
  } = useMatch("/moreshow/:name");

  const data = useChallengeApi(name, page);
  const category = useCategory(name);

  const handleScrollPage = () => {
    setPage((page) => page + 1);
  };

  return (
    <MoreShowContainer>
      <ChallengeTitle>{category}</ChallengeTitle>
      <InfiniteScroll
        dataLength={data.length}
        next={handleScrollPage}
        hasMore={true}
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
  padding-top: 96px;
  margin: ${({ theme }) => theme.margins.marginCenter};
`;

const ChallengeTitle = styled.p`
  color: ${({ theme }) => theme.colors.colorBlack};
  font-size: ${({ theme }) => theme.fontSize.fontMideum};
  font-family: SF Pro Text, "Noto Sans KR", sans-serif;
  font-weight: 600;
  padding: 28px 0 16px 0;
`;

const ChallengeList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px 15px;
  margin-bottom: 80px;
`;

export default MoreShowTemplate;
