import React from "react";
import styled from "styled-components";
import H3 from "../../components/H3";
import { useNavigate } from "react-router-dom";

const MoreShowItem = ({ data }) => {
  const navigate = useNavigate();
  const { id, mode, period, date, title, tags } = data;

  const handleNavigate = () => {
    navigate(`/challenge/${id}`);
  };

  return (
    <ChallengeItem>
      <ThumbnailInfo>
        <Image src="" alt="thumbnail" onClick={handleNavigate} />
        <ChallengeMode>{mode}</ChallengeMode>
      </ThumbnailInfo>
      <ChallengeInfo>
        <Period>{period}주 저축</Period>
        <Period>{date}일 뒤 종료</Period>
      </ChallengeInfo>
      <ChallengeName>{title}</ChallengeName>
      <TagsContainer>
        {tags &&
          Object.values(tags).map((tag, index) => (
            <Tags key={index}>{tag.tag_name}</Tags>
          ))}
      </TagsContainer>
    </ChallengeItem>
  );
};

const ChallengeItem = styled.li`
  width: 164px;
  height: 202px;
`;

const ThumbnailInfo = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 164px;
  height: 132px;
  background-color: wheat;
  border-radius: 6px;
  margin-bottom: 4px;
  cursor: pointer;
`;

const ChallengeMode = styled.div`
  width: 38px;
  height: 22px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.colorDarkGray1};
  color: ${({ theme }) => theme.colors.colorWhite};
  text-align: center;
  border-radius: 20px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const ChallengeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Period = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.colorDarkGray2};
`;

const ChallengeName = styled(H3)`
  color: ${({ theme }) => theme.colors.colorDarkGray2};
  font-size: 14px;
  margin-bottom: 4px;
`;

const TagsContainer = styled.ul`
  display: flex;
`;

const Tags = styled.li`
  color: ${({ theme }) => theme.colors.colorGray1};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  line-height: 17px;
  margin-right: 4px;

  &:last-child {
    margin-right: 0;
  }
`;

export default MoreShowItem;
