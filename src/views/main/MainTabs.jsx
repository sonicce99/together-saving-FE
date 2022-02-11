import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import ChallengeTemplate1 from "../../components/ChallengeTemplate1.jsx";
import ChallengeTemplate2 from "../../components/ChallengeTemplate2.jsx";
import DivisionLine from "../../components/DivisionLine.jsx";
import ChallengeCreateAndEct from "./ChallengeCreateAndEct.jsx";
import { axiosInstance } from "../../utils/TokenApi.jsx";

const MainTabs = () => {

  const [value, setValue] = useState(0); // Tabs 관련
  const [participatingChallenges, setParticipatingChallenges] = useState([]); // 참여 중인 챌린지 Data
  const [popularChallenges, setPopularChallenges] = useState([]); // 인기 챌린지 Data
  const [DeadLineChallenge, setDeadLineChallenge] = useState([]); // 특정 그룹이 좋아하는 챌린지 Data
  const [wholeChallenge, setWholeChallenge] = useState([]); // 전체 챌린지 Data

  useEffect(() => {
    (async () => {
      try {
        // 참여 중인 챌린지 가져오기
        const { data } = await axiosInstance.get(
          "/api/v1/users/my-challenges?page=0"
        );
        setParticipatingChallenges(data.data);

        // 인기 챌린지 가져오기
        const popularChallengeData = await axiosInstance.get(
          "/api/v1/auth/challenges?criteria=popularity&page=0"
        );
        setPopularChallenges(popularChallengeData.data.data);

        // 마감임박 챌린지 가져오기
        const deatLineChallengeData = await axiosInstance.get(
          "/api/v1/auth/challenges?criteria=deadline&page=0"
        );
        setDeadLineChallenge(deatLineChallengeData.data.data);

        // 전체 챌린지 가져오기
        const wholeData = await axiosInstance.get(
          "/api/v1/auth/challenges?criteria=valid&page=0"
        );
        setWholeChallenge(wholeData.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
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
          <ChallengeTemplate1
            title="참여중인 챌린지"
            ChallengeArray={participatingChallenges}
          />
        </TabPanel>

        {value === 0 ? <DivisionLine /> : null}

        <TabPanel value={value} index={0}>
          <ChallengeTemplate2
            title="인기 챌린지"
            ChallengeArray={popularChallenges}
          />
        </TabPanel>

        <TabPanel value={value} index={0}>
          <ChallengeTemplate2
            title="마감 임박 챌린지"
            ChallengeArray={DeadLineChallenge}
          />
        </TabPanel>

        {value === 0 ? <DivisionLine /> : null}

        <TabPanel value={value} index={0}>
          <ChallengeTemplate1
            title="전체 챌린지"
            ChallengeArray={wholeChallenge}
          />
        </TabPanel>

        <TabPanel value={value} index={0}>
          <ChallengeCreateAndEct setValue={setValue} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          방 만들기
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
        <Box
          sx={{
            marginLeft: "16px",
          }}
        >
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
