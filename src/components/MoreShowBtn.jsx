import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MoreShow = ({ title }) => {
  let navigate = useNavigate();

  return (
    <Title
      onClick={() => {
        title === "참여중인 챌린지"
          ? navigate("/moreshow/participate")
          : title === "인기 챌린지"
          ? navigate("/moreshow/popular")
          : title === "전체 챌린지"
          ? navigate("/moreshow/all")
          : navigate("/moreshow/deadline");
      }}
    >
      더보기
    </Title>
  );
};

const Title = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  font-size: 14px;
  color: #b3b3b3;
  margin-right: 16px;
  cursor: pointer;
`;

export default MoreShow;
