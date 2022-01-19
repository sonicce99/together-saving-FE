import React from "react";
import styled from "styled-components";
import success from "../../images/save_success.png";
import fail from "../../images/save_fail.png";
import remain from "../../images/save_remain.png";

const SavingCount = () => {
  return (
    <CountInfoList>
      <CountInfo>
        <Img src={success} alt="success" />
        <Text>저축성공</Text>
        <Text>3번</Text>
      </CountInfo>
      <CountInfo>
        <Img src={fail} alt="fail" />
        <Text>저축실패</Text>
        <Text>3번</Text>
      </CountInfo>
      <CountInfo>
        <Img src={remain} alt="remain" />
        <Text>남은저축</Text>
        <Text>13번</Text>
      </CountInfo>
    </CountInfoList>
  );
};

const CountInfoList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const CountInfo = styled.li`
  display: flex;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.colorGray3};
  font-size: ${({ theme }) => theme.fontSize.fontXSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};

  &:first-of-type {
    flex-grow: 1;
  }
`;

export default SavingCount;
