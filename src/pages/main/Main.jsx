// pages > main > Main.jsx
import React from "react";
import styled from "styled-components";
// 해더 컴포넌트
import Header from "../../components/Header.jsx";
// Event Banner 컴포넌트
import Event from "../../components/Event.jsx";
// 메인 페이지 view 폴더 컴포넌트
import MainTabs from "../../views/main/MainTabs.jsx";
// bottom 네비게이션 컴포넌트
import BottomNav from "../../components/BottomNav.jsx";

const Main = () => {
  return (
    <>
      <Header main />
      <MainContentContainer>
        <Event />
        <MainTabs />
      </MainContentContainer>
      <BottomNav />
    </>
  );
};

const MainContentContainer = styled.div`
  padding-top: 52px;
`;

export default Main;
