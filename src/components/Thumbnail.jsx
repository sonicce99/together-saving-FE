import React from "react";
import styled from "styled-components";

import defaultThumbnail from "../images/SaveChallenge.png";

const Thumbnail = ({ thumbnail }) => {
  return <Size />;
};

const Size = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 270px;
  background-image: url(${defaultThumbnail});
  background-size: cover;
`;

export default Thumbnail;
