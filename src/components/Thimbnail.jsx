import React from "react";
import Time from "./Time";
import styled from "styled-components";

const Thumbnail = ({ thumbnail }) => {
  return (
    <Size>
      <Time />
    </Size>
  );
};
const Size = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 270px;
  border: 2px solid black;
`;

export default Thumbnail;
