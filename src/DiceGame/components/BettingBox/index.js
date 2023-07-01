import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import {
  buttonStyles,
  cardActions,
  cardContentstyles,
  cardStyles,
  DiceNumber,
  Text
} from "./styles";

function BettingBox({ boxNumber, bet, onPlacingBet, disable = true }) {
  const handlePlaceBet = () => {
    onPlacingBet(boxNumber);
  };

  return (
    <Card sx={cardStyles}>
      <CardContent sx={cardContentstyles}>
        <DiceNumber>{boxNumber}</DiceNumber>
        <Text>{`$${bet}`}</Text>
      </CardContent>
      <CardActions sx={cardActions}>
        <Button
          disabled={disable}
          size="large"
          sx={buttonStyles}
          onClick={handlePlaceBet}
        >
          Add bet
        </Button>
      </CardActions>
    </Card>
  );
}

export default BettingBox;
