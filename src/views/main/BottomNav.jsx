import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Home from "../../imges/Home.png";
import Contents from "../../imges/Contents.png";
import SaveChallenge from "../../imges/SaveChallenge.png";
import Community from "../../imges/Community.png";
import MyPage from "../../imges/MyPage.png";
import styled from "styled-components";

const BottomNav = () => {
  const [value, setValue] = React.useState(0);

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
  border: 2px solid black;
`;

export default BottomNav;
