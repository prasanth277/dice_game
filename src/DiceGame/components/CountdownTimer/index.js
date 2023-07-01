import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Timer, TimerHeading, TimerText } from "./styles";

function renderTime({ remainingTime }) {
  if (remainingTime === 0) {
    return <TimerText>00</TimerText>;
  }
  return (
    <Timer>
      <TimerHeading>Remaining</TimerHeading>
      <TimerText>{remainingTime}</TimerText>
      <TimerHeading>seconds</TimerHeading>
    </Timer>
  );
}

function CountdownTimer({
  isPlaying,
  onComplete = () => {},
  time = 10,
  colorTime = [10, 6, 3, 0],
  colors = ["#FF3366", "#BA265D", "#FF3366", "#BA265D"]
}) {
  return (
    <div style={{ position: "relative", top: 0 }}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={time}
        colors={colors}
        colorsTime={colorTime}
        size={120}
        strokeWidth={6}
        onComplete={() => {
          onComplete();
          return {
            shouldRepeat: false
          };
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default CountdownTimer;
