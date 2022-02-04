import React from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";
import Event from "../../components/Event.jsx";
import MainTabs from "../../views/main/MainTabs.jsx";
import BottomNav from "../../components/BottomNav.jsx";

const Main = () => {
  return (
    <MainContainer>
      <Header />
      <Event />
      <MainTabs />
      <BottomNav />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 812px;
  overflow-y: scroll;
`;

export default Main;
