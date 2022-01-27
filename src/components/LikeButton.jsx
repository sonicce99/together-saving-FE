import React from "react";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

const LikeButton = ({ is_wished }) => {
  return (
    <FaHeart
      size={22}
      color={is_wished === true ? "#EA2E50" : "#B3B3B3"}
    ></FaHeart>
  );
};

export default LikeButton;
