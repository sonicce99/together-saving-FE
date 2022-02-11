import React, { useState } from "react";
import styled from "styled-components";
import Button2 from "../../components/Button.jsx";
import H3 from "../../components/H3.jsx";
import { Box, Typography, Modal } from "@mui/material";
import { axiosInstance } from "../../utils/TokenApi.jsx";
import ChallengeReviewItem from "./ChallengeReviewItem.jsx";
import plusBtn from "../../images/plus_button.png";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputValue, setInputValue] = useState("");

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
            return <ChallengeReviewItem reviews={review} key={index} />;
          })}
      </Div>
      {participated ? (
        <ButtonContainer>
          <ReviewAbleBtn onClick={handleOpen}>후기 작성하기</ReviewAbleBtn>
          <PlusBtn>
            <Image src={plusBtn} alt="button" />
          </PlusBtn>
        </ButtonContainer>
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

const ReviewAbleBtn = styled(Button2)`
  color: ${({ theme }) => theme.colors.colorBlue2};
  background-color: ${({ theme }) => theme.colors.colorWhite};
  border: 1px solid #3178ff;
  margin-bottom: 40px;
  line-height: 22px;
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

const ButtonContainer = styled.div`
  position: relative;
`;

const PlusBtn = styled.div`
  position: absolute;
  top: 17.71px;
  left: 50.35px;
`;

const Image = styled.img`
  width: 14.69px;
  height: 14.58px;
`;

export default ChallengeReview;
