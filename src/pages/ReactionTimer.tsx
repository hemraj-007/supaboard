import React, { useState, useRef } from "react";

const ReactionTimer: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "waiting" | "clickNow" | "result">("idle");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const handleStart = () => {
    setStatus("waiting");
    const delay = Math.random() * 6000;

    timerRef.current = setTimeout(() => {
      setStatus("clickNow");
      startTimeRef.current = Date.now();
    }, delay);
  };

  const handleClick = () => {
    if (status === "waiting") {
      alert("Too soon! Wait for the green signal.");
      clearTimeout(timerRef.current!);
      setStatus("idle");
    } else if (status === "clickNow") {
      setReactionTime(Date.now() - (startTimeRef.current || 0));
      setStatus("result");
    }
  };

  return (
    <div
      className={`h-screen flex items-center justify-center ${
        status === "idle" ? "bg-blue-500" : status === "waiting" ? "bg-yellow-500" : "bg-green-500"
      }`}
      onClick={status !== "result" ? (status === "idle" ? handleStart : handleClick) : undefined}
    >
      {status === "idle" && <p>Click on the screen to start the test</p>}
      {status === "waiting" && <p>Click when the screen turns green</p>}
      {status === "clickNow" && <p>Click now!</p>}
      {status === "result" && <p>Your reaction time: {reactionTime} ms</p>}
    </div>
  );
};

export default ReactionTimer;
