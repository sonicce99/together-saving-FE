import React from "react";
import styled from "styled-components";
import savle from "../images/savle.png";
import heart from "../images/heart.png";
import bell from "../images/bell.png";

const Header = () => {
  return (
    <Container>
      <Inner>
        <Left>
          <Savle src={savle} />
        </Left>
        <Right>
          <Heart src={heart} />
          <Bell src={bell} />
        </Right>
      </Inner>
    </Container>
  );
};

const Container = styled.header`
  width: ${({ theme }) => theme.viewSize.mobile};
  box-sizing: border-box;
  height: 52px;
  border: 2px solid black;
`;

const Inner = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;
  height: 52px;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
const Savle = styled.img`
  width: 65px;
  height: 19px;
`;

const Heart = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Bell = styled.img`
  width: 28px;
  height: 26px;
`;

export default Header;
