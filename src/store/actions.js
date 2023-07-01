export const UPDATE_TOTAL_AMOUNT = "UPDATE_TOTAL_AMOUNT";
export const UPDATE_DICE_VALUE = "UPDATE_DICE_VALUE";
export const UPDATE_BETS = "UPDATE_BETS";
export const RESET_BETS = "RESET_BETS";

export const updateTotalAmount = (payload) => ({
  type: UPDATE_TOTAL_AMOUNT,
  value: payload
});

export const resetTotalAmount = () => ({
  type: UPDATE_TOTAL_AMOUNT,
  value: 100
});

export const updateDiceValue = (payload) => ({
  type: UPDATE_DICE_VALUE,
  value: payload
});

export const updatebets = (payload) => ({
  type: UPDATE_BETS,
  value: payload
});

export const resetBets = () => ({
  type: RESET_BETS
});
