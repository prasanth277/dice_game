import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { useDiceGameContext } from "../../../store/DiceGameContextProvider";
import { getRandomNumber } from "../../utils";

import {
  DiceValue,
  loaderStyles,
  RollingContainer,
  RollingText
} from "./styles";
import { updateDiceValue } from "../../../store/actions";

function Dice({ onRolled = () => {} }) {
  const { diceValue, dispatch } = useDiceGameContext();

  const rollTheDice = () => {
    const timer = setTimeout(() => {
      const randomNumber = getRandomNumber(1, 7);
      dispatch(updateDiceValue(randomNumber));
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  };

  useEffect(rollTheDice, [dispatch]);

  useEffect(() => {
    if (diceValue) {
      const timer = setTimeout(() => {
        onRolled(diceValue);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [diceValue, onRolled]);

  return (
    <h1>
      {diceValue ? (
        <DiceValue>{diceValue}</DiceValue>
      ) : (
        <RollingContainer>
          <CircularProgress size={100} sx={loaderStyles} />
          <RollingText>Rolling...</RollingText>
        </RollingContainer>
      )}
    </h1>
  );
}

export default Dice;
