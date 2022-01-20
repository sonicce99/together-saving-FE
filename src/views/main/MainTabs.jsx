import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import PopularChallenge from "../../components/PopularChallenge.jsx";
import ParticipatingChallenge from "./ParticipatingChallenge.jsx";
import WholeChallenge from "./WholeChallenge.jsx";
import ParticularGroupChallenge from "./ParticularGroupChallenge.jsx";
import styled from "styled-components";

const MainTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          border: "2px solid black",
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                width: "50px",
                color: `${({ theme }) => theme.colors.colorBlue2}`,
              },
            }}
          >
            <Tab
              label="홈"
              {...a11yProps(0)}
              style={{
                minWidth: "50px",
                marginLeft: "16px",
              }}
            />
            <Tab label="개설" {...a11yProps(1)} style={{ minWidth: "50px" }} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ParticipatingChallenge />
          <PopularChallenge />
          <ParticularGroupChallenge />
          <WholeChallenge />
        </TabPanel>
        <TabPanel value={value} index={1}>
          개설
        </TabPanel>
      </Box>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography component={"span"} variant={"body2"}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default MainTabs;
