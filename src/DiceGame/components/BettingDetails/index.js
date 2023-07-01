import { useMemo } from "react";

import { useDiceGameContext } from "../../../store/DiceGameContextProvider";
import { AmountLabel, AmountText } from "./styles";

function BettingDetails() {
  const { totalAmount, bets } = useDiceGameContext();

  const { totalBetPlaced } = useMemo(() => {
    const totalBetPlaced = Object.values(bets).reduce(
      (acc, cur) => acc + cur,
      0
    );
    return { totalBetPlaced };
  }, [bets]);

  return (
    <div>
      <AmountLabel>Total amount: </AmountLabel>
      <AmountText>{`$${totalAmount}`}</AmountText>
      <br></br>
      <br></br>
      <AmountLabel>Total bet placed: </AmountLabel>
      <AmountText>{`$${totalBetPlaced}`}</AmountText>
    </div>
  );
}

export default BettingDetails;
