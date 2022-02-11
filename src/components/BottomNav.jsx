import React, { useState } from "react";
import { Box, BottomNavigationAction, BottomNavigation } from "@mui/material";
import Home from "../images/Home.png";
import Contents from "../images/Contents.png";
import SaveChallenge from "../images/SaveChallenge.png";
import Community from "../images/Community.png";
import MyPage from "../images/MyPage.png";
import styled from "styled-components";

const BottomNav = () => {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <Box
        sx={{
          width: `${({ theme }) => theme.viewSize.mobile}`,
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction icon={<img width={56} src={Home} />} />
          <BottomNavigationAction icon={<img width={56} src={Contents} />} />
          <BottomNavigationAction
            icon={<img width={56} src={SaveChallenge} />}
          />
          <BottomNavigationAction icon={<img width={56} src={Community} />} />
          <BottomNavigationAction icon={<img width={56} src={MyPage} />} />
        </BottomNavigation>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  position: fixed;
  bottom: 0;
`;

export default BottomNav;
