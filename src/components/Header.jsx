import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../images/savle.png";
import heart from "../images/heart.svg";
import bell from "../images/bell.svg";
import arrow from "../images/left_arrow.png";
import { useNavigate } from "react-router-dom";

const Header = ({ main, more, detail }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScrollY = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => handleScrollY();
  });

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container background={scrollY > 75 && true}>
      <Inner>
        <Left>
          {main ? (
            <LeftButton src={logo} alt="logo" logo />
          ) : (
            <LeftButton src={arrow} alt="arrow" onClick={handleGoBack} />
          )}
        </Left>
        <Right>
          {main || more ? (
            <>
              <Heart src={heart} />
              <Bell src={bell} />
            </>
          ) : detail ? (
            ""
          ) : (
            "관리"
          )}
        </Right>
      </Inner>
    </Container>
  );
};

const Container = styled.header`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 52px;
  padding: 50px 16px;
  position: fixed;
  z-index: 999;

  ${(props) => props.background && `background-color: white;`}
`;

const Inner = styled.main`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.button``;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const LeftButton = styled.img`
  ${(props) =>
    props.logo ? `width: 65px; height: 20px;` : `width: 10px; height: 20px;`}
`;

const Heart = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 10px;
`;

const Bell = styled.img`
  width: 28px;
  height: 26px;
`;

export default Header;
