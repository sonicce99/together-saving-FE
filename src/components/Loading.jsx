import React from "react";
import styled from "styled-components";
import Character from "../images/Character.png";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingContent>
        <Image src={Character} alt="icon" />
      </LoadingContent>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 100vh;
  background-color: rgba(76, 76, 76, 0.7);
  display: flex;
  justify-content: center;
`;

const LoadingContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 80px;
  animation: up-down 0.8s infinite ease-in-out alternate;

  @keyframes up-down {
    from {
      transform: translatey(0px);
    }
    to {
      transform: translateY(-10px);
    }
  }
`;

export default Loading;
