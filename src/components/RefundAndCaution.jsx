import React from "react";
import styled from "styled-components";
import H3 from "./H3.jsx";
import GrayBackground from "./GrayBackground.jsx";

const RefundAndCaution = () => {
  return (
    <>
      <H3>환급정책</H3>

      <HandleGrayBackground>
        <Inner>
          <Div>
            <Border />
            <Div2>
              <P>100% 성공</P>
              <P>85% 이상 성공 </P>
              <P>85% 미만 성공</P>
            </Div2>
            <Div2>
              <P2>저축액 전액 환급+리워드 지급</P2>
              <P2>저축액 전액 지급</P2>
              <P2>참가비 제외 저축액 지급</P2>
            </Div2>
          </Div>
        </Inner>
      </HandleGrayBackground>

      <H3>주의사항</H3>

      <RehandleGrayBackground>
        <Inner>
          <Div>
            <Border2 />
            <CautionContent>
              저축액을 제외한 리워드를 수령할 시에 제세공과금 2.2%를 제한 금액이
              지급됩니다. 자세한 사항은
              <TermOfUse>이용약관</TermOfUse>을 참고하여 주세요.
            </CautionContent>
          </Div>
        </Inner>
      </RehandleGrayBackground>
    </>
  );
};

const HandleGrayBackground = styled(GrayBackground)`
  width: 343px;
  height: 100px;
  background: ${({ theme }) => theme.colors.colorLightGray2};
  border-radius: 10px;
  margin-right: 16px;
  margin-bottom: 40px;
  padding: 10px 0;
`;

const RehandleGrayBackground = styled(HandleGrayBackground)`
  height: 80px;
`;

const Inner = styled.div`
  width: 311px;
  margin: ${({ theme }) => theme.margins.marginCenter};
  margin-top: 10px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Border = styled.div`
  border: 1px solid #888888;
  width: 1px;
  height: 62px;
  margin-right: 12px;
`;

const Border2 = styled(Border)`
  height: 40px;
`;

const Div2 = styled.div`
  &:last-child {
    margin-left: 29px;
  }
`;
const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.colorGray3};
  margin-bottom: 4px;
`;

const P2 = styled(P)`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
`;

const CautionContent = styled(P)`
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  font-size: 12px;
`;

const TermOfUse = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  font-size: 12px;
  text-decoration: underline;
  display: inline-block;
  color: ${({ theme }) => theme.colors.colorBlue2};
  cursor: pointer;
`;
export default RefundAndCaution;
