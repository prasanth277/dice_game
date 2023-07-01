import styled from "styled-components";

export const RollingText = styled.span`
  margin-top: 8px;
  font-size: 34px;
  background: #ff3366;
  background: linear-gradient(to right, #ff3366, #ba265d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const DiceValue = styled.span`
  font-size: 72px;
  font-weight: bold;
  color: #333;
`;

export const RollingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const loaderStyles = { color: "#ff3366" };
