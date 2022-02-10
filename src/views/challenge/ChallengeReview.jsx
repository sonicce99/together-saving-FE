import React, { useState } from "react";
import styled from "styled-components";
import { Avatar, Stack } from "@mui/material";
import Button2 from "../../components/Button.jsx";
import H3 from "../../components/H3.jsx";
import { Box, Typography, Modal } from "@mui/material";
import GrayBackground from "../../components/GrayBackground.jsx";
import { axiosInstance } from "../../utils/TokenApi.jsx";
import defaultImage from "../../images/default_profile.png";

const style = {
  position: "absolute",
  top: "45%",
  left: "188px",
  transform: "translate(-50%, -50%)",
  width: 343,
  bgcolor: "background.paper",
  border: "1px solid #F7F8FA",
  boxShadow: 24,
  borderRadius: "6px",
  p: 0,
};

const ChallengeReview = ({ participated, challenge_id, reviews }) => {
  const [isMore, setIsMore] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputValue, setInputValue] = useState("");

  const handleShowMoreInfo = () => {
    setIsMore((isMore) => !isMore);
  };

  const handleInputValue = (value) => {
    setInputValue(value);
  };

  const reviewSend = async (challenge_id) => {
    if (inputValue.length <= 5) {
      alert("5글자 이상 입력해주세요");
    }
    await axiosInstance.post("/api/v1/users/reviews", {
      challenge_id: challenge_id,
      review_content: inputValue,
    });
    handleClose();
  };

  return (
    <>
      <H3>참여후기</H3>
      <Div>
        {reviews &&
          reviews.map((review, index) => {
            return (
              <GrayBackground key={index}>
                <Profile>
                  <Stack direction="row">
                    <Avatar
                      sx={{ width: 32, height: 32 }}
                      alt="Remy Sharp"
                      src={
                        review.profile_picture
                          ? review.profile_picture
                          : defaultImage
                      }
                    />
                  </Stack>
                  <NickName>{review.nickname}</NickName>
                </Profile>
                <Content>
                  {review.content.length > 70
                    ? !isMore
                      ? review.content.slice(0, 70)
                      : review.content
                    : review.content}
                  {review.content.length > 70 && (
                    <MoreButton onClick={handleShowMoreInfo} review>
                      {isMore ? "닫기" : "・・・더보기"}
                    </MoreButton>
                  )}
                </Content>
              </GrayBackground>
            );
          })}
      </Div>
      {participated ? (
        <ReviewAbleBtn onClick={handleOpen}>후기 작성하기</ReviewAbleBtn>
      ) : (
        <ReviewDisableBtn disabled>챌린지에 참여 해주세요</ReviewDisableBtn>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2, ml: "35%", mt: 1 }}
          >
            리뷰 남기기
          </Typography>
          <Input
            autoFocus
            onChange={(event) => handleInputValue(event.target.value)}
            maxLength="150"
            minLength="5"
          />
          <ReviewOutBtn onClick={() => handleClose()}>Dismiss</ReviewOutBtn>
          <ReviewCompleteBtn onClick={() => reviewSend(challenge_id)}>
            Submit
          </ReviewCompleteBtn>
        </Box>
      </Modal>
    </>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const Profile = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  margin-top: 16px;
`;

const NickName = styled.span`
  margin-left: 10px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.colorDarkGray1};
`;

const Content = styled(H3)`
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  font-size: 12px;
  margin: 0 10px 28px 14px;
  width: 234px;
`;

const ReviewAbleBtn = styled(Button2)`
  color: ${({ theme }) => theme.colors.colorBlue2};
  background-color: ${({ theme }) => theme.colors.colorWhite};
  border: 1.5px solid #3178ff;
  margin-bottom: 40px;
`;

const ReviewDisableBtn = styled(Button2)`
  color: "#928989";
  background-color: "#CDCDCD";
  border: 1px solid #cdcdcd;
  margin-bottom: 40px;
`;

const Input = styled.textarea`
  border: transparent;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  width: 340px;
  height: 150px;
  resize: none;
  outline: none;
  padding: 10px;
`;

const ReviewCompleteBtn = styled.button`
  font-size: 16px;
  padding: 10px;
  width: 170px;
  color: ${({ theme }) => theme.colors.colorBlue2};
`;

const ReviewOutBtn = styled.button`
  font-size: 16px;
  border-right: 1px solid #e4e4e4;
  padding: 10px;
  width: 170px;
  color: ${({ theme }) => theme.colors.colorBlue2};
`;

const MoreButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  color: ${({ theme }) => theme.colors.colorGray3};
  margin-left: 5px;

  ${(props) => props.review && `font-size: 12px`}
`;

export default ChallengeReview;
