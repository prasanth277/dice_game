import styled from "styled-components";

export const AmountText = styled.span`
  font-size: 24px;
  background: #ff3366;
  font-weight: bold;
  background: linear-gradient(to right, #ff3366, #ba265d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Emoji = styled.span`
  font-size: 52px;
  margin: 12px;
`;

export const boxStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  borderRadius: "25px",
  boxShadow: 24,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "column",
  p: 6
};
