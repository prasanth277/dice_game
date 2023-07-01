import "./styles.css";

import { DiceGameContextProvider } from "./store/DiceGameContextProvider";
import DiceGame from "./DiceGame";

export default function App() {
  return (
    <DiceGameContextProvider>
      <DiceGame />
    </DiceGameContextProvider>
  );
}
