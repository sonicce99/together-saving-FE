import React from "react";
import styled from "styled-components";

import defaultThumbnail from "../images/SaveChallenge.png";

const Thumbnail = ({ thumbnail }) => {
  return <Size thumbnail={thumbnail} />;
};

const Size = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 270px;
  background-image: url(${(props) => props.thumbnail});
  background-size: cover;
`;

export default Thumbnail;
