import React from "react";
import styled from "styled-components";
import save_success from "../../images/save_success.png";
import save_fail from "../../images/save_fail.png";
import save_remain from "../../images/save_remain.png";

const SavingCount = ({ success, fail, remain }) => {
  return (
    <CountInfoList>
      <CountInfo>
        <Img src={save_success} alt="success" />
        <Text>저축성공</Text>
        <Text>{success}번</Text>
      </CountInfo>
      <CountInfo>
        <Img src={save_fail} alt="fail" />
        <Text>저축실패</Text>
        <Text>{fail < 0 ? "0" : fail}번</Text>
      </CountInfo>
      <CountInfo>
        <Img src={save_remain} alt="remain" />
        <Text>남은저축</Text>
        <Text>{remain}번</Text>
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
