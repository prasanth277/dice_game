import { useMemo } from "react";

import { updatebets } from "../../../store/actions";
import { useDiceGameContext } from "../../../store/DiceGameContextProvider";
import { bettingBoxes } from "../../constants";
import BettingBox from "../BettingBox";
import { Container } from "./styles";

function BettingBoard({ openBetting = false }) {
  const { dispatch, bets, totalAmount } = useDiceGameContext();

  const canPlaceBet = useMemo(() => {
    const totalBetPlaced = Object.values(bets).reduce(
      (acc, cur) => acc + cur,
      0
    );
    return totalBetPlaced < totalAmount;
  }, [bets, totalAmount]);

  const handlePlaceBet = (boxNumber) => {
    dispatch(updatebets({ ...bets, [boxNumber]: bets[boxNumber] + 1 }));
  };

  return (
    <>
      <Container>
        {bettingBoxes.map((box) => (
          <BettingBox
            key={box.value}
            boxNumber={box.value}
            bet={bets[box.value]}
            onPlacingBet={handlePlaceBet}
            disable={!openBetting || !canPlaceBet}
          />
        ))}
      </Container>
    </>
  );
}

export default BettingBoard;
