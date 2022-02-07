import React from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";
import Event from "../../components/Event.jsx";
import MainTabs from "../../views/main/MainTabs.jsx";
import BottomNav from "../../components/BottomNav.jsx";
import Time from "../../components/Time.jsx";

const Main = () => {
  return (
    <MainContainer>
      <Time />
      <Header main />
      <MainContentContainer>
        <Event />
        <MainTabs />
      </MainContentContainer>
      <BottomNav />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 812px;
  overflow-y: scroll;
`;

const MainContentContainer = styled.div`
  padding-top: 96px;
`;

export default Main;
