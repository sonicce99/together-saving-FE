import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { axiosInstance } from "../utils/TokenApi";

const LikeButton = ({ challengeId, is_wished }) => {
  const [isWished, setIsWished] = useState(is_wished);

  const handleChangeisWished = (value) => {
    setIsWished(value);
  };

  // 찜하기 요청
  const wished = async (challengeId) => {
    try {
      await axiosInstance.post(`/api/v1/users/challenges/${challengeId}/wish`);
      handleChangeisWished(true);
    } catch (error) {
      console.log(error);
    }
  };

  // 찜하기 해제 요청
  const notWished = async (challengeId) => {
    try {
      await axiosInstance.delete(
        `/api/v1/users/challenges/${challengeId}/wish`
      );
      handleChangeisWished(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Div>
      <FaHeart
        onClick={
          isWished ? () => notWished(challengeId) : () => wished(challengeId)
        }
        size={22}
        color={isWished ? "#EA2E50" : "#B3B3B3"}
      ></FaHeart>
    </Div>
  );
};

const Div = styled.div`
  cursor: pointer;
`;

export default LikeButton;
