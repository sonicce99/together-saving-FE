import React from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";
import Event from "../../components/Event.jsx";
import MainTabs from "../../views/main/MainTabs.jsx";
import BottomNav from "../../components/BottomNav.jsx";

const MainContainer = () => {
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

export default MainContainer;
