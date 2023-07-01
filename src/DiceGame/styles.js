import styled from "styled-components";

export const MidContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const EmptyDiv = styled.div`
  width: 120px;
`;

export const GameOverText = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const buttonStyles = {
  borderRadius: "18px",
  background: "#FF3366",
  background: "linear-gradient(to right,#FF3366,#BA265D)"
};
