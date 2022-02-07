import React from "react";
import Time from "./Time";
import styled from "styled-components";
import Header from "./Header";

const Thumbnail = ({ thumbnail }) => {
  return (
    <Size>
      <Time />
      <Header detail />
    </Size>
  );
};

const Size = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 270px;
`;

export default Thumbnail;
