import React, { useState } from "react";
import styles from "styled-components";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Typography, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IoIosArrowDown } from "react-icons/io";
import { axiosInstance } from "../../utils/TokenApi";

const SavingLanking = ({ challenge_id, challenge_name }) => {
  const [expanded, setExpanded] = useState(false);
  const [lankingData, setLankingData] = useState([]);

  const handleToggleExpaned = async (expanded) => {
    try {
      if (!expanded) {
        const { data } = await axiosInstance.get(
          `/api/v1/challenges/${challenge_id}/saving-ratio`
        );
        setLankingData(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setExpanded(!expanded);
    }
  };

  return (
    <Accordion expanded={expanded}>
      <AccordionSummary
        expandIcon={<IoIosArrowDown />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={() => handleToggleExpaned(expanded)}
      >
        <Typography component={"span"} variant={"body2"}>
          {expanded ? (
            <Div>
              <Title>{challenge_name}</Title>
              &nbsp;<P>랭킹</P>
            </Div>
          ) : (
            <Div>
              <Title>{challenge_name}</Title>
              &nbsp;<P>랭킹 자세히</P>
            </Div>
          )}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Div2>
          {lankingData &&
            lankingData.map((user, index) => {
              return (
                <Content key={index}>
                  <Avatar
                    alt="userPicture"
                    src={`${user.profile_picture}`}
                    sx={{
                      width: 64,
                      height: 64,
                      cursor: "pointer",
                    }}
                  />
                  <NickName>{user.nick_name}</NickName>
                  <Achievement>{user.saving_rate}%</Achievement>
                </Content>
              );
            })}
        </Div2>
      </AccordionDetails>
    </Accordion>
  );
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: "1px solid red",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<IoIosArrowDown sx={{ fontSize: "20px" }} />}
    {...props}
  />
))(() => ({
  backgroundColor: "rgba(255, 255, 255, .05)",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  height: "108px",
}));

const Div = styles.div`
  display: flex;
  align-items: center;
`;

const Div2 = styles.div`
display: flex;
align-items: center;
overflow-x: scroll;
-ms-overflow-style: none;
scrollbar-width: none;
padding-left: 16px;

&::-webkit-scrollbar {
  display: none;
}
`;

const Title = styles.p`
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  font-size: 16px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.colorBlue2};
`;

const P = styles.p`
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  font-size: 16px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.colorGray3};
`;

const Content = styles.div`
  width: 64px;
  height: 101px;
  margin-right : 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }
`;

const NickName = styles.div`
font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
font-size: 12px;
line-height: 9px;
text-align: center;
letter-spacing: -0.463911px;
color: #202021;
margin-top : 10px;
margin-bottom : 7px;
margin-left : -20px;
cursor : pointer;
`;

const Achievement = styles.div`
font-family: SF Pro;
font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
font-size: 12px;
line-height: 9px;
text-align: center;
margin-left : -20px;
letter-spacing: -0.463911px;
color: ${({ theme }) => theme.colors.colorGray3};

`;

export default SavingLanking;
