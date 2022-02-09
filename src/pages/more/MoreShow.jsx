import React from "react";
import styled from "styled-components";
import MoreShowList from "../../views/more/MoreShowList";
import BottomNav from "../../components/BottomNav";
import Time from "../../components/Time";
import Header from "../../components/Header";

const MoreShow = () => {
  return (
    <MoreShowContainer>
      <Time />
      <Header more />
      <MoreShowList />
      <BottomNav />
    </MoreShowContainer>
  );
};

const MoreShowContainer = styled.div`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default MoreShow;
