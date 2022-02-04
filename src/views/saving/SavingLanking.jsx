import * as React from "react";
import styles from "styled-components";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { IoIosArrowDown } from "react-icons/io";

const SavingLanking = ({ challenge_name }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleToggleExpaned = (expanded) => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Accordion expanded={expanded === true}>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => handleToggleExpaned(expanded)}
        >
          <Typography component={"span"} variant={"body2"}>
            {expanded === true ? (
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
          <Typography>랭킹이 들어갈 자리</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
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
  padding: theme.spacing(2),
  border: "2px solid black",
}));

const Div = styles.div`
  display: flex;
  align-items: center;
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

export default SavingLanking;
