import React from "react";
import styled from "styled-components";

const Thumbnail = ({ thumbnail }) => {
  return <Size>썸네일 이미지</Size>;
};
const Size = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 270px;
  border: 2px solid black;
`;

export default Thumbnail;
