import { Button } from "@mui/material";
import { useEffect, useState } from "react";

import { useDiceGameContext } from "../store/DiceGameContextProvider";
import {
  resetBets,
  resetTotalAmount,
  updateDiceValue,
  updateTotalAmount
} from "../store/actions";

import { stages } from "./constants";
import BettingBoard from "./components/BettingBoard";
import CountdownTimer from "./components/CountdownTimer";
import Dice from "./components/Dice";
import ResultModal from "./components/Modal";
import BettingDetails from "./components/BettingDetails";
import {
  BottomContainer,
  MidContainer,
  TopContainer,
  buttonStyles,
  EmptyDiv,
  GameOverText
} from "./styles";

export default function DiceGame() {
  const [stage, setStage] = useState(null);
  const { dispatch } = useDiceGameContext();

  const isTimerStage = stage === stages.timer;
  const isDiceStage = stage === stages.dice;
  const isStopStage = stage === stages.stop;
  const isResultStage = stage === stages.result;

  const restartGame = () => {
    dispatch(resetBets());
    dispatch(updateDiceValue(null));
    dispatch(resetTotalAmount());
  };

  useEffect(() => {
    if (stage === stages.timer) {
      dispatch(resetBets());
      dispatch(updateDiceValue(null));
    }
  }, [stage, dispatch]);

  const handleTimerComplete = () => {
    setStage(stages.dice);
  };

  const handleDiceRollComplete = () => {
    setStage(stages.result);
  };

  const handleStartGame = () => {
    if (!stage || isStopStage) {
      restartGame();
      setStage(stages.timer);
    }
  };

  const handleCloseResultModal = (totalAmount) => {
    dispatch(updateTotalAmount(totalAmount));
    if (totalAmount > 0) {
      setStage(stages.timer);
    } else {
      setStage(stages.stop);
    }
  };

  return (
    <div className="App">
      <div>
        <TopContainer>
          {isTimerStage ? (
            <CountdownTimer isPlaying onComplete={handleTimerComplete} />
          ) : (
            <EmptyDiv />
          )}
          {isStopStage && (
            <GameOverText>
              ❌ You ran out of your money 💰, Restart to play again ⚙ ️
            </GameOverText>
          )}
          <BettingDetails />
        </TopContainer>
        <MidContainer>
          {(isDiceStage || isResultStage) && (
            <Dice onRolled={handleDiceRollComplete} />
          )}
        </MidContainer>
        <ResultModal
          shouldOpen={isResultStage}
          onHandleClose={handleCloseResultModal}
        />
        <BettingBoard openBetting={isTimerStage} />

        <BottomContainer>
          <Button
            variant="contained"
            onClick={handleStartGame}
            sx={buttonStyles}
            disabled={!(!stage || isStopStage)}
          >
            {isStopStage ? "Restart" : "Start"}
          </Button>
        </BottomContainer>
      </div>
    </div>
  );
}
