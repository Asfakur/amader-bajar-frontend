import { useEffect, useState } from "react";

const CountDown = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const countdown = () => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }else {
        window.location.reload(true);
      }
    };

    const countdownInterval = setInterval(countdown, 1000);

    return () => clearInterval(countdownInterval);
  }, [seconds]);

  return <h2 className="text-dark text-center">{seconds} seconds remaining..</h2>;
};

export default CountDown;
