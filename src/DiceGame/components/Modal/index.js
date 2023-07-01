import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { useDiceGameContext } from "../../../store/DiceGameContextProvider";
import { Emoji, AmountText, boxStyles } from "./styles";

function ResultModal({ shouldOpen = false, onHandleClose = () => {} }) {
  const { bets, diceValue, totalAmount } = useDiceGameContext();
  const [amountWon, setAmountWon] = useState(0);

  useEffect(() => {
    if (diceValue) {
      const totalBetPlaced = Object.values(bets).reduce(
        (acc, cur) => acc + cur,
        0
      );
      const totalBetWon = 2 * (bets[diceValue] || 0);
      setAmountWon(totalBetWon - totalBetPlaced);
    }
  }, [bets, diceValue]);

  useEffect(() => {
    if (shouldOpen) {
      const timer = setTimeout(() => {
        onHandleClose(totalAmount + amountWon);
      }, 4000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [shouldOpen, onHandleClose, amountWon, totalAmount]);

  const text =
    amountWon >= 0
      ? `Yayy!!! Yon have won $${amountWon}`
      : `Opps!!! You have lost $${-1 * amountWon}`;
  const emoji = amountWon === 0 ? "😐" : amountWon > 0 ? "🥳" : "🙁";

  return (
    <Modal
      open={shouldOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyles}>
        <AmountText>{text}</AmountText>
        <Emoji>{emoji}</Emoji>
      </Box>
    </Modal>
  );
}
export default ResultModal;
