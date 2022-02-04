import React from "react";
import Header from "../../components/Header.jsx";
import Event from "../../components/Event.jsx";
import MainTabs from "../../views/main/MainTabs.jsx";
import BottomNav from "../../components/BottomNav.jsx";

const Main = () => {
  return (
    <>
      <Header />
      <Event />
      <MainTabs />
      <BottomNav />
    </>
  );
};

export default Main;
