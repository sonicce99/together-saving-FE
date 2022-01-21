import styled from "styled-components";

const H3 = styled.p`
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  margin-bottom: 16px;
`;

export default H3;
