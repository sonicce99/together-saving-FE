import React from "react";
import styled from "styled-components";

const DivisionLine = () => {
  return <Line />;
};

const Line = styled.hr`
  height: 6px;
  background-color: ${({ theme }) => theme.colors.colorLightGray4};
  border: 0;
`;

export default DivisionLine;
