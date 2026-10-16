import { useEffect, useState } from "react";

const format = () =>
  new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Kathmandu",
    hour: "2-digit",
    minute: "2-digit",
  });

/** Kathmandu wall-clock, shown in the header and the footer. */
export function useKathmanduClock() {
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, []);

  return time;
}
