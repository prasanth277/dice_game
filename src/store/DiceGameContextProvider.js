import { createContext, useContext, useReducer } from "react";
import {
  UPDATE_TOTAL_AMOUNT,
  UPDATE_DICE_VALUE,
  RESET_BETS,
  UPDATE_BETS
} from "./actions";

export const DiceGameContext = createContext();

export const useDiceGameContext = () => useContext(DiceGameContext);

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_TOTAL_AMOUNT:
      return { ...state, totalAmount: action.value };
    case UPDATE_DICE_VALUE:
      return { ...state, diceValue: action.value };
    case RESET_BETS:
      return { ...state, bets: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 } };
    case UPDATE_BETS:
      return { ...state, bets: { ...action.value } };
    default:
      return state;
  }
}

const intialState = {
  totalAmount: 100,
  diceValue: null,
  bets: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
};

export const DiceGameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <DiceGameContext.Provider
      value={{
        totalAmount: state.totalAmount,
        diceValue: state.diceValue,
        amountWon: state.amountWon,
        bets: state.bets,
        dispatch
      }}
    >
      {children}
    </DiceGameContext.Provider>
  );
};
