import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import ChallengeTemplate1 from "../../components/ChallengeTemplate1.jsx";
import ChallengeTemplate2 from "../../components/ChallengeTemplate2.jsx";
import DivisionLine from "../../components/DivisionLine.jsx";
import ChallengeCreateAndEct from "./ChallengeCreateAndEct.jsx";
import axios from "axios";

const MainTabs = () => {
  const [value, setValue] = React.useState(0); // Tabs 관련

  const [participatingChallenges, setParticipatingChallenges] = React.useState(
    []
  ); // 참여 중인 챌린지 Data
  const [popularChallenges, setPopularChallenges] = React.useState([]); // 인기 챌린지 Data
  const [similarityChallenge, setSimilarityChallenge] = React.useState([]); // 특정 그룹이 좋아하는 챌린지 Data
  const [wholeChallenge, setWholeChallenge] = React.useState([]); // 전체 챌린지 Data

  React.useEffect(() => {
    (async () => {
      try {
        // 참여 중인 챌린지 가져오기
        const participatingData = await axios.get(
          "../../modules/participatingChallenge.json"
        );
        setParticipatingChallenges(participatingData.data.data.challenges);

        // 인기 챌린지 가져오기
        const popularChallengeData = await axios.get(
          "../../modules/popularChallenge.json"
        );
        setPopularChallenges(popularChallengeData.data.data.challenges);

        // 특정 그룹이 좋아하는 챌린지 가져오기
        const similarityData = await axios.get("../../modules/similarity.json");
        setSimilarityChallenge(similarityData.data.data.challenges);

        // 전체 챌린지 가져오기
        const wholeData = await axios.get("../../modules/wholeChallenge.json");
        setWholeChallenge(wholeData.data.data.challenges);
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
            title="20대 남성이 좋아하는 챌린지"
            ChallengeArray={similarityChallenge}
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
